(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49416f15"],{4221:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("AppBar"),i("v-main",[i("v-fade-transition",{attrs:{mode:"out-in"}},[i("router-view")],1)],1),i("BaseSnackbar",{attrs:{dark:""}})],1)},a=[],o=(i("d3b7"),i("3ca3"),i("ddb0"),{name:"AppView",components:{AppBar:function(){return Promise.all([i.e("chunk-ead68708"),i.e("chunk-726c477b")]).then(i.bind(null,"60dd"))}},props:{id:{type:String,default:"view"}},data:function(){return{userInfoInterval:void 0}},methods:{showSnackbar:function(){this.$store.commit({type:"showSnackbar",text:"Hello"})},getUserInfo:function(){this.$store.dispatch("getProfile"),this.$store.dispatch("getPortfolio")}},beforeCreate:function(){this.$store.dispatch("initialiseToken")},mounted:function(){this.getUserInfo(),this.userInfoInterval=setInterval(function(){this.getUserInfo()}.bind(this),1e3)},destroyed:function(){clearInterval(this.userInfoInterval)}}),s=o,r=i("2877"),c=i("6544"),d=i.n(c),u=i("7496"),p=i("0789"),f=i("f6c4"),l=Object(r["a"])(s,n,a,!1,null,null,null);e["default"]=l.exports;d()(l,{VApp:u["a"],VFadeTransition:p["b"],VMain:f["a"]})},7496:function(t,e,i){"use strict";var n=i("5530"),a=(i("df86"),i("7560")),o=i("58df");e["a"]=Object(o["a"])(a["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(n["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},bd0c:function(t,e,i){},d10f:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},df86:function(t,e,i){},f6c4:function(t,e,i){"use strict";i("bd0c");var n=i("d10f");e["a"]=n["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,n=t.right,a=t.footer,o=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(a+o+s,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);
//# sourceMappingURL=chunk-49416f15.c5ddb50d.js.map