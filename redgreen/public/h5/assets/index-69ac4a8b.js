import{D as h,r as m,$ as g,E as y,J as b,h as t,G as c,H as r,I as p,M as N,N as k}from"./index-7c2b3931.js";import"./index-66bf4a08.js";import{F as w}from"./index-ed084836.js";import{N as $}from"./index-c0175f7a.js";import{f as B,g as V}from"./user-02900f6d.js";import{u as C}from"./user-e0afeb80.js";import{_ as I,I as x}from"./_plugin-vue_export-helper-d9753a3e.js";import{a as F,s as T,c as M}from"./function-call-d2a53b5c.js";import{B as D}from"./index-f9e2e701.js";import"./use-id-bf35341c.js";import"./use-expose-7cf3d07e.js";import"./use-placeholder-6fc5606a.js";import"./http-eade67d5.js";import"./index-7047aa76.js";import"./use-touch-b4041db2.js";const E={class:"container"},L={class:"amount"},S={class:"note"},U={__name:"index",setup(j){const{t:u}=h(),d=()=>history.back();C();const n=m(""),a=m(0);g(()=>{B({type:"addmoneymin"}).then(o=>{a.value=o.data||0})});const _=()=>{const o=a.value,e=Number(n.value);if(isNaN(e)||e<o){F({message:u("note",[o])});return}T({overlay:!0}),V({type:1,money:e}).then(s=>{console.log(s)}).finally(()=>{M()})};return(o,e)=>{const i=x,s=$,f=w,v=D;return y(),b(N,null,[t(s,{title:o.$t("mine.recharge"),"left-arrow":"",onClickLeft:d},{right:c(()=>[t(i,{size:"24","class-prefix":"iconfont",name:"icon-biaodanbianji",onClick:e[0]||(e[0]=l=>o.$router.push("/recharge-record"))})]),_:1},8,["title"]),r("div",E,[r("div",L,[t(f,{"left-icon":"refund-o",placeholder:o.$t("win.amount"),label:o.$t("win.amount"),modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l)},null,8,["placeholder","label","modelValue"])]),r("p",S,p(o.$t("note",[a.value])),1),t(v,{round:"",type:"primary",block:"",onClick:_},{default:c(()=>[k(p(o.$t("win.confirm")),1)]),_:1})])],64)}}},oo=I(U,[["__scopeId","data-v-8e0f89e5"]]);export{oo as default};
