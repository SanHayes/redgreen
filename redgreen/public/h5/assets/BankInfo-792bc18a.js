import{r as _,$ as f,E as o,J as k,h as a,H as b,F as i,G as u,U as $,M as y,N as s,I as m}from"./index-7c2b3931.js";import{C as B}from"./index-995b9d95.js";import{C}from"./index-66bf4a08.js";import{N}from"./index-c0175f7a.js";import{i as I}from"./user-02900f6d.js";import{_ as g}from"./_plugin-vue_export-helper-d9753a3e.js";import{B as h}from"./index-f9e2e701.js";import"./use-placeholder-6fc5606a.js";import"./http-eade67d5.js";const V={class:"info"},A={__name:"BankInfo",setup(E){const v=()=>history.back(),t=_();return f(()=>{I().then(e=>{e!=null&&e.data&&(t.value=e.data)})}),(e,l)=>{const p=N,n=C,d=B,r=h;return o(),k(y,null,[a(p,{title:e.$t("mine.card"),"left-arrow":"",onClickLeft:v},null,8,["title"]),b("div",V,[t.value?(o(),i(d,{key:0,inset:"",class:"bank-info"},{default:u(()=>[a(n,{title:e.$t("bank.number"),value:t.value.Account_number},null,8,["title","value"]),a(n,{title:e.$t("bank.name"),value:t.value.Actual_name},null,8,["title","value"]),a(n,{title:e.$t("bank.address"),value:t.value.Address},null,8,["title","value"]),a(n,{title:e.$t("bank.city"),value:t.value.City},null,8,["title","value"]),a(n,{title:e.$t("mine.email"),value:t.value.Email},null,8,["title","value"]),a(n,{title:e.$t("bank.code"),value:t.value.IFSC},null,8,["title","value"]),a(n,{title:e.$t("login.phonenum"),value:t.value.Mobile_number},null,8,["title","value"])]),_:1})):$("",!0),t.value?(o(),i(r,{key:1,icon:"edit",block:"",round:"",type:"primary",onClick:l[0]||(l[0]=c=>e.$router.push("/bind-bank"))},{default:u(()=>[s(m(e.$t("next.editbank")),1)]),_:1})):(o(),i(r,{key:2,icon:"add",block:"",round:"",type:"primary",onClick:l[1]||(l[1]=c=>e.$router.push("/bind-bank"))},{default:u(()=>[s(m(e.$t("bank.bind")),1)]),_:1}))])],64)}}},T=g(A,[["__scopeId","data-v-951aabef"]]);export{T as default};