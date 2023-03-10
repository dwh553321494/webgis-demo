define(["./when-ae2e0b60","./Transforms-07a9fab5","./Cartesian2-38b35910","./Check-f996273c","./ComponentDatatype-e44126e4","./FrustumGeometry-f56863a2","./GeometryAttribute-586bf52c","./GeometryAttributes-5ce4955a","./Math-5bbcea10","./combine-276652d0","./RuntimeError-ac2797b4","./WebGLConstants-35626ea2","./Plane-45ad3143","./VertexFormat-90d15264"],function(o,m,s,e,h,f,d,g,t,r,n,a,i,u){"use strict";function c(e){var t,r,n=e.frustum,a=e.orientation,i=e.origin,e=o.defaultValue(e._drawNearPlane,!0);n instanceof f.PerspectiveFrustum?(t=0,r=f.PerspectiveFrustum.packedLength):n instanceof f.OrthographicFrustum&&(t=1,r=f.OrthographicFrustum.packedLength),this._frustumType=t,this._frustum=n.clone(),this._origin=s.Cartesian3.clone(i),this._orientation=m.Quaternion.clone(a),this._drawNearPlane=e,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+r+s.Cartesian3.packedLength+m.Quaternion.packedLength}c.pack=function(e,t,r){r=o.defaultValue(r,0);var n=e._frustumType,a=e._frustum;return 0===(t[r++]=n)?(f.PerspectiveFrustum.pack(a,t,r),r+=f.PerspectiveFrustum.packedLength):(f.OrthographicFrustum.pack(a,t,r),r+=f.OrthographicFrustum.packedLength),s.Cartesian3.pack(e._origin,t,r),r+=s.Cartesian3.packedLength,m.Quaternion.pack(e._orientation,t,r),t[r+=m.Quaternion.packedLength]=e._drawNearPlane?1:0,t};var p=new f.PerspectiveFrustum,_=new f.OrthographicFrustum,k=new m.Quaternion,l=new s.Cartesian3;return c.unpack=function(e,t,r){t=o.defaultValue(t,0);var n,a=e[t++],i=(0===a?(n=f.PerspectiveFrustum.unpack(e,t,p),t+=f.PerspectiveFrustum.packedLength):(n=f.OrthographicFrustum.unpack(e,t,_),t+=f.OrthographicFrustum.packedLength),s.Cartesian3.unpack(e,t,l)),u=(t+=s.Cartesian3.packedLength,m.Quaternion.unpack(e,t,k)),e=1===e[t+=m.Quaternion.packedLength];if(!o.defined(r))return new c({frustum:n,origin:i,orientation:u,_drawNearPlane:e});t=a===r._frustumType?r._frustum:void 0;return r._frustum=n.clone(t),r._frustumType=a,r._origin=s.Cartesian3.clone(i,r._origin),r._orientation=m.Quaternion.clone(u,r._orientation),r._drawNearPlane=e,r},c.createGeometry=function(e){for(var t,r,n=e._frustumType,a=e._frustum,i=e._origin,p=e._orientation,u=e._drawNearPlane,e=new Float64Array(24),i=(f.FrustumGeometry._computeNearFarPlanes(i,p,n,a,e),new g.GeometryAttributes({position:new d.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e})})),o=u?2:1,s=new Uint16Array(8*(1+o)),c=u?0:1;c<2;++c)s[t=u?8*c:0]=r=4*c,s[t+1]=r+1,s[t+2]=r+1,s[t+3]=r+2,s[t+4]=r+2,s[t+5]=r+3,s[t+6]=r+3,s[t+7]=r;for(c=0;c<2;++c)s[t=8*(o+c)]=r=4*c,s[t+1]=r+4,s[t+2]=r+1,s[t+3]=r+5,s[t+4]=r+2,s[t+5]=r+6,s[t+6]=r+3,s[t+7]=r+7;return new d.Geometry({attributes:i,indices:s,primitiveType:d.PrimitiveType.LINES,boundingSphere:m.BoundingSphere.fromVertices(e)})},function(e,t){return o.defined(t)&&(e=c.unpack(e,t)),c.createGeometry(e)}});
