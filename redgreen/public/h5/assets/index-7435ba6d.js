import{D as d,r as u,E as f,J as v,h as n,H as s,I as r,G as h,M as b,N as w}from"./index-908feb2e.js";import"./index-13600634.js";import{F as y}from"./index-226b82a2.js";import{N as g}from"./index-b22b509f.js";import{w as k}from"./user-e8be04ce.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{a as B,s as V,c as $}from"./function-call-7beca3ef.js";import{B as x}from"./index-b3e4cb7e.js";import"./use-touch-c498a7d2.js";import"./index-34404773.js";import"./use-placeholder-66d0a70b.js";import"./http-96701e1c.js";const T={class:"container"},C={class:"amount"},F={class:"note"},I={__name:"index",setup(D){const{t:l}=d(),i=()=>history.back(),e=u(""),m=()=>{const o=Number(e.value);if(o<600){B({message:l("note")});return}V({overlay:!0}),k({type:1,money:o}).then(a=>{console.log(a)}).finally(()=>{$()})};return(o,t)=>{const a=g,c=y,p=x;return f(),v(b,null,[n(a,{title:o.$t("mine.recharge"),"left-arrow":"",onClickLeft:i},null,8,["title"]),s("div",T,[s("div",C,[n(c,{"left-icon":"refund-o",placeholder:o.$t("win.amount"),label:o.$t("win.amount"),modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=_=>e.value=_)},null,8,["placeholder","label","modelValue"])]),s("p",F,r(o.$t("note")),1),n(p,{round:"",type:"primary",block:"",onClick:m},{default:h(()=>[w(r(o.$t("win.confirm")),1)]),_:1})])],64)}}},K=N(I,[["__scopeId","data-v-eeb87d72"]]);export{K as default};