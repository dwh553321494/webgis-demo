define(["./when-ae2e0b60","./Cartesian2-38b35910","./ArcType-1275a14e","./GeometryOffsetAttribute-b02d5bb9","./Transforms-07a9fab5","./Check-f996273c","./ComponentDatatype-e44126e4","./EllipsoidTangentPlane-19622103","./GeometryAttribute-586bf52c","./GeometryAttributes-5ce4955a","./GeometryInstance-eab27e6b","./GeometryPipeline-88f05837","./IndexDatatype-516320ea","./Math-5bbcea10","./PolygonGeometryLibrary-86705dae","./PolygonPipeline-06aa4301","./combine-276652d0","./RuntimeError-ac2797b4","./WebGLConstants-35626ea2","./AxisAlignedBoundingBox-d272def4","./IntersectionTests-f49c7cd3","./Plane-45ad3143","./AttributeCompression-25f42564","./EncodedCartesian3-d40e98d6","./arrayRemoveDuplicates-bdf50aa0","./EllipsoidRhumbLine-af7b5ebe"],function(m,d,E,b,L,e,A,T,_,H,C,O,x,P,G,v,t,i,r,o,n,a,l,s,y,u){"use strict";var D=[],I=[];function g(e){var t,i=e.polygonHierarchy,r=m.defaultValue(e.ellipsoid,d.Ellipsoid.WGS84),o=m.defaultValue(e.granularity,P.CesiumMath.RADIANS_PER_DEGREE),n=m.defaultValue(e.perPositionHeight,!1),a=n&&m.defined(e.extrudedHeight),l=m.defaultValue(e.arcType,E.ArcType.GEODESIC),s=m.defaultValue(e.height,0),y=m.defaultValue(e.extrudedHeight,s);a||(t=Math.max(s,y),y=Math.min(s,y),s=t),this._ellipsoid=d.Ellipsoid.clone(r),this._granularity=o,this._height=s,this._extrudedHeight=y,this._arcType=l,this._polygonHierarchy=i,this._perPositionHeight=n,this._perPositionHeightExtrude=a,this._offsetAttribute=e.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=G.PolygonGeometryLibrary.computeHierarchyPackedLength(i)+d.Ellipsoid.packedLength+8}g.pack=function(e,t,i){return i=m.defaultValue(i,0),i=G.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,i),d.Ellipsoid.pack(e._ellipsoid,t,i),i+=d.Ellipsoid.packedLength,t[i++]=e._height,t[i++]=e._extrudedHeight,t[i++]=e._granularity,t[i++]=e._perPositionHeightExtrude?1:0,t[i++]=e._perPositionHeight?1:0,t[i++]=e._arcType,t[i++]=m.defaultValue(e._offsetAttribute,-1),t[i]=e.packedLength,t};var c=d.Ellipsoid.clone(d.Ellipsoid.UNIT_SPHERE),f={polygonHierarchy:{}};return g.unpack=function(e,t,i){t=m.defaultValue(t,0);var r=G.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t),o=(t=r.startingIndex,delete r.startingIndex,d.Ellipsoid.unpack(e,t,c)),n=(t+=d.Ellipsoid.packedLength,e[t++]),a=e[t++],l=e[t++],s=1===e[t++],u=1===e[t++],p=e[t++],y=e[t++],e=e[t];return(i=m.defined(i)?i:new g(f))._polygonHierarchy=r,i._ellipsoid=d.Ellipsoid.clone(o,i._ellipsoid),i._height=n,i._extrudedHeight=a,i._granularity=l,i._perPositionHeight=u,i._perPositionHeightExtrude=s,i._arcType=p,i._offsetAttribute=-1===y?void 0:y,i.packedLength=e,i},g.fromPositions=function(e){return new g({polygonHierarchy:{positions:(e=m.defaultValue(e,m.defaultValue.EMPTY_OBJECT)).positions},height:e.height,extrudedHeight:e.extrudedHeight,ellipsoid:e.ellipsoid,granularity:e.granularity,perPositionHeight:e.perPositionHeight,arcType:e.arcType,offsetAttribute:e.offsetAttribute})},g.createGeometry=function(e){var t=e._ellipsoid,u=e._granularity,i=e._polygonHierarchy,r=e._perPositionHeight,p=e._arcType,o=G.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(i,!r,t);if(0!==o.length){var n,d,a,l,s,y,g=[],c=P.CesiumMath.chordLength(u,t.maximumRadius),f=e._height,h=e._extrudedHeight;if(e._perPositionHeightExtrude||!P.CesiumMath.equalsEpsilon(f,h,0,P.CesiumMath.EPSILON2))for(n=0;n<o.length;n++)(l=function(u,e,t,p,i){var r,d=T.EllipsoidTangentPlane.fromPoints(e,u).projectPointsOntoPlane(e,D),o=(v.PolygonPipeline.computeWindingOrder2D(d)===v.WindingOrder.CLOCKWISE&&(d.reverse(),e=e.slice().reverse()),e.length),n=new Array(o),a=0;if(p)for(r=new Float64Array(2*o*3*2),y=0;y<o;++y){n[y]=a/3;var g=e[y],c=e[(y+1)%o];r[a++]=g.x,r[a++]=g.y,r[a++]=g.z,r[a++]=c.x,r[a++]=c.y,r[a++]=c.z}else{var f=0;if(i===E.ArcType.GEODESIC)for(y=0;y<o;y++)f+=G.PolygonGeometryLibrary.subdivideLineCount(e[y],e[(y+1)%o],t);else if(i===E.ArcType.RHUMB)for(y=0;y<o;y++)f+=G.PolygonGeometryLibrary.subdivideRhumbLineCount(u,e[y],e[(y+1)%o],t);for(r=new Float64Array(3*f*2),y=0;y<o;++y){n[y]=a/3,i===E.ArcType.GEODESIC?l=G.PolygonGeometryLibrary.subdivideLine(e[y],e[(y+1)%o],t,I):i===E.ArcType.RHUMB&&(l=G.PolygonGeometryLibrary.subdivideRhumbLine(u,e[y],e[(y+1)%o],t,I));for(var l,h=l.length,m=0;m<h;++m)r[a++]=l[m]}}for(var o=r.length/6,b=n.length,s=x.IndexDatatype.createTypedArray(o+b,2*(2*o+b)),a=0,y=0;y<o;++y)s[a++]=y,s[a++]=(y+1)%o,s[a++]=y+o,s[a++]=(y+1)%o+o;for(y=0;y<b;y++){var P=n[y];s[a++]=P,s[a++]=P+o}return new C.GeometryInstance({geometry:new _.Geometry({attributes:new H.GeometryAttributes({position:new _.GeometryAttribute({componentDatatype:A.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r})}),indices:s,primitiveType:_.PrimitiveType.LINES})})}(t,o[n],c,r,p)).geometry=G.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(l.geometry,f,h,t,r),m.defined(e._offsetAttribute)&&(d=l.geometry.attributes.position.values.length/3,a=new Uint8Array(d),a=e._offsetAttribute===b.GeometryOffsetAttribute.TOP?b.arrayFill(a,1,0,d/2):(y=e._offsetAttribute===b.GeometryOffsetAttribute.NONE?0:1,b.arrayFill(a,y)),l.geometry.attributes.applyOffset=new _.GeometryAttribute({componentDatatype:A.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})),g.push(l);else for(n=0;n<o.length;n++)(l=function(e,t,i,u,r){var o,p=T.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,D),n=(v.PolygonPipeline.computeWindingOrder2D(p)===v.WindingOrder.CLOCKWISE&&(p.reverse(),t=t.slice().reverse()),t.length),a=0;if(u)for(o=new Float64Array(2*n*3),y=0;y<n;y++){var d=t[y],g=t[(y+1)%n];o[a++]=d.x,o[a++]=d.y,o[a++]=d.z,o[a++]=g.x,o[a++]=g.y,o[a++]=g.z}else{var c=0;if(r===E.ArcType.GEODESIC)for(y=0;y<n;y++)c+=G.PolygonGeometryLibrary.subdivideLineCount(t[y],t[(y+1)%n],i);else if(r===E.ArcType.RHUMB)for(y=0;y<n;y++)c+=G.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[y],t[(y+1)%n],i);for(o=new Float64Array(3*c),y=0;y<n;y++){r===E.ArcType.GEODESIC?l=G.PolygonGeometryLibrary.subdivideLine(t[y],t[(y+1)%n],i,I):r===E.ArcType.RHUMB&&(l=G.PolygonGeometryLibrary.subdivideRhumbLine(e,t[y],t[(y+1)%n],i,I));for(var l,f=l.length,h=0;h<f;++h)o[a++]=l[h]}}for(var n=o.length/3,s=x.IndexDatatype.createTypedArray(n,2*n),a=0,y=0;y<n-1;y++)s[a++]=y,s[a++]=y+1;return s[a++]=n-1,s[a++]=0,new C.GeometryInstance({geometry:new _.Geometry({attributes:new H.GeometryAttributes({position:new _.GeometryAttribute({componentDatatype:A.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:o})}),indices:s,primitiveType:_.PrimitiveType.LINES})})}(t,o[n],c,r,p)).geometry.attributes.position.values=v.PolygonPipeline.scaleToGeodeticHeight(l.geometry.attributes.position.values,f,t,!r),m.defined(e._offsetAttribute)&&(s=l.geometry.attributes.position.values.length,s=new Uint8Array(s/3),y=e._offsetAttribute===b.GeometryOffsetAttribute.NONE?0:1,b.arrayFill(s,y),l.geometry.attributes.applyOffset=new _.GeometryAttribute({componentDatatype:A.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:s})),g.push(l);i=O.GeometryPipeline.combineInstances(g)[0],u=L.BoundingSphere.fromVertices(i.attributes.position.values);return new _.Geometry({attributes:i.attributes,indices:i.indices,primitiveType:i.primitiveType,boundingSphere:u,offsetAttribute:e._offsetAttribute})}},function(e,t){return(e=m.defined(t)?g.unpack(e,t):e)._ellipsoid=d.Ellipsoid.clone(e._ellipsoid),g.createGeometry(e)}});
