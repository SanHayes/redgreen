import{B as p,A as X,r as a}from"./index-fd6e4a9e.js";import{T as h}from"./index-d40ec26d.js";function x(t){const e=p();e&&X(e.proxy,t)}function Y(t,e){return t>e?"horizontal":e>t?"vertical":""}function z(){const t=a(0),e=a(0),l=a(0),n=a(0),u=a(0),o=a(0),s=a(""),c=a(!0),T=()=>s.value==="vertical",m=()=>s.value==="horizontal",i=()=>{l.value=0,n.value=0,u.value=0,o.value=0,s.value="",c.value=!0};return{move:r=>{const v=r.touches[0];l.value=(v.clientX<0?0:v.clientX)-t.value,n.value=v.clientY-e.value,u.value=Math.abs(l.value),o.value=Math.abs(n.value);const f=10;(!s.value||u.value<f&&o.value<f)&&(s.value=Y(u.value,o.value)),c.value&&(u.value>h||o.value>h)&&(c.value=!1)},start:r=>{i(),t.value=r.touches[0].clientX,e.value=r.touches[0].clientY},reset:i,startX:t,startY:e,deltaX:l,deltaY:n,offsetX:u,offsetY:o,direction:s,isVertical:T,isHorizontal:m,isTap:c}}export{z as a,x as u};