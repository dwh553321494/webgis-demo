!function(e){var v2=256,b2=256,d2=-2,g2=-5,a=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];function s2(){var m=this;function y(t,e,n){for(var a,i,r=[],_=0,o=1;o<=15;o++)r[o]=_=_+n[o-1]<<1;for(a=0;a<=e;a++)0!==(i=t[2*a+1])&&(t[2*a]=function(t,e){for(var n=0;n|=1&t,t>>>=1,n<<=1,0<--e;);return n>>>1}(r[i]++,i))}m.build_tree=function(t){var e,n,a,i=m.dyn_tree,d=m.stat_desc.static_tree,s=m.stat_desc.elems,l=-1;for(t.heap_len=0,t.heap_max=573,e=0;e<s;e++)0!==i[2*e]?(t.heap[++t.heap_len]=l=e,t.depth[e]=0):i[2*e+1]=0;for(;t.heap_len<2;)i[2*(a=t.heap[++t.heap_len]=l<2?++l:0)]=1,t.depth[a]=0,t.opt_len--,d&&(t.static_len-=d[2*a+1]);for(m.max_code=l,e=Math.floor(t.heap_len/2);1<=e;e--)t.pqdownheap(i,e);for(a=s;e=t.heap[1],t.heap[1]=t.heap[t.heap_len--],t.pqdownheap(i,1),n=t.heap[1],t.heap[--t.heap_max]=e,t.heap[--t.heap_max]=n,i[2*a]=i[2*e]+i[2*n],t.depth[a]=Math.max(t.depth[e],t.depth[n])+1,i[2*e+1]=i[2*n+1]=a,t.heap[1]=a++,t.pqdownheap(i,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1];for(var r,_,c,h,p,o=t,u=m.dyn_tree,x=m.stat_desc.static_tree,v=m.stat_desc.extra_bits,b=m.stat_desc.extra_base,g=m.stat_desc.max_length,w=0,f=0;f<=15;f++)o.bl_count[f]=0;for(u[2*o.heap[o.heap_max]+1]=0,r=o.heap_max+1;r<573;r++)g<(f=u[2*u[2*(_=o.heap[r])+1]+1]+1)&&(f=g,w++),u[2*_+1]=f,_>m.max_code||(o.bl_count[f]++,h=0,b<=_&&(h=v[_-b]),p=u[2*_],o.opt_len+=p*(f+h),x&&(o.static_len+=p*(x[2*_+1]+h)));if(0!==w){do{for(f=g-1;0===o.bl_count[f];)f--}while(o.bl_count[f]--,o.bl_count[f+1]+=2,o.bl_count[g]--,0<(w-=2));for(f=g;0!==f;f--)for(_=o.bl_count[f];0!==_;)(c=o.heap[--r])>m.max_code||(u[2*c+1]!=f&&(o.opt_len+=(f-u[2*c+1])*u[2*c],u[2*c+1]=f),_--)}y(i,m.max_code,t.bl_count)}}function l2(t,e,n,a,i){var r=this;r.static_tree=t,r.extra_bits=e,r.extra_base=n,r.elems=a,r.max_length=i}s2._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],s2.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],s2.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],s2.d_code=function(t){return t<256?a[t]:a[256+(t>>>7)]},s2.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],s2.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],s2.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],s2.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],l2.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],l2.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],l2.static_l_desc=new l2(l2.static_ltree,s2.extra_lbits,257,286,15),l2.static_d_desc=new l2(l2.static_dtree,s2.extra_dbits,0,30,15),l2.static_bl_desc=new l2(null,s2.extra_blbits,0,19,7);function t(t,e,n,a,i){var r=this;r.good_length=t,r.max_lazy=e,r.nice_length=n,r.max_chain=a,r.func=i}var n,c2=[new t(0,0,0,0,0),new t(4,4,8,4,1),new t(4,5,16,8,1),new t(4,6,32,32,1),new t(4,4,16,16,2),new t(8,16,32,32,2),new t(8,16,128,128,2),new t(8,32,128,256,2),new t(32,128,258,1024,2),new t(32,258,258,4096,2)],h2=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],w2=113,p2=666,m2=258,x2=262;function y2(t,e,n,a){var i=t[2*e],t=t[2*n];return i<t||i==t&&a[e]<=a[n]}function i(){var o,v,b,g,l,w,m,c,i,y,u,f,M,_,A,U,E,d,k,z,h,q,p,D,I,P,s,S,L,j,B,C,F,G,H,J,K,r,N,a,O,x=this,Q=new s2,R=new s2,T=new s2;function V(){for(var t=0;t<286;t++)B[2*t]=0;for(t=0;t<30;t++)C[2*t]=0;for(t=0;t<19;t++)F[2*t]=0;B[512]=1,x.opt_len=x.static_len=0,J=r=0}function W(t,e){var n,a,i=-1,r=t[1],_=0,o=7,u=4;for(0===r&&(o=138,u=3),t[2*(e+1)+1]=65535,n=0;n<=e;n++)a=r,r=t[2*(n+1)+1],++_<o&&a==r||(_<u?F[2*a]+=_:0!==a?(a!=i&&F[2*a]++,F[32]++):_<=10?F[34]++:F[36]++,i=a,u=(_=0)===r?(o=138,3):a==r?(o=6,3):(o=7,4))}function X(t){x.pending_buf[x.pending++]=t}function Y(t){X(255&t),X(t>>>8&255)}function Z(t,e){var n;16-e<O?(Y(a|=(n=t)<<O&65535),a=n>>>16-O,O+=e-16):(a|=t<<O&65535,O+=e)}function $(t,e){t*=2;Z(65535&e[t],65535&e[1+t])}function t2(t,e){var n,a,i=-1,r=t[1],_=0,o=7,u=4;for(0===r&&(o=138,u=3),n=0;n<=e;n++)if(a=r,r=t[2*(n+1)+1],!(++_<o&&a==r)){if(_<u)for(;$(a,F),0!=--_;);else 0!==a?(a!=i&&($(a,F),_--),$(16,F),Z(_-3,2)):_<=10?($(17,F),Z(_-3,3)):($(18,F),Z(_-11,7));i=a,u=(_=0)===r?(o=138,3):a==r?(o=6,3):(o=7,4)}}function e2(){16==O?(Y(a),O=a=0):8<=O&&(X(255&a),a>>>=8,O-=8)}function n2(t,e){var n,a;if(x.pending_buf[K+2*J]=t>>>8&255,x.pending_buf[K+2*J+1]=255&t,x.pending_buf[G+J]=255&e,J++,0===t?B[2*e]++:(r++,t--,B[2*(s2._length_code[e]+v2+1)]++,C[2*s2.d_code(t)]++),0==(8191&J)&&2<s){for(n=8*J,e=h-E,a=0;a<30;a++)n+=C[2*a]*(5+s2.extra_dbits[a]);if(n>>>=3,r<Math.floor(J/2)&&n<Math.floor(e/2))return!0}return J==H-1}function a2(t,e){var n,a,i,r,_=0;if(0!==J)for(;n=x.pending_buf[K+2*_]<<8&65280|255&x.pending_buf[K+2*_+1],a=255&x.pending_buf[G+_],_++,0==n?$(a,t):($((i=s2._length_code[a])+v2+1,t),0!==(r=s2.extra_lbits[i])&&Z(a-=s2.base_length[i],r),$(i=s2.d_code(--n),e),0!==(r=s2.extra_dbits[i])&&Z(n-=s2.base_dist[i],r)),_<J;);$(b2,t),N=t[513]}function i2(){8<O?Y(a):0<O&&X(255&a),O=a=0}function r2(t,e,n){Z(0+(n?1:0),3),n=t,t=e,e=!0,i2(),N=8,e&&(Y(t),Y(~t)),x.pending_buf.set(c.subarray(n,n+t),x.pending),x.pending+=t}function e(t,e,n){var a,i,r=0;if(0<s?(Q.build_tree(x),R.build_tree(x),r=function(){var t;for(W(B,Q.max_code),W(C,R.max_code),T.build_tree(x),t=18;3<=t&&0===F[2*s2.bl_order[t]+1];t--);return x.opt_len+=3*(t+1)+5+5+4,t}(),a=x.opt_len+3+7>>>3,(i=x.static_len+3+7>>>3)<=a&&(a=i)):a=i=e+5,e+4<=a&&-1!=t)r2(t,e,n);else if(i==a)Z(2+(n?1:0),3),a2(l2.static_ltree,l2.static_dtree);else{Z(4+(n?1:0),3);var _,t=Q.max_code+1,e=R.max_code+1,o=r+1;for(Z(t-257,5),Z(e-1,5),Z(o-4,4),_=0;_<o;_++)Z(F[2*s2.bl_order[_]+1],3);t2(B,t-1),t2(C,e-1),a2(B,C)}V(),n&&i2()}function _2(t){e(0<=E?E:-1,h-E,t),E=h,o.flush_pending()}function o2(){var t,e,n,a;do{if(0===(a=i-p-h)&&0===h&&0===p)a=l;else if(-1==a)a--;else if(l+l-x2<=h){for(c.set(c.subarray(l,l+l),0),q-=l,h-=l,E-=l,n=t=M;e=65535&u[--n],u[n]=l<=e?e-l:0,0!=--t;);for(n=t=l;e=65535&y[--n],y[n]=l<=e?e-l:0,0!=--t;);a+=l}if(0===o.avail_in)return}while(t=o.read_buf(c,h+p,a),3<=(p+=t)&&(f=((f=255&c[h])<<U^255&c[h+1])&A),p<x2&&0!==o.avail_in)}function u2(t){var e,n,a=I,i=h,r=D,d=l-x2<h?h-(l-x2):0,_=j,s=m,o=h+m2,u=c[i+r-1],f=c[i+r];L<=D&&(a>>=2),p<_&&(_=p);do{if(c[(e=t)+r]==f&&c[e+r-1]==u&&c[e]==c[i]&&c[++e]==c[i+1]){for(i+=2,e++;c[++i]==c[++e]&&c[++i]==c[++e]&&c[++i]==c[++e]&&c[++i]==c[++e]&&c[++i]==c[++e]&&c[++i]==c[++e]&&c[++i]==c[++e]&&c[++i]==c[++e]&&i<o;);if(n=m2-(o-i),i=o-m2,r<n){if(q=t,_<=(r=n))break;u=c[i+r-1],f=c[i+r]}}}while((t=65535&y[t&s])>d&&0!=--a);return r<=p?r:p}function f2(t){var e;for(t.total_in=t.total_out=0,t.msg=null,x.pending=0,x.pending_out=0,v=w2,g=0,Q.dyn_tree=B,Q.stat_desc=l2.static_l_desc,R.dyn_tree=C,R.stat_desc=l2.static_d_desc,T.dyn_tree=F,T.stat_desc=l2.static_bl_desc,O=a=0,N=8,V(),i=2*l,e=u[M-1]=0;e<M-1;e++)u[e]=0;return P=c2[s].max_lazy,L=c2[s].good_length,j=c2[s].nice_length,I=c2[s].max_chain,d=D=2,f=z=p=E=h=0}x.depth=[],x.bl_count=[],x.heap=[],B=[],C=[],F=[],x.pqdownheap=function(t,e){for(var n=x.heap,a=n[e],i=e<<1;i<=x.heap_len&&(i<x.heap_len&&y2(t,n[i+1],n[i],x.depth)&&i++,!y2(t,a,n[i],x.depth));)n[e]=n[i],e=i,i<<=1;n[e]=a},x.deflateInit=function(t,e,n,a,i,r){return a=a||8,i=i||8,r=r||0,t.msg=null,-1==e&&(e=6),i<1||9<i||8!=a||n<9||15<n||e<0||9<e||r<0||2<r?d2:(t.dstate=x,m=(l=1<<(w=n))-1,A=(M=1<<(_=i+7))-1,U=Math.floor((_+3-1)/3),c=new Uint8Array(2*l),y=[],u=[],H=1<<i+6,x.pending_buf=new Uint8Array(4*H),b=4*H,K=Math.floor(H/2),G=3*H,s=e,S=r,f2(t))},x.deflateEnd=function(){return 42!=v&&v!=w2&&v!=p2?d2:(x.pending_buf=null,c=y=u=null,x.dstate=null,v==w2?-3:0)},x.deflateParams=function(t,e,n){var a=0;return(e=-1==e?6:e)<0||9<e||n<0||2<n?d2:(c2[s].func!=c2[e].func&&0!==t.total_in&&(a=t.deflate(1)),s!=e&&(P=c2[s=e].max_lazy,L=c2[s].good_length,j=c2[s].nice_length,I=c2[s].max_chain),S=n,a)},x.deflateSetDictionary=function(t,e,n){var a,i=n,r=0;if(!e||42!=v)return d2;if(i<3)return 0;for(l-x2<i&&(r=n-(i=l-x2)),c.set(e.subarray(r,r+i),0),E=h=i,f=((f=255&c[0])<<U^255&c[1])&A,a=0;a<=i-3;a++)f=(f<<U^255&c[a+2])&A,y[a&m]=u[f],u[f]=a;return 0},x.deflate=function(t,e){var n,a,i,r,_;if(4<e||e<0)return d2;if(!t.next_out||!t.next_in&&0!==t.avail_in||v==p2&&4!=e)return t.msg=h2[4],d2;if(0===t.avail_out)return t.msg=h2[7],g2;if(o=t,i=g,g=e,42==v&&(a=8+(w-8<<4)<<8,a|=(_=3<(_=(s-1&255)>>1)?3:_)<<6,0!==h&&(a|=32),v=w2,X((_=a+=31-a%31)>>8&255),X(255&_)),0!==x.pending){if(o.flush_pending(),0===o.avail_out)return g=-1,0}else if(0===o.avail_in&&e<=i&&4!=e)return o.msg=h2[7],g2;if(v==p2&&0!==o.avail_in)return t.msg=h2[7],g2;if(0!==o.avail_in||0!==p||0!=e&&v!=p2){switch(r=-1,c2[s].func){case 0:r=function(t){var e,n=65535;for(b-5<n&&(n=b-5);;){if(p<=1){if(o2(),0===p&&0==t)return 0;if(0===p)break}if(h+=p,e=E+n,((p=0)===h||e<=h)&&(p=h-e,h=e,_2(!1),0===o.avail_out))return 0;if(l-x2<=h-E&&(_2(!1),0===o.avail_out))return 0}return _2(4==t),0===o.avail_out?4==t?2:0:4==t?3:1}(e);break;case 1:r=function(t){for(var e,n=0;;){if(p<x2){if(o2(),p<x2&&0==t)return 0;if(0===p)break}if(3<=p&&(f=(f<<U^255&c[h+2])&A,n=65535&u[f],y[h&m]=u[f],u[f]=h),3<=(d=0!==n&&(h-n&65535)<=l-x2&&2!=S?u2(n):d))if(e=n2(h-q,d-3),p-=d,d<=P&&3<=p){for(d--;f=(f<<U^255&c[++h+2])&A,n=65535&u[f],y[h&m]=u[f],u[f]=h,0!=--d;);h++}else h+=d,d=0,f=((f=255&c[h])<<U^255&c[h+1])&A;else e=n2(0,255&c[h]),p--,h++;if(e&&(_2(!1),0===o.avail_out))return 0}return _2(4==t),0===o.avail_out?4==t?2:0:4==t?3:1}(e);break;case 2:r=function(t){for(var e,n,a=0;;){if(p<x2){if(o2(),p<x2&&0==t)return 0;if(0===p)break}if(3<=p&&(f=(f<<U^255&c[h+2])&A,a=65535&u[f],y[h&m]=u[f],u[f]=h),D=d,k=q,d=2,0!==a&&D<P&&(h-a&65535)<=l-x2&&(d=2!=S?u2(a):d)<=5&&(1==S||3==d&&4096<h-q)&&(d=2),3<=D&&d<=D){for(n=h+p-3,e=n2(h-1-k,D-3),p-=D-1,D-=2;++h<=n&&(f=(f<<U^255&c[h+2])&A,a=65535&u[f],y[h&m]=u[f],u[f]=h),0!=--D;);if(z=0,d=2,h++,e&&(_2(!1),0===o.avail_out))return 0}else if(0!==z){if((e=n2(0,255&c[h-1]))&&_2(!1),h++,p--,0===o.avail_out)return 0}else z=1,h++,p--}return 0!==z&&(e=n2(0,255&c[h-1]),z=0),_2(4==t),0===o.avail_out?4==t?2:0:4==t?3:1}(e)}if(2!=r&&3!=r||(v=p2),0==r||2==r)return 0===o.avail_out&&(g=-1),0;if(1==r){if(1==e)Z(2,3),$(b2,l2.static_ltree),e2(),1+N+10-O<9&&(Z(2,3),$(b2,l2.static_ltree),e2()),N=7;else if(r2(0,0,!1),3==e)for(n=0;n<M;n++)u[n]=0;if(o.flush_pending(),0===o.avail_out)return g=-1,0}}return 4!=e?0:1}}function r(){var t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}function _(t){var o=new r,u=new Uint8Array(512);o.deflateInit(t=void 0===t?-1:t),o.next_out=u,this.append=function(t,e){var n,a=[],i=0,r=0,_=0;if(t.length){o.next_in_index=0,o.next_in=t,o.avail_in=t.length;do{if(o.next_out_index=0,o.avail_out=512,0!=o.deflate(0))throw"deflating: "+o.msg}while(o.next_out_index&&(512==o.next_out_index?a.push(new Uint8Array(u)):a.push(new Uint8Array(u.subarray(0,o.next_out_index)))),_+=o.next_out_index,e&&0<o.next_in_index&&o.next_in_index!=i&&(e(o.next_in_index),i=o.next_in_index),0<o.avail_in||0===o.avail_out);return n=new Uint8Array(_),a.forEach(function(t){n.set(t,r),r+=t.length}),n}},this.flush=function(){var t,e,n=[],a=0,i=0;do{if(o.next_out_index=0,o.avail_out=512,1!=(t=o.deflate(4))&&0!=t)throw"deflating: "+o.msg}while(0<512-o.avail_out&&n.push(new Uint8Array(u.subarray(0,o.next_out_index))),i+=o.next_out_index,0<o.avail_in||0===o.avail_out);return o.deflateEnd(),e=new Uint8Array(i),n.forEach(function(t){e.set(t,a),a+=t.length}),e}}r.prototype={deflateInit:function(t,e){return this.dstate=new i,this.dstate.deflateInit(this,t,e=e||15)},deflate:function(t){return this.dstate?this.dstate.deflate(this,t):d2},deflateEnd:function(){if(!this.dstate)return d2;var t=this.dstate.deflateEnd();return this.dstate=null,t},deflateParams:function(t,e){return this.dstate?this.dstate.deflateParams(this,t,e):d2},deflateSetDictionary:function(t,e){return this.dstate?this.dstate.deflateSetDictionary(this,t,e):d2},read_buf:function(t,e,n){var a=this,i=a.avail_in;return 0===(i=n<i?n:i)?0:(a.avail_in-=i,t.set(a.next_in.subarray(a.next_in_index,a.next_in_index+i),e),a.next_in_index+=i,a.total_in+=i,i)},flush_pending:function(){var t=this,e=t.dstate.pending;0!==(e=e>t.avail_out?t.avail_out:e)&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0))}},e.zip?e.zip.Deflater=_:(n=new _,e.addEventListener("message",function(t){t=t.data;t.init&&(n=new _(t.level),e.postMessage({oninit:!0})),t.append&&e.postMessage({onappend:!0,data:n.append(t.data,function(t){e.postMessage({progress:!0,current:t})})}),t.flush&&e.postMessage({onflush:!0,data:n.flush()})},!1))}(this);