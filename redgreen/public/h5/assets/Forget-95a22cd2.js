import{D as N,ak as U,r as i,k as I,E as p,J as w,h as t,H as a,F as k,I as r,U as z,G as h,N as g,M as S,az as A}from"./index-a76ee34d.js";import{C as D}from"./index-351a48b9.js";import"./index-97198774.js";import{f as E}from"./user-e8209e15.js";import{a as d,F as M}from"./index-6a9f4c3c.js";import{N as T}from"./index-17bcf195.js";import{A as j}from"./AreaSelect-85692f8c.js";import{_ as q,I as G}from"./_plugin-vue_export-helper-1e07be8f.js";import{B as H}from"./index-cb9c67db.js";import"./use-expose-f24e194a.js";import"./http-921e1080.js";import"./use-id-d3946d26.js";import"./use-touch-24e3c7a8.js";import"./use-placeholder-64908429.js";import"./index-284d790f.js";import"./index-a6a51b4f.js";const J={class:"container"},L={class:"field-wrap"},R={class:"value"},x={class:"field-wrap"},K={class:"register-btn"},O={class:"links"},P={class:"login"},Q={__name:"Forget",setup(W){const{t:m}=N(),y=U(),b=()=>history.back(),u=i(0),n=I({username:"",password:"",area_code:"1"}),c=i({areaCodes:null,dialCode:"1",iso2:"us",name:"United States",priority:0}),f=i(!1),C=()=>{f.value=!0},v=i(!0),V=()=>{if(!n.username){d({message:m("login.inppass")});return}if(!n.password){d({message:m("mine.newpassword")});return}if(!v.value){d({message:m("login.policy")});return}const o={username:n.username,newpassword:n.password};E(o).then(e=>{if(e.code===0){d({message:e==null?void 0:e.msg});return}localStorage.removeItem("token"),y.push("/login")})};return(o,e)=>{const $=T,l=G,_=M,B=H,F=D;return p(),w(S,null,[t($,{title:o.$t("login.forgetblack"),"left-arrow":"",onClickLeft:b},null,8,["title"]),a("div",J,[a("div",L,[u.value===0?(p(),k(l,{key:0,size:"20","class-prefix":"iconfont",name:"icon-youjian"})):(p(),k(l,{key:1,size:"20","class-prefix":"iconfont",name:"icon-mobile"})),u.value===1?(p(),w("div",{key:2,class:"area",onClick:C},[a("div",R,"+"+r(c.value.dialCode),1),t(l,{name:"arrow-down"})])):z("",!0),t(_,{modelValue:n.username,"onUpdate:modelValue":e[0]||(e[0]=s=>n.username=s),placeholder:u.value===0?o.$t("login.inppass"):o.$t("login.phonenum")},null,8,["modelValue","placeholder"])]),a("div",x,[t(l,{size:"20","class-prefix":"iconfont",name:"icon-password"}),t(_,{modelValue:n.password,"onUpdate:modelValue":e[1]||(e[1]=s=>n.password=s),placeholder:o.$t("mine.newpassword")},null,8,["modelValue","placeholder"])]),a("div",K,[t(B,{type:"primary",block:"",round:"",onClick:V},{default:h(()=>[g(r(o.$t("login.Continue")),1)]),_:1})]),a("div",O,[a("div",P,[g(r(o.$t("login.account"))+" ",1),a("span",{onClick:e[2]||(e[2]=s=>o.$router.push("/login"))},r(o.$t("login.log")),1)]),t(F,{class:"remember",shape:"square",modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=s=>v.value=s)},{default:h(()=>[g(r(o.$t("login.agree"))+" ",1),a("span",{onClick:e[3]||(e[3]=A(s=>o.$router.push("/policy"),["stop"]))},r(o.$t("login.policy")),1)]),_:1},8,["modelValue"])])]),t(j,{show:f.value,"onUpdate:show":e[5]||(e[5]=s=>f.value=s),code:c.value,"onUpdate:code":e[6]||(e[6]=s=>c.value=s)},null,8,["show","code"])],64)}}},ce=q(Q,[["__scopeId","data-v-04a2f3b7"]]);export{ce as default};