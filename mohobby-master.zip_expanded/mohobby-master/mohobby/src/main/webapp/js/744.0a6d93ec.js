"use strict";(self["webpackChunkmohobby"]=self["webpackChunkmohobby"]||[]).push([[744],{83106:function(t,e,s){s.d(e,{Z:function(){return b}});var o=s(43423),a=s(99223),n=s(4324),i=s(65495),l=s(65808),r=s(54525),d=s(79500),c=s(74611),u=s(99709),m=(s(57658),function(){var t=this,e=t._self._c;return e(u.Z,{attrs:{app:""}},[e("div",{staticClass:"text-center pa-10"},[e(o.Z,{staticClass:"mb-4",attrs:{color:"grey darken-1",size:"64"}},[e(i.Z,{attrs:{"aspect-ratio":"30",src:s(6935)(`./${t.profileImg}`)}})],1),e("h4",{staticStyle:{color:"#2b2b2b","font-weight":"bolder"}},[t._v(t._s(t.memberId))])],1),e(a.Z),e(l.Z,t._l(t.links,(function(s){return e(r.Z,{key:s.text,attrs:{link:""},on:{click:function(e){return t.$router.push({path:s.route})}}},[e(c.Z,[e(n.Z,[t._v(t._s(s.icon))])],1),e(d.km,[e(d.V9,[t._v(t._s(s.text))])],1)],1)})),1)],1)}),g=[],f={data(){return{memberId:"admin",profileImg:"female.png",links:[{icon:"mdi-microsoft-windows",text:"sns관리",route:"/adminsns"},{icon:"mdi-account",text:"강의 관리",route:"/adminclass"},{icon:"mdi-clipboard-list-outline",text:"소모임 관리",route:"/adminmoim"},{icon:"mdi-clipboard-list",text:"챌린지 관리",route:"/adminchallenge"},{icon:"mdi-alert-octagon",text:"유저 관리",route:"/adminuser"}]}},created(){this.setMemberInfo()},methods:{setMemberInfo(){if(this.memberId=this.$store.state.id,!this.memberId)return this.memberId="비회원",void(this.profileImg="comfuck.jpg");"admin"==this.memberId?this.profileImg="logo-color.png":""!=this.memberId&&"admin"!=this.memberId&&this.getMemberInfo()},getMemberInfo(){const t=this;this.axios({url:"/member/"+this.memberId,method:"get"}).then((function(e){""!=e.data&&(console.log(e.data),t.memberId=e.data.memberId,t.profileImg=e.data.profileImg)})).catch((function(t){console.log(t)}))}}},h=f,p=s(1001),v=(0,p.Z)(h,m,g,!1,null,"ec002648",null),b=v.exports},64620:function(t,e,s){s.r(e),s.d(e,{default:function(){return k}});var o=s(55550),a=s(64562),n=s(34145),i=s(43863),l=s(4324),r=s(54525),d=s(79500),c=s(77912),u=s(96313),m=s(97953),g=function(){var t=this,e=t._self._c;return e("main",[e("AdminSidebar"),e("div",{staticStyle:{"margin-left":"60px",width:"1000px"}},[e(n.Z,{staticClass:"mx-auto",attrs:{"max-width":"475"}},[e(u.Z,{attrs:{color:"teal",dark:""}},[e(o.Z),e(m.qW,[t._v("신고코드")])],1),e(c.Z,[e(r.Z,[[e(d.km,[e(d.V9,{attrs:{value:"us1"},on:{click:function(e){return t.getSelectedCode(e)}}},[t._v("us1")]),e(d.oZ,[t._v("부적절한 게시물 개시")])],1)]],2),e(r.Z,[[e(d.km,[e(d.V9,{attrs:{value:"us2"},on:{click:function(e){return t.getSelectedCode(e)}}},[t._v("us2")]),e(d.oZ,[t._v("다른 유저에게 욕설, 비방")])],1)]],2),e(r.Z,[[e(d.km,[e(d.V9,{attrs:{value:"us3"},on:{click:function(e){return t.getSelectedCode(e)}}},[t._v("us3")]),e(d.oZ,[t._v("게시글, 댓글 도배")])],1)]],2),e(r.Z,[[e(d.km,[e(d.V9,{attrs:{value:"us4"},on:{click:function(e){return t.getSelectedCode(e)}}},[t._v("us4")]),e(d.oZ,[t._v("홍보성 게시물 반복적 개시")])],1)]],2),e(r.Z,[[e(d.km,[e(d.V9,{attrs:{value:"us5"},on:{click:function(e){return t.getSelectedCode(e)}}},[t._v("us5")]),e(d.oZ,[t._v("기타")])],1)]],2)],1)],1),e("br"),e("h3",[t._v("신고된 유저")]),e("br"),e(i.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.flagUserList,"sort-by":"calories"},scopedSlots:t._u([{key:"item.actions",fn:function({item:s}){return[e(l.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editFlagUser(s)}}},[t._v(" mdi-pencil ")]),e(l.Z,{on:{click:function(e){return t.deleteFlagUser(s)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[e(a.Z,{attrs:{color:"primary"}},[t._v(" Reset ")])]},proxy:!0},{key:"item.showDetail",fn:function({item:s}){return[e(l.Z,{on:{click:function(e){return t.goToUserProfile(s)}}},[t._v(" mdi-arrow-right-bold-box ")])]}}])},[t._v(" small "),t._v(" small ")])],1)],1)},f=[],h=(s(57658),s(83106)),p={name:"",components:{AdminSidebar:h.Z},data(){return{dialog:!1,dialogDelete:!1,headers:[{text:"신고번호",align:"start",sortable:!1,value:"flagId"},{text:"신고자",value:"flagFrom"},{text:"신고유저",value:"flagTo"},{text:"신고코드",value:"flagCode"},{text:"신고이유 (g)",value:"flagReason"},{text:"관리자 승인여부",value:"adminConfirm"},{text:"신고결과",value:"flagResult"},{text:"수정하기",value:"actions",sortable:!1},{text:"상세보기",value:"showDetail",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0},flagUserList:[],selectedFlagUserList:[],userOneInfo:[],role:0,settings:[],selectedCode:""}},beforeCreate(){},created(){this.getFlagedUser()},beforeMount(){},mounted(){},beforeUpdate(){},updated(){},beforeUnmount(){},unmounted(){},computed:{},watch:{},methods:{getSelectedCode(t){console.log(t.target.textContent),console.log("clicked");const e=this;this.axios({url:"/searchCodeList/"+t.target.textContent,method:"get"}).then((function(t){console.log(t);for(let e=0;e<t.data.length;e++)0==t.data[e].adminConfirm?t.data[e].adminConfirm="미승인":1==t.data[e].adminConfirm&&(t.data[e].adminConfirm="승인"),0==t.data[e].flagResult?t.data[e].flagResult="통과":1==t.data[e].flagResult&&(t.data[e].flagResult="패널티");e.flagUserList=t.data})).catch((function(t){console.log(t)}))},showSettings(){console.log(this.settings)},getFlagedUser(){const t=this;this.axios({url:"/admimflaguser",method:"get"}).then((function(e){console.log(e);for(let t=0;t<e.data.length;t++)0==e.data[t].adminConfirm?e.data[t].adminConfirm="미승인":1==e.data[t].adminConfirm&&(e.data[t].adminConfirm="승인"),0==e.data[t].flagResult?e.data[t].flagResult="통과":1==e.data[t].flagResult&&(e.data[t].flagResult="패널티");t.flagUserList=e.data})).catch((function(t){console.log(t)}))},editFlagUser(t){this.editedItem=Object.assign({},t);const e=this;(async()=>{const{value:s}=await this.$swal.fire({title:"유저 신고 결과를 결정해 주세요",input:"select",inputOptions:{0:"통과",1:"패널티"},inputPlaceholder:"유저 신고 결과",showCancelButton:!0,inputValidator:s=>new Promise((o=>{s&&(1==s&&(this.role=4),this.axios({url:"/updateFlag",method:"put",data:{flagResult:s,adminConfirm:1,flagId:t.flagId}}).then((function(s){console.log(s),e.$swal.fire("유저 신고결과 수정이 완료되었습니다"),e.updateUserBlock(t.flagTo),e.getFlagedUser()})).catch((function(t){console.log(t),console.log("유저 신고결과 수정 실패")})))}))})})()},updateUserBlock(t){this.axios({url:"/memberupdaterole",method:"put",data:{role:this.role,memberId:t}}).then((function(t){console.log(t),console.log("유저 block여부 수정 성공")})).catch((function(t){console.log(t),console.log("유저 block여부 수정 실패")}))},deleteFlagUser(t){const e=this;this.editedIndex=this.moimFlagList.indexOf(t),this.editedItem=Object.assign({},t),this.axios({url:"/flagging/"+t.flagId,method:"delete"}).then((function(t){console.log(t),e.$swal.fire("유저 신고결과 식제가 완료되었습니다"),e.getFlagedUser()})).catch((function(t){console.log(t),console.log("유저 신고결과 식제 실패")}))},async goToUserProfile(t){this.editedItem=Object.assign({},t),await this.getOneUser(this.editedItem.flagTo),4==this.userOneInfo.role?this.$swal.fire("관리자에 의해 접근 금지된 유저 프로필입니다."):this.$router.push({path:"/snsUserFeed",query:{userId:this.editedItem.flagTo}})},async getOneUser(t){const e=this;await this.axios({url:"/member/"+t,method:"get"}).then((function(t){e.userOneInfo=t.data})).catch((function(t){console.log(t)}))}}},v=p,b=s(1001),Z=(0,b.Z)(v,g,f,!1,null,null,null),k=Z.exports},4245:function(){},55550:function(t,e,s){var o=s(42240),a=s(64562),n=s(20144);e["Z"]=n["default"].extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:s,props:n,data:i}){const l=Object.assign(i,{staticClass:`v-app-bar__nav-icon ${i.staticClass||""}`.trim(),props:{...n,icon:!0},on:s}),r=e().default;return t(a.Z,l,r||[t(o.Z,"$menu")])}})},34145:function(t,e,s){s(4245);var o=s(83434),a=s(88126),n=s(58860),i=s(67678);e["Z"]=(0,i.Z)(a.Z,n.Z,o.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...o.Z.options.computed.classes.call(this)}},styles(){const t={...o.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=744.0a6d93ec.js.map