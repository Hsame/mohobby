"use strict";(self["webpackChunkmohobby"]=self["webpackChunkmohobby"]||[]).push([[575],{21208:function(t,e,s){s.r(e),s.d(e,{default:function(){return E}});var c=function(){var t=this,e=t._self._c;return e("div",[e("MakeNbbang")],1)},i=[],l=s(43423),r=s(64562),o=s(44363),a=s(60266),n=s(69256),m=s(65495),d=s(11713),h=s(13687),u=s(17808),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e(o.ZB,[e(n.Z,[e(d.Z,[e(a.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[e(u.Z,{attrs:{outlined:"",placeholder:"N빵의 이름을 알려주세요!"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),e(a.Z,{attrs:{cols:"12",sm:"6",md:"8"}},[e(u.Z,{attrs:{outlined:"",placeholder:"금액을 입력해주세요",oninput:"javascript: this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|~!@#$%^&*()_+|<>?:{};=-₩']/g, '' );",prefix:"₩"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),e(a.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[e(l.Z,{staticClass:"mb-4",attrs:{color:"grey darken-1",size:"64"}},[e(m.Z,{attrs:{"aspect-ratio":"30",src:t.src}})],1),e("div",[t._v(t._s(t.writer))])],1),e(h.Z),e(a.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[e("MemberSelect",{attrs:{empty:t.empty,price:t.price,totalPrice:t.totalPrice},on:{"update:empty":function(e){t.empty=e},"update:price":function(e){t.price=e},"update:totalPrice":function(e){t.totalPrice=e},"update:total-price":function(e){t.totalPrice=e}}})],1)],1),e("hr",{staticClass:"mt-5 mb-5"}),t._l(t.empty,(function(s,c){return e(d.Z,{key:"idx"},[e(a.Z,{attrs:{cols:"12",sm:"6",md:"1"}},[e(l.Z,{staticClass:"mb-4",attrs:{color:"grey darken-1",size:"64"}},[e(m.Z,{attrs:{"aspect-ratio":"30",src:t.src}})],1)],1),e(a.Z,{staticClass:"ml-5",attrs:{cols:"12",sm:"6",md:"10"}},[e("span",{staticClass:"mb-3"},[t._v(t._s(s))]),0!=t.totalPrice?e(u.Z,{attrs:{outlined:"",disabled:"",value:t._f("won")(t._f("comma")(t.totalPrice)),placeholder:"금액 들어올 칸"}}):t._e(),0==t.totalPrice?e(u.Z,{attrs:{outlined:"",disabled:"",value:t._f("won")(t._f("comma")(t.totalPrice)),placeholder:"금액 들어올 칸"},model:{value:t.totalPrice,callback:function(e){t.totalPrice=e},expression:"totalPrice"}}):t._e()],1)],1)})),e(d.Z,{staticClass:"mt-12",attrs:{justify:"center"}},[e(r.Z,{attrs:{color:"success"},on:{click:function(e){return t.allInsert()}}},[t._v(" 짜잔 ")])],1)],2)],1)],1)},g=[],b=(s(57658),s(34145)),f=s(63486),Z=s(34061),k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e(d.Z,{attrs:{justify:"end"}},[e(Z.Z,{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:c}){return[e(r.Z,t._g(t._b({attrs:{color:"green",dark:"",text:"","x-large":""},on:{click:function(e){return t.selectMember()}}},"v-btn",c,!1),s),[t._v(" 멤버 선택 > ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(b.Z,{staticClass:"pa-9"},[e(o.EB,{staticClass:"justify-center"},[e("span",{staticClass:"font-weight-bold"},[t._v("멤버 선택")])]),e("div",[e(u.Z,{attrs:{outlined:"",label:"아이디를 검색하세요!",id:"searchBar","append-icon":"mdi-magnify"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchMember()}},model:{value:t.memberId,callback:function(e){t.memberId=e},expression:"memberId"}})],1),e(d.Z,[e(a.Z,{attrs:{cols:"12",sm:"6",md:"2"}},[e(l.Z,{staticClass:"mb-4",attrs:{color:"grey darken-1",size:"64"}},[e(m.Z,{attrs:{"aspect-ratio":"30",src:t.src}})],1)],1),e(a.Z,{staticClass:"mt-5",attrs:{cols:"12",sm:"6",md:"4"}},[e("div",[t._v("전체선택")])]),e(a.Z,{staticClass:"mt-5",attrs:{cols:"12",sm:"6",md:"6"}},[e(h.Z),e("div",{staticClass:"select"},[e(f.Z,{attrs:{id:"check",color:"light-green","hide-details":""},on:{click:function(e){return t.selectAll()}},model:{value:t.test1,callback:function(e){t.test1=e},expression:"test1"}})],1)],1)],1),e("hr",{staticClass:"mt-5 mb-5"}),0==t.members.length?e("h4",[t._v("일치하는 결과가 없습니다.")]):t._e(),t._l(t.members,(function(s,c){return e(d.Z,{key:c},[e(a.Z,{attrs:{cols:"12",sm:"6",md:"2"}},[e(l.Z,{staticClass:"mb-4",attrs:{color:"grey darken-1",size:"64"}},[e(m.Z,{attrs:{"aspect-ratio":"30",src:t.src}})],1)],1),e(a.Z,{staticClass:"mt-5",attrs:{cols:"12",sm:"6",md:"4",id:"check"}},[e("div",[t._v(t._s(s.memberId))])]),e(a.Z,{staticClass:"mt-5",attrs:{cols:"12",sm:"6",md:"6"}},[e(h.Z),e("div",{staticClass:"select"},[e(f.Z,{attrs:{color:"light-green",value:s.memberId,"hide-details":""},on:{click:function(e){return t.minus()}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)],1)],1)})),e(o.h7,{staticClass:"justify-center mt-6"},[e(r.Z,{attrs:{color:"green darken-1",outlined:"",rounded:"",id:"check",text:""},on:{click:function(e){t.dialog=!1,t.insertPrice(),t.insertMember()}}},[t._v(" 등록 ")]),e(r.Z,{attrs:{color:"green darken-1",outlined:"",rounded:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" 취소 ")])],1)],2)],1)],1)],1)},v=[],P={props:["empty","price","totalPrice"],data(){return{test1:"",members:[],select:[],checked:[],moimId:this.$route.params.moimId,memberId:"",dialog:!1,newPrice:"",src:"https://dimg.donga.com/ugc/CDB/WEEKLY/Article/5a/d0/5c/e0/5ad05ce00110d2738de6.jpg"}},methods:{insertPrice(){console.log("length:"+this.select.length),this.totalPrice=this.price,console.log("totalPrice:"+this.totalPrice),0!=this.select.length&&(this.newPrice=this.totalPrice/this.select.length),console.log("newPrice:"+this.newPrice)},insertMember(){this.select.length<2?this.$swal("2명이상 선택해주세요!"):(this.$emit("update:empty",this.select),this.$emit("update:totalPrice",this.newPrice))},selectMember(){this.axios.get("/moimMemberList",{params:{moimId:this.moimId}}).then((t=>{console.log(t),this.members=t.data})).catch((t=>{console.log(t)}))},searchMember(){console.log("멤버아이디 : "+this.memberId),this.axios.get("/oneMemberSearch",{params:{memberId:this.memberId,moimId:this.moimId}}).then((t=>{console.log(t),this.members=t.data,document.querySelector("#searchBar").value="",this.select=[]})).catch((t=>{console.log(t)}))},selectAll(){if(this.test=document.querySelector("#check").checked,console.log(this.test),0==this.test){for(let e of this.members)this.select.push(e.memberId);const t=new Set(this.select);this.select=[...t]}else this.select.splice(0)},minus(){this.members.length!=this.select.length&&(this.test1=!1),console.log("checked: "+document.querySelector("#check").checked)}},created(){this.selectMember()}},_=P,y=s(1001),I=(0,y.Z)(_,k,v,!1,null,"533985a7",null),C=I.exports,w={data(){return{writer:this.$store.state.id,title:"",empty:[],price:"",totalPrice:"",moimId:this.$route.params.moimId,calcPrice:"",calcCheck:"",src:"https://dimg.donga.com/ugc/CDB/WEEKLY/Article/5a/d0/5c/e0/5ad05ce00110d2738de6.jpg"}},components:{MemberSelect:C},methods:{allInsert(){""!==this.price&&""!==this.title&&0!==this.member.length?this.axios.post("/makeNbbang",{title:this.title,totalPrice:this.price,calcPrice:this.totalPrice,memberId:this.writer,moimId:this.moimId,people:this.member.length}).then((t=>{200==t.status&&(console.log("then resp==============="),console.log("calcPrice: "+this.totalPrice),console.log("moimId: "+this.moimId),console.log("then resp==============="),console.log(t.data),this.axios.post("/insertPtp",{memberId:this.empty,moimId:this.moimId,calcPrice:this.totalPrice}),console.log("then=============="),console.log("writer:"+this.writer),console.log("title:"+this.title),console.log("totalPrice:"+this.price),console.log("calcPrice:"+this.totalPrice),console.log("moimId:"+this.moimId),this.$swal("N빵 생성이 완료되었습니다."),this.$router.push({name:"moimNbbang"}))})).catch((t=>{console.log(t)})):this.$swal("필수항목이 입력되지 않았습니다.")}},watch:{price(t){this.totalPrice=this.price/this.empty.length}}},x=w,M=(0,y.Z)(x,p,g,!1,null,"0ce88228",null),$=M.exports,S={components:{MakeNbbang:$},data:()=>({}),setup(){},created(){},mounted(){},unmounted(){},methods:{}},j=S,B=(0,y.Z)(j,c,i,!1,null,null,null),E=B.exports}}]);
//# sourceMappingURL=575.4c86a6ba.js.map