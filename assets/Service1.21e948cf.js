import{S as F,O as f,s as k}from"./OtherService.51004440.js";import{_ as B,H,F as E,b as g,s as b,i as w,r as o,o as t,c as n,f as r,u as l,n as a,q as _,v as y,d as c,t as p}from"./index.b6ec7e92.js";import{S as L,a as O}from"./ServiceExtraCard.72251231.js";const V={components:{ServiceCardPro:F,ServiceExtraCard:L,ServiceExtraCardCorner:O,OtherService:f,HomeFooter:H,Form:E,HomeBottom:g},data(){return{id:0,data:k,showForm:b,imageLink:w}},methods:{showBotForm(){this.showForm.isVisible=!this.showForm.isVisible}}},D={class:"other-service"},N={class:"detailed"},T={class:"title-img"},G={class:"title"},M=["src"],P=["innerHTML"],q={key:0,class:"text left"};function I(j,d,z,A,e,m){const v=o("ServiceExtraCard"),u=o("ServiceExtraCardCorner"),h=o("OtherService"),x=o("HomeFooter"),S=o("Form"),C=o("HomeBottom");return t(),n(a,null,[r("div",D,[r("div",N,[r("div",T,[r("div",null,[r("h1",G,l(e.data[e.id].title),1),r("p",null,l(e.data[e.id].description),1)]),r("img",{src:e.imageLink,alt:"Calculation"},null,8,M)]),r("p",{class:"text",innerHTML:e.data[e.id].text},null,8,P),(t(!0),n(a,null,_(e.data[e.id].extraDescription,(s,i)=>(t(),p(v,{"extra-description":e.data[e.id].extraDescription[i],key:s},null,8,["extra-description"]))),128)),e.id==1?(t(),n("p",q," \u0424\u043E\u0440\u043C\u044B \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435 ")):y("",!0),(t(!0),n(a,null,_(e.data[e.id].forms,(s,i)=>(t(),p(u,{"extra-description":e.data[e.id].forms[i],key:s,backGround:i},null,8,["extra-description","backGround"]))),128)),r("button",{class:"goToService",onClick:d[0]||(d[0]=(...s)=>m.showBotForm&&m.showBotForm(...s))},"\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")]),c(h,{id:e.id},null,8,["id"])]),c(x),c(S),c(C)],64)}var R=B(V,[["render",I],["__scopeId","data-v-b244ef9a"]]);export{R as default};
