import{D as I,am as N,r as i,k as U,E as p,J as w,h as t,H as a,F as k,I as r,V as S,G as h,N as g,M as z,aK as A,aI as D}from"./index-cfd015a1.js";import{C as E}from"./index-e1818c75.js";import"./index-d85f54ec.js";import"./index-cd470fc3.js";import{F as M}from"./index-afe98760.js";import{N as T}from"./index-9eba02ff.js";import{A as j}from"./AreaSelect-09df7c02.js";import{_ as q,I as G}from"./_plugin-vue_export-helper-80d4114a.js";import{b as d}from"./function-call-aab94aa3.js";import{B as H}from"./index-bcb872c3.js";import"./use-expose-e3ba634b.js";import"./use-placeholder-c7a80008.js";import"./index-34cbf198.js";import"./index-96d16750.js";import"./use-touch-8690c9ee.js";import"./index-83207fe8.js";const J={class:"container"},K={class:"field-wrap"},L={class:"value"},R={class:"field-wrap"},x={class:"register-btn"},O={class:"links"},P={class:"login"},Q={__name:"Forget",setup(W){const{t:m}=I(),b=N(),y=()=>history.back(),u=i(0),n=U({username:"",password:"",area_code:"1"}),c=i({areaCodes:null,dialCode:"1",iso2:"us",name:"United States",priority:0}),v=i(!1),V=()=>{v.value=!0},f=i(!0),C=()=>{if(!n.username){d({message:m("login.inppass")});return}if(!n.password){d({message:m("mine.newpassword")});return}if(!f.value){d({message:m("login.policy")});return}const o={username:n.username,newpassword:n.password};A(o).then(e=>{if(e.code===0){d({message:e==null?void 0:e.msg});return}localStorage.removeItem("token"),b.push("/login")})};return(o,e)=>{const $=T,l=G,_=M,B=H,F=E;return p(),w(z,null,[t($,{title:o.$t("login.forgetblack"),"left-arrow":"",onClickLeft:y},null,8,["title"]),a("div",J,[a("div",K,[u.value===0?(p(),k(l,{key:0,size:"20","class-prefix":"iconfont",name:"icon-youjian"})):(p(),k(l,{key:1,size:"20","class-prefix":"iconfont",name:"icon-mobile"})),u.value===1?(p(),w("div",{key:2,class:"area",onClick:V},[a("div",L,"+"+r(c.value.dialCode),1),t(l,{name:"arrow-down"})])):S("",!0),t(_,{modelValue:n.username,"onUpdate:modelValue":e[0]||(e[0]=s=>n.username=s),placeholder:u.value===0?o.$t("login.inppass"):o.$t("login.phonenum")},null,8,["modelValue","placeholder"])]),a("div",R,[t(l,{size:"20","class-prefix":"iconfont",name:"icon-password"}),t(_,{modelValue:n.password,"onUpdate:modelValue":e[1]||(e[1]=s=>n.password=s),placeholder:o.$t("mine.newpassword")},null,8,["modelValue","placeholder"])]),a("div",x,[t(B,{type:"primary",block:"",round:"",onClick:C},{default:h(()=>[g(r(o.$t("login.Continue")),1)]),_:1})]),a("div",O,[a("div",P,[g(r(o.$t("login.account"))+" ",1),a("span",{onClick:e[2]||(e[2]=s=>o.$router.push("/login"))},r(o.$t("login.log")),1)]),t(F,{class:"remember",shape:"square",modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=s=>f.value=s)},{default:h(()=>[g(r(o.$t("login.agree"))+" ",1),a("span",{onClick:e[3]||(e[3]=D(s=>o.$router.push("/policy"),["stop"]))},r(o.$t("login.policy")),1)]),_:1},8,["modelValue"])])]),t(j,{show:v.value,"onUpdate:show":e[5]||(e[5]=s=>v.value=s),code:c.value,"onUpdate:code":e[6]||(e[6]=s=>c.value=s)},null,8,["show","code"])],64)}}},ce=q(Q,[["__scopeId","data-v-04a2f3b7"]]);export{ce as default};