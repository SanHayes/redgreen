import{c as d,d as l,u as m,X as p,au as g,h as r,n as h,p as V,y as u,A as f,l as k,ak as v,s as P}from"./index-0cc0024e.js";import{c as S,s as b}from"./index-3d806379.js";const[c,C]=d("radio-group"),_={shape:String,disabled:Boolean,iconSize:h,direction:String,modelValue:V,checkedColor:String},i=Symbol(c);var $=l({name:c,props:_,emits:["change","update:modelValue"],setup(e,{emit:n,slots:t}){const{linkChildren:o}=m(i),s=a=>n("update:modelValue",a);return p(()=>e.modelValue,a=>n("change",a)),o({props:e,updateValue:s}),g(()=>e.modelValue),()=>{var a;return r("div",{class:C([e.direction]),role:"radiogroup"},[(a=t.default)==null?void 0:a.call(t)])}}});const N=u($),x=f({},S,{shape:String}),[R,w]=d("radio");var y=l({name:R,props:x,emits:["update:modelValue"],setup(e,{emit:n,slots:t}){const{parent:o}=k(i),s=()=>(o?o.props.modelValue:e.modelValue)===e.name,a=()=>{o?o.updateValue(e.name):n("update:modelValue",e.name)};return()=>r(b,P({bem:w,role:"radio",parent:o,checked:s(),onToggle:a},e),v(t,["default","icon"]))}});const z=u(y);export{z as R,N as a};
