import{S as f,O as k,s as B}from"./OtherService.ae2fe825.js";import{_ as H,H as g,F as E,b,s as w,l as y,r,o as t,c as n,f as o,u as _,n as d,q as p,v as V,d as a,p as L,e as O,t as u,g as D}from"./index.68ac7d14.js";import{S as I,a as N}from"./ServiceExtraCard.ff8dd42e.js";const T={components:{ServiceCardPro:f,ServiceExtraCard:I,ServiceExtraCardCorner:N,OtherService:k,HomeFooter:g,Form:E,HomeBottom:b},data(){return{id:3,data:B,showForm:w,imageLink:y}},methods:{showBotForm(){this.showForm.isVisible=!this.showForm.isVisible}}},G=i=>(L("data-v-c27f068a"),i=i(),O(),i),M={class:"other-service"},P=G(()=>o("h3",null,[D("\u0413\u043B\u0430\u0432\u043D\u0430\u044F / \u0423\u0441\u043B\u0443\u0433\u0438 / "),o("b",null,"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0441\u0438\u043B\u044B")],-1)),q={class:"detailed"},j={class:"title-img"},z={class:"title"},A=["src"],J=["innerHTML"],K={key:0,class:"text left"};function Q(i,l,R,U,e,m){const v=r("ServiceExtraCard"),h=r("ServiceExtraCardCorner"),S=r("OtherService"),x=r("HomeFooter"),C=r("Form"),F=r("HomeBottom");return t(),n(d,null,[o("div",M,[P,o("div",q,[o("div",j,[o("div",null,[o("h1",z,_(e.data[e.id].title),1),o("p",null,_(e.data[e.id].description),1)]),o("img",{src:e.imageLink,alt:"Calculation"},null,8,A)]),o("p",{class:"text",innerHTML:e.data[e.id].text},null,8,J),(t(!0),n(d,null,p(e.data[e.id].extraDescription,(s,c)=>(t(),u(v,{"extra-description":e.data[e.id].extraDescription[c],key:s},null,8,["extra-description"]))),128)),e.id==1?(t(),n("p",K," \u0424\u043E\u0440\u043C\u044B \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435 ")):V("",!0),(t(!0),n(d,null,p(e.data[e.id].forms,(s,c)=>(t(),u(h,{"extra-description":e.data[e.id].forms[c],key:s,backGround:c},null,8,["extra-description","backGround"]))),128)),o("button",{class:"goToService",onClick:l[0]||(l[0]=(...s)=>m.showBotForm&&m.showBotForm(...s))},"\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")]),a(S,{id:e.id},null,8,["id"])]),a(x),a(C),a(F)],64)}var Z=H(T,[["render",Q],["__scopeId","data-v-c27f068a"]]);export{Z as default};
