import{r as p,k as U,E as m,J as w,h as a,H as s,G as v,F as V,I as i,U as z,N as f,M as B,am as N}from"./index-908feb2e.js";import{C as F}from"./index-2fbed897.js";import"./index-ab2c6d86.js";import"./index-13600634.js";import{F as I}from"./index-226b82a2.js";import{T,a as j}from"./index-11ec6053.js";import"./index-012562ab.js";import{N as A}from"./index-b22b509f.js";import{A as R}from"./AreaSelect-cbdf2c0b.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{B as E}from"./index-b3e4cb7e.js";import{I as M}from"./index-34404773.js";import"./use-touch-c498a7d2.js";import"./use-placeholder-66d0a70b.js";import"./index-2d8844b8.js";const q={class:"container"},D={class:"field-wrap"},G={class:"value"},H={class:"field-wrap"},J={class:"field-wrap"},L={class:"field-wrap"},K={class:"field-wrap"},O={class:"register-btn"},P={class:"links"},Q={class:"login"},W={__name:"Register",setup(X){const h=()=>history.back(),r=p(0),n=U({username:"",password:"",area_code:"1"}),u=p({areaCodes:null,dialCode:"1",iso2:"us",name:"United States",priority:0}),c=p(!1),k=()=>{c.value=!0},_=p(!0);return(l,e)=>{const $=A,g=j,y=T,t=M,d=I,b=E,C=F;return m(),w(B,null,[a($,{title:l.$t("login.register"),"left-arrow":"",onClickLeft:h},null,8,["title"]),s("div",q,[a(y,{type:"card",active:r.value,"onUpdate:active":e[0]||(e[0]=o=>r.value=o)},{default:v(()=>[a(g,{title:l.$t("login.email")},null,8,["title"]),a(g,{title:l.$t("login.phone")},null,8,["title"])]),_:1},8,["active"]),s("div",D,[r.value===0?(m(),V(t,{key:0,size:"20","class-prefix":"iconfont",name:"icon-youjian"})):(m(),V(t,{key:1,size:"20","class-prefix":"iconfont",name:"icon-mobile"})),r.value===1?(m(),w("div",{key:2,class:"area",onClick:k},[s("div",G,"+"+i(u.value.dialCode),1),a(t,{name:"arrow-down"})])):z("",!0),a(d,{modelValue:n.username,"onUpdate:modelValue":e[1]||(e[1]=o=>n.username=o),placeholder:r.value===0?l.$t("login.inpemail"):l.$t("login.phonenum")},null,8,["modelValue","placeholder"])]),s("div",H,[a(t,{size:"20","class-prefix":"iconfont",name:"icon-password"}),a(d,{modelValue:n.password,"onUpdate:modelValue":e[2]||(e[2]=o=>n.password=o),placeholder:l.$t("login.inppass")},null,8,["modelValue","placeholder"])]),s("div",J,[a(t,{size:"20","class-prefix":"iconfont",name:"icon-shuzijiaoyijiami"}),a(d,{modelValue:n.password,"onUpdate:modelValue":e[3]||(e[3]=o=>n.password=o),placeholder:l.$t("login.withdraw")},null,8,["modelValue","placeholder"])]),s("div",L,[a(t,{size:"20","class-prefix":"iconfont",name:"icon-whatsapp"}),a(d,{modelValue:n.password,"onUpdate:modelValue":e[4]||(e[4]=o=>n.password=o),placeholder:l.$t("login.whats")},null,8,["modelValue","placeholder"])]),s("div",K,[a(t,{size:"20","class-prefix":"iconfont",name:"icon-a-ziyuan104"}),a(d,{modelValue:n.password,"onUpdate:modelValue":e[5]||(e[5]=o=>n.password=o),placeholder:l.$t("login.invite")},null,8,["modelValue","placeholder"])]),s("div",O,[a(b,{type:"primary",block:"",round:""},{default:v(()=>[f(i(l.$t("login.register")),1)]),_:1})]),s("div",P,[s("div",Q,[f(i(l.$t("login.account"))+" ",1),s("span",{onClick:e[6]||(e[6]=o=>l.$router.push("/login"))},i(l.$t("login.log")),1)]),a(C,{class:"remember",shape:"square",modelValue:_.value,"onUpdate:modelValue":e[8]||(e[8]=o=>_.value=o)},{default:v(()=>[f(i(l.$t("login.agree"))+" ",1),s("span",{onClick:e[7]||(e[7]=N(o=>l.$router.push("/policy"),["stop"]))},i(l.$t("login.policy")),1)]),_:1},8,["modelValue"])])]),a(R,{show:c.value,"onUpdate:show":e[9]||(e[9]=o=>c.value=o),code:u.value,"onUpdate:code":e[10]||(e[10]=o=>u.value=o)},null,8,["show","code"])],64)}}},ue=S(W,[["__scopeId","data-v-e577355d"]]);export{ue as default};
