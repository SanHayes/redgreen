import{u as I}from"./use-placeholder-66d0a70b.js";import{H as s,e as R,I as b}from"./index-34404773.js";import{c as A,d as C,r as w,n as P,t as o,q as L,h as a,y as N}from"./index-908feb2e.js";const[S,t]=A("nav-bar"),y={title:String,fixed:Boolean,zIndex:P,border:o,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:o};var E=C({name:S,props:y,emits:["clickLeft","clickRight"],setup(e,{emit:l,slots:r}){const c=w(),f=I(c,t),d=n=>l("clickLeft",n),h=n=>l("clickRight",n),x=()=>r.left?r.left():[e.leftArrow&&a(b,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&a("span",{class:t("text")},[e.leftText])],g=()=>r.right?r.right():a("span",{class:t("text")},[e.rightText]),i=()=>{const{title:n,fixed:u,border:v,zIndex:m}=e,T=L(m),k=e.leftArrow||e.leftText||r.left,B=e.rightText||r.right;return a("div",{ref:c,style:T,class:[t({fixed:u}),{[R]:v,"van-safe-area-top":e.safeAreaInsetTop}]},[a("div",{class:t("content")},[k&&a("div",{class:[t("left"),e.clickable?s:""],onClick:d},[x()]),a("div",{class:[t("title"),"van-ellipsis"]},[r.title?r.title():n]),B&&a("div",{class:[t("right"),e.clickable?s:""],onClick:h},[g()])])])};return()=>e.fixed&&e.placeholder?f(i):i()}});const D=N(E);export{D as N};
