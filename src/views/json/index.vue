<template>
    <div>
        <ol-map @getMap="init"></ol-map>
        <div id="popup" class="ol-popup">
        <a href="#" rel="external nofollow"  id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content" class="popup-content"></div>
        </div>

        <div class="regulaContainer" style="position: absolute; left: 75%; top: 30px; z-index: 99;">
            <div class="box" style="background-color: rgba(25, 51, 88, 0.9);">
				<div class="tit">修罗场玩家</div>
				<div class="boxnav" style="height:400px">
					<el-table
						:data="tableData"
						header-row-class-name="header-row"
						height="100%" border
						@row-click="handleGo"
						style="width: 330px;height: 100%;">
						<el-table-column
							label="id"
							type="index"
							width="40">
						</el-table-column>
						<el-table-column
							prop="name"
							label="姓名"
							width="80">
						</el-table-column>
						<el-table-column
							prop="sex"
							label="性别"
							width="50">
						</el-table-column>
                        <el-table-column
							prop="habit"
							label="爱好"
							width="60">
						</el-table-column>
						<el-table-column
                            prop="editor"
							label="编辑器"
							width="100">
						</el-table-column>
					</el-table>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
import {olMap} from '@/components/map';
import { Vector as VectorLayer, Tile } from "ol/layer";
import { Vector as VectorSource } from "ol/source";

import Feature from 'ol/Feature.js'
import { Point } from "ol/geom";
import {Circle, Fill, Icon, Stroke, Style, Text} from 'ol/style.js';

import Overlay from 'ol/Overlay'
import axios from 'axios'

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





export default {
    name: 'json',
	components: {olMap},

    data(){
        return {
            map_2:null,
            data:null,
            jsonSource: null,
            jsonLayer: null,
            tableData: null,

            overlay:null,
            props: null,
        }
    },

    mounted(){
        this.init();
        this.getJsondata();
        this.$nextTick(function () {
            this.addPopup()
		})
    },

    methods:{
        init(map) {
			this.map_2 = map;
			console.log('map', this.map_2)
        },

        getJsondata(){
            const that = this;
            var jsonstyle = new Style({
                image: new Icon({
                    src: "./icons/定位.svg",
                    opacity: 1,
                    scale: 0.8
                })
            })

            axios.get('./data/小组成员.geojson').then((data) => {
                console.log('data', data.data);
                let len = data.data.features.length
                that.data = new Array(len)
                for (let i = 0; i < len; i++){
                    that.data[i] = new Feature(new Point([data.data.features[i].geometry.coordinates[0], data.data.features[i].geometry.coordinates[1]]));
                    that.data[i].setProperties({
                        name: data.data.features[i].properties["姓名"],
                        sex: data.data.features[i].properties["性别"],
                        habit: data.data.features[i].properties["爱好"],
                        editor: data.data.features[i].properties["使用的编辑器"],
                        motto: data.data.features[i].properties["人生格言"]
                    })
                    that.data[i].setStyle(jsonstyle)
                };
                console.log(that.data)
                that.jsonSource = new VectorSource({
                    features: that.data
                });
                that.tableData = that.jsonSource.getFeatures();
                for (var i = 0; i < len; i++){
                    that.tableData[i] =  that.tableData[i].getProperties()
                }
                that.jsonLayer = new VectorLayer({
                    source:that.jsonSource
                });
                console.log(that.jsonLayer)
                that.map_2.addLayer(that.jsonLayer)
            })
        },

		handleGo(row) {
            // console.log(index, row);
            console.log('row', row)
            console.log("go!")
            var currentCoordinate = row.geometry.getCoordinates();
			// this.currentequipment = row.type;
            console.log(currentCoordinate);
            flyTo(this.map_2.getView(), currentCoordinate, () => { });
        }, // handleGo() 飞往

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
			console.log('map_2',this.map_2)
			this.map_2.addOverlay(this.overlay);

			let _that = this;
			/**
			 * 为弹窗添加一个响应关闭的函数
			 */
			closer.onclick = function() {
				_that.overlay.setPosition(undefined);
				closer.blur();
				return false;
			};

			this.map_2.on('click', function(e){
				var coordinate = e.coordinate;
				var content = document.getElementById("popup-content");
				var feature = _that.map_2.forEachFeatureAtPixel(e.pixel, function(feature){
					return feature;
				})

				if(feature){
					_that.props = feature.getProperties()
					content.innerHTML = ``;

					content.innerHTML = `
					<div>
						<h3>${_that.props.motto}</h3>
						<table>
							<tr>
								<td>姓名:</td>
								<td>${_that.props.name}</td>
							</tr>
							<tr>
								<td>性别:</td>
								<td>${_that.props.sex}</td>
							</tr>
							<tr>
								<td>爱好:</td>
								<td>${_that.props.habit}</td>
							</tr>
							<tr>
								<td>使用的编辑器:</td>
								<td>${_that.props.editor}</td>
							</tr>
						</table>
					</div>
					`;

					// 弹出popup
					_that.overlay.setPosition(coordinate);
				}
			});
			// 监听鼠标移动事件，鼠标移动到feature区域时变为手形
			this.map_2.on('pointermove', function (e) {
				var pixel = _that.map_2.getEventPixel(e.originalEvent);
				var hit = _that.map_2.hasFeatureAtPixel(pixel);
				_that.map_2.getTargetElement().style.cursor = hit ? 'pointer' : '';
			});
		},
    }
}
</script>

<style src="../../style/style.css"></style>

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