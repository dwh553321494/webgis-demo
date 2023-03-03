define(["./Check-f996273c","./RuntimeError-ac2797b4","./when-ae2e0b60","./createTaskProcessorWorker"],function(e,I,i,n){"use strict";function D(e,t){if(D.passThroughDataForTesting)return t;var i=e.byteLength;if(0===i||i%4!=0)throw new I.RuntimeError("The length of key must be greater than 0 and a multiple of 4.");var n=new DataView(t),r=n.getUint32(0,!0);if(1953029805===r||2917034100===r)return t;for(var a,o=new DataView(e),s=0,f=t.byteLength,d=f-f%8,u=i,l=8;s<d;)for(a=l=(l+8)%24;s<d&&a<u;)n.setUint32(s,n.getUint32(s,!0)^o.getUint32(a,!0),!0),n.setUint32(s+4,n.getUint32(s+4,!0)^o.getUint32(a+4,!0),!0),s+=8,a+=24;if(s<f)for(u<=a&&(a=l=(l+8)%24);s<f;)n.setUint8(s,n.getUint8(s)^o.getUint8(a)),s++,a++}function t(e,t){return 0!=(e&t)}D.passThroughDataForTesting=!1;var r=[1,2,4,8];function N(e,t,i,n,r,a){this._bits=e,this.cnodeVersion=t,this.imageryVersion=i,this.terrainVersion=n,this.imageryProvider=r,this.terrainProvider=a,this.ancestorHasTerrain=!1,this.terrainState=void 0}N.clone=function(e,t){return i.defined(t)?(t._bits=e._bits,t.cnodeVersion=e.cnodeVersion,t.imageryVersion=e.imageryVersion,t.terrainVersion=e.terrainVersion,t.imageryProvider=e.imageryProvider,t.terrainProvider=e.terrainProvider):t=new N(e._bits,e.cnodeVersion,e.imageryVersion,e.terrainVersion,e.imageryProvider,e.terrainProvider),t.ancestorHasTerrain=e.ancestorHasTerrain,t.terrainState=e.terrainState,t},N.prototype.setParent=function(e){this.ancestorHasTerrain=e.ancestorHasTerrain||this.hasTerrain()},N.prototype.hasSubtree=function(){return t(this._bits,16)},N.prototype.hasImagery=function(){return t(this._bits,64)},N.prototype.hasTerrain=function(){return t(this._bits,128)},N.prototype.hasChildren=function(){return t(this._bits,15)},N.prototype.hasChild=function(e){return t(this._bits,r[e])},N.prototype.getChildBitmask=function(){return 15&this._bits};var H=function n(r,a,o){function s(i,e){if(!a[i]){if(!r[i]){var t="function"==typeof require&&require;if(!e&&t)return t(i,!0);if(f)return f(i,!0);e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}t=a[i]={exports:{}};r[i][0].call(t.exports,function(e){var t=r[i][1][e];return s(t||e)},t,t.exports,n,r,a,o)}return a[i].exports}for(var f="function"==typeof require&&require,e=0;e<o.length;e++)s(o[e]);return s}({1:[function(e,t,i){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array,r=(i.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var n in i)i.hasOwnProperty(n)&&(e[n]=i[n])}}return e},i.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)},{arraySet:function(e,t,i,n,r){if(t.subarray&&e.subarray)e.set(t.subarray(i,i+n),r);else for(var a=0;a<n;a++)e[r+a]=t[i+a]},flattenChunks:function(e){for(var t,i,n,r=0,a=0,o=e.length;a<o;a++)r+=e[a].length;for(n=new Uint8Array(r),a=t=0,o=e.length;a<o;a++)i=e[a],n.set(i,t),t+=i.length;return n}}),a={arraySet:function(e,t,i,n,r){for(var a=0;a<n;a++)e[r+a]=t[i+a]},flattenChunks:function(e){return[].concat.apply([],e)}};i.setTyped=function(e){e?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,r)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(n)},{}],2:[function(e,t,i){var f=e("./common"),r=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch(e){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){a=!1}for(var l=new f.Buf8(256),n=0;n<256;n++)l[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function d(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&r))return String.fromCharCode.apply(null,f.shrinkBuf(e,t));for(var i="",n=0;n<t;n++)i+=String.fromCharCode(e[n]);return i}l[254]=l[254]=1,i.string2buf=function(e){for(var t,i,n,r,a=e.length,o=0,s=0;s<a;s++)55296==(64512&(i=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(n=e.charCodeAt(s+1)))&&(i=65536+(i-55296<<10)+(n-56320),s++),o+=i<128?1:i<2048?2:i<65536?3:4;for(t=new f.Buf8(o),s=r=0;r<o;s++)55296==(64512&(i=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(n=e.charCodeAt(s+1)))&&(i=65536+(i-55296<<10)+(n-56320),s++),i<128?t[r++]=i:(i<2048?t[r++]=192|i>>>6:(i<65536?t[r++]=224|i>>>12:(t[r++]=240|i>>>18,t[r++]=128|i>>>12&63),t[r++]=128|i>>>6&63),t[r++]=128|63&i);return t},i.buf2binstring=function(e){return d(e,e.length)},i.binstring2buf=function(e){for(var t=new f.Buf8(e.length),i=0,n=t.length;i<n;i++)t[i]=e.charCodeAt(i);return t},i.buf2string=function(e,t){for(var i,n,r=t||e.length,a=new Array(2*r),o=0,s=0;s<r;)if((i=e[s++])<128)a[o++]=i;else if(4<(n=l[i]))a[o++]=65533,s+=n-1;else{for(i&=2===n?31:3===n?15:7;1<n&&s<r;)i=i<<6|63&e[s++],n--;1<n?a[o++]=65533:i<65536?a[o++]=i:(i-=65536,a[o++]=55296|i>>10&1023,a[o++]=56320|1023&i)}return d(a,o)},i.utf8border=function(e,t){for(var i=(t=(t=t||e.length)>e.length?e.length:t)-1;0<=i&&128==(192&e[i]);)i--;return!(i<0)&&0!==i&&i+l[e[i]]>t?i:t}},{"./common":1}],3:[function(e,t,i){t.exports=function(e,t,i,n){for(var r=65535&e|0,a=e>>>16&65535|0,o=0;0!==i;){for(i-=o=2e3<i?2e3:i;a=a+(r=r+t[n++]|0)|0,--o;);r%=65521,a%=65521}return r|a<<16|0}},{}],4:[function(e,t,i){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],5:[function(e,t,i){var s=function(){for(var e=[],t=0;t<256;t++){for(var i=t,n=0;n<8;n++)i=1&i?3988292384^i>>>1:i>>>1;e[t]=i}return e}();t.exports=function(e,t,i,n){var r=s,a=n+i;e^=-1;for(var o=n;o<a;o++)e=e>>>8^r[255&(e^t[o])];return-1^e}},{}],6:[function(e,t,i){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],7:[function(e,t,i){t.exports=function(e,d){var t,i,n,u,r,h,a=e.state,c=e.next_in,b=e.input,m=c+(e.avail_in-5),o=e.next_out,s=e.output,w=o-(d-e.avail_out),g=o+(e.avail_out-257),k=a.dmax,v=a.wsize,_=a.whave,p=a.wnext,y=a.window,f=a.hold,l=a.bits,x=a.lencode,E=a.distcode,S=(1<<a.lenbits)-1,T=(1<<a.distbits)-1;e:do{for(l<15&&(f+=b[c++]<<l,l+=8,f+=b[c++]<<l,l+=8),t=x[f&S];;){if(f>>>=i=t>>>24,l-=i,0===(i=t>>>16&255))s[o++]=65535&t;else{if(!(16&i)){if(0==(64&i)){t=x[(65535&t)+(f&(1<<i)-1)];continue}if(32&i){a.mode=12;break e}e.msg="invalid literal/length code",a.mode=30;break e}for(n=65535&t,(i&=15)&&(l<i&&(f+=b[c++]<<l,l+=8),n+=f&(1<<i)-1,f>>>=i,l-=i),l<15&&(f+=b[c++]<<l,l+=8,f+=b[c++]<<l,l+=8),t=E[f&T];;){if(f>>>=i=t>>>24,l-=i,!(16&(i=t>>>16&255))){if(0==(64&i)){t=E[(65535&t)+(f&(1<<i)-1)];continue}e.msg="invalid distance code",a.mode=30;break e}if(u=65535&t,l<(i&=15)&&(f+=b[c++]<<l,(l+=8)<i&&(f+=b[c++]<<l,l+=8)),k<(u+=f&(1<<i)-1)){e.msg="invalid distance too far back",a.mode=30;break e}if(f>>>=i,l-=i,(i=o-w)<u){if(_<(i=u-i)&&a.sane){e.msg="invalid distance too far back",a.mode=30;break e}if(h=y,(r=0)===p){if(r+=v-i,i<n){for(n-=i;s[o++]=y[r++],--i;);r=o-u,h=s}}else if(p<i){if(r+=v+p-i,(i-=p)<n){for(n-=i;s[o++]=y[r++],--i;);if(r=0,p<n){for(n-=i=p;s[o++]=y[r++],--i;);r=o-u,h=s}}}else if(r+=p-i,i<n){for(n-=i;s[o++]=y[r++],--i;);r=o-u,h=s}for(;2<n;)s[o++]=h[r++],s[o++]=h[r++],s[o++]=h[r++],n-=3;n&&(s[o++]=h[r++],1<n&&(s[o++]=h[r++]))}else{for(r=o-u;s[o++]=s[r++],s[o++]=s[r++],s[o++]=s[r++],2<(n-=3););n&&(s[o++]=s[r++],1<n&&(s[o++]=s[r++]))}break}}break}}while(c<m&&o<g);f&=(1<<(l-=(n=l>>3)<<3))-1,e.next_in=c-=n,e.next_out=o,e.avail_in=c<m?m-c+5:5-(c-m),e.avail_out=o<g?g-o+257:257-(o-g),a.hold=f,a.bits=l}},{}],8:[function(e,i,t){var Z=e("../utils/common"),I=e("./adler32"),D=e("./crc32"),L=e("./inffast"),N=e("./inftrees"),H=1,P=2,O=0,z=-2,M=1,n=852,r=592;function V(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function a(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Z.Buf16(320),this.work=new Z.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function o(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=M,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Z.Buf32(n),t.distcode=t.distdyn=new Z.Buf32(r),t.sane=1,t.back=-1,O):z}function s(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,o(e)):z}function f(e,t){var i,n;return e&&e.state?(n=e.state,t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?z:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=i,n.wbits=t,s(e))):z}function l(e,t){var i;return e?(i=new a,(e.state=i).window=null,(i=f(e,t))!==O&&(e.state=null),i):z}var C,F,K=!0;function j(e,t,i,n){var r,e=e.state;return null===e.window&&(e.wsize=1<<e.wbits,e.wnext=0,e.whave=0,e.window=new Z.Buf8(e.wsize)),n>=e.wsize?(Z.arraySet(e.window,t,i-e.wsize,e.wsize,0),e.wnext=0,e.whave=e.wsize):(n<(r=e.wsize-e.wnext)&&(r=n),Z.arraySet(e.window,t,i-n,r,e.wnext),(n-=r)?(Z.arraySet(e.window,t,i-n,n,0),e.wnext=n,e.whave=e.wsize):(e.wnext+=r,e.wnext===e.wsize&&(e.wnext=0),e.whave<e.wsize&&(e.whave+=r))),0}t.inflateReset=s,t.inflateReset2=f,t.inflateResetKeep=o,t.inflateInit=function(e){return l(e,15)},t.inflateInit2=l,t.inflate=function(e,d){var t,i,u,n,h,r,c,a,o,b,m,s,w,g,f,k,v,_,p,y,l,x,E,S,T=0,R=new Z.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return z;12===(t=e.state).mode&&(t.mode=13),h=e.next_out,u=e.output,c=e.avail_out,n=e.next_in,i=e.input,r=e.avail_in,a=t.hold,o=t.bits,b=r,m=c,x=O;e:for(;;)switch(t.mode){case M:if(0===t.wrap){t.mode=13;break}for(;o<16;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}if(2&t.wrap&&35615===a){R[t.check=0]=255&a,R[1]=a>>>8&255,t.check=D(t.check,R,2,0),o=a=0,t.mode=2;break}if(t.flags=0,t.head&&(t.head.done=!1),!(1&t.wrap)||(((255&a)<<8)+(a>>8))%31){e.msg="incorrect header check",t.mode=30;break}if(8!=(15&a)){e.msg="unknown compression method",t.mode=30;break}if(o-=4,l=8+(15&(a>>>=4)),0===t.wbits)t.wbits=l;else if(l>t.wbits){e.msg="invalid window size",t.mode=30;break}t.dmax=1<<l,e.adler=t.check=1,t.mode=512&a?10:12,o=a=0;break;case 2:for(;o<16;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}if(t.flags=a,8!=(255&t.flags)){e.msg="unknown compression method",t.mode=30;break}if(57344&t.flags){e.msg="unknown header flags set",t.mode=30;break}t.head&&(t.head.text=a>>8&1),512&t.flags&&(R[0]=255&a,R[1]=a>>>8&255,t.check=D(t.check,R,2,0)),o=a=0,t.mode=3;case 3:for(;o<32;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}t.head&&(t.head.time=a),512&t.flags&&(R[0]=255&a,R[1]=a>>>8&255,R[2]=a>>>16&255,R[3]=a>>>24&255,t.check=D(t.check,R,4,0)),o=a=0,t.mode=4;case 4:for(;o<16;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}t.head&&(t.head.xflags=255&a,t.head.os=a>>8),512&t.flags&&(R[0]=255&a,R[1]=a>>>8&255,t.check=D(t.check,R,2,0)),o=a=0,t.mode=5;case 5:if(1024&t.flags){for(;o<16;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}t.length=a,t.head&&(t.head.extra_len=a),512&t.flags&&(R[0]=255&a,R[1]=a>>>8&255,t.check=D(t.check,R,2,0)),o=a=0}else t.head&&(t.head.extra=null);t.mode=6;case 6:if(1024&t.flags&&((s=r<(s=t.length)?r:s)&&(t.head&&(l=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Array(t.head.extra_len)),Z.arraySet(t.head.extra,i,n,s,l)),512&t.flags&&(t.check=D(t.check,i,s,n)),r-=s,n+=s,t.length-=s),t.length))break e;t.length=0,t.mode=7;case 7:if(2048&t.flags){if(0===r)break e;for(s=0;l=i[n+s++],t.head&&l&&t.length<65536&&(t.head.name+=String.fromCharCode(l)),l&&s<r;);if(512&t.flags&&(t.check=D(t.check,i,s,n)),r-=s,n+=s,l)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=8;case 8:if(4096&t.flags){if(0===r)break e;for(s=0;l=i[n+s++],t.head&&l&&t.length<65536&&(t.head.comment+=String.fromCharCode(l)),l&&s<r;);if(512&t.flags&&(t.check=D(t.check,i,s,n)),r-=s,n+=s,l)break e}else t.head&&(t.head.comment=null);t.mode=9;case 9:if(512&t.flags){for(;o<16;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}if(a!==(65535&t.check)){e.msg="header crc mismatch",t.mode=30;break}o=a=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),e.adler=t.check=0,t.mode=12;break;case 10:for(;o<32;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}e.adler=t.check=V(a),o=a=0,t.mode=11;case 11:if(0===t.havedict)return e.next_out=h,e.avail_out=c,e.next_in=n,e.avail_in=r,t.hold=a,t.bits=o,2;e.adler=t.check=1,t.mode=12;case 12:if(5===d||6===d)break e;case 13:if(t.last){a>>>=7&o,o-=7&o,t.mode=27;break}for(;o<3;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}switch(t.last=1&a,--o,3&(a>>>=1)){case 0:t.mode=14;break;case 1:B=U=void 0;var B,U=t;if(K){for(C=new Z.Buf32(512),F=new Z.Buf32(32),B=0;B<144;)U.lens[B++]=8;for(;B<256;)U.lens[B++]=9;for(;B<280;)U.lens[B++]=7;for(;B<288;)U.lens[B++]=8;for(N(H,U.lens,0,288,C,0,U.work,{bits:9}),B=0;B<32;)U.lens[B++]=5;N(P,U.lens,0,32,F,0,U.work,{bits:5}),K=!1}if(U.lencode=C,U.lenbits=9,U.distcode=F,U.distbits=5,t.mode=20,6!==d)break;a>>>=2,o-=2;break e;case 2:t.mode=17;break;case 3:e.msg="invalid block type",t.mode=30}a>>>=2,o-=2;break;case 14:for(a>>>=7&o,o-=7&o;o<32;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}if((65535&a)!=(a>>>16^65535)){e.msg="invalid stored block lengths",t.mode=30;break}if(t.length=65535&a,o=a=0,t.mode=15,6===d)break e;case 15:t.mode=16;case 16:if(s=t.length){if(0===(s=c<(s=r<s?r:s)?c:s))break e;Z.arraySet(u,i,n,s,h),r-=s,n+=s,c-=s,h+=s,t.length-=s;break}t.mode=12;break;case 17:for(;o<14;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}if(t.nlen=257+(31&a),a>>>=5,o-=5,t.ndist=1+(31&a),a>>>=5,o-=5,t.ncode=4+(15&a),a>>>=4,o-=4,286<t.nlen||30<t.ndist){e.msg="too many length or distance symbols",t.mode=30;break}t.have=0,t.mode=18;case 18:for(;t.have<t.ncode;){for(;o<3;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}t.lens[A[t.have++]]=7&a,a>>>=3,o-=3}for(;t.have<19;)t.lens[A[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,E={bits:t.lenbits},x=N(0,t.lens,0,19,t.lencode,0,t.work,E),t.lenbits=E.bits,x){e.msg="invalid code lengths set",t.mode=30;break}t.have=0,t.mode=19;case 19:for(;t.have<t.nlen+t.ndist;){for(;k=(T=t.lencode[a&(1<<t.lenbits)-1])>>>16&255,v=65535&T,!((f=T>>>24)<=o);){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}if(v<16)a>>>=f,o-=f,t.lens[t.have++]=v;else{if(16===v){for(S=f+2;o<S;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}if(a>>>=f,o-=f,0===t.have){e.msg="invalid bit length repeat",t.mode=30;break}l=t.lens[t.have-1],s=3+(3&a),a>>>=2,o-=2}else if(17===v){for(S=f+3;o<S;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}l=0,s=3+(7&(a>>>=f)),a>>>=3,o=o-f-3}else{for(S=f+7;o<S;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}l=0,s=11+(127&(a>>>=f)),a>>>=7,o=o-f-7}if(t.have+s>t.nlen+t.ndist){e.msg="invalid bit length repeat",t.mode=30;break}for(;s--;)t.lens[t.have++]=l}}if(30===t.mode)break;if(0===t.lens[256]){e.msg="invalid code -- missing end-of-block",t.mode=30;break}if(t.lenbits=9,E={bits:t.lenbits},x=N(H,t.lens,0,t.nlen,t.lencode,0,t.work,E),t.lenbits=E.bits,x){e.msg="invalid literal/lengths set",t.mode=30;break}if(t.distbits=6,t.distcode=t.distdyn,E={bits:t.distbits},x=N(P,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,E),t.distbits=E.bits,x){e.msg="invalid distances set",t.mode=30;break}if(t.mode=20,6===d)break e;case 20:t.mode=21;case 21:if(6<=r&&258<=c){e.next_out=h,e.avail_out=c,e.next_in=n,e.avail_in=r,t.hold=a,t.bits=o,L(e,m),h=e.next_out,u=e.output,c=e.avail_out,n=e.next_in,i=e.input,r=e.avail_in,a=t.hold,o=t.bits,12===t.mode&&(t.back=-1);break}for(t.back=0;k=(T=t.lencode[a&(1<<t.lenbits)-1])>>>16&255,v=65535&T,!((f=T>>>24)<=o);){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}if(k&&0==(240&k)){for(_=f,p=k,y=v;k=(T=t.lencode[y+((a&(1<<_+p)-1)>>_)])>>>16&255,v=65535&T,!(_+(f=T>>>24)<=o);){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}a>>>=_,o-=_,t.back+=_}if(a>>>=f,o-=f,t.back+=f,t.length=v,0===k){t.mode=26;break}if(32&k){t.back=-1,t.mode=12;break}if(64&k){e.msg="invalid literal/length code",t.mode=30;break}t.extra=15&k,t.mode=22;case 22:if(t.extra){for(S=t.extra;o<S;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}t.length+=a&(1<<t.extra)-1,a>>>=t.extra,o-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=23;case 23:for(;k=(T=t.distcode[a&(1<<t.distbits)-1])>>>16&255,v=65535&T,!((f=T>>>24)<=o);){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}if(0==(240&k)){for(_=f,p=k,y=v;k=(T=t.distcode[y+((a&(1<<_+p)-1)>>_)])>>>16&255,v=65535&T,!(_+(f=T>>>24)<=o);){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}a>>>=_,o-=_,t.back+=_}if(a>>>=f,o-=f,t.back+=f,64&k){e.msg="invalid distance code",t.mode=30;break}t.offset=v,t.extra=15&k,t.mode=24;case 24:if(t.extra){for(S=t.extra;o<S;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}t.offset+=a&(1<<t.extra)-1,a>>>=t.extra,o-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){e.msg="invalid distance too far back",t.mode=30;break}t.mode=25;case 25:if(0===c)break e;if(t.offset>(s=m-c)){if((s=t.offset-s)>t.whave&&t.sane){e.msg="invalid distance too far back",t.mode=30;break}w=s>t.wnext?(s-=t.wnext,t.wsize-s):t.wnext-s,s>t.length&&(s=t.length),g=t.window}else g=u,w=h-t.offset,s=t.length;for(c-=s=c<s?c:s,t.length-=s;u[h++]=g[w++],--s;);0===t.length&&(t.mode=21);break;case 26:if(0===c)break e;u[h++]=t.length,c--,t.mode=21;break;case 27:if(t.wrap){for(;o<32;){if(0===r)break e;r--,a|=i[n++]<<o,o+=8}if(m-=c,e.total_out+=m,t.total+=m,m&&(e.adler=t.check=(t.flags?D:I)(t.check,u,m,h-m)),m=c,(t.flags?a:V(a))!==t.check){e.msg="incorrect data check",t.mode=30;break}o=a=0}t.mode=28;case 28:if(t.wrap&&t.flags){for(;o<32;){if(0===r)break e;r--,a+=i[n++]<<o,o+=8}if(a!==(4294967295&t.total)){e.msg="incorrect length check",t.mode=30;break}o=a=0}t.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;default:return z}return e.next_out=h,e.avail_out=c,e.next_in=n,e.avail_in=r,t.hold=a,t.bits=o,(t.wsize||m!==e.avail_out&&t.mode<30&&(t.mode<27||4!==d))&&j(e,e.output,e.next_out,m-e.avail_out),b-=e.avail_in,m-=e.avail_out,e.total_in+=b,e.total_out+=m,t.total+=m,t.wrap&&m&&(e.adler=t.check=(t.flags?D:I)(t.check,u,m,e.next_out-m)),e.data_type=t.bits+(t.last?64:0)+(12===t.mode?128:0)+(20===t.mode||15===t.mode?256:0),x=(0==b&&0===m||4===d)&&x===O?-5:x},t.inflateEnd=function(e){if(!e||!e.state)return z;var t=e.state;return t.window&&(t.window=null),e.state=null,O},t.inflateGetHeader=function(e,t){return!e||!e.state||0==(2&(e=e.state).wrap)?z:((e.head=t).done=!1,O)},t.inflateSetDictionary=function(e,t){var i,n=t.length;return!e||!e.state||0!==(i=e.state).wrap&&11!==i.mode?z:11===i.mode&&I(1,t,n,0)!==i.check?-3:j(e,t,n,n)?(i.mode=31,-4):(i.havedict=1,O)},t.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(e,t,i){var N=e("../utils/common"),O=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],z=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],C=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],F=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(d,u,h,c,b,m,e,w){for(var t,g,k,v,_,p,y,x,E,S=w.bits,i=0,n=0,r=0,a=0,o=0,s=0,f=0,T=0,R=0,l=0,A=null,B=0,U=new N.Buf16(16),Z=new N.Buf16(16),I=null,D=0,i=0;i<=15;i++)U[i]=0;for(n=0;n<c;n++)U[u[h+n]]++;for(o=S,a=15;1<=a&&0===U[a];a--);if(a<o&&(o=a),0===a)return b[m++]=20971520,b[m++]=20971520,w.bits=1,0;for(r=1;r<a&&0===U[r];r++);for(o<r&&(o=r),i=T=1;i<=15;i++)if((T=(T<<=1)-U[i])<0)return-1;if(0<T&&(0===d||1!==a))return-1;for(Z[1]=0,i=1;i<15;i++)Z[i+1]=Z[i]+U[i];for(n=0;n<c;n++)0!==u[h+n]&&(e[Z[u[h+n]]++]=n);if(p=0===d?(A=I=e,19):1===d?(A=O,B-=257,I=z,D-=257,256):(A=C,I=F,-1),i=r,_=m,f=n=l=0,k=-1,v=(R=1<<(s=o))-1,1===d&&852<R||2===d&&592<R)return 1;for(;;){for(E=e[n]<p?(x=0,e[n]):e[n]>p?(x=I[D+e[n]],A[B+e[n]]):(x=96,0),t=1<<(y=i-f),r=g=1<<s;b[_+(l>>f)+(g-=t)]=y<<24|x<<16|E|0,0!==g;);for(t=1<<i-1;l&t;)t>>=1;if(l=0!==t?(l&t-1)+t:0,n++,0==--U[i]){if(i===a)break;i=u[h+e[n]]}if(o<i&&(l&v)!==k){for(_+=r,T=1<<(s=i-(f=0===f?o:f));s+f<a&&!((T-=U[s+f])<=0);)s++,T<<=1;if(R+=1<<s,1===d&&852<R||2===d&&592<R)return 1;b[k=l&v]=o<<24|s<<16|_-m|0}}return 0!==l&&(b[_+l]=i-f<<24|64<<16|0),w.bits=o,0}},{"../utils/common":1}],10:[function(e,t,i){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],11:[function(e,t,i){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],"/lib/inflate.js":[function(e,a,t){var u=e("./zlib/inflate"),h=e("./utils/common"),c=e("./utils/strings"),b=e("./zlib/constants"),i=e("./zlib/messages"),o=e("./zlib/zstream"),s=e("./zlib/gzheader"),m=Object.prototype.toString;function n(e){if(!(this instanceof n))return new n(e);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options,e=(t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0,u.inflateInit2(this.strm,t.windowBits));if(e!==b.Z_OK)throw new Error(i[e]);this.header=new s,u.inflateGetHeader(this.strm,this.header)}function r(e,t){t=new n(t);if(t.push(e,!0),t.err)throw t.msg||i[t.err];return t.result}n.prototype.push=function(e,t){var i,n,r,d,a,o=this.strm,s=this.options.chunkSize,f=this.options.dictionary,l=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?b.Z_FINISH:b.Z_NO_FLUSH,"string"==typeof e?o.input=c.binstring2buf(e):"[object ArrayBuffer]"===m.call(e)?o.input=new Uint8Array(e):o.input=e,o.next_in=0,o.avail_in=o.input.length;do{if(0===o.avail_out&&(o.output=new h.Buf8(s),o.next_out=0,o.avail_out=s),(i=u.inflate(o,b.Z_NO_FLUSH))===b.Z_NEED_DICT&&f&&(a="string"==typeof f?c.string2buf(f):"[object ArrayBuffer]"===m.call(f)?new Uint8Array(f):f,i=u.inflateSetDictionary(this.strm,a)),i===b.Z_BUF_ERROR&&!0===l&&(i=b.Z_OK,l=!1),i!==b.Z_STREAM_END&&i!==b.Z_OK)return this.onEnd(i),!(this.ended=!0)}while(o.next_out&&(0!==o.avail_out&&i!==b.Z_STREAM_END&&(0!==o.avail_in||n!==b.Z_FINISH&&n!==b.Z_SYNC_FLUSH)||("string"===this.options.to?(a=c.utf8border(o.output,o.next_out),r=o.next_out-a,d=c.buf2string(o.output,a),o.next_out=r,o.avail_out=s-r,r&&h.arraySet(o.output,o.output,a,r,0),this.onData(d)):this.onData(h.shrinkBuf(o.output,o.next_out)))),0===o.avail_in&&0===o.avail_out&&(l=!0),(0<o.avail_in||0===o.avail_out)&&i!==b.Z_STREAM_END);return(n=i===b.Z_STREAM_END?b.Z_FINISH:n)===b.Z_FINISH?(i=u.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===b.Z_OK):n!==b.Z_SYNC_FLUSH||(this.onEnd(b.Z_OK),!(o.avail_out=0))},n.prototype.onData=function(e){this.chunks.push(e)},n.prototype.onEnd=function(e){e===b.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},t.Inflate=n,t.inflate=r,t.inflateRaw=function(e,t){return(t=t||{}).raw=!0,r(e,t)},t.ungzip=r},{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,"./zlib/inflate":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])("/lib/inflate.js"),O=Uint16Array.BYTES_PER_ELEMENT,z=Int32Array.BYTES_PER_ELEMENT,C=Uint32Array.BYTES_PER_ELEMENT,F={METADATA:0,TERRAIN:1,DBROOT:2};F.fromString=function(e){return"Metadata"===e?F.METADATA:"Terrain"===e?F.TERRAIN:"DbRoot"===e?F.DBROOT:void 0};var P=32301;var M=5,V=4;var L=1953029805,K=2917034100;return n(function(e,d){var u=F.fromString(e.type),t=e.buffer,h=(D(e.key,t),function(e){var t=new DataView(e),i=0,n=t.getUint32(0,!0);if(i+=C,n!==L&&n!==K)throw new I.RuntimeError("Invalid magic");t=t.getUint32(i,n===L),i+=C,n=new Uint8Array(e,i),e=H.inflate(n);if(e.length===t)return e;throw new I.RuntimeError("Size of packet doesn't match header")}(t)),t=h.buffer,c=h.length;switch(u){case F.METADATA:var i=t,b=c,n=e.quadKey,r=new DataView(i),a=0,i=r.getUint32(a,!0);if(a+=C,i!==P)throw new I.RuntimeError("Invalid magic");if(i=r.getUint32(a,!0),a+=C,1!==i)throw new I.RuntimeError("Invalid data type. Must be 1 for QuadTreePacket");if(i=r.getUint32(a,!0),a+=C,2!==i)throw new I.RuntimeError("Invalid QuadTreePacket version. Only version 2 is supported.");var f=r.getInt32(a,!0),i=(a+=z,r.getInt32(a,!0));if(a+=z,32!==i)throw new I.RuntimeError("Invalid instance size.");var o=r.getInt32(a,!0),m=(a+=z,r.getInt32(a,!0)),w=(a+=z,r.getInt32(a,!0));if(o!==f*i+(a+=z))throw new I.RuntimeError("Invalid dataBufferOffset");if(o+m+w!==b)throw new I.RuntimeError("Invalid packet offsets");for(var g=[],k=0;k<f;++k){var v=r.getUint8(a),_=(++a,++a,r.getUint16(a,!0)),p=(a+=O,r.getUint16(a,!0)),y=(a+=O,r.getUint16(a,!0)),x=(a=(a=(a=a+O+O)+O+z)+z+8,r.getUint8(a++)),E=r.getUint8(a++);a+=O,g.push(new N(v,_,p,y,x,E))}var l=[],S=0;return i=0,o=g[S++],""===n?++i:l[n]=o,function e(t,i,n){var r=!1;if(4===n){if(i.hasSubtree())return;r=!0}for(var a=0;a<4;++a){var o=t+a.toString();if(r)l[o]=null;else if(n<4)if(i.hasChild(a)){if(S===f)return void console.log("Incorrect number of instances");var s=g[S++];e(o,l[o]=s,n+1)}else l[o]=null}}(n,o,i),l;case F.TERRAIN:for(var T=t,R=c,A=d,B=new DataView(T),s=0,U=[];U.length<M;){var Z=s,Z=(s=function(e){for(var t=0;t<V;++t){var i=B.getUint32(e,!0);if(R<(e=e+C+i))throw new I.RuntimeError("Malformed terrain packet found.")}return e}(s),T.slice(Z,s));A.push(Z),U.push(Z)}return U;case F.DBROOT:return d.push(t),{buffer:t}}})});