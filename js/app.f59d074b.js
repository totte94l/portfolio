(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],f=0,v=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/portfolio/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},1182:function(t,e,a){},"34ba":function(t,e,a){"use strict";var r=a("1182"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"font_white navbar navbar-expand-lg"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand mr-auto",attrs:{to:"/"}},[t._v("cajan."),a("span",{staticClass:"font_secondary_color"},[t._v(t._s(t.extension))]),t._v(t._s(t.charTypeMarker))]),t._m(0),t._m(1)],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-lock"}),t._v(" CV")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Portfolio")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Blogg")])])])])}],c={data:function(){return{extension:"dev",charTypeMarker:"|",textTimer:"",charTypeMarkerTimer:"",counter:0}},methods:{changeText:function(){var t=["dev","dev","de","d","","","j","js","j","","","h","ht","htm","html","html","htm","ht","h","h","","","d","de"];this.extension=t[this.counter],this.counter===t.length-1?this.counter=0:this.counter++},changeMarker:function(){"|"===this.charTypeMarker?this.charTypeMarker="":this.charTypeMarker="|"}},created:function(){this.textTimer=setInterval(this.changeText,500),this.charTypeMarkerTimer=setInterval(this.changeMarker,400)}},l=c,u=(a("34ba"),a("2877")),f=Object(u["a"])(l,o,i,!1,null,null,null),v=f.exports,h={components:{NavBar:v}},p=h,d=(a("034f"),Object(u["a"])(p,n,s,!1,null,null,null)),m=d.exports,b=a("8c4f"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h1",{staticClass:"font_white mt-5 p-3"},[a("h1",{staticClass:"bg_secondary_color p-3"},[t._v(" Om mig ")]),t._v(" Hej! Jag heter Christoffer och är Frontend-utvecklare baserad i Västerås. ")])])])])])}],y={name:"Home",components:{}},C=y,k=Object(u["a"])(C,_,g,!1,null,null,null),x=k.exports;r["a"].use(b["a"]);var j=[{path:"/",name:"Home",component:x}],w=new b["a"]({mode:"history",base:"/portfolio",routes:j}),T=w,O=a("2f62");r["a"].use(O["a"]);var M=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:T,store:M,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.f59d074b.js.map