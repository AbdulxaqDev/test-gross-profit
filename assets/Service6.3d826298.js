import{S as F,O as k,s as B}from"./OtherService.37944b47.js";import{_ as H,H as b,F as g,b as E,s as w,r,o as t,c as n,f as o,u as _,n as d,q as p,v as y,d as a,p as V,e as L,t as u,g as O}from"./index.2750b419.js";import{S as D,a as I}from"./ServiceExtraCard.8453f4e1.js";import{c as N}from"./searchLense.a463e85a.js";const T={components:{ServiceCardPro:F,ServiceExtraCard:D,ServiceExtraCardCorner:I,OtherService:k,HomeFooter:b,Form:g,HomeBottom:E},data(){return{id:5,data:B,showForm:w,imageLink:N}},methods:{showBotForm(){this.showForm.isVisible=!this.showForm.isVisible}}},G=i=>(V("data-v-0171fb1f"),i=i(),L(),i),M={class:"other-service"},P=G(()=>o("h3",null,[O("\u0413\u043B\u0430\u0432\u043D\u0430\u044F / \u0423\u0441\u043B\u0443\u0433\u0438 / "),o("b",null,"\u0410\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432")],-1)),q={class:"detailed"},j={class:"title-img"},z={class:"title"},A=["src"],J=["innerHTML"],K={key:0,class:"text left"};function Q(i,l,R,U,e,m){const v=r("ServiceExtraCard"),h=r("ServiceExtraCardCorner"),S=r("OtherService"),x=r("HomeFooter"),C=r("Form"),f=r("HomeBottom");return t(),n(d,null,[o("div",M,[P,o("div",q,[o("div",j,[o("div",null,[o("h1",z,_(e.data[e.id].title),1),o("p",null,_(e.data[e.id].description),1)]),o("img",{src:e.imageLink,alt:"Calculation"},null,8,A)]),o("p",{class:"text",innerHTML:e.data[e.id].text},null,8,J),(t(!0),n(d,null,p(e.data[e.id].extraDescription,(s,c)=>(t(),u(v,{"extra-description":e.data[e.id].extraDescription[c],key:s},null,8,["extra-description"]))),128)),e.id==1?(t(),n("p",K," \u0424\u043E\u0440\u043C\u044B \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435 ")):y("",!0),(t(!0),n(d,null,p(e.data[e.id].forms,(s,c)=>(t(),u(h,{"extra-description":e.data[e.id].forms[c],key:s,backGround:c},null,8,["extra-description","backGround"]))),128)),o("button",{class:"goToService",onClick:l[0]||(l[0]=(...s)=>m.showBotForm&&m.showBotForm(...s))},"\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")]),a(S,{id:e.id},null,8,["id"])]),a(x),a(C),a(f)],64)}var $=H(T,[["render",Q],["__scopeId","data-v-0171fb1f"]]);export{$ as default};
