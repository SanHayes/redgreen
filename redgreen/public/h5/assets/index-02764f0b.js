import{I as S}from"./index-802b872b.js";import{p as g,n as x,d as z,A as _,aw as y,t as w,r as B,e as r,h as t,z as v}from"./index-66f9120d.js";const D={name:g,disabled:Boolean,iconSize:x,modelValue:g,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var V=z({props:_({},D,{bem:y(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:w}),emits:["click","toggle"],setup(e,{emit:h,slots:d}){const k=B(),l=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},a=r(()=>{if(e.parent&&e.bindGroup){const n=l("disabled")||e.disabled;if(e.role==="checkbox"){const c=l("modelValue").length,o=l("max"),i=o&&c>=+o;return n||i&&!e.checked}return n}return e.disabled}),C=r(()=>l("direction")),s=r(()=>{const n=e.checkedColor||l("checkedColor");if(n&&e.checked&&!a.value)return{borderColor:n,backgroundColor:n}}),u=r(()=>e.shape||l("shape")||"round"),P=n=>{const{target:c}=n,o=k.value,i=o===c||(o==null?void 0:o.contains(c));!a.value&&(i||!e.labelDisabled)&&h("toggle"),h("click",n)},m=()=>{var n,c;const{bem:o,checked:i}=e,b=e.iconSize||l("iconSize");return t("div",{ref:k,class:o("icon",[u.value,{disabled:a.value,checked:i}]),style:u.value!=="dot"?{fontSize:v(b)}:{width:v(b),height:v(b),borderColor:(n=s.value)==null?void 0:n.borderColor}},[d.icon?d.icon({checked:i,disabled:a.value}):u.value!=="dot"?t(S,{name:"success",style:s.value},null):t("div",{class:o("icon--dot__icon"),style:{backgroundColor:(c=s.value)==null?void 0:c.backgroundColor}},null)])},f=()=>{if(d.default)return t("span",{class:e.bem("label",[e.labelPosition,{disabled:a.value}])},[d.default()])};return()=>{const n=e.labelPosition==="left"?[f(),m()]:[m(),f()];return t("div",{role:e.role,class:e.bem([{disabled:a.value,"label-disabled":e.labelDisabled},C.value]),tabindex:a.value?void 0:0,"aria-checked":e.checked,onClick:P},[n])}}});export{D as c,V as s};
