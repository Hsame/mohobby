"use strict";(self["webpackChunkmohobby"]=self["webpackChunkmohobby"]||[]).push([[1322],{51322:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("BreadCrumb"),t("router-view")],1)},i=[],a=s(20144),u=(s(57658),s(58860)),n=s(67678),d=(0,n.Z)(u.Z).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(e){const{tag:t,data:s}=this.generateRouteLink();return e("li",[e(t,{...s,attrs:{...s.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),l=s(75352),o=(0,l.Ji)("v-breadcrumbs__divider","li"),m=s(96669),c=(0,n.Z)(m.Z).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(o,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const e=[],t=!!this.$scopedSlots.item,s=[];for(let r=0;r<this.items.length;r++){const i=this.items[r];s.push(i.text),t?e.push(this.$scopedSlots.item({item:i})):e.push(this.$createElement(d,{key:s.join("."),props:i},[i.text])),r<this.items.length-1&&e.push(this.genDivider())}return e}},render(e){const t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}}),h=s(4324),b=function(){var e=this,t=e._self._c;return t(c,{attrs:{items:e.breadCrumbs},scopedSlots:e._u([{key:"item",fn:function({item:s}){return[t(d,{staticClass:"text-subtitle-2 crumb-item",attrs:{to:s.to,disabled:s.disabled,exact:""}},[e._v(" "+e._s(s.text)+" ")])]}},{key:"divider",fn:function(){return[t(h.Z,[e._v("mdi-chevron-right")])]},proxy:!0}])})},p=[],v={computed:{breadCrumbs(){return"function"===typeof this.$route.meta.breadCrumb?this.$route.meta.breadCrumb.call(this,this.$route):this.$route.meta.breadCrumb}}},f=v,_=s(1001),g=(0,_.Z)(f,b,p,!1,null,null,null),C=g.exports,y=a["default"].extend({name:"App",components:{BreadCrumb:C},data:()=>({})}),x=y,$=(0,_.Z)(x,r,i,!1,null,null,null),k=$.exports}}]);
//# sourceMappingURL=1322.be2d48d2.js.map