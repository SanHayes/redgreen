import{r as z,u as I}from"./index-0932ee3e.js";import{b as R,I as C}from"./_plugin-vue_export-helper-696b8212.js";import{L as p}from"./index-6b9ce884.js";import{c as D,A as L,a as l,n as N,d as q,h as o,ao as w,y as O}from"./index-a268cf0b.js";const[U,a]=D("button"),_=L({},z,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:N,loadingText:String,loadingType:String,iconPosition:l("left")});var A=q({name:U,props:_,emits:["click"],setup(e,{emit:g,slots:t}){const f=I(),m=()=>t.loading?t.loading():o(p,{size:e.loadingSize,type:e.loadingType,class:a("loading")},null),c=()=>{if(e.loading)return m();if(t.icon)return o("div",{class:a("icon")},[t.icon()]);if(e.icon)return o(C,{name:e.icon,class:a("icon"),classPrefix:e.iconPrefix},null)},b=()=>{let n;if(e.loading?n=e.loadingText:n=t.default?t.default():e.text,n)return o("span",{class:a("text")},[n])},x=()=>{const{color:n,plain:r}=e;if(n){const i={color:r?n:"white"};return r||(i.background=n),n.includes("gradient")?i.border=0:i.borderColor=n,i}},y=n=>{e.loading?w(n):e.disabled||(g("click",n),f())};return()=>{const{tag:n,type:r,size:i,block:S,round:B,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:h,iconPosition:u}=e,v=[a([r,i,{plain:P,block:S,round:B,square:k,loading:T,disabled:s,hairline:d}]),{[R]:d}];return o(n,{type:h,class:v,style:x(),disabled:s,onClick:y},{default:()=>[o("div",{class:a("content")},[u==="left"&&c(),b(),u==="right"&&c()])]})}}});const G=O(A);export{G as B};
