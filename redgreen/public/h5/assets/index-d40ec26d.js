import{aB as E,V as v,c as S,d as T,e as B,z as r,h as m,n as P,a as R,t as $,i as p,aR as y,y as h,aS as x,x as D}from"./index-fd6e4a9e.js";const f="van-hairline",K=`${f}--top`,U=`${f}--left`,Y=`${f}--bottom`,k=`${f}--surround`,V=`${f}--top-bottom`,j="van-haptics-feedback",H=Symbol("van-form"),W=500,Z=5,I=Symbol();function X(e){const o=E(I,null);o&&v(o,s=>{s&&e()})}const[F,_]=S("badge"),C={dot:Boolean,max:P,tag:R("div"),color:String,offset:Array,content:P,showZero:$,position:R("top-right")};var N=T({name:F,props:C,setup(e,{slots:o}){const s=()=>{if(o.content)return!0;const{content:t,showZero:n}=e;return p(t)&&t!==""&&(n||t!==0&&t!=="0")},l=()=>{const{dot:t,max:n,content:a}=e;if(!t&&s())return o.content?o.content():p(n)&&y(a)&&+a>+n?`${n}+`:a},u=t=>t.startsWith("-")?t.replace("-",""):`-${t}`,O=B(()=>{const t={background:e.color};if(e.offset){const[n,a]=e.offset,{position:d}=e,[c,g]=d.split("-");o.default?(typeof a=="number"?t[c]=r(c==="top"?a:-a):t[c]=c==="top"?r(a):u(a),typeof n=="number"?t[g]=r(g==="left"?n:-n):t[g]=g==="left"?r(n):u(n)):(t.marginTop=r(a),t.marginLeft=r(n))}return t}),i=()=>{if(s()||e.dot)return m("div",{class:_([e.position,{dot:e.dot,fixed:!!o.default}]),style:O.value},[l()])};return()=>{if(o.default){const{tag:t}=e;return m(t,{class:_("wrapper")},{default:()=>[o.default(),i()]})}return i()}}});const w=h(N),[A,b]=S("icon"),L=e=>e==null?void 0:e.includes("/"),M={dot:Boolean,tag:R("i"),name:String,size:P,badge:P,color:String,badgeProps:Object,classPrefix:String};var z=T({name:A,props:M,setup(e,{slots:o}){const s=E(x,null),l=B(()=>e.classPrefix||(s==null?void 0:s.iconPrefix)||b());return()=>{const{tag:u,dot:O,name:i,size:t,badge:n,color:a}=e,d=L(i);return m(w,D({dot:O,tag:u,class:[l.value,d?"":`${l.value}-${i}`],style:{color:a,fontSize:r(t)},content:n},e.badgeProps),{default:()=>{var c;return[(c=o.default)==null?void 0:c.call(o),d&&m("img",{class:b("image"),src:i},null)]}})}}});const q=h(z);export{V as B,H as F,j as H,q as I,W as L,I as P,Z as T,w as a,k as b,U as c,K as d,Y as e,X as o};
