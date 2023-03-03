<template>
    <div>
        <ol-Map @getMap="init"></ol-Map>
		<div class = 'top_bar'>
			<el-raw>
				项目：
				<el-select v-model="project" placeholder="请选择" filterable :popper-append-to-body="false" class="select" popper-class="select-option">
					<el-option
						v-for="i in projects"
						:key="i.project"
						:label="i.label"
						:value="i.project" 
                        @click.native="changeProject(i.project, unit)"
						>
					</el-option>
				</el-select>
				施工单位：
				<el-select v-model="unit" placeholder="请选择" filterable :popper-append-to-body="false" class="select" popper-class="select-option">
					<el-option
						v-for="i in units"
						:key="i.value"
						:label="i.label"
						:value="i.value"
                        @click.native="changeUnit(project, i.value)"
						>
					</el-option>
				</el-select>
				设施：
				<el-select v-model="equipment" placeholder="请选择" filterable :popper-append-to-body="false" class="select" popper-class="select-option" >
					<el-option
						v-for="i in equipments"
						:key="i.value"
						:label="i.label"
						:value="i.value"
                        @click.native="changeType(i.value)">
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
						<span>待完成站点数</span></li>
						<li>
						<div class="yq">{{ builtNum }}</div>
						<span>已完成站点数</span></li>
						<li>
						<div class="yq">{{ builtRate }}%</div>
						<span>完成百分比</span></li>
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
						style="width: 500px;height: 100%;">
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
                        <el-table-column
							prop="process"
							label="进度"
							width="110">
						</el-table-column>
					</el-table>
				</div>
			</div>
        </div>
        <div class="box" style="background-color: rgba(25, 51, 88, 0.9);top:65px; left:10%; position:absolute; z-index:99; height:100%; width:300px" v-show="processShow">
				<div class="tit">进度展示</div>
				<div class="boxnav" style="height: 330px;">
					<div style="height: 100%;">
                        <el-steps direction="vertical" :active="1" finish-status="success">
                            <el-step title="0%">
                                <template slot="description">
                                    <div>
                                        <el-image
                                        style="width: 100px; height:100px margin:4px 5px 2px 5px;"
                                        :src="require('@/data/0.jpg')"
                                        fit="cover" ></el-image>
                                    </div>
                                </template>
                            </el-step>
                            <el-step title="25%">                                
                                <template slot="description">
                                    <div>
                                        <el-image style="width: 100px; height:100px; margin:4px 5px 2px 5px;"
                                        :src="require('@/data/25.jpg')"
                                        fit="cover"></el-image>
                                    </div>
                                </template></el-step>
                            <el-step title="50%"></el-step>
                            <el-step title="75%"></el-step>
                            <el-step title="100%"></el-step>
                        </el-steps>
                    </div>
				</div>
			</div>
    </div>
</template>

<script>

import {olMap} from '@/components/map';
import { Vector as VectorLayer, Tile } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import {Circle, Fill, Icon, Stroke, Style, Text} from 'ol/style.js';
import Feature from 'ol/Feature.js'
import { Point } from "ol/geom";


import axios from 'axios'

const processStyles = {
	'0%': new Style({
		image: new Icon({
			src: './station-icons/数字0.svg',
			scale: 0.8,
			opacity: 1,
		})
	}),
	'25%': new Style({
		image: new Icon({
			src: './station-icons/数字25.svg',
			opacity: 1,
			scale: 0.8,
		})
	}),
	'50%': new Style({
		image: new Icon({
			scale: 0.8,
			opacity: 1,
			src: './station-icons/数字50.svg'
		})
	}),
	'75%': new Style({
		image: new Icon({
			opacity: 1,
			scale: 0.8,
			src: './station-icons/数字75.svg'
		})
	}),
	'100%': new Style({
		image: new Icon({
			opacity: 1,
			scale: 0.8,
			src: './station-icons/数字100.svg'
		})
	})
}

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

const setProcessStyle =  function(feature){
	var properties = feature.getProperties()
	if (properties.process == '0%'){
		return processStyles['0%']
	}else if (properties.process == '25%'){
		return processStyles['25%']
	}else if (properties.process == '50%'){
		return processStyles['50%']
	}else if (properties.process == '75%'){
		return processStyles['75%']
	}else{
		return processStyles['100%']
	}
};


export default {
    name: 'homepage',
	components: {olMap},

    data(){
        return {
            map_2: null,
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


            processData: null,
            processSource:null,
            processLayer: null,

            allData:new Array(),
			tableData: new Array(),

            buildingNum: 0,
            builtNum: 0,
            builtRate: 0,

            processShow: false,
        }
    },

    mounted(){
        this.init();
        this.$nextTick(function () {
            this.getAllData();
		})
    },

    methods: {
        init(map) {
			this.map_2 = map;
			console.log('map', this.map_2)
        },
        getAllData(){
			const that = this;
            this.processData = new Array();
			axios.get('./data/flowstation.geojson').then((data)=>{
				console.log("data", data.data);
				let len = data.data.features.length;

				for (let i = 0; i < len; i++){
					that.processData.push(new Feature(new Point([data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]])));
					that.processData[i].setProperties({
                        type: '流量站',
						project: data.data.features[i].properties.project,
						unit: data.data.features[i].properties.unit,
						process: data.data.features[i].properties.process,
						starttime: data.data.features[i].properties.starttime,
						buildtime: data.data.features[i].properties.buildtime,
						status: data.data.features[i].properties.status,
					});
					that.processData[i].setStyle(setProcessStyle(that.processData[i]))
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
                that.processSource = new VectorSource({
                        features: that.processData,
                    });
                that.processLayer = new VectorLayer({
                    source: that.processSource,
                    // style: setWaterStyle,
                })
                that.map_2.addLayer(that.processLayer)
			});
			axios.get('./data/雨量站建设情况.geojson').then((data)=>{
				let len = data.data.features.length;
                var features_1 = new Array();
				for (let i = 0; i < len; i++){
					features_1.push(new Feature(new Point([data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]])));
					features_1[i].setProperties({
                        type:'雨量站',
						project: data.data.features[i].properties.project,
						unit: data.data.features[i].properties.unit,
						process: data.data.features[i].properties.process,
						starttime: data.data.features[i].properties.starttime,
						buildtime: data.data.features[i].properties.buildtime,
						status: data.data.features[i].properties.status,
					});
					features_1[i].setStyle(setProcessStyle(features_1[i]))
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

                that.processSource.addFeatures(features_1)
			});
			axios.get('./data/视频站建设情况.geojson').then((data)=>{
				let len = data.data.features.length;
                var features_1 = new Array();
				for (let i = 0; i < len; i++){
					features_1.push(new Feature(new Point([data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]])));
					features_1[i].setProperties({
                        type: '视频站',
						project: data.data.features[i].properties.project,
						unit: data.data.features[i].properties.unit,
						process: data.data.features[i].properties.process,
						starttime: data.data.features[i].properties.starttime,
						buildtime: data.data.features[i].properties.buildtime,
						status: data.data.features[i].properties.status,
					});
					features_1[i].setStyle(setProcessStyle(features_1[i]))

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
                that.processSource.addFeatures(features_1)
			});
			axios.get('./data/水位站建设情况.geojson').then((data)=>{
				let len = data.data.features.length;
                var features_1 = new Array();
                console.log('water', data.data)
				for (let i = 0; i < len; i++){
					features_1.push(new Feature(new Point([data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]])));
					features_1[i].setProperties({
                        type: '水位站',
						project: data.data.features[i].properties.project,
						unit: data.data.features[i].properties.unit,
						process: data.data.features[i].properties.process,
						starttime: data.data.features[i].properties.starttime,
						buildtime: data.data.features[i].properties.buildtime,
						status: data.data.features[i].properties.status,
					});
					features_1[i].setStyle(setProcessStyle(features_1[i]))
					
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
                that.processSource.addFeatures(features_1)
                that.processData = that.processSource.getFeatures()
			});

			this.tableData = this.allData;
            console.log('tabledata', this.tableData)
		},
        addNums(data){
			if(data.buildtime == 'None'){
				this.buildingNum = this.buildingNum + 1;
			}else{
				this.builtNum = 1 + this.builtNum;
			}
            this.builtRate = (this.builtNum / (this.builtNum + this.buildingNum) * 100).toFixed(2)
		},

        handleGo(row) {
            // console.log(index, row);
            console.log('row', row)
            console.log("go!")
            this.processShow= true;
            var currentCoordinate = row.coordinates;
			this.currentequipment = row.type;
            // console.log(currentCoordinate);
            flyTo(this.map_2.getView(), currentCoordinate, () => { });
        }, // handleGo() 飞往
        changeType(type){
            this.updataDataNum(this.project, this.unit, type);
            this.restoreFeatures(this.processLayer);
            this.setFeatureStyle(this.processLayer, this.project, this.unit, type)
		},
        changeProject(newproject, currentunit){
			this.updataDataNum(newproject, currentunit, this.equipment);
            this.restoreFeatures(this.processLayer);
            this.setFeatureStyle(this.processLayer, newproject, currentunit, this.equipment)
		},
        changeUnit(currentproject, newunit){
			this.updataDataNum(currentproject, newunit, this.equipment);
            this.restoreFeatures(this.processLayer);
            this.setFeatureStyle(this.processLayer, currentproject, newunit, this.equipment)
        },
		setFeatureStyle(layer, projectCondition, unitCondition, type){
			console.log(projectCondition, unitCondition)
			var features = layer.getSource().getFeatures();
			if(projectCondition == '全部' && unitCondition == '全部'){
				if (type == '全部'){
                    return
                }else{
                    this.map_2.removeLayer(layer)
                    layer.getSource().clear();
                    for (var i = 0; i < features.length; i++){
                        if (features[i].getProperties().type != type){
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
                    this.map_2.addLayer(layer)
                    this.map_2.render()
                }
			}else if (projectCondition == '全部' && unitCondition != '全部'){
				this.map_2.removeLayer(layer)
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
                        if(features[i].getProperties().type == type || type == '全部'){
                            layer.getSource().addFeature(features[i])
                        }else{
                                features[i].setStyle(new Style(
                                    {image:new Circle({
                                    radius: 2,
                                    fill: new Fill({
                                        color: [0, 153, 255, 1],
                                    })})}));
                                features[i].getStyle().getImage().setOpacity(0);
                                layer.getSource().addFeature(features[i])
                            }
					}
				}
				this.map_2.addLayer(layer)
				this.map_2.render()
			}else if (unitCondition == '全部' && projectCondition != '全部'){
				this.map_2.removeLayer(layer)
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
                        if(features[i].getProperties().type == type || type == '全部'){
                            layer.getSource().addFeature(features[i])
                        }else{
                                features[i].setStyle(new Style(
                                    {image:new Circle({
                                    radius: 2,
                                    fill: new Fill({
                                        color: [0, 153, 255, 1],
                                    })})}));
                                features[i].getStyle().getImage().setOpacity(0);
                                layer.getSource().addFeature(features[i])
                            }
					}
				}
				this.map_2.addLayer(layer)
				this.map_2.render()
			}else{
				for (var i = 0 ; i < features.length; i++){
					this.map_2.removeLayer(layer)
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
                            if(features[i].getProperties().type == type || type == '全部'){
                                layer.getSource().addFeature(features[i])
                            }else{
                                features[i].setStyle(new Style(
                                    {image:new Circle({
                                    radius: 2,
                                    fill: new Fill({
                                        color: [0, 153, 255, 1],
                                    })})}));
                                features[i].getStyle().getImage().setOpacity(0);
                                layer.getSource().addFeature(features[i])
                            }
						}
					}
					this.map_2.addLayer(layer)
					this.map_2.render()
					}
				}
		},
		restoreFeatures(layer){
			var features = layer.getSource().getFeatures();
            for (var i = 0; i < features.length; i++){
                layer.getSource().getFeatures()[i].setStyle(setProcessStyle(layer.getSource().getFeatures()[i]));
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
    },

}
</script>

<style src="../../style/style.css">

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

::v-deep .el-step.is-vertical .el-step__title{

}

::v-deep .el-step.is-vertical .el-step__title.is-finish{

}
::v-deep .el-step.is-vertical .el-step__title.is-process{
    font-weight: 900;
    color: #fd5600;
    font-size: x-large;
}
::v-deep .el-step.is-vertical .el-step__title.is-wait{

}
::v-deep .el-step__description{
    height:125px;
}

</style>