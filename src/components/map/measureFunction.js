import $ from 'jquery'
import mapboxgl from 'mapbox-gl'
import * as turf from '@turf/turf'

function measureLength(map) {
    var isMeasure = true;
    // 禁止双击缩放
    map.doubleClickZoom.disable();
    map.getCanvas().style.cursor = 'default';
  
    function clearMeasure() {
      $(".measure-result").remove();
      var source = map.getSource('points');
  
      var json = {
        'type': 'FeatureCollection',
        'features': []
      };
      if(source) {
        map.getSource('points').setData(json);
        map.getSource('line-move').setData(json);
        map.getSource('line').setData(json);
      }
      var sourceArea = map.getSource('points-area');
      if(sourceArea) {
        map.getSource('points-area').setData(json);
        map.getSource('line-area').setData(json);
      }
    }
    clearMeasure();
  
    var jsonPoint = {
      'type': 'FeatureCollection',
      'features': []
    };
    var jsonLine = {
      'type': 'FeatureCollection',
      'features': []
    };
    var points = [];
    const ele = document.createElement('div');
    ele.setAttribute('class', 'measure-result');
  
    const option = {
      element: ele,
      anchor: 'left',
      offset: [8, 0]
    };
    var tooltip = new mapboxgl.Marker(option)
            .setLngLat([0, 0])
            .addTo(map);
    var markers = [];
  
    var source = map.getSource('points');
  
    if(source) {
      map.getSource('points').setData(jsonPoint);
      map.getSource('line-move').setData(jsonLine);
      map.getSource('line').setData(jsonLine);
    } else {
      map.addSource('points', {
        type: 'geojson',
        data: jsonPoint
      });
      map.addSource('line', {
        type: 'geojson',
        data: jsonLine
      });
      map.addSource('line-move', {
        type: 'geojson',
        data: jsonLine
      });
      map.addLayer({
        id: 'line-move',
        type: 'line',
        source: 'line-move',
        paint: {
          'line-color': '#ff0000',
          'line-width': 2,
          'line-opacity': 0.65
        }
      });
      map.addLayer({
        id: 'line',
        type: 'line',
        source: 'line',
        paint: {
          'line-color': '#ff0000',
          'line-width': 2,
          'line-opacity': 0.65
        }
      });
      map.addLayer({
        id: 'points',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-color': '#ffffff',
          'circle-radius': 3,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ff0000'
        }
      });
    }

    function addPoint(coords) {
 
      if(jsonPoint.features.length > 0) {
        var prev = jsonPoint.features[jsonPoint.features.length - 1];
        jsonLine.features.push({
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [prev.geometry.coordinates, coords]
          }
        });
        map.getSource('line').setData(jsonLine);
      }
      jsonPoint.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: coords
        }
      });
      map.getSource('points').setData(jsonPoint);
    }
  
    function getLength(coords) {
      var _points = points.concat([coords]);
      var line = turf.lineString(_points);
      var len = turf.length(line);

      if(len < 1) {
        len = Math.round(len * 1000) + 'm';
      } else {
        len = len.toFixed(2) + 'km';
      }
      return len;
    }
  
    function addMeasureRes(coords) {
      const ele = document.createElement('div');
      ele.setAttribute('class', 'measure-result');
      const option = {
        element: ele,
        anchor: 'left',
        offset: [8, 0]
      };
      ele.innerHTML = points.length === 0 ? '起点' : getLength(coords);
      var marker = new mapboxgl.Marker(option)
              .setLngLat(coords)
              .addTo(map);
      markers.push(marker);
    }
  
    map.on('click', function (_e) {
      if(isMeasure) {
        var coords = [_e.lngLat.lng, _e.lngLat.lat];
        addMeasureRes(coords);
        addPoint(coords);
        points.push(coords);
      }
    });
  
    map.on('mousemove', function (_e) {
      if(isMeasure) {
        var coords = [_e.lngLat.lng, _e.lngLat.lat];
        if (jsonPoint.features.length > 0) {
          var prev = jsonPoint.features[jsonPoint.features.length - 1];
          var json = {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: [prev.geometry.coordinates, coords]
            }
          };
          map.getSource('line-move').setData(json);
          ele.innerHTML = getLength(coords);
  
        } else {
          ele.innerHTML = '点击地图开始测量';
        }
        tooltip.setLngLat(coords);
      }
    });
  
    map.on('dblclick', function (_e) {
      if(isMeasure) {
        var coords = [_e.lngLat.lng, _e.lngLat.lat];

        // addPoint(coords);
        isMeasure = false;
        map.getCanvas().style.cursor = '';
        jsonPoint.features = [];
        jsonLine.features = [];
        tooltip.remove(); 
        // 添加关闭按钮
        const ele = document.createElement('div');
        ele.setAttribute('class', 'measure-result cl ose');

        const option = {
          element: ele,
          anchor: 'bottom-left',
          offset: [-5, -10]
        };
        ele.innerHTML = '×';
        new mapboxgl.Marker(option)
                .setLngLat(coords)
                .addTo(map);
        ele.onclick = function (__e) {
          __e.stopPropagation();
          map.doubleClickZoom.enable();
          clearMeasure();
        }
      }
    });
  }  

  function measureArea(map) {  
    var isMeasure = true;
    // 禁止双击缩放
    map.doubleClickZoom.disable();
    map.getCanvas().style.cursor = 'default';
    function clearMeasure() {
      $(".measure-result").remove();
      var source = map.getSource('points');
      var json = {
        'type': 'FeatureCollection',
        'features': []
      };
      if(source) {
        map.getSource('points').setData(json);
        map.getSource('line-move').setData(json);
        map.getSource('line').setData(json);
      }
      var sourceArea = map.getSource('points-area');
      if(sourceArea) {
        map.getSource('points-area').setData(json);
        map.getSource('line-area').setData(json);
      }
    }
    clearMeasure();
    var jsonPoint = {
      'type': 'FeatureCollection',
      'features': []
    };
    var jsonLine = {
      'type': 'FeatureCollection',
      'features': []
    };
    var points = [];
    var ele = document.createElement('div');
    ele.setAttribute('class', 'measure-result');
    const option = {
      element: ele,
      anchor: 'left',
      offset: [8, 0]
    };
    var tooltip = new mapboxgl.Marker(option)
            .setLngLat([0, 0])
            .addTo(map);
    var source = map.getSource('points-area');
    if(source) {
      map.getSource('points-area').setData(jsonPoint);
      map.getSource('line-area').setData(jsonLine);
    } else {
      map.addSource('points-area', {
        type: 'geojson',
        data: jsonPoint
      });
      map.addSource('line-area', {
        type: 'geojson',
        data: jsonLine
      });
      map.addLayer({
        id: 'line-area',
        type: 'fill',
        source: 'line-area',
        paint: {
          'fill-color': '#ff0000',
          'fill-opacity': 0.1
        }
      });
      map.addLayer({
        id: 'line-area-stroke',
        type: 'line',
        source: 'line-area',
        paint: {
          'line-color': '#ff0000',
          'line-width': 2,
          'line-opacity': 0.65
        }
      });
      map.addLayer({
        id: 'points-area',
        type: 'circle',
        source: 'points-area',
        paint: {
          'circle-color': '#ffffff',
          'circle-radius': 3,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ff0000'
        }
      });
    }
  
    function getArea(coords) {
      var pts = points.concat([coords]);
      pts = pts.concat([points[0]]);
      var polygon = turf.polygon([pts]);
      var area = turf.area(polygon);
      if(area < 1000) {
        area = Math.round(area) + 'm²';
      } else {
        area = (area / 1000000).toFixed(2) + 'km²';
      }
      return area;
    }
    function addPoint(coords) {
      jsonPoint.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: coords
        }
      });
      map.getSource('points-area').setData(jsonPoint);
    }
    
    map.on('click', function (_e) {
      if(isMeasure) {
        var coords = [_e.lngLat.lng, _e.lngLat.lat];
        points.push(coords);
        addPoint(coords);
      }
    });
  
    map.on('dblclick', function (_e) {
      if(isMeasure) {
        var coords = [_e.lngLat.lng, _e.lngLat.lat];
        points.push(coords);
        isMeasure = false;
        ele.innerHTML = getArea(coords);
        tooltip.setLngLat(coords);
        // 添加关闭按钮
        var _ele = document.createElement('div');
        _ele.setAttribute('class', 'measure-result close');
        var option = {
          element: _ele,
          anchor: 'bottom-left',
          offset: [-5, -10]
        };
        _ele.innerHTML = '×';
        new mapboxgl.Marker(option)
                .setLngLat(coords)
                .addTo(map);
        _ele.onclick = function (__e) {
          __e.stopPropagation();
          map.doubleClickZoom.enable();
          clearMeasure();
        }
      }
    });
  
    map.on('mousemove', function (_e) {
      if(isMeasure) {
        var coords = [_e.lngLat.lng, _e.lngLat.lat];
        var len = jsonPoint.features.length;
        if (len === 0) {
          ele.innerHTML = '点击地图开始测量';
        } else if (len ===1) {
          ele.innerHTML = '点击地图继续绘制';
        } else {
          var pts = points.concat([coords]);
          pts = pts.concat([points[0]]);
          var json = {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [pts]
            }
          };
          map.getSource('line-area').setData(json);
          ele.innerHTML = getArea(coords);
        }
        tooltip.setLngLat(coords);
      }
    });
  } 

  export {measureLength,measureArea}