import{D as N,ak as U,r as i,k as I,E as p,J as w,h as t,H as a,F as k,I as r,U as z,G as h,N as g,M as S,az as A}from"./index-e9887b11.js";import{C as D}from"./index-7d9232be.js";import"./index-f984c70e.js";import{f as E}from"./user-9ba2d881.js";import{a as d,F as M}from"./index-511b3e64.js";import{N as T}from"./index-e7717f6a.js";import{A as j}from"./AreaSelect-c5d33663.js";import{_ as q,I as G}from"./_plugin-vue_export-helper-551d2503.js";import{B as H}from"./index-9b87e129.js";import"./use-expose-cc51fab9.js";import"./http-d6b7bb6c.js";import"./use-id-59a053d7.js";import"./use-touch-e44ec860.js";import"./use-placeholder-0c85cdf7.js";import"./index-91e1d8f8.js";import"./index-0002d2a8.js";const J={class:"container"},L={class:"field-wrap"},R={class:"value"},x={class:"field-wrap"},K={class:"register-btn"},O={class:"links"},P={class:"login"},Q={__name:"Forget",setup(W){const{t:m}=N(),y=U(),b=()=>history.back(),u=i(0),n=I({username:"",password:"",area_code:"1"}),c=i({areaCodes:null,dialCode:"1",iso2:"us",name:"United States",priority:0}),f=i(!1),C=()=>{f.value=!0},v=i(!0),V=()=>{if(!n.username){d({message:m("login.inppass")});return}if(!n.password){d({message:m("mine.newpassword")});return}if(!v.value){d({message:m("login.policy")});return}const o={username:n.username,newpassword:n.password};E(o).then(e=>{if(e.code===0){d({message:e==null?void 0:e.msg});return}localStorage.removeItem("token"),y.push("/login")})};return(o,e)=>{const $=T,l=G,_=M,B=H,F=D;return p(),w(S,null,[t($,{title:o.$t("login.forgetblack"),"left-arrow":"",onClickLeft:b},null,8,["title"]),a("div",J,[a("div",L,[u.value===0?(p(),k(l,{key:0,size:"20","class-prefix":"iconfont",name:"icon-youjian"})):(p(),k(l,{key:1,size:"20","class-prefix":"iconfont",name:"icon-mobile"})),u.value===1?(p(),w("div",{key:2,class:"area",onClick:C},[a("div",R,"+"+r(c.value.dialCode),1),t(l,{name:"arrow-down"})])):z("",!0),t(_,{modelValue:n.username,"onUpdate:modelValue":e[0]||(e[0]=s=>n.username=s),placeholder:u.value===0?o.$t("login.inppass"):o.$t("login.phonenum")},null,8,["modelValue","placeholder"])]),a("div",x,[t(l,{size:"20","class-prefix":"iconfont",name:"icon-password"}),t(_,{modelValue:n.password,"onUpdate:modelValue":e[1]||(e[1]=s=>n.password=s),placeholder:o.$t("mine.newpassword")},null,8,["modelValue","placeholder"])]),a("div",K,[t(B,{type:"primary",block:"",round:"",onClick:V},{default:h(()=>[g(r(o.$t("login.Continue")),1)]),_:1})]),a("div",O,[a("div",P,[g(r(o.$t("login.account"))+" ",1),a("span",{onClick:e[2]||(e[2]=s=>o.$router.push("/login"))},r(o.$t("login.log")),1)]),t(F,{class:"remember",shape:"square",modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=s=>v.value=s)},{default:h(()=>[g(r(o.$t("login.agree"))+" ",1),a("span",{onClick:e[3]||(e[3]=A(s=>o.$router.push("/policy"),["stop"]))},r(o.$t("login.policy")),1)]),_:1},8,["modelValue"])])]),t(j,{show:f.value,"onUpdate:show":e[5]||(e[5]=s=>f.value=s),code:c.value,"onUpdate:code":e[6]||(e[6]=s=>c.value=s)},null,8,["show","code"])],64)}}},ce=q(Q,[["__scopeId","data-v-04a2f3b7"]]);export{ce as default};
