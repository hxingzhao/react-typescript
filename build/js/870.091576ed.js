(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[870],{95299:function(e,t,r){"use strict";var a=r(27698);e.exports=a},83450:function(e,t,r){"use strict";var a=r(83363);e.exports=a},66820:function(e,t,r){"use strict";var a=r(56243);e.exports=a},54493:function(e,t,r){"use strict";r(77971),r(53242);var a=r(54058);e.exports=a.Array.from},24034:function(e,t,r){"use strict";r(92737);var a=r(54058);e.exports=a.Array.isArray},62383:function(e,t,r){"use strict";r(21501);var a=r(35703);e.exports=a("Array").filter},23866:function(e,t,r){"use strict";r(68787);var a=r(35703);e.exports=a("Array").map},13830:function(e,t,r){"use strict";r(66274),r(77971);var a=r(22902);e.exports=a},2480:function(e,t,r){"use strict";var a=r(7046),n=r(62383),c=Array.prototype;e.exports=function(e){var t=e.filter;return e===c||a(c,e)&&t===c.filter?n:t}},88287:function(e,t,r){"use strict";var a=r(7046),n=r(23866),c=Array.prototype;e.exports=function(e){var t=e.map;return e===c||a(c,e)&&t===c.map?n:t}},7702:function(e,t,r){"use strict";r(74979);var a=r(54058).Object,n=e.exports=function(e,t){return a.defineProperties(e,t)};a.defineProperties.sham&&(n.sham=!0)},286:function(e,t,r){"use strict";r(46924);var a=r(54058).Object,n=e.exports=function(e,t){return a.getOwnPropertyDescriptor(e,t)};a.getOwnPropertyDescriptor.sham&&(n.sham=!0)},92766:function(e,t,r){"use strict";r(88482);var a=r(54058);e.exports=a.Object.getOwnPropertyDescriptors},64225:function(e,t,r){"use strict";var a=r(95299);e.exports=a},30382:function(e,t,r){"use strict";var a=r(83450);e.exports=a},40478:function(e,t,r){"use strict";var a=r(66820);e.exports=a},11354:function(e,t,r){"use strict";var a=r(86843),n=r(78834),c=r(89678),o=r(75196),l=r(6782),i=r(24284),u=r(10623),s=r(55449),f=r(53476),p=r(22902),h=Array;e.exports=function(e){var t=c(e),r=i(this),m=arguments.length,A=m>1?arguments[1]:void 0,v=void 0!==A;v&&(A=a(A,m>2?arguments[2]:void 0));var d,g,Z,H,y,x,b=p(t),M=0;if(!b||this===h&&l(b))for(d=u(t),g=r?new this(d):h(d);d>M;M++)x=v?A(t[M],M):t[M],s(g,M,x);else for(y=(H=f(t,b)).next,g=r?new this:[];!(Z=n(y,H)).done;M++)x=v?o(H,A,[Z.value,M],!0):Z.value,s(g,M,x);return g.length=M,g}},75196:function(e,t,r){"use strict";var a=r(96059),n=r(7609);e.exports=function(e,t,r,c){try{return c?t(a(r)[0],r[1]):t(r)}catch(t){n(e,"throw",t)}}},21501:function(e,t,r){"use strict";var a=r(76887),n=r(3610).filter;a({target:"Array",proto:!0,forced:!r(50568)("filter")},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},53242:function(e,t,r){"use strict";var a=r(76887),n=r(11354);a({target:"Array",stat:!0,forced:!r(21385)((function(e){Array.from(e)}))},{from:n})},92737:function(e,t,r){"use strict";r(76887)({target:"Array",stat:!0},{isArray:r(1052)})},68787:function(e,t,r){"use strict";var a=r(76887),n=r(3610).map;a({target:"Array",proto:!0,forced:!r(50568)("map")},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},74979:function(e,t,r){"use strict";var a=r(76887),n=r(55746),c=r(59938).f;a({target:"Object",stat:!0,forced:Object.defineProperties!==c,sham:!n},{defineProperties:c})},46924:function(e,t,r){"use strict";var a=r(76887),n=r(95981),c=r(74529),o=r(49677).f,l=r(55746);a({target:"Object",stat:!0,forced:!l||n((function(){o(1)})),sham:!l},{getOwnPropertyDescriptor:function(e,t){return o(c(e),t)}})},88482:function(e,t,r){"use strict";var a=r(76887),n=r(55746),c=r(31136),o=r(74529),l=r(49677),i=r(55449);a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){for(var t,r,a=o(e),n=l.f,u=c(a),s={},f=0;u.length>f;)void 0!==(r=n(a,t=u[f++]))&&i(s,t,r);return s}})},27698:function(e,t,r){"use strict";var a=r(54493);e.exports=a},83363:function(e,t,r){"use strict";var a=r(24034);e.exports=a},56243:function(e,t,r){"use strict";var a=r(13830);r(7634),e.exports=a},11955:function(e,t,r){"use strict";var a=r(2480);e.exports=a},61798:function(e,t,r){"use strict";var a=r(88287);e.exports=a},57396:function(e,t,r){"use strict";var a=r(7702);e.exports=a},79427:function(e,t,r){"use strict";var a=r(286);e.exports=a},62857:function(e,t,r){"use strict";var a=r(92766);e.exports=a},31530:function(e,t,r){"use strict";var a=r(28710).charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},27007:function(e,t,r){"use strict";r(74916);var a=r(21470),n=r(98052),c=r(22261),o=r(47293),l=r(5112),i=r(68880),u=l("species"),s=RegExp.prototype;e.exports=function(e,t,r,f){var p=l(e),h=!o((function(){var t={};return t[p]=function(){return 7},7!==""[e](t)})),m=h&&!o((function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[u]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!h||!m||r){var A=a(/./[p]),v=t(p,""[e],(function(e,t,r,n,o){var l=a(e),i=t.exec;return i===c||i===s.exec?h&&!o?{done:!0,value:A(t,r,n)}:{done:!0,value:l(r,t,n)}:{done:!1}}));n(String.prototype,e,v[0]),n(s,p,v[1])}f&&i(s[p],"sham",!0)}},10647:function(e,t,r){"use strict";var a=r(1702),n=r(47908),c=Math.floor,o=a("".charAt),l=a("".replace),i=a("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,a,f,p){var h=r+e.length,m=a.length,A=s;return void 0!==f&&(f=n(f),A=u),l(p,A,(function(n,l){var u;switch(o(l,0)){case"$":return"$";case"&":return e;case"`":return i(t,0,r);case"'":return i(t,h);case"<":u=f[i(l,1,-1)];break;default:var s=+l;if(0===s)return n;if(s>m){var p=c(s/10);return 0===p?n:p<=m?void 0===a[p-1]?o(l,1):a[p-1]+o(l,1):n}u=a[s-1]}return void 0===u?"":u}))}},97651:function(e,t,r){"use strict";var a=r(46916),n=r(19670),c=r(60614),o=r(84326),l=r(22261),i=TypeError;e.exports=function(e,t){var r=e.exec;if(c(r)){var u=a(r,e,t);return null!==u&&n(u),u}if("RegExp"===o(e))return a(l,e,t);throw i("RegExp#exec called on incompatible receiver")}},22261:function(e,t,r){"use strict";var a,n,c=r(46916),o=r(1702),l=r(41340),i=r(67066),u=r(52999),s=r(72309),f=r(70030),p=r(29909).get,h=r(9441),m=r(38173),A=s("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,d=v,g=o("".charAt),Z=o("".indexOf),H=o("".replace),y=o("".slice),x=(n=/b*/g,c(v,a=/a/,"a"),c(v,n,"a"),0!==a.lastIndex||0!==n.lastIndex),b=u.BROKEN_CARET,M=void 0!==/()??/.exec("")[1];(x||M||b||h||m)&&(d=function(e){var t,r,a,n,o,u,s,h=this,m=p(h),E=l(e),O=m.raw;if(O)return O.lastIndex=h.lastIndex,t=c(d,O,E),h.lastIndex=O.lastIndex,t;var w=m.groups,V=b&&h.sticky,j=c(i,h),P=h.source,L=0,I=E;if(V&&(j=H(j,"y",""),-1===Z(j,"g")&&(j+="g"),I=y(E,h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==g(E,h.lastIndex-1))&&(P="(?: "+P+")",I=" "+I,L++),r=new RegExp("^(?:"+P+")",j)),M&&(r=new RegExp("^"+P+"$(?!\\s)",j)),x&&(a=h.lastIndex),n=c(v,V?r:h,I),V?n?(n.input=y(n.input,L),n[0]=y(n[0],L),n.index=h.lastIndex,h.lastIndex+=n[0].length):h.lastIndex=0:x&&n&&(h.lastIndex=h.global?n.index+n[0].length:a),M&&n&&n.length>1&&c(A,n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n&&w)for(n.groups=u=f(null),o=0;o<w.length;o++)u[(s=w[o])[0]]=n[s[1]];return n}),e.exports=d},67066:function(e,t,r){"use strict";var a=r(19670);e.exports=function(){var e=a(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},52999:function(e,t,r){"use strict";var a=r(47293),n=r(17854).RegExp,c=a((function(){var e=n("a","y");return e.lastIndex=2,null!==e.exec("abcd")})),o=c||a((function(){return!n("a","y").sticky})),l=c||a((function(){var e=n("^r","gy");return e.lastIndex=2,null!==e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:o,UNSUPPORTED_Y:c}},9441:function(e,t,r){"use strict";var a=r(47293),n=r(17854).RegExp;e.exports=a((function(){var e=n(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},38173:function(e,t,r){"use strict";var a=r(47293),n=r(17854).RegExp;e.exports=a((function(){var e=n("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},74916:function(e,t,r){"use strict";var a=r(82109),n=r(22261);a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},15306:function(e,t,r){"use strict";var a=r(22104),n=r(46916),c=r(1702),o=r(27007),l=r(47293),i=r(19670),u=r(60614),s=r(68554),f=r(19303),p=r(17466),h=r(41340),m=r(84488),A=r(31530),v=r(58173),d=r(10647),g=r(97651),Z=r(5112)("replace"),H=Math.max,y=Math.min,x=c([].concat),b=c([].push),M=c("".indexOf),E=c("".slice),O="$0"==="a".replace(/./,"$0"),w=!!/./[Z]&&""===/./[Z]("a","$0");o("replace",(function(e,t,r){var c=w?"$":"$0";return[function(e,r){var a=m(this),c=s(e)?void 0:v(e,Z);return c?n(c,e,a,r):n(t,h(a),e,r)},function(e,n){var o=i(this),l=h(e);if("string"==typeof n&&-1===M(n,c)&&-1===M(n,"$<")){var s=r(t,o,l,n);if(s.done)return s.value}var m=u(n);m||(n=h(n));var v,Z=o.global;Z&&(v=o.unicode,o.lastIndex=0);for(var O,w=[];null!==(O=g(o,l))&&(b(w,O),Z);){""===h(O[0])&&(o.lastIndex=A(l,p(o.lastIndex),v))}for(var V,j="",P=0,L=0;L<w.length;L++){for(var I,F=h((O=w[L])[0]),C=H(y(f(O.index),l.length),0),R=[],S=1;S<O.length;S++)b(R,void 0===(V=O[S])?V:String(V));var $=O.groups;if(m){var D=x([F],R,C,l);void 0!==$&&b(D,$),I=h(a(n,void 0,D))}else I=d(F,l,C,R,$,n);C>=P&&(j+=E(l,P,C)+I,P=C+F.length)}return j+E(l,P)}]}),!!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!O||w)},61667:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},14418:function(e,t,r){e.exports=r(11955)},97606:function(e,t,r){e.exports=r(61798)},24278:function(e,t,r){e.exports=r(82073)},29747:function(e,t,r){e.exports=r(57396)},96718:function(e,t,r){e.exports=r(41910)},8446:function(e,t,r){e.exports=r(79427)},66870:function(e,t,r){e.exports=r(62857)},80222:function(e,t,r){e.exports=r(9534)},28222:function(e,t,r){e.exports=r(23059)},45567:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(30382);var n=r(52201),c=r(40478),o=r(34501);var l=r(97088),i=r(64225);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function s(e,t){return function(e){if(a(e))return e}(e)||function(e,t){var r=null==e?null:void 0!==n&&c(e)||e["@@iterator"];if(null!=r){var a,l,i,u,s=[],f=!0,p=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;f=!1}else for(;!(f=(a=i.call(r)).done)&&(o(s).call(s,a.value),s.length!==t);f=!0);}catch(e){p=!0,l=e}finally{try{if(!f&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(p)throw l}}return s}}(e,t)||function(e,t){var r;if(e){if("string"==typeof e)return u(e,t);var a=l(r=Object.prototype.toString.call(e)).call(r,8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?i(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},5991:function(e,t,r){"use strict";r.d(t,{D:function(){return h}});var a=r(67294),n=r(76777);const c=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M216,76H188V48a20,20,0,0,0-20-20H40A20,20,0,0,0,20,48V176a12,12,0,0,0,19.54,9.33l28.46-23V184a20,20,0,0,0,20,20h92.17l36.29,29.33A12,12,0,0,0,236,224V96A20,20,0,0,0,216,76ZM44,150.87V52H164v80H71.58A12,12,0,0,0,64,134.67Zm168,48-20-16.2a12,12,0,0,0-7.54-2.67H92V156h76a20,20,0,0,0,20-20V100h24Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M224,96V224l-39.58-32H88a8,8,0,0,1-8-8V144h88a8,8,0,0,0,8-8V88h40A8,8,0,0,1,224,96Z",opacity:"0.2"}),a.createElement("path",{d:"M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M232,96a16,16,0,0,0-16-16H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8Zm-42.55,89.78a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32V207.25Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M216,82H182V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V176a6,6,0,0,0,3.42,5.41A5.86,5.86,0,0,0,32,182a6,6,0,0,0,3.77-1.33L73.71,150H74v34a14,14,0,0,0,14,14h94.29l37.94,30.67A6,6,0,0,0,224,230a5.86,5.86,0,0,0,2.58-.59A6,6,0,0,0,230,224V96A14,14,0,0,0,216,82ZM71.58,138a6,6,0,0,0-3.77,1.33L38,163.43V48a2,2,0,0,1,2-2H168a2,2,0,0,1,2,2v88a2,2,0,0,1-2,2ZM218,211.43l-29.81-24.1a6,6,0,0,0-3.77-1.33H88a2,2,0,0,1-2-2V150h82a14,14,0,0,0,14-14V94h34a2,2,0,0,1,2,2Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M216,84H180V48a12,12,0,0,0-12-12H40A12,12,0,0,0,28,48V176a4,4,0,0,0,4,4,4,4,0,0,0,2.51-.89L73,148h3v36a12,12,0,0,0,12,12h95l38.49,31.11A4,4,0,0,0,224,228a4,4,0,0,0,4-4V96A12,12,0,0,0,216,84ZM71.58,140a4,4,0,0,0-2.51.89L36,167.62V48a4,4,0,0,1,4-4H168a4,4,0,0,1,4,4v88a4,4,0,0,1-4,4ZM220,215.62l-33.07-26.73a4,4,0,0,0-2.51-.89H88a4,4,0,0,1-4-4V148h84a12,12,0,0,0,12-12V92h36a4,4,0,0,1,4,4Z"}))]]);var o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=(0,a.forwardRef)(((e,t)=>a.createElement(n.Z,((e,t)=>l(e,i(t)))(((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&p(e,r,t[r]);return e})({ref:t},e),{weights:c}))));h.displayName="Chats"},70139:function(e,t,r){"use strict";r.d(t,{a:function(){return h}});var a=r(67294),n=r(76777);const c=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,24V88H36V68ZM36,188V112H220v76Zm172-24a12,12,0,0,1-12,12H164a12,12,0,0,1,0-24h32A12,12,0,0,1,208,164Zm-68,0a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h12A12,12,0,0,1,140,164Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M232,96v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V96Z",opacity:"0.2"}),a.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM136,176H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm64,0H168a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM32,88V64H224V88Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM32,62H224a2,2,0,0,1,2,2V90H30V64A2,2,0,0,1,32,62ZM224,194H32a2,2,0,0,1-2-2V102H226v90A2,2,0,0,1,224,194Zm-18-26a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h32A6,6,0,0,1,206,168Zm-64,0a6,6,0,0,1-6,6H120a6,6,0,0,1,0-12h16A6,6,0,0,1,142,168Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52ZM32,60H224a4,4,0,0,1,4,4V92H28V64A4,4,0,0,1,32,60ZM224,196H32a4,4,0,0,1-4-4V100H228v92A4,4,0,0,1,224,196Zm-20-28a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h32A4,4,0,0,1,204,168Zm-64,0a4,4,0,0,1-4,4H120a4,4,0,0,1,0-8h16A4,4,0,0,1,140,168Z"}))]]);var o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=(0,a.forwardRef)(((e,t)=>a.createElement(n.Z,((e,t)=>l(e,i(t)))(((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&p(e,r,t[r]);return e})({ref:t},e),{weights:c}))));h.displayName="CreditCard"},98867:function(e,t,r){"use strict";r.d(t,{N:function(){return h}});var a=r(67294),n=r(76777);const c=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M223.51,44h-191A20.51,20.51,0,0,0,12,64.49v127A20.51,20.51,0,0,0,32.49,212h191A20.51,20.51,0,0,0,244,191.51v-127A20.51,20.51,0,0,0,223.51,44ZM220,188H36V68H220ZM52,128a12,12,0,0,1,12-12H192a12,12,0,0,1,0,24H64A12,12,0,0,1,52,128Zm0-36A12,12,0,0,1,64,80H192a12,12,0,0,1,0,24H64A12,12,0,0,1,52,92Zm0,72a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24H64A12,12,0,0,1,52,164Zm108,0a12,12,0,0,1-12,12H108a12,12,0,0,1,0-24h40A12,12,0,0,1,160,164Zm44,0a12,12,0,0,1-12,12h-8a12,12,0,0,1,0-24h8A12,12,0,0,1,204,164Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M232,64.49v127a8.49,8.49,0,0,1-8.49,8.49h-191A8.49,8.49,0,0,1,24,191.51v-127A8.49,8.49,0,0,1,32.49,56h191A8.49,8.49,0,0,1,232,64.49Z",opacity:"0.2"}),a.createElement("path",{d:"M223.51,48h-191A16.51,16.51,0,0,0,16,64.49v127A16.51,16.51,0,0,0,32.49,208h191A16.51,16.51,0,0,0,240,191.51v-127A16.51,16.51,0,0,0,223.51,48ZM224,191.51a.49.49,0,0,1-.49.49h-191a.49.49,0,0,1-.49-.49v-127a.49.49,0,0,1,.49-.49h191a.49.49,0,0,1,.49.49ZM208,128a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,128Zm0-32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM72,160a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h8A8,8,0,0,1,72,160Zm96,0a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Zm40,0a8,8,0,0,1-8,8h-8a8,8,0,0,1,0-16h8A8,8,0,0,1,208,160Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M223.51,48h-191A16.51,16.51,0,0,0,16,64.49v127A16.51,16.51,0,0,0,32.49,208h191A16.51,16.51,0,0,0,240,191.51v-127A16.51,16.51,0,0,0,223.51,48ZM64,168H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm96,0H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm48,0H192a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M223.51,50h-191A14.51,14.51,0,0,0,18,64.49v127A14.51,14.51,0,0,0,32.49,206h191A14.51,14.51,0,0,0,238,191.51v-127A14.51,14.51,0,0,0,223.51,50ZM226,191.51a2.49,2.49,0,0,1-2.49,2.49h-191A2.49,2.49,0,0,1,30,191.51v-127A2.49,2.49,0,0,1,32.49,62h191A2.49,2.49,0,0,1,226,64.49ZM206,128a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,128Zm0-32a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,96ZM70,160a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12h8A6,6,0,0,1,70,160Zm96,0a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,160Zm40,0a6,6,0,0,1-6,6h-8a6,6,0,0,1,0-12h8A6,6,0,0,1,206,160Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M223.51,48h-191A16.51,16.51,0,0,0,16,64.49v127A16.51,16.51,0,0,0,32.49,208h191A16.51,16.51,0,0,0,240,191.51v-127A16.51,16.51,0,0,0,223.51,48ZM224,191.51a.49.49,0,0,1-.49.49h-191a.49.49,0,0,1-.49-.49v-127a.49.49,0,0,1,.49-.49h191a.49.49,0,0,1,.49.49ZM208,128a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,128Zm0-32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM72,160a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h8A8,8,0,0,1,72,160Zm96,0a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Zm40,0a8,8,0,0,1-8,8h-8a8,8,0,0,1,0-16h8A8,8,0,0,1,208,160Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M223.51,52h-191A12.5,12.5,0,0,0,20,64.49v127A12.5,12.5,0,0,0,32.49,204h191A12.5,12.5,0,0,0,236,191.51v-127A12.5,12.5,0,0,0,223.51,52ZM228,191.51a4.49,4.49,0,0,1-4.49,4.49h-191A4.49,4.49,0,0,1,28,191.51v-127A4.49,4.49,0,0,1,32.49,60h191A4.49,4.49,0,0,1,228,64.49ZM204,128a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,128Zm0-32a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,96ZM68,160a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8h8A4,4,0,0,1,68,160Zm96,0a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,160Zm40,0a4,4,0,0,1-4,4h-8a4,4,0,0,1,0-8h8A4,4,0,0,1,204,160Z"}))]]);var o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=(0,a.forwardRef)(((e,t)=>a.createElement(n.Z,((e,t)=>l(e,i(t)))(((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&p(e,r,t[r]);return e})({ref:t},e),{weights:c}))));h.displayName="Keyboard"},12833:function(e,t,r){"use strict";r.d(t,{h:function(){return h}});var a=r(67294),n=r(76777);const c=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M231.49,225.38a12,12,0,0,1-16.89-1.9C213.19,221.72,180,179.24,180,96A52,52,0,1,0,76,96c0,83.24-33.21,125.72-34.62,127.48A12,12,0,0,1,22.6,208.53C23,208,52,170.06,52,96a76,76,0,1,1,152,0c0,74.19,29.1,112.16,29.4,112.54A12,12,0,0,1,231.49,225.38ZM104,128a16,16,0,1,0-16-16A16,16,0,0,0,104,128Zm64-16a16,16,0,1,0-16,16A16,16,0,0,0,168,112ZM95.26,163l28,12a12,12,0,0,0,9.45,0l28-12A12,12,0,0,0,151.26,141l-23.27,10-23.27-10A12,12,0,0,0,95.26,163ZM128,192a57.12,57.12,0,0,0-38.66,15.15,12,12,0,0,0,16.23,17.69,32.86,32.86,0,0,1,44.85,0,12,12,0,1,0,16.23-17.69A57.1,57.1,0,0,0,128,192Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M224,216H168c-8-14.35-22.91-24-40-24s-32,9.65-40,24H32S64,176,64,96a64,64,0,0,1,128,0C192,176,224,216,224,216Z",opacity:"0.2"}),a.createElement("path",{d:"M229,222.25A8,8,0,0,1,217.76,221C216.39,219.27,184,177.86,184,96A56,56,0,0,0,72,96c0,81.86-32.37,123.27-33.75,125a8,8,0,0,1-12.51-10c.15-.2,7.69-9.9,15.13-28.74C47.77,164.8,56,135.64,56,96a72,72,0,0,1,144,0c0,39.64,8.23,68.8,15.13,86.28,7.48,18.94,15.06,28.64,15.14,28.74A8,8,0,0,1,229,222.25ZM100,96a12,12,0,1,0,12,12A12,12,0,0,0,100,96Zm68,12a12,12,0,1,0-12,12A12,12,0,0,0,168,108ZM99.58,136.84a8,8,0,0,0-7.15,14.31l32,16a7.94,7.94,0,0,0,7.15,0l32-16a8,8,0,0,0-7.16-14.31L128,151.05ZM128,184a54.07,54.07,0,0,0-47,28.11,8,8,0,1,0,14,7.78,37.35,37.35,0,0,1,66,0,8,8,0,0,0,14-7.78A54.07,54.07,0,0,0,128,184Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M161.22,217.74a4,4,0,0,1-3.31,6.26H98.1a4,4,0,0,1-3.31-6.26,40,40,0,0,1,66.43,0Zm68.93,3.37a8.29,8.29,0,0,1-6.43,2.89H184.56a4,4,0,0,1-3.76-2.65,56,56,0,0,0-105.59,0A4,4,0,0,1,71.45,224H32.23a8.2,8.2,0,0,1-6.42-2.93A8,8,0,0,1,25.75,211c.06-.07,7.64-9.78,15.12-28.72C47.77,164.8,56,135.64,56,96a72,72,0,0,1,144,0c0,39.64,8.23,68.8,15.13,86.28,7.48,18.94,15.06,28.65,15.13,28.74A8,8,0,0,1,230.15,221.11ZM88,108a12,12,0,1,0,12-12A12,12,0,0,0,88,108Zm79.16,32.42a8,8,0,0,0-10.73-3.58L128,151.06,99.58,136.84a8,8,0,0,0-7.15,14.32l32,16a8,8,0,0,0,7.15,0l32-16A8,8,0,0,0,167.16,140.42ZM168,108a12,12,0,1,0-12,12A12,12,0,0,0,168,108Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M227.74,220.69a6,6,0,0,1-8.42-.94C218,218.05,186,177.17,186,96A58,58,0,0,0,70,96c0,81.17-31.95,122.05-33.31,123.75a6,6,0,0,1-9.38-7.49C27.68,211.79,58,172.56,58,96a70,70,0,0,1,140,0c0,76.63,30.38,115.87,30.69,116.26A6,6,0,0,1,227.74,220.69ZM100,98a10,10,0,1,0,10,10A10,10,0,0,0,100,98Zm66,10a10,10,0,1,0-10,10A10,10,0,0,0,166,108ZM98.69,138.63a6,6,0,0,0-5.37,10.74l32,16A6,6,0,0,0,128,166a6.07,6.07,0,0,0,2.69-.63l32-16a6,6,0,0,0-5.37-10.74L128,153.29ZM128,186a52.07,52.07,0,0,0-45.24,27.08,6,6,0,0,0,10.49,5.84,39.33,39.33,0,0,1,69.51,0A6,6,0,0,0,168,222a5.89,5.89,0,0,0,2.91-.76,6,6,0,0,0,2.33-8.16A52.09,52.09,0,0,0,128,186Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M229,222.25A8,8,0,0,1,217.76,221C216.39,219.27,184,177.86,184,96A56,56,0,0,0,72,96c0,81.86-32.37,123.27-33.75,125a8,8,0,0,1-12.51-10c.15-.2,7.69-9.9,15.13-28.74C47.77,164.8,56,135.64,56,96a72,72,0,0,1,144,0c0,39.64,8.23,68.8,15.13,86.28,7.48,18.94,15.06,28.64,15.14,28.74A8,8,0,0,1,229,222.25ZM100,96a12,12,0,1,0,12,12A12,12,0,0,0,100,96Zm68,12a12,12,0,1,0-12,12A12,12,0,0,0,168,108ZM99.58,136.84a8,8,0,0,0-7.15,14.31l32,16a7.94,7.94,0,0,0,7.15,0l32-16a8,8,0,0,0-7.16-14.31L128,151.05ZM128,184a54.07,54.07,0,0,0-47,28.11,8,8,0,1,0,14,7.78,37.35,37.35,0,0,1,66,0,8,8,0,0,0,14-7.78A54.07,54.07,0,0,0,128,184Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M226.49,219.12a4,4,0,0,1-5.61-.62C219.54,216.82,188,176.48,188,96A60,60,0,0,0,68,96c0,80.48-31.53,120.82-32.88,122.5a4,4,0,0,1-6.25-5C29.18,213.11,60,173.45,60,96a68,68,0,0,1,136,0c0,40.48,8.47,70.27,15.57,88.14,7.69,19.35,15.48,29.27,15.56,29.36A4,4,0,0,1,226.49,219.12ZM100,100a8,8,0,1,0,8,8A8,8,0,0,0,100,100Zm64,8a8,8,0,1,0-8,8A8,8,0,0,0,164,108ZM97.79,140.42a4,4,0,1,0-3.58,7.16l32,16a4,4,0,0,0,3.58,0l32-16a4,4,0,0,0-3.58-7.16L128,155.53ZM128,188a50.05,50.05,0,0,0-43.49,26.05,4,4,0,1,0,7,3.89,41.34,41.34,0,0,1,73,0A4,4,0,0,0,168,220a3.94,3.94,0,0,0,1.94-.51,4,4,0,0,0,1.55-5.44A50.07,50.07,0,0,0,128,188Z"}))]]);var o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=(0,a.forwardRef)(((e,t)=>a.createElement(n.Z,((e,t)=>l(e,i(t)))(((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&p(e,r,t[r]);return e})({ref:t},e),{weights:c}))));h.displayName="LinuxLogo"},7911:function(e,t,r){"use strict";r.d(t,{L:function(){return h}});var a=r(67294),n=r(76777);const c=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",opacity:"0.2"}),a.createElement("path",{d:"M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z"}))]]);var o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=(0,a.forwardRef)(((e,t)=>a.createElement(n.Z,((e,t)=>l(e,i(t)))(((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&p(e,r,t[r]);return e})({ref:t},e),{weights:c}))));h.displayName="Phone"},76777:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(67294),n=r(69769),c=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};const p=(0,a.forwardRef)(((e,t)=>{const r=e,{alt:c,color:o,size:l,weight:i,mirrored:u,children:p,weights:h}=r,m=f(r,["alt","color","size","weight","mirrored","children","weights"]),A=(0,a.useContext)(n.P),{color:v="currentColor",size:d,weight:g="regular",mirrored:Z=!1}=A,H=f(A,["color","size","weight","mirrored"]);return a.createElement("svg",s(s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:null!=l?l:d,height:null!=l?l:d,fill:null!=o?o:v,viewBox:"0 0 256 256",transform:u||Z?"scale(-1, 1)":void 0},H),m),!!c&&a.createElement("title",null,c),p,h.get(null!=i?i:g))}));p.displayName="IconBase"},69769:function(e,t,r){"use strict";r.d(t,{P:function(){return a}});const a=(0,r(67294).createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1})}}]);