import{c as i,A as f,t as p,d as b,l as x,e as V,X as g,at as k,h as P,ak as v,s as C,y as G}from"./index-fe84b249.js";import{u as O}from"./use-expose-62bc051b.js";import{c as _,s as E}from"./index-d1164e3e.js";const[$,F]=i("checkbox-group"),y=Symbol($),[K,N]=i("checkbox"),S=f({},_,{shape:String,bindGroup:p});var X=b({name:K,props:S,emits:["change","update:modelValue"],setup(e,{emit:l,slots:m}){const{parent:a}=x(y),r=o=>{const{name:s}=e,{max:d,modelValue:h}=a.props,t=h.slice();if(o)!(d&&t.length>=+d)&&!t.includes(s)&&(t.push(s),e.bindGroup&&a.updateValue(t));else{const c=t.indexOf(s);c!==-1&&(t.splice(c,1),e.bindGroup&&a.updateValue(t))}},n=V(()=>a&&e.bindGroup?a.props.modelValue.indexOf(e.name)!==-1:!!e.modelValue),u=(o=!n.value)=>{a&&e.bindGroup?r(o):l("update:modelValue",o)};return g(()=>e.modelValue,o=>l("change",o)),O({toggle:u,props:e,checked:n}),k(()=>e.modelValue),()=>P(E,C({bem:N,role:"checkbox",parent:a,checked:n.value,onToggle:u},e),v(m,["default","icon"]))}});const H=G(X);export{H as C};
