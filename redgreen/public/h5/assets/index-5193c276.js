import{D as h,Q as g,r as c,a1 as y,aL as b,E as N,J as k,h as a,G as m,H as r,I as p,M as w,aM as B,N as $}from"./index-52dcdc50.js";import"./index-d1a413f5.js";import{F as V}from"./index-c0c37460.js";import{N as C}from"./index-fa99145a.js";import{_ as I,I as x}from"./_plugin-vue_export-helper-345f0f70.js";import{b as F,s as M,a as T}from"./function-call-e996e8e5.js";import{B as L}from"./index-71da4326.js";import"./use-expose-e45f4cc7.js";import"./use-placeholder-340bba9f.js";import"./use-touch-249ef53c.js";import"./index-0da5020b.js";const D={class:"container"},E={class:"amount"},S={class:"note"},U={__name:"index",setup(j){const{t:u}=h(),d=()=>history.back();g();const t=c(""),n=c(0);y(()=>{b({type:"addmoneymin"}).then(e=>{n.value=e.data||0})});const _=()=>{const e=n.value,o=Number(t.value);if(isNaN(o)||o<e){F({message:u("note",[e])});return}M({overlay:!0}),B({type:1,money:o}).then(s=>{console.log(s)}).finally(()=>{T()})};return(e,o)=>{const i=x,s=C,f=V,v=L;return N(),k(w,null,[a(s,{title:e.$t("mine.recharge"),"left-arrow":"",onClickLeft:d},{right:m(()=>[a(i,{size:"24","class-prefix":"iconfont",name:"icon-biaodanbianji",onClick:o[0]||(o[0]=l=>e.$router.push("/recharge-record"))})]),_:1},8,["title"]),r("div",D,[r("div",E,[a(f,{"left-icon":"refund-o",placeholder:e.$t("win.amount"),label:e.$t("win.amount"),modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=l=>t.value=l)},null,8,["placeholder","label","modelValue"])]),r("p",S,p(e.$t("note",[n.value])),1),a(v,{round:"",type:"primary",block:"",onClick:_},{default:m(()=>[$(p(e.$t("win.confirm")),1)]),_:1})])],64)}}},W=I(U,[["__scopeId","data-v-8e0f89e5"]]);export{W as default};
