import{r as d,k as U,E as p,J as k,h as t,H as n,G as c,F as w,I as s,U as B,N as v,M as F,am as N}from"./index-908feb2e.js";import{C as I}from"./index-2fbed897.js";import"./index-ab2c6d86.js";import"./index-13600634.js";import{F as T}from"./index-226b82a2.js";import{T as z,a as A}from"./index-11ec6053.js";import"./index-012562ab.js";import{N as S}from"./index-b22b509f.js";import{A as E}from"./AreaSelect-cbdf2c0b.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{B as j}from"./index-b3e4cb7e.js";import{I as q}from"./index-34404773.js";import"./use-touch-c498a7d2.js";import"./use-placeholder-66d0a70b.js";import"./index-2d8844b8.js";const D={class:"container"},G={class:"field-wrap"},H={class:"value"},J={class:"field-wrap"},L={class:"register-btn"},K={class:"links"},O={class:"login"},P={__name:"Forget",setup(Q){const b=()=>history.back(),l=d(0),i=U({username:"",password:"",area_code:"1"}),m=d({areaCodes:null,dialCode:"1",iso2:"us",name:"United States",priority:0}),u=d(!1),$=()=>{u.value=!0},_=d(!0);return(o,e)=>{const y=S,f=A,h=z,r=q,g=T,V=j,C=I;return p(),k(F,null,[t(y,{title:o.$t("login.forgetblack"),"left-arrow":"",onClickLeft:b},null,8,["title"]),n("div",D,[t(h,{type:"card",active:l.value,"onUpdate:active":e[0]||(e[0]=a=>l.value=a)},{default:c(()=>[t(f,{title:o.$t("login.email")},null,8,["title"]),t(f,{title:o.$t("login.phone")},null,8,["title"])]),_:1},8,["active"]),n("div",G,[l.value===0?(p(),w(r,{key:0,size:"20","class-prefix":"iconfont",name:"icon-youjian"})):(p(),w(r,{key:1,size:"20","class-prefix":"iconfont",name:"icon-mobile"})),l.value===1?(p(),k("div",{key:2,class:"area",onClick:$},[n("div",H,"+"+s(m.value.dialCode),1),t(r,{name:"arrow-down"})])):B("",!0),t(g,{modelValue:i.username,"onUpdate:modelValue":e[1]||(e[1]=a=>i.username=a),placeholder:l.value===0?o.$t("login.inppass"):o.$t("login.phonenum")},null,8,["modelValue","placeholder"])]),n("div",J,[t(r,{size:"20","class-prefix":"iconfont",name:"icon-password"}),t(g,{modelValue:i.password,"onUpdate:modelValue":e[2]||(e[2]=a=>i.password=a),placeholder:o.$t("mine.newpassword")},null,8,["modelValue","placeholder"])]),n("div",L,[t(V,{type:"primary",block:"",round:""},{default:c(()=>[v(s(o.$t("login.Continue")),1)]),_:1})]),n("div",K,[n("div",O,[v(s(o.$t("login.account"))+" ",1),n("span",{onClick:e[3]||(e[3]=a=>o.$router.push("/login"))},s(o.$t("login.log")),1)]),t(C,{class:"remember",shape:"square",modelValue:_.value,"onUpdate:modelValue":e[5]||(e[5]=a=>_.value=a)},{default:c(()=>[v(s(o.$t("login.agree"))+" ",1),n("span",{onClick:e[4]||(e[4]=N(a=>o.$router.push("/policy"),["stop"]))},s(o.$t("login.policy")),1)]),_:1},8,["modelValue"])])]),t(E,{show:u.value,"onUpdate:show":e[6]||(e[6]=a=>u.value=a),code:m.value,"onUpdate:code":e[7]||(e[7]=a=>m.value=a)},null,8,["show","code"])],64)}}},de=M(P,[["__scopeId","data-v-576683e1"]]);export{de as default};
