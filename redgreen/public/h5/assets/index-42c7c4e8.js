import{c as x,d as S,r as R,u as H,t as P,h as n,y as T,A as p,l as z,e as A,n as L,p as M,a as U,k as V,s as Y,ak as j,z as q,aR as G,aS as _,aT as J}from"./index-a268cf0b.js";import{p as Q,e as W,P as X,c as Z}from"./function-call-6359e927.js";import{B as k}from"./index-9bb121e3.js";import{u as ee}from"./use-placeholder-b6f2a168.js";import{u as te}from"./use-expose-2bc2fd26.js";import{r as ne,u as oe}from"./index-0932ee3e.js";import{c as ae,d as le}from"./_plugin-vue_export-helper-696b8212.js";const[O,D]=x("action-bar"),F=Symbol(O),se={placeholder:Boolean,safeAreaInsetBottom:P};var ce=S({name:O,props:se,setup(e,{slots:r}){const o=R(),i=ee(o,D),{linkChildren:l}=H(F);l();const f=()=>{var m;return n("div",{ref:o,class:[D(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(m=r.default)==null?void 0:m.call(r)])};return()=>e.placeholder?i(f):f()}});const re=T(ce),[ie,ue]=x("action-bar-button"),de=p({},ne,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var fe=S({name:ie,props:de,setup(e,{slots:r}){const o=oe(),{parent:i,index:l}=z(F),f=A(()=>{if(i){const s=i.children[l.value-1];return!(s&&"isButton"in s)}}),m=A(()=>{if(i){const s=i.children[l.value+1];return!(s&&"isButton"in s)}});return te({isButton:!0}),()=>{const{type:s,icon:B,text:g,color:C,loading:v,disabled:w}=e;return n(k,{class:ue([s,{last:m.value,first:f.value}]),size:"large",type:s,icon:B,color:C,loading:v,disabled:w,onClick:o},{default:()=>[r.default?r.default():g]})}}});const E=T(fe),[me,c,b]=x("dialog"),Be=p({},Q,{title:String,theme:String,width:L,message:[String,Function],callback:Function,allowHtml:Boolean,className:M,transition:U("van-dialog-bounce"),messageAlign:String,closeOnPopstate:P,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:P,closeOnClickOverlay:Boolean}),ge=[...W,"transition","closeOnPopstate"];var he=S({name:me,props:Be,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:r,slots:o}){const i=R(),l=V({confirm:!1,cancel:!1}),f=t=>r("update:show",t),m=t=>{var a;f(!1),(a=e.callback)==null||a.call(e,t)},s=t=>()=>{e.show&&(r(t),e.beforeClose?(l[t]=!0,Z(e.beforeClose,{args:[t],done(){m(t),l[t]=!1},canceled(){l[t]=!1}})):m(t))},B=s("cancel"),g=s("confirm"),C=G(t=>{var a,u;if(t.target!==((u=(a=i.value)==null?void 0:a.popupRef)==null?void 0:u.value))return;({Enter:e.showConfirmButton?g:_,Escape:e.showCancelButton?B:_})[t.key](),r("keydown",t)},["enter","esc"]),v=()=>{const t=o.title?o.title():e.title;if(t)return n("div",{class:c("header",{isolated:!e.message&&!o.default})},[t])},w=t=>{const{message:a,allowHtml:u,messageAlign:d}=e,h=c("message",{"has-title":t,[d]:d}),y=J(a)?a():a;return u&&typeof y=="string"?n("div",{class:h,innerHTML:y},null):n("div",{class:h},[y])},I=()=>{if(o.default)return n("div",{class:c("content")},[o.default()]);const{title:t,message:a,allowHtml:u}=e;if(a){const d=!!(t||o.title);return n("div",{key:u?1:0,class:c("content",{isolated:!d})},[w(d)])}},K=()=>n("div",{class:[le,c("footer")]},[e.showCancelButton&&n(k,{size:"large",text:e.cancelButtonText||b("cancel"),class:c("cancel"),style:{color:e.cancelButtonColor},loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(k,{size:"large",text:e.confirmButtonText||b("confirm"),class:[c("confirm"),{[ae]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),N=()=>n(re,{class:c("footer")},{default:()=>[e.showCancelButton&&n(E,{type:"warning",text:e.cancelButtonText||b("cancel"),class:c("cancel"),color:e.cancelButtonColor,loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(E,{type:"danger",text:e.confirmButtonText||b("confirm"),class:c("confirm"),color:e.confirmButtonColor,loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),$=()=>o.footer?o.footer():e.theme==="round-button"?N():K();return()=>{const{width:t,title:a,theme:u,message:d,className:h}=e;return n(X,Y({ref:i,role:"dialog",class:[c([u]),h],style:{width:q(t)},tabindex:0,"aria-labelledby":a||d,onKeydown:C,"onUpdate:show":f},j(e,ge)),{default:()=>[v(),I(),$()]})}}});const xe=T(he);export{xe as D};
