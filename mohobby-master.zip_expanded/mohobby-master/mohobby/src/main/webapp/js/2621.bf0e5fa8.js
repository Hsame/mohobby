"use strict";(self["webpackChunkmohobby"]=self["webpackChunkmohobby"]||[]).push([[2621],{69845:function(t,s,a){a.r(s),a.d(s,{default:function(){return x}});var e=a(64562),i=a(34145),n=a(44363),o=a(84786),l=a(39521),c=a(60266),r=a(69256),h=a(99223),d=a(4324),u=a(11713),f=a(10626),m=a(81402),p=(a(57658),function(){var t=this,s=t._self._c;return s(r.Z,{attrs:{fluid:""}},[s("div",{attrs:{id:"header-carousel"}},[s(o.Z,{staticStyle:{height:"100%"},attrs:{"hide-delimiters":""}},[t._l(t.classInfo.imgAmount,(function(e){return s(l.Z,{key:e,staticStyle:{filter:"brightness(75%)"},attrs:{src:a(37663)(`./${t.classId}/${e-1}.jpg`)}})})),s(e.Z,{attrs:{color:1==t.classInfo.jjim?"pink":"gray",icon:"","x-large":"",absolute:"",right:""},on:{click:function(s){return s.stopPropagation(),t.clickHeart.apply(null,arguments)}}},[s(d.Z,[t._v(t._s(1==t.classInfo.jjim?"mdi-heart":"mdi-heart-outline"))])],1),s(u.Z,{staticClass:"fill-height title",attrs:{align:"center",justify:"center"}},[s("div",{staticClass:"thumbText"},[s("h1",[t._v(t._s(t.classInfo.className))])])])],2),s(u.Z,{staticClass:"fill-height title",attrs:{align:"center",justify:"center"}},[s("div",{staticClass:"thumbName",on:{click:function(s){t.$router.push({path:"/snsUserFeed?memId="+t.classInfo.memberId}).catch((()=>{t.$router.go(0)}))}}},[t._v(" "+t._s(t.classInfo.jobName+" "+t.classInfo.nickname)+" ")])])],1),s("div",[s(u.Z,[s(i.Z,{staticClass:"mx-auto",attrs:{"max-width":"344",flat:"",justify:"center",align:"center"}},[s(n.ZB,[s(d.Z,{attrs:{size:"90",color:"#2b2b2b"}},[t._v(" mdi-timer-outline ")]),s("h2",[t._v(" "+t._s("주 "+t.classInfo.weekTimes+" 회 X "+t.classInfo.weeks+"주")+" ")])],1)],1),s(h.Z,{attrs:{vertical:""}}),s(i.Z,{staticClass:"mx-auto",attrs:{"max-width":"344",flat:"",justify:"center",align:"center"}},[void 0==t.classInfo.startDate&&void 0==t.classInfo.endDate?s(n.ZB,[s(d.Z,{attrs:{size:"90",color:"#2b2b2b"}},[t._v(" mdi-restore ")]),s("h2",[t._v(" "+t._s("평생 시청")+" ")])],1):s(n.ZB,[s(d.Z,{attrs:{size:"90",color:"#2b2b2b"}},[t._v(" mdi-calendar ")]),s("h2",[t._v(t._s(t.classInfo.startDate)+" ~ "+t._s(t.classInfo.endDate))])],1)],1),s(h.Z,{attrs:{vertical:""}}),s(i.Z,{staticClass:"mx-auto",staticStyle:{"margin-top":"20px"},attrs:{"max-width":"344",flat:"",justify:"center",align:"left"}},[s(n.ZB,[s(u.Z,{attrs:{align:"center"}},[s(c.Z,{attrs:{cols:"auto"}},[s("div",[t._v(t._s(t._f("won")(t._f("comma")(t.classInfo.classPrice))))]),s("h2",{staticClass:"largeText"},[t._v(" "+t._s("월 ")+" "+t._s(t._f("won")(t._f("comma")(t.classInfo.classPrice/5)))+" ")]),s("div",[t._v(t._s("* 5개월 할부 시"))])]),s(c.Z,{attrs:{cols:"auto"}},[s(e.Z,{attrs:{depressed:"",dark:"",color:"#2255b1"},on:{click:t.goPayBtn}},[t._v(" 수강하기 ")])],1)],1)],1)],1)],1)],1),s("div",{staticStyle:{padding:"120px 0px 20px 0px"}},[s(m.Z,{attrs:{color:"#2255b1"},model:{value:t.active_tab,callback:function(s){t.active_tab=s},expression:"active_tab"}},t._l(t.tabs,(function(a){return s(f.Z,{key:a.index,on:{click:function(s){return t.$router.push({path:a.route})}}},[s("h3",[t._v(t._s(a.name))]),3==a.index?s("div",{staticStyle:{"padding-left":"5px"}},[t._v(" "+t._s(t.classInfo.qnaTotal)+" ")]):t._e(),4==a.index?s("div",{staticStyle:{"padding-left":"5px"}},[t._v(" "+t._s(t.classInfo.reviewTotal)+" ")]):t._e()])})),1)],1),s("div",{staticStyle:{"padding-bottom":"60px"}},[s("router-view")],1)])}),I=[],g={name:"classDetail",props:{classId:{type:String,default:1}},data(){return{classInfo:{},active_tab:0,tabs:[{index:0,name:"클래스 소개",route:this.$route.path.substring(0,this.$route.path.lastIndexOf("/"))+"/info"},{index:1,name:"커리큘럼",route:this.$route.path.substring(0,this.$route.path.lastIndexOf("/"))+"/course"},{index:3,name:"QnA",route:this.$route.path.substring(0,this.$route.path.lastIndexOf("/"))+"/qna"},{index:4,name:"후기",route:this.$route.path.substring(0,this.$route.path.lastIndexOf("/"))+"/review"},{index:5,name:"위치",route:this.$route.path.substring(0,this.$route.path.lastIndexOf("/"))+"/location"}],weeks:"",chapterCount:""}},created(){this.initInfo()},methods:{initInfo(){this.axios.get("/class/detail/"+this.classId,{params:{memberId:this.$store.state.id}}).then((t=>{this.classInfo=t.data,console.log(t.data),this.calDate(),this.calRound()}))},clickHeart:function(){this.$store.state.id?0==this.classInfo.jjim?(this.axios("/class/jjim",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},data:JSON.stringify({targetId:this.classId,targetType:1,memberId:this.$store.state.id})}).catch((t=>{console.log(t)})),this.classInfo.jjim=1):1==this.classInfo.jjim&&(this.axios("/class/jjim",{method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8"}}).catch((t=>{console.log(t)})),this.classInfo.jjim=0):this.$swal("로그인 후 이용하세요!","","info")},calDate(){this.classInfo.startDate=this.classInfo.startDate.split(" ")[0],this.classInfo.endDate=this.classInfo.endDate.split(" ")[0],this.weeks=Math.round((Date.parse(this.classInfo.endDate)-Date.parse(this.classInfo.startDate))/6048e5)},calRound(){this.axios("/class/chapterList?classId="+this.classId,{method:"get",headers:{"Content-Type":"application/json; charset=utf-8"}}).then((t=>{this.chapterCount=t.data.length/this.weeks})).catch((t=>{console.log(t)}))},goPayBtn(){this.$store.state.id?this.goPay():this.$swal("로그인 후 이용하세요!","","info")},goPay(){this.axios("/class/pay/"+this.classId,{params:{memberId:this.$store.state.id}}).then((t=>{t.data?this.$swal("이미 수강 중인 강의입니다.","얼른 학습하러 가보아요✍","info"):this.$router.push({name:"classPay",params:{classId:this.classId,classInfo:this.classInfo}}).catch((()=>{$router.go(0)}))}))}},components:{}},_=g,v=a(1001),b=(0,v.Z)(_,p,I,!1,null,null,null),x=b.exports}}]);
//# sourceMappingURL=2621.bf0e5fa8.js.map