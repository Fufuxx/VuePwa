webpackJsonp([1],{357:function(t,a,e){"use strict";function n(t){e(358)}var s=e(93),i=e(363),r=e(32),o=n,c=r(s.a,i.a,!1,o,null,null);a.a=c.exports},358:function(t,a){},360:function(t,a,e){"use strict";function n(t){e(361)}var s=e(94),i=e(362),r=e(32),o=n,c=r(s.a,i.a,!1,o,"data-v-71f9b9d4",null);a.a=c.exports},361:function(t,a){},362:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Cryptocus")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},t._l(t.menu_items,function(a){return e("router-link",{class:{active:a.isActive,"nav-item":!0},attrs:{tag:"li",to:a.url},nativeOn:{click:function(e){t.menuclick(a)}}},[e("a",{staticClass:"nav-link"},[t._v(t._s(a.name))])])}))])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],i={render:n,staticRenderFns:s};a.a=i},363:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("header-view"),t._v(" "),e("router-view")],1)},s=[],i={render:n,staticRenderFns:s};a.a=i},364:function(t,a,e){"use strict";var n=e(55),s=e(365),i=e(366),r=e(369);n.a.use(s.a),a.a=new s.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/search",name:"Search",component:r.a}]})},366:function(t,a,e){"use strict";function n(t){e(367)}var s=e(95),i=e(368),r=e(32),o=n,c=r(s.a,i.a,!1,o,"data-v-21a64ea8",null);a.a=c.exports},367:function(t,a){},368:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{role:"main"}},[e("div",{staticClass:"jumbotron"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"display-3"},[t._v(t._s(t.message))]),t._v(" "),e("p",[t._v("\n        This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.\n      ")])])])])},s=[],i={render:n,staticRenderFns:s};a.a=i},369:function(t,a,e){"use strict";function n(t){e(370)}var s=e(96),i=e(371),r=e(32),o=n,c=r(s.a,i.a,!1,o,"data-v-a3e23cd4",null);a.a=c.exports},370:function(t,a){},371:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{role:"main"}},[e("div",{staticClass:"jumbotron"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"display-3"},[t._v(t._s(t.message))]),t._v(" "),e("p",[t._v("\n        This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.\n      ")])])])])},s=[],i={render:n,staticRenderFns:s};a.a=i},93:function(t,a,e){"use strict";var n=e(360);a.a={name:"app",components:{HeaderView:n.a},methods:{slide:function(t){console.log("Slide !",t)}}}},94:function(t,a,e){"use strict";a.a={data:function(){return{header_text:"Cyptocus",menu_items:[{name:"Home",url:"/",isActive:!0},{name:"Search",url:"/search",isActive:!1}]}},methods:{menuclick:function(t){this.$data.menu_items.forEach(function(t){t.isActive=!1}),t.isActive=!0}}}},95:function(t,a,e){"use strict";a.a={data:function(){return{message:"Hello Home"}}}},96:function(t,a,e){"use strict";a.a={data:function(){return{message:"Hello Search"}}}},97:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(55),s=e(101),i=e.n(s),r=e(357),o=e(364);n.a.config.productionTip=!1,n.a.use(i.a),new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})}},[97]);
//# sourceMappingURL=app.7f9454ad498d20088ea3.js.map