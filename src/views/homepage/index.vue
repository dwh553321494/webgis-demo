<template>
	<div>
		<ol-Map @getMap="init"></ol-Map>
		<div id="popup" class="ol-popup">
                <a href="#" rel="external nofollow"  id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content" class="popup-content"></div>
				<div>
					<span>建设进度条:</span><el-progress :text-inside="true" :stroke-width="26" :percentage="percentage" :color="currentColor" text-color="#ffffff"></el-progress>
				</div>
        </div>
		<div class = 'top_bar'>
			<el-raw>
				项目：
				<el-select v-model="project" placeholder="请选择" filterable :popper-append-to-body="false" class="select" popper-class="select-option">
					<el-option
						v-for="i in projects"
						:key="i.project"
						:label="i.label"
						:value="i.project"
						@click.native="changeProject(i.project, unit)">
					</el-option>
				</el-select>
				施工单位：
				<el-select v-model="unit" placeholder="请选择" filterable :popper-append-to-body="false" class="select" popper-class="select-option">
					<el-option
						v-for="i in units"
						:key="i.value"
						:label="i.label"
						:value="i.value"
						@click.native="changeUnit(project, i.value)">
					</el-option>
				</el-select>
				设施：
				<el-select v-model="equipment" placeholder="请选择" filterable :popper-append-to-body="false" class="select" popper-class="select-option" >
					<el-option
						v-for="i in equipments"
						:key="i.value"
						:label="i.label"
						:value="i.value" @click.native="changeType(i.value)">
					</el-option>
				</el-select>
			</el-raw>
		</div>
		<div class="regulaContainer" style="position:absolute; left:70%; top:65px; z-index:99;">
			<div class="box" style="background-color: rgba(25, 51, 88, 0.9);">
				<div class="tit">基础数据统计</div>
				<div class="boxnav" style="height: 330px;">
					<div class="yqlist">
						<ul class="clearfix" style="color:white;">
						<li>
						<div class="yq" id="yq">{{ buildingNum }}</div>
						<span>在建数</span></li>
						<li>
						<div class="yq">{{ builtNum }}</div>
						<span>已建数</span></li>
						<li>
						<div class="yq">{{ onlineNum }}</div>
						<span>在线数</span></li>
						<li>
						<div class="yq">{{ unonlineNum }}</div>
						<span>离线数</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="box" style="background-color: rgba(25, 51, 88, 0.9);">
				<div class="tit">数据表格</div>
				<div class="boxnav" style="height:400px">
					<el-table
						:data="tableData"
						header-row-class-name="header-row"
						height="100%" border
						@row-click="handleGo"
						style="width: 390px;height: 100%;">
						<el-table-column
							label="id"
							type="index"
							width="60">
						</el-table-column>
						<el-table-column
							prop="project"
							label="项目"
							width="110">
						</el-table-column>
						<el-table-column
							prop="unit"
							label="施工单位"
							width="110">
						</el-table-column>
						<el-table-column
							label="设备"
							width="110">
							<template slot-scope="scope">
								<el-popover trigger="hover" placement="top" popper-class="water-popover">
								<p>类型: {{ scope.row.type }}</p>
								<p>项目: {{ scope.row.project }}</p>
								<p>施工单位: {{ scope.row.unit }}</p>
								<p>位置: [{{ scope.row.coordinates[0] }},{{ scope.row.coordinates[1] }}]</p>
								<div slot="reference" class="name-wrapper">
									<el-tag size="medium" v-show="scope.row.type=='流量站'">{{ scope.row.type }}</el-tag>
									<el-tag size="medium" type='success' v-show="scope.row.type=='水位站'">{{ scope.row.type }}</el-tag>
									<el-tag size="medium" type='danger' v-show="scope.row.type=='雨量站'">{{ scope.row.type }}</el-tag>
									<el-tag size="medium" type='warning' v-show="scope.row.type=='视频站'">{{ scope.row.type }}</el-tag>
								</div>
								</el-popover>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {olMap} from '@/components/map'
import { Vector as VectorLayer, Tile } from "ol/layer";
import { Vector as VectorSource } from "ol/source";

import Feature from 'ol/Feature.js'
import { Point } from "ol/geom";
import {Circle, Fill, Icon, Stroke, Style, Text} from 'ol/style.js';

import Overlay from 'ol/Overlay'

import axios from 'axios'
import * as echarts from 'echarts';


/** 
* 飞行跳转函数
* @param view 当前地图试图
* @param location  坐标信息
* @param done 回调函数(可设为无)
* @returns {{}}
* @private
*/
function flyTo(view, location, done) {
    const duration = 2000;
    const zoom = view.getZoom();
    let parts = 2;
    let called = false;
    function callback(complete) {
        --parts;
        if (called) {
            return;
        }
        if (parts === 0 || !complete) {
            called = true;
            done(complete);
        }
    }
    view.animate(
        {
            center: location,
            duration: duration,
        },
        callback
    );
    view.animate(
        {
            zoom: zoom - 1,
            duration: duration / 2,
        },
        {
            zoom: 15,
            duration: duration / 2,
        },
        callback
    );
};

const stationStyles = {
	'building': new Style({
		image: new Icon({
			src: './station-icons/building.svg',
			scale: 0.8,
			opacity: 1,
		})
	}),
	'flow-online': new Style({
		image: new Icon({
			src: './station-icons/water-flow-online.svg',
			opacity: 1,
			scale: 0.8,
		})
	}),
	'flow-unonline': new Style({
		image: new Icon({
			scale: 0.8,
			opacity: 1,
			src: './station-icons/water-flow-unonline.svg'
		})
	}),
	'rain-online': new Style({
		image: new Icon({
			opacity: 1,
			scale: 0.8,
			src: './station-icons/water-rain-online.svg'
		})
	}),
	'rain-unonline': new Style({
		image: new Icon({
			opacity: 1,
			scale: 0.8,
			src: './station-icons/water-rain-unonline.svg'
		})
	}),
	'water-online': new Style({
		image: new Icon({
			opacity: 1,
			scale: 0.8,
			src: './station-icons/water-water-online.svg'
		})
	}),
	'water-unonline': new Style({
		image: new Icon({
			opacity: 1,
			scale: 0.8,
			src: './station-icons/water-water-unonline.svg'
		})
	}),
	'radio-online': new Style({
		image: new Icon({
			opacity: 1,
			scale: 0.8,
			src: './station-icons/water-radio-online.svg'
		})
	}),
	'radio-unonline': new Style({
		image: new Icon({
			opacity: 1,
			scale: 0.8,
			src: './station-icons/water-radio-unonline.svg'
		})
	}),
}

const setFlowStyle =  function(feature){
	var properties = feature.getProperties()
	if (properties.status == 'None'){
		return stationStyles['building']
	}else if (properties.status == 'online'){
		return stationStyles['flow-online']
	}else{
		return stationStyles['flow-unonline']
	}
};

const setRainStyle = function(feature){
	var properties = feature.getProperties()
	if (properties.status == 'None'){
		return stationStyles['building']
	}else if (properties.status == 'online'){
		return stationStyles['rain-online']
	}else{
		return stationStyles['rain-unonline']
	}
};

const setWaterStyle = function(feature){
	var properties = feature.getProperties()
	if (properties.status == 'None'){
		return stationStyles['building']
	}else if (properties.status == 'online'){
		return stationStyles['water-online']
	}else{
		return stationStyles['water-unonline']
	}
};

const setRadioStyle = function(feature){
	var properties = feature.getProperties()
	if (properties.status == 'None'){
		return stationStyles['building']
	}else if (properties.status == 'online'){
		return stationStyles['radio-online']
	}else{
		return stationStyles['radio-unonline']
	}
};



export default {
	name: 'homepage',
	components: {olMap},
	created() {
		const that = this;
		this.$nextTick(function () {

		})
	},
	data() {
		return {
			map_1:null,

			projects:[
				{
					label: '全部',
					project: '全部'
				},
				{
					label: '项目1',
					project: '项目1'
				},
				{
					label: '项目2',
					project: '项目2'
				},
				{
					label: '项目3',
					project: '项目3'
				},
				{
					label: '项目4',
					project: '项目4'
				},
				{
					label: '项目5',
					project: '项目5'
				},
				{
					label: '项目6',
					project: '项目6'
				},
				{
					label: '项目7',
					project: '项目7'
				},				
				{
					label: '项目8',
					project: '项目8'
				}
			],
			project: '全部',
			units:[
				{
					label: '全部',
					value: '全部'
				},
				{
					label: '单位1',
					value: '单位1'
				},
				{
					label: '单位2',
					value: '单位2'
				},
				{
					label: '单位3',
					value: '单位3'
				},
				{
					label: '单位4',
					value: '单位4'
				},
			],
			unit: '全部',
			equipments:[
				{
					label:'全部',
					value:'全部',
				},
				{
					label:'雨量站',
					value:'雨量站',
				},
				{
					label:'视频站',
					value:'视频站',
				},
				{
					label:'水位站',
					value:'水位站',
				},
				{
					label:'流量站',
					value:'流量站',
				}
			],
			equipment: '全部',
			currentequipment: '',
			
			flowStationData: null,
			flowStationSource: null,
			flowStationLayer: null,
			
			rainStationData: {'type':null, 'features':null,},
			rainStationSource: null,
			rainStationLayer:  null,

			waterStationData: {'type':null, 'features':null,},
			waterStationSource: null,
			waterStationLayer:  null,

			radioStationData: {'type':null, 'features':null,},
			radioStationSource: null,
			radioStationLayer:  null,
			
			allData:new Array(),
			tableData: new Array(),
			
			buildingNum: 0,
			builtNum: 0,
			onlineNum: 0,
			unonlineNum: 0,
			
			overlay: null,
			percentage: 0,
			props: null,
			currentColor: '#fc4a49',
		}
	},
	mounted() {		
		this.init();
		this.getAllData();
		this.$nextTick(function () {
			this.addPopup();
		})
	},
	methods: {
		init(map) {
			this.map_1 = map;
			console.log('map', this.map_1)
        },
		getAllData(){
			const that = this;
			axios.get('./data/flowstation.geojson').then((data)=>{
				console.log("data", data.data);
				let len = data.data.features.length;
				that.flowStationData = new Array(len);
				for (let i = 0; i < len; i++){
					that.flowStationData[i] = new Feature(new Point([data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]]));
					that.flowStationData[i].setProperties({
						project: data.data.features[i].properties.project,
						unit: data.data.features[i].properties.unit,
						process: data.data.features[i].properties.process,
						starttime: data.data.features[i].properties.starttime,
						buildtime: data.data.features[i].properties.buildtime,
						status: data.data.features[i].properties.status,
					});
					that.flowStationData[i].setStyle(setFlowStyle(that.flowStationData[i]))
					that.allData.push({
						'type': '流量站',
						'coordinates': [data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]],
						'project': data.data.features[i].properties.project,
						'unit': data.data.features[i].properties.unit,
						'process': data.data.features[i].properties.process,
						'starttime': data.data.features[i].properties.starttime,
						'buildtime': data.data.features[i].properties.buildtime,
						'status': data.data.features[i].properties.status,
					});
					that.addNums(data.data.features[i].properties)
				}
				that.flowStationSource = new VectorSource({
					features: that.flowStationData,
				});
				that.flowStationLayer = new VectorLayer({
					source: that.flowStationSource,
					// style: setFlowStyle,
				})
				that.map_1.addLayer(that.flowStationLayer)
			});
			axios.get('./data/雨量站建设情况.geojson').then((data)=>{
				let len = data.data.features.length;
				that.rainStationData = new Array(len);
				for (let i = 0; i < len; i++){
					that.rainStationData[i] = new Feature(new Point([data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]]));
					that.rainStationData[i].setProperties({
						project: data.data.features[i].properties.project,
						unit: data.data.features[i].properties.unit,
						process: data.data.features[i].properties.process,
						starttime: data.data.features[i].properties.starttime,
						buildtime: data.data.features[i].properties.buildtime,
						status: data.data.features[i].properties.status,
					});
					that.rainStationData[i].setStyle(setRainStyle(that.rainStationData[i]))
					that.allData.push({
						'type': '雨量站',
						'coordinates': [data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]],
						'project': data.data.features[i].properties.project,
						'unit': data.data.features[i].properties.unit,
						'process': data.data.features[i].properties.process,
						'starttime': data.data.features[i].properties.starttime,
						'buildtime': data.data.features[i].properties.buildtime,
						'status': data.data.features[i].properties.status,
					});
					that.addNums(data.data.features[i].properties)
				}
				that.rainStationSource = new VectorSource({
					features: that.rainStationData,
				});
				that.rainStationLayer = new VectorLayer({
					source: that.rainStationSource,
					// style: setRainStyle,
				})
				that.map_1.addLayer(that.rainStationLayer)
			});
			axios.get('./data/视频站建设情况.geojson').then((data)=>{
				let len = data.data.features.length;
				that.radioStationData = new Array(len);
				for (let i = 0; i < len; i++){
					that.radioStationData[i] = new Feature(new Point([data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]]));
					that.radioStationData[i].setProperties({
						project: data.data.features[i].properties.project,
						unit: data.data.features[i].properties.unit,
						process: data.data.features[i].properties.process,
						starttime: data.data.features[i].properties.starttime,
						buildtime: data.data.features[i].properties.buildtime,
						status: data.data.features[i].properties.status,
					});
					that.radioStationData[i].setStyle(setRadioStyle(that.radioStationData[i]))

					that.allData.push({
						'type': '视频站',
						'coordinates': [data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]],
						'project': data.data.features[i].properties.project,
						'unit': data.data.features[i].properties.unit,
						'process': data.data.features[i].properties.process,
						'starttime': data.data.features[i].properties.starttime,
						'buildtime': data.data.features[i].properties.buildtime,
						'status': data.data.features[i].properties.status,
					});
					that.addNums(data.data.features[i].properties)
				}
				that.radioStationSource = new VectorSource({
					features: that.radioStationData,
				});
				that.radioStationLayer = new VectorLayer({
					source: that.radioStationSource,
					// style: setRadioStyle,
				})
				that.map_1.addLayer(that.radioStationLayer)
			});
			axios.get('./data/水位站建设情况.geojson').then((data)=>{
				let len = data.data.features.length;
				that.waterStationData = new Array(len);
				for (let i = 0; i < len; i++){
					that.waterStationData[i] = new Feature(new Point([data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]]));
					that.waterStationData[i].setProperties({
						project: data.data.features[i].properties.project,
						unit: data.data.features[i].properties.unit,
						process: data.data.features[i].properties.process,
						starttime: data.data.features[i].properties.starttime,
						buildtime: data.data.features[i].properties.buildtime,
						status: data.data.features[i].properties.status,
					});
					that.waterStationData[i].setStyle(setWaterStyle(that.waterStationData[i]))
					
					that.allData.push({
						'type': '水位站',
						'coordinates': [data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]],
						'project': data.data.features[i].properties.project,
						'unit': data.data.features[i].properties.unit,
						'process': data.data.features[i].properties.process,
						'starttime': data.data.features[i].properties.starttime,
						'buildtime': data.data.features[i].properties.buildtime,
						'status': data.data.features[i].properties.status,
					});
					that.addNums(data.data.features[i].properties)
				}
				that.waterStationSource = new VectorSource({
					features: that.waterStationData,
				});
				that.waterStationLayer = new VectorLayer({
					source: that.waterStationSource,
					// style: setWaterStyle,
				})
				that.map_1.addLayer(that.waterStationLayer)
			});

			this.tableData = this.allData;
			console.log(this.buildingNum)
		},
		addNums(data){
			if(data.buildtime == 'None'){
				this.buildingNum = this.buildingNum + 1;
			}else{
				this.builtNum = 1 + this.builtNum;
				if(data.status == 'online'){
					this.onlineNum = this.onlineNum +1;
				}else{
					this.unonlineNum = this.unonlineNum + 1;
				}
			}
		},
		handleGo(row) {
            // console.log(index, row);
            console.log('row', row)
            console.log("go!")
            var currentCoordinate = row.coordinates;
			this.currentequipment = row.type;
            // console.log(currentCoordinate);
            flyTo(this.map_1.getView(), currentCoordinate, () => { });
        }, // handleGo() 飞往

		changeType(type){
			if (type == '全部'){
				this.updataDataNum(this.project, this.unit, type);
				this.flowStationLayer.setVisible(true);
				this.waterStationLayer.setVisible(true);
				this.radioStationLayer.setVisible(true);
				this.rainStationLayer.setVisible(true);
			}else if (type == '流量站'){
				this.updataDataNum(this.project, this.unit, type);
				this.flowStationLayer.setVisible(true);
				this.waterStationLayer.setVisible(false);
				this.radioStationLayer.setVisible(false);
				this.rainStationLayer.setVisible(false);
			}else if (type == '水位站'){
				this.updataDataNum(this.project, this.unit, type);
				this.flowStationLayer.setVisible(false);
				this.waterStationLayer.setVisible(true);
				this.radioStationLayer.setVisible(false);
				this.rainStationLayer.setVisible(false);
			}else if (type == '视频站'){
				this.updataDataNum(this.project, this.unit, type);
				this.flowStationLayer.setVisible(false);
				this.waterStationLayer.setVisible(false);
				this.radioStationLayer.setVisible(true);
				this.rainStationLayer.setVisible(false);
			}else{
				this.updataDataNum(this.project, this.unit, type);
				this.flowStationLayer.setVisible(false);
				this.waterStationLayer.setVisible(false);
				this.radioStationLayer.setVisible(false);
				this.rainStationLayer.setVisible(true);
			}
		},
		changeProject(newproject, currentunit){
			this.updataDataNum(newproject, currentunit, this.equipment);
			this.restoreFeatures(this.flowStationLayer, '流量站');
			this.restoreFeatures(this.waterStationLayer, '水位站');
			this.restoreFeatures(this.radioStationLayer, '视频站');
			this.restoreFeatures(this.rainStationLayer, '雨量站');
			this.setFeatureStyle(this.flowStationLayer,  newproject, currentunit);
			this.setFeatureStyle(this.waterStationLayer,  newproject, currentunit);
			this.setFeatureStyle(this.rainStationLayer, newproject, currentunit);
			this.setFeatureStyle(this.radioStationLayer, newproject, currentunit);
		},
		changeUnit(currentproject, newunit){
			this.updataDataNum(currentproject, newunit, this.equipment);
			this.restoreFeatures(this.flowStationLayer, '流量站');
			this.restoreFeatures(this.waterStationLayer, '水位站');
			this.restoreFeatures(this.radioStationLayer, '视频站');
			this.restoreFeatures(this.rainStationLayer, '雨量站');
			this.setFeatureStyle(this.flowStationLayer,  currentproject, newunit);
			this.setFeatureStyle(this.waterStationLayer,  currentproject, newunit);
			this.setFeatureStyle(this.rainStationLayer, currentproject, newunit);
			this.setFeatureStyle(this.radioStationLayer, currentproject, newunit);
		},
		setFeatureStyle(layer, projectCondition, unitCondition){
			console.log(projectCondition, unitCondition)
			var features = layer.getSource().getFeatures();
			if(projectCondition == '全部' && unitCondition == '全部'){
				return
			}else if (projectCondition == '全部' && unitCondition != '全部'){
				this.map_1.removeLayer(layer)
				layer.getSource().clear();
				for (var i = 0; i < features.length; i++){
					if (features[i].getProperties().unit != unitCondition){
						features[i].setStyle(new Style(
							{image:new Circle({
							radius: 2,
							fill: new Fill({
								color: [0, 153, 255, 1],
							})})}));
						features[i].getStyle().getImage().setOpacity(0);
						layer.getSource().addFeature(features[i])
					}else{
						layer.getSource().addFeature(features[i])
					}
				}
				this.map_1.addLayer(layer)
				this.map_1.render()
			}else if (unitCondition == '全部' && projectCondition != '全部'){
				this.map_1.removeLayer(layer)
				layer.getSource().clear();
				for (var i = 0; i < features.length; i++){
					if (features[i].getProperties().project != projectCondition){
						features[i].setStyle(new Style(
							{image:new Circle({
							radius: 2,
							fill: new Fill({
								color: [0, 153, 255, 1],
							})})}));
						features[i].getStyle().getImage().setOpacity(0);
						layer.getSource().addFeature(features[i])
					}else{
						layer.getSource().addFeature(features[i])
					}
				}
				this.map_1.addLayer(layer)
				this.map_1.render()
			}else{
				for (var i = 0 ; i < features.length; i++){
					this.map_1.removeLayer(layer)
					layer.getSource().clear();
					for (var i = 0; i < features.length; i++){
						if (features[i].getProperties().project != projectCondition || features[i].getProperties().unit != unitCondition){
							features[i].setStyle(new Style(
								{image:new Circle({
								radius: 2,
								fill: new Fill({
									color: [0, 153, 255, 1],
								})})}));
							features[i].getStyle().getImage().setOpacity(0);
							layer.getSource().addFeature(features[i])
						}else{
							layer.getSource().addFeature(features[i])
						}
					}
					this.map_1.addLayer(layer)
					this.map_1.render()
					}
				}
		},
		restoreFeatures(layer, type){
			var features = layer.getSource().getFeatures();
			if (type == '雨量站'){
				for (var i = 0 ; i < features.length; i++){
					layer.getSource().getFeatures()[i].setStyle(setRainStyle(layer.getSource().getFeatures()[i]));
				}
			}else if (type == '水位站'){
				for (var i = 0 ; i < features.length; i++){
					layer.getSource().getFeatures()[i].setStyle(setWaterStyle(layer.getSource().getFeatures()[i]));
				}

			}else if (type == '流量站'){
				for (var i = 0 ; i < features.length; i++){
					layer.getSource().getFeatures()[i].setStyle(setFlowStyle(layer.getSource().getFeatures()[i]));
				}
			}else {
				for (var i = 0 ; i < features.length; i++){
					layer.getSource().getFeatures()[i].setStyle(setRadioStyle(layer.getSource().getFeatures()[i]));
				}
			}
			// layer.getSource().refresh()
		},

		updataDataNum(projectCondition, unitCondition, type){
			this.buildingNum = 0;
			this.builtNum = 0;
			this.onlineNum = 0;
			this.unonlineNum = 0;
			this.tableData = new Array();
			if (projectCondition == '全部' && unitCondition == '全部'){
				for (var i = 0; i < this.allData.length; i++){
					this.is_type(type, this.allData[i]);
				};
			}else if (projectCondition == '全部' && unitCondition != '全部'){
				for (var i = 0; i < this.allData.length; i++){
					if (this.allData[i].unit == unitCondition){
						this.is_type(type, this.allData[i]);
					}
				};
			}else if (projectCondition != '全部' && unitCondition == '全部'){
				for (var i = 0; i < this.allData.length; i++){
					if (this.allData[i].project == projectCondition){
						this.is_type(type, this.allData[i]);
					}
				};
			}else{
				for (var i = 0; i < this.allData.length; i++){
					if (this.allData[i].project == projectCondition && this.allData[i].unit == unitCondition){
						this.is_type(type, this.allData[i]);
					}
				};
			}
		},

		is_type(type, data){
			if (type == '全部'){
				this.addNums(data);
				this.tableData.push(data);
			}else{
				if (type == data.type){
					this.addNums(data)
					this.tableData.push(data);
				}
			}

		},

		addPopup(){
			// 使用变量存储弹窗所需的 DOM 对象
			var container = document.getElementById("popup");
            var closer = document.getElementById("popup-closer");
			// 创建一个弹窗 Overlay 对象
			this.overlay = new Overlay({
				element: container, //绑定 Overlay 对象和 DOM 对象的
				autoPan: false, // 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果
				autoPanAnimation: {
					duration: 250 //自动平移效果的动画时间 9毫秒
				}
			});
			// 将弹窗添加到 map 地图中
			console.log('map_1',this.map_1)
			this.map_1.addOverlay(this.overlay);

			let _that = this;
			/**
			 * 为弹窗添加一个响应关闭的函数
			 */
			closer.onclick = function() {
				_that.overlay.setPosition(undefined);
				closer.blur();
				return false;
			};

			this.map_1.on('click', function(e){
				var coordinate = e.coordinate;
				var content = document.getElementById("popup-content");
				var feature = _that.map_1.forEachFeatureAtPixel(e.pixel, function(feature){
					return feature;
				})

				if(feature){
					_that.props = feature.getProperties()
					content.innerHTML = ``;
					_that.percentage = parseInt(_that.props.process)
					_that.currentColor = _that.customColorMethod(_that.percentage);

					content.innerHTML = `
					<div>
						<h3>类型:${_that.currentequipment}</h3>
						<table>
							<tr>
								<td>所属项目:</td>
								<td>${_that.props.project}</td>
							</tr>
							<tr>
								<td>施工单位:</td>
								<td>${_that.props.unit}</td>
							</tr>
							<tr>
								<td>进度:</td>
								<td>${_that.props.process}</td>
							</tr>
							<tr>
								<td>立项时间:</td>
								<td>${_that.props.starttime}</td>
							</tr>
							<tr>
								<td>完工时间:</td>
								<td>${_that.props.buildtime}</td>
							</tr>
							<tr>
								<td>状态:</td>
								<td>${_that.props.status}</td>
							</tr>
						</table>
					</div>
					`;

					// 弹出popup
					_that.overlay.setPosition(coordinate);
				}
			});
			// 监听鼠标移动事件，鼠标移动到feature区域时变为手形
			this.map_1.on('pointermove', function (e) {
				var pixel = _that.map_1.getEventPixel(e.originalEvent);
				var hit = _that.map_1.hasFeatureAtPixel(pixel);
				_that.map_1.getTargetElement().style.cursor = hit ? 'pointer' : '';
			});
		},
		customColorMethod(percentage) {
        if (percentage < 30) {
          return '#fc4a49';
        } else if (percentage <= 50) {
          return '#f4db40';
        } else if (percentage < 80){
          return '#5d5bf1';
        } else {
			return '#36fc6b';
		}
      },

	}
}
</script>

<style src="../../style/style.css">

</style>

<style>
.water-popover{
	background-color:  rgba(25, 51, 88, 0.9)!important;
    border: 1px solid #00b3ff !important;
    box-shadow: 0 2px 12px 0 rgba(0, 152, 217, 0.5) !important;
	color: #ffffff;
	font-size: small;
}
</style>


<style lang="scss">

.top_bar{
	position: absolute;
	width: 55%;
	// height: 200px;
    top: 10px;
    left: 25%;
    z-index: 99;
	border:1px solid rgba(7,118,181,.5); 
	box-shadow:inset 0 0 10px rgba(7,118,181,.4); 
	margin-bottom: 12px;
}

.select .select-option{
    background-color:  rgba(25, 51, 88, 0.9)!important;
	border:1px solid rgba(7,118,181,.5); 
	box-shadow:inset 0 0 10px rgba(7,118,181,.4); 
	margin-bottom: 12px;
	color: azure;
}

</style>

<style lang="scss" scoped>
::v-deep .el-input__inner{
	background-color:  rgba(36, 60, 94, 0.9)!important;
	border:1px solid rgba(7,118,181,.5); 
	box-shadow:inset 0 0 10px rgba(7,118,181,.4); 
	margin-bottom: 12px;
	color: azure;
}
::v-deep .el-select-dropdown__item{
    color: #ffffff,
}

::v-deep .el-select-dropdown__item.selected{
    color: #00b3ff,
}
::v-deep .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background-color: #426994;
    color:#00b3ff,
}


/*
table样式
*/

.regulaContainer ::v-deep .el-table td {
  border-bottom: 1px solid #0c4e97;
}

.regulaContainer ::v-deep .el-table th.is-leaf {
  border-bottom: 1px solid #0c4e97;
}

.regulaContainer ::v-deep .el-table {
  background-color: transparent;
  border-top: 2px solid #0c4e97;
  border-bottom: 2px solid #0c4e97;
  border-left: 2px solid #0c4e97;
  border-right: 2px solid #0c4e97;
  color:#ffffff;
  .el-table__body-wrapper{
	&::-webkit-scrollbar {
		width: 10px;           /* 纵向滚动条 宽度 */ 
		height: 0px;           /* 横向滚动条 高度 */
		border: 1px solid #0c4e97;
		// display: none;
		}
		&::-webkit-scrollbar-button{
		width: 0px;          /* 横向滚动条 宽度 */
		height: 5px;         /* 纵向滚动条 高度 */
		border-radius: 10px;
		}
		/* Track */
		&::-webkit-scrollbar-track {
			background: rgba(0, 0, 0, 0.2);
			border-radius: 8px;
			width: 8px;
		}
		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: rgba(113,147,214,1);
			border-radius: 8px;
			// background-color: #1160b5 !important;
			/*滑动条表面*/
			/*border:solid 1px gainsboro; !*滑动条边框*!  */
			border-radius: 1px;
			/*滑动条圆角宽度*/
		}
  }
}

.regulaContainer ::v-deep .el-table th {
	border: 1px solid #0c4e97;

  background-color: transparent;
}
.regulaContainer ::v-deep .el-table tr {
  background-color: transparent;
}
.regulaContainer ::v-deep .el-table__body tr:hover > td{
  background-color: rgba(0, 83, 159, 0.6);
}
.regulaContainer ::v-deep .el-table::before{
  background-color: transparent;
}
.regulaContainer ::v-deep .el-checkbox__inner{
  border: 1px solid #047edb;
  background-color: transparent;
}

.regulaContainer ::v-deep .el-table td.el-table__cell{
	border: 1px solid #0c4e97;

}
::v-deep .header-row{
	color:#ffffff;
}


.ol-popup {
        position: absolute;
		background-color: rgba(0, 83, 159, 0.6);
        -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
        filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
        padding: 15px;
        border-radius: 10px;
		border:1px solid rgba(7,118,181,.5); 
		box-shadow:inset 0 0 10px rgba(7,118,181,.4); 
        bottom: 12px;
        left: -50px;
    }
    .ol-popup:after,
    .ol-popup:before {
        top: 100%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }
    .ol-popup:after {
        border-top-color: white;
        border-width: 10px;
        left: 48px;
        margin-left: -10px;
    }
    .ol-popup:before {
        border-top-color: #cccccc;
        border-width: 11px;
        left: 48px;
        margin-left: -11px;
    }
    .ol-popup-closer {
        text-decoration: none;
        position: absolute;
        top: 2px;
        right: 8px;
    }
    .popup-content {
        width: 400px;
    }
    .ol-popup-closer:after {
        content: "✖";
    }

</style>