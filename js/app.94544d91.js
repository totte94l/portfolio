(function(t){function a(a){for(var n,o,r=a[0],l=a[1],c=a[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,r=1;r<e.length;r++){var l=e[r];0!==s[l]&&(n=!1)}n&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},s={app:0},i=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0231":function(t,a,e){t.exports=e.p+"img/nodejs.3e1ddd65.svg"},"034f":function(t,a,e){"use strict";var n=e("85ec"),s=e.n(n);s.a},"0b95":function(t,a,e){t.exports=e.p+"img/vuejs.7d94dbda.svg"},"0f7c":function(t,a,e){t.exports=e.p+"img/typescript.f23a6040.svg"},1182:function(t,a,e){},"14b9":function(t,a,e){t.exports=e.p+"img/mongodb.cc8ca0a1.svg"},1610:function(t,a,e){t.exports=e.p+"img/angular.ba452917.svg"},"19b1":function(t,a,e){t.exports=e.p+"img/javascript.1ddb56ed.svg"},"2f89":function(t,a,e){"use strict";var n=e("57f0"),s=e.n(n);s.a},"34ba":function(t,a,e){"use strict";var n=e("1182"),s=e.n(n);s.a},"525f":function(t,a,e){t.exports=e.p+"img/ps.4f364314.svg"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("NavBar",{attrs:{id:"navbar"}}),e("router-view")],1)},i=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"font_white navbar navbar-dark navbar-expand-lg fixed-top",class:{nav_scrolled:t.scrollPosition>50,nav_not_scrolled:t.scrollPosition<50}},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand mr-auto ",class:{font_scrolled:t.scrollPosition>50,font_not_scrolled:t.scrollPosition<50},attrs:{to:"/"}},[t._v("cajan."),e("span",{staticClass:"font_secondary_color"},[t._v(t._s(t.extension))]),t._v(t._s(t.charTypeMarker))]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/cv","data-toggle":"collapse","data-target":".navbar-collapse.show"}},[e("i",{staticClass:"fas fa-lock"}),t._v(" CV")])],1),t._m(1),t._m(2),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://www.facebook.com/brbsova","data-toggle":"collapse","data-target":".navbar-collapse.show"},on:{click:function(a){return t.externalUrl("facebook.com/brbsova")}}},[e("i",{staticClass:"fab fa-facebook-square"})])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://www.linkedin.com/in/christoffer-c-aa5732134/","data-toggle":"collapse","data-target":".navbar-collapse.show",target:"_blank"},on:{click:function(a){return t.externalUrl("linkedin.com/in/christoffer-c-aa5732134/")}}},[e("i",{staticClass:"fab fa-linkedin"})])])])])],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",href:"#"}},[t._v("Portfolio")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",href:"#"}},[t._v("Blogg")])])}],l={data:function(){return{extension:"dev",charTypeMarker:"|",textTimer:"",charTypeMarkerTimer:"",counter:0,scrollPosition:null}},methods:{changeText:function(){var t=["dev","dev","de","d","","","j","js","js","j","","","h","ht","htm","html","html","htm","ht","h","h","","","d","de"];this.extension=t[this.counter],this.counter===t.length-1?this.counter=0:this.counter++},changeMarker:function(){"|"===this.charTypeMarker?this.charTypeMarker="":this.charTypeMarker="|"},updateScroll:function(){this.scrollPosition=window.scrollY},externalUrl:function(t){window.location="http://www"+t}},created:function(){this.textTimer=setInterval(this.changeText,500),this.charTypeMarkerTimer=setInterval(this.changeMarker,400)},mounted:function(){window.addEventListener("scroll",this.updateScroll)},computed:{navScrollClass:function(){return console.log(this.scrollPosition),this.scrollPosition>50?"nav_scrolled":"nav_not_scrolled"}}},c=l,u=(e("34ba"),e("2877")),d=Object(u["a"])(c,o,r,!1,null,null,null),p=d.exports,g={components:{NavBar:p}},v=g,h=(e("034f"),Object(u["a"])(v,s,i,!1,null,null,null)),b=h.exports,f=e("8c4f"),m=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home",attrs:{"data-aos":"fade"}},[n("vue-particles",{staticClass:"particles_fullHeight",attrs:{color:"#dedede",particleOpacity:.4,particlesNumber:50,shapeType:"circle",particleSize:4,linesColor:"#f5f5f5",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:1,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),n("section",{staticClass:"height-100"},[n("div",{staticClass:"container h-100"},[n("div",{staticClass:"row no-gutters h-100 align-center text-center"},[n("div",{staticClass:"col-md-12 text-center"},[t._m(0),n("p",{staticClass:"font_white text_primary"},[t._v("Behöver ni förstärkning på eran arbetsplats? Då har ni hittat rätt.")]),n("p",{staticClass:"font_white text_primary"},[t._v("Scrolla ner så berättar jag mer.")]),n("div",{staticClass:"floating_next text-center justify-content-center"},[n("img",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#about_me",offset:-50},expression:"{\n              el: '#about_me',\n              offset: -50\n            }"}],attrs:{src:e("f350"),alt:""}})])])])])]),n("section",{staticClass:"height-sm-100",attrs:{id:"about_me","data-aos":"fade-zoom-in","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"1000"}},[n("div",{staticClass:"container h-100 mt-5 mt-lg-0"},[n("div",{staticClass:"row no-gutters h-100 align-center"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"font_white"},[n("aboutMe")],1)])])])]),n("section",{staticClass:"height-sm-100 mt-5 mt-lg-0",attrs:{id:"skill_icons","data-aos":"fade-zoom-in","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"1000"}},[n("div",{staticClass:"container h-100"},[n("div",{staticClass:"row no-gutters h-100 align-center"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"font_white"},[n("skillIcons")],1)])])])])],1)},k=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"font_white"},[t._v("Hej, jag heter Christoffer "),e("span",{staticClass:"wave"},[t._v("👋")])])}],C=e("cffa"),A=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"bg_primary_color_darkest mt-5 mt-lg-0",attrs:{id:"about_me"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8"},[n("img",{staticClass:"d-none d-md-block",staticStyle:{position:"absolute",bottom:"0"},attrs:{src:e("c89a"),alt:""}}),n("div",{staticClass:"col-12 p-3 p-md-5"},[n("h1",{staticClass:"font_white"},[t._v("Webutvecklare och webbdesigner")]),n("p",{staticClass:"text_primary mt-5"},[t._v("Jag heter Christoffer Cajander, bosatt i Västerås och jag brinner för att utveckla webbsidor och webbapplikationer.")]),n("p",{staticClass:"text_primary"},[t._v("Min första kontakt med webbutveckling var för drygt åtta år sedan då jag hade min första lektion i Webdesign på John Bauer-gymnasiet i Uppsala. Då fick vi lära oss HTML och Flash. Där väktes mitt intresse för användargränssnit och utveckling.")]),n("p",{staticClass:"text_primary"},[t._v("Mycket har hänt inom webbutveckling sen dess.")]),n("p",{staticClass:"text_primary"},[t._v("Nu för tiden så är jag helt insydd på JavaScript och dess ramverk. Att kunna utveckla i JavaScript både i Frontend- och Backend-delen gör livet så mycket enklare och roligare!")]),n("p",{staticClass:"text_primary"},[t._v("För den här sidan har jag använt mig av Vue.js för Frontend-delen och Node/Express för Backend-delen.")])])]),n("div",{staticClass:"col-lg-4 bg_secondary_color_gt_dark",attrs:{id:"about_me_infobox"}},[n("div",{staticClass:"row align-center"},[n("div",{staticClass:"col-12 align-center"},[n("img",{staticClass:"p-5",attrs:{src:e("690a"),alt:""}})])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center"},[n("h2",[t._v("Christoffer Cajander")]),n("h5",[n("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" Västerågs, Västmanland")]),n("h5")])])])])])}],S=(e("e739"),{}),I=Object(u["a"])(S,A,y,!1,null,"96151c5c",null),w=I.exports,j=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center"},[n("h1",[t._v("Kompetenser och erfarenhet")]),n("div",{attrs:{id:"icon-container"}},[n("div",{staticClass:"icon-container-container"},[n("img",{staticClass:"skillIcon",attrs:{src:e("19b1"),onload:"SVGInject(this)",title:"Javascript",alt:"Javascript"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("0f7c"),onload:"SVGInject(this)",title:"Typescript",alt:"Typescript"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("0231"),onload:"SVGInject(this)",title:"NodeJS",alt:"NodeJS"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("0b95"),onload:"SVGInject(this)",title:"VueJS",alt:"VueJS"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("1610"),onload:"SVGInject(this)",title:"Angular",alt:"Angular"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("60a9"),onload:"SVGInject(this)",title:"jQuery",alt:"jQuery"}})]),n("div",{staticClass:"icon-container-container"},[n("img",{staticClass:"skillIcon",attrs:{src:e("a4b9"),onload:"SVGInject(this)",title:"HTML5",alt:"HTML5"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("b147"),onload:"SVGInject(this)",title:"CSS3",alt:"CSS3"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("525f"),onload:"SVGInject(this)",title:"Adobe Photoshop",alt:"Adobe Photoshop"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("d05b"),onload:"SVGInject(this)",title:"Adobe Illustrator",alt:"Adobe Illustrator"}})]),n("div",{staticClass:"icon-container-container"},[n("img",{staticClass:"skillIcon",attrs:{src:e("7b8a"),onload:"SVGInject(this)",title:"Wordpress",alt:"Wordpress"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("e970"),onload:"SVGInject(this)",title:"Git",alt:"Git"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("14b9"),onload:"SVGInject(this)",title:"MongoDB",width:"50px",alt:"MongoDB"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("897d"),title:"MySQL",alt:"MySQL"}}),n("img",{staticClass:"skillIcon",attrs:{src:e("efb9"),onload:"SVGInject(this)",title:"PostgreSQL",alt:"PostgreSQL"}})])])])])])}],x={name:"skillIcons"},E=x,Q=(e("2f89"),Object(u["a"])(E,j,M,!1,null,null,null)),L=Q.exports,D={name:"Home",components:{aboutMe:w,skillIcons:L},mounted:function(){var t=new C["b"].timeline({repeat:-1});t.to(".floating_next",1.5,{scale:1.3}),t.to(".floating_next",1.5,{scale:1})}},G=D,V=(e("cccb"),Object(u["a"])(G,m,k,!1,null,null,null)),B=V.exports,T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row h-100 align-content-center"},[e("div",{staticClass:"col-12"},[e("vue-timeline-update",{staticStyle:{"margin-top":"100px"},attrs:{date:new Date("2020-05"),title:"Frontend-utvecklare",description:'\n                    <span class="font-weight-bold">HappyWorks Västerås</span>\n                    <br />\n                    14 Oktober 2019 - 15 Maj 2020\n                    <br /><br />\n                    Jag gjorde mitt LIA (Lärande i arbete) hos Happyworks i Västerås. Happyworks är en produktionsbyrå som inriktar sig på E-Learning.\n                    De skapar webbaserade utbildningar till företag och organisationer och har ett stort fokus på pedagogik och användarvänlighet.\n                    <br />\n                    Vi jobbade väldigt mycket i HTML5 och JavaScript (jQuery). Bootstrap-biblioteket för responsivitet tillsammans med ett internt CSS-bibliotek.\n                    <br /><br />\n                    Under min tid på Happyworks jobbade jag med fler projekt.\n                    <br /><br/>\n                    <span class="font-weight-bold">Folksam</span> - Folksam ville ha fler små "Nano-utbildningar". Nano-utbildningarna skulle vara korta (max 8 minuter) att gå. Jag skapade en mall som Happyworks nu använder sig av för varje ny nanoutbildning till Folksam. \n                    <br /><br />\n                    <span class="font-weight-bold">Volvo Trucks</span> - Jag fick i uppdrag att konvertera en gammal utbildning som var skriven i Flash till HTML5 och JavaScript. Då den gamla utbildningen hade några år på nacken så fick jag även modernisera gränssnittet.  \n                ',category:"LIA",icon:"code",color:"blue",thumbnail:t.hw_logo}}),e("vue-timeline-update",{attrs:{date:new Date("2019-08"),title:"MEDARBETARE",description:'\n                    <span class="font-weight-bold">Dryckeskonsult</span>\n                    <br />\n                    April 2019 - Augusti 201\n                    <br /><br />\n                    Exponering och planering av Coca-Colas sortiment i butik. Beställning och plock. I jobbet ingick även godisplock några gånger i veckan.  \n                ',category:"Sommarvikariat",icon:"directions_car",color:"blue",thumbnail:t.dryckeskonsult_logo_white}}),e("vue-timeline-update",{attrs:{date:new Date("2017-07"),title:"Säljare",description:'\n                    <span class="font-weight-bold">Kjell & Company</span>\n                    <br />\n                    Augusti 2015 - Juli 2018\n                    <br /><br />\n                    Butiksförsäljning av tillbehör till hemelektronik. Kundservice och bygga relationer. Administrativa uppgifter som inventering, lagerhantering och rapportskrivning.\n                ',category:"Anställd",icon:"shopping_cart",color:"green",thumbnail:t.kjell_logo}}),e("vue-timeline-update",{attrs:{date:new Date("2014-08"),title:"Medarbetare",description:'\n                    <span class="font-weight-bold">Coop Extra Sala</span>\n                    <br />\n                    Maj 2015 - Augusti 2015\n                    <br /><br />\n                    Kassatjänstgöring och plock av varor.\n                ',category:"Sommarvikariat",icon:"shopping_cart",color:"blue",thumbnail:t.coop_logo}})],1)])])},W=[],N=(e("4160"),e("159b"),{name:"Cv",data:function(){return{hw_logo:e("db5c"),dryckeskonsult_logo_white:e("8212"),kjell_logo:e("e3d0"),coop_logo:e("a7c4")}},components:{},mounted:function(){var t=e("f5af"),a=document.querySelectorAll(".gb-vue-timeline-update__right,.gb-vue-timeline-update__bullet"),n=document.querySelectorAll(".gb-vue-timeline-update__ago");n.forEach((function(t){t.setAttribute("data-aos","fade-right"),t.setAttribute("data-aos-duration","1000")})),console.log("LÄNGD: "+a.length),a.forEach((function(t,a){console.log(a),a>1&&(t.setAttribute("data-aos","fade-up"),t.setAttribute("data-aos-offset","90"),t.setAttribute("data-aos-anchor-placement","top-bottom"),t.setAttribute("data-aos-duration","1000"))})),document.addEventListener("aos:in:super-duper",(function(t){var a=t.detail;console.log("in!",a)})),t.refreshHard()}}),O=N,_=(e("6adf"),Object(u["a"])(O,T,W,!1,null,null,null)),Z=_.exports;n["a"].use(f["a"]);var H=[{path:"/",name:"Home",component:B},{path:"/cv",name:"CV",component:Z}],J=new f["a"]({mode:"history",base:"/portfolio",routes:H,scrollBehavior:function(){return{x:0,y:0}}}),P=J,R=e("2f62");n["a"].use(R["a"]);var F=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}}),z=e("f5af"),X=e.n(z),U=(e("e829"),e("7cf2")),Y=e("98c9"),K=e("f13c"),q=e("038c");n["a"].config.productionTip=!1,n["a"].use(K,{container:"body",duration:1500,easing:"ease-in-out",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0},q),n["a"].use(U["a"],{theme:"dark"}),n["a"].use(C["a"]),n["a"].use(Y["a"]),new n["a"]({created:function(){X.a.init()},router:P,store:F,render:function(t){return t(b)}}).$mount("#app")},"57f0":function(t,a,e){},"5ced":function(t,a,e){},"60a9":function(t,a,e){t.exports=e.p+"img/jquery.05e9420d.svg"},"690a":function(t,a,e){t.exports=e.p+"img/avatar.c7778c8c.png"},"6adf":function(t,a,e){"use strict";var n=e("dff5"),s=e.n(n);s.a},"7b8a":function(t,a,e){t.exports=e.p+"img/wordpress.0a854f39.svg"},8212:function(t,a,e){t.exports=e.p+"img/dryckeskonsult_logo_white.04d2f65d.png"},"85ec":function(t,a,e){},"897d":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA2LTE2VDEzOjM1OjE3KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNi0xNlQxNDoxMDozNCswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNi0xNlQxNDoxMDozNCswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjMTljOGU4MS00YjQ1LWZkNDAtOGRkMC1jZDhlMDQyY2VmOWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YzE5YzhlODEtNGI0NS1mZDQwLThkZDAtY2Q4ZTA0MmNlZjlhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YzE5YzhlODEtNGI0NS1mZDQwLThkZDAtY2Q4ZTA0MmNlZjlhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjMTljOGU4MS00YjQ1LWZkNDAtOGRkMC1jZDhlMDQyY2VmOWEiIHN0RXZ0OndoZW49IjIwMjAtMDYtMTZUMTM6MzU6MTcrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5JhmZXAAADd0lEQVRoge3ZS2hdRRzH8U/6iC2RGp26UgoNdFF81EcLkoXurFGULuIDES3u6koXVgR14cKl4kpQKiiIWnzVSopREHyVqhXBR1FrRARF4x+tSdSqbVzMJLncXHIfjent5f7gMPfOnJn5f8/8/3P+55ye6elpnaBlJ9uAxVIXpN20oroiItbiMQyhb8ktWlhT2IcdKaVfKhvmgcgQw0thVQvqk22bxg2VDbVAhko5kFL6tt7IEXFClqWUGj43ItZjzJyNs6oVI31lgroQS60Km06vbuuYYO+CtJu6IO2mLki7qQvSbuqCtJtqJY3zFBEDuBRjKaWDpW4z1uMj1MvLtmADvsP7cva6Elsj4ky8nlL6uYw7iHMwmlI60ihIoyuyDbvxcEXdI6Xumjrj78EHeAavlfrT8Cb24mkcioiNpe3uMu66Bm2bnagRzeTaWyKiNyJ6sbnU9S/QbxuuwysYxM3yatyKy/EkduIsPNCE3fPUDMhRrMbF5ViJf2WQQbyBe8v5u/Cy7Hqwvxz7yv9bSvmQvMp/4OqIaDlmmwH5VH7UvEz2+c8xIYN8gStwE5bLV34FRvB3MfhBczG5Qb4IYymlY/gea+SV+d9BjuCTArEJB4qR/fgN72AjzsMqjOKQ/Eg6ifvxEnpwBv6S3Qz+KeXqpQCZwocF5KICctRcjLwqu9uN5f9oKffIO95XuFZeuZ+K0TMrtKaUvzaPkNUMyATeld3iQrwtX+n+cs7eUg7L2+yXFf2/wbPl99myKy7HpohIOBeHU0qTLVFo8D4ig0zK7gPjKaWvI2ICa0vdGD7D+Xi81A1jK37HbWWM93Bc3rafwLh8QXdVzXlnRIzj45TS7noG1l2RiOiTfX6y3LTeknckxcD+itNn3OmFUq7DdtyFH+Xt+Ac5Vh7FBbgSgQMR0VMx1u24x8L3qVn1VL/EjohpSCn11OxRpYrXQf3yjW8VBuRdiexCvfizRvc+XIX75LjbnlJ6qs58Ne1brFxrGQ7K8bPTHAQcUxsCplJKL+ISeSN4vlUDGo2Rejouu9V+PNds55TStLn0pSUtFgjsWMSxmlbHpPFdkHZTF6Td1AVpN3VB2k0dDTLF7IfHtlKFTfMewGrlWiO4HmMn+sW2EbU4x0h1RS2QmeRvSI2vpydZkzLEHdUN8x6sTlV1dLCfkuoYkP8A4UnmHejxbjYAAAAASUVORK5CYII="},a4b9:function(t,a,e){t.exports=e.p+"img/html5.947ad8e5.svg"},a7c4:function(t,a,e){t.exports=e.p+"img/Coop_logo.f2248f00.png"},a8c1:function(t,a,e){},b147:function(t,a,e){t.exports=e.p+"img/css3.c7c5e9f6.svg"},c89a:function(t,a,e){t.exports=e.p+"img/bg_flow.3a223571.svg"},cccb:function(t,a,e){"use strict";var n=e("5ced"),s=e.n(n);s.a},d05b:function(t,a,e){t.exports=e.p+"img/ai.3948fc95.svg"},db5c:function(t,a){t.exports="data:image/png;base64,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"},dff5:function(t,a,e){},e3d0:function(t,a,e){t.exports=e.p+"img/kjell_logo.41d7ce04.png"},e739:function(t,a,e){"use strict";var n=e("a8c1"),s=e.n(n);s.a},e970:function(t,a,e){t.exports=e.p+"img/git.1ee1359b.svg"},efb9:function(t,a,e){t.exports=e.p+"img/postgresql.2006e1f7.svg"},f350:function(t,a,e){t.exports=e.p+"img/floating_next.0798fbc7.svg"}});
//# sourceMappingURL=app.94544d91.js.map