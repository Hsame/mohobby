"use strict";(self["webpackChunkmohobby"]=self["webpackChunkmohobby"]||[]).push([[5675],{35675:function(t,s,e){e.r(s),e.d(s,{default:function(){return C}});var i=function(){var t=this,s=t._self._c;return s("div",[s("MoimNbbang")],1)},a=[],o=e(64562),n=e(34145),r=e(44363),l=e(4324),c=e(54525),d=e(66900),m=e(79500),u=e(13687),h=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("div",{staticClass:"margin"},[s(r.h7,{staticClass:"mb-16"},[s(u.Z),s(o.Z,{on:{click:function(s){return t.makeNbbang()}}},[s(l.Z,[t._v("mdi-plus-circle-outline")]),t._v("N빵 생성하기")],1)],1)],1),t._l(t.items,(function(e){return s(n.Z,{key:e.dutchId,staticClass:"mx-auto mb-8",attrs:{"max-width":"800",outlined:""},on:{click:function(s){return t.Nbbangdetail(e.dutchId)}}},[s(c.Z,{attrs:{"three-line":""}},[s(d.Z,{attrs:{tile:"",size:"80",color:"grey"}}),s(m.km,[s("div",{staticClass:"text-overline mt-6"},[t._v(" "+t._s(e.memberId)+" "),s("hr"),t._v(" "+t._s(t.writeDate)+" ")]),s(m.oZ,{staticClass:"content mt-5"},[s(l.Z,{staticClass:"mr-1 mb-1 ml-7",attrs:{color:"light-green"}},[t._v("mdi-chart-pie")]),t._v(" N빵")],1),s(r.h7,{staticClass:"ml-13"},[t._v(t._s(e.totalPrice)+"원 / "+t._s(e.people)+"명")])],1)],1),s(r.h7)],1)}))],2)},g=[],b=(e(57658),{data(){return{items:[],moimId:this.$route.params.moimId,moim:1,moimRight:1,writeDate:this.$moment().format("YY-MM-DD"),dutchId:0}},methods:{getNbbangList(){console.log(this.moimId),this.axios.get("/moimNbbangList",{params:{moimId:this.moimId}}).then((t=>{console.log(t),console.log(this.items),this.items=t.data})).catch((t=>{console.log(this.items),console.log(t)}))},makeNbbang:function(){this.$router.push({path:"makeNbbang",params:{moimId:this.moimId}})},Nbbangdetail:function(t){this.dutchId=t,this.$router.push({name:"nBBangDetail",query:{moimId:this.moimId,dutchId:this.dutchId}})}},created(){this.getNbbangList()}}),v=b,p=e(1001),f=(0,p.Z)(v,h,g,!1,null,"2bf78281",null),_=f.exports,Z={components:{MoimNbbang:_},data:()=>({}),setup(){},created(){},mounted(){},unmounted(){},methods:{}},k=Z,I=(0,p.Z)(k,i,a,!1,null,null,null),C=I.exports},4245:function(){},34145:function(t,s,e){e(4245);var i=e(83434),a=e(88126),o=e(58860),n=e(67678);s["Z"]=(0,n.Z)(a.Z,o.Z,i.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...o.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.Z.options.computed.classes.call(this)}},styles(){const t={...i.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:s,data:e}=this.generateRouteLink();return e.style=this.styles,this.isClickable&&(e.attrs=e.attrs||{},e.attrs.tabindex=0),t(s,this.setBackgroundColor(this.color,e),[this.genProgress(),this.$slots.default])}})},44363:function(t,s,e){e.d(s,{EB:function(){return l},Qq:function(){return n},ZB:function(){return r},h7:function(){return o}});var i=e(34145),a=e(75352);const o=(0,a.Ji)("v-card__actions"),n=(0,a.Ji)("v-card__subtitle"),r=(0,a.Ji)("v-card__text"),l=(0,a.Ji)("v-card__title");i.Z}}]);
//# sourceMappingURL=5675.db090888.js.map