import{c as o,d as c,h as r,M as d,t as u,s as m,y as f}from"./index-fe84b249.js";import{B as p}from"./_plugin-vue_export-helper-cf0546ee.js";const[v,a]=o("cell-group"),g={title:String,inset:Boolean,border:u};var h=c({name:v,inheritAttrs:!1,props:g,setup(e,{slots:t,attrs:l}){const n=()=>{var i;return r("div",m({class:[a({inset:e.inset}),{[p]:e.border&&!e.inset}]},l),[(i=t.default)==null?void 0:i.call(t)])},s=()=>r("div",{class:a("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(d,null,[s(),n()]):n()}});const P=f(h);export{P as C};
