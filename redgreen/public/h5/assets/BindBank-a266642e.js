import{k as f,$ as k,E as _,J as y,h as t,G as s,M as B,H as c,I as u,N as g}from"./index-a76ee34d.js";import{m as v,n as $}from"./user-e8209e15.js";import{s as A,a as d,c as i,F as S}from"./index-6a9f4c3c.js";import{N as C}from"./index-17bcf195.js";import{_ as F}from"./_plugin-vue_export-helper-1e07be8f.js";import{F as U}from"./index-d515b9b9.js";import{B as N}from"./index-cb9c67db.js";import"./http-921e1080.js";import"./use-id-d3946d26.js";import"./use-expose-f24e194a.js";import"./use-touch-24e3c7a8.js";import"./use-placeholder-64908429.js";const w={__name:"BindBank",setup(E){const m=()=>history.back(),l=f({Account_number:"",Actual_name:"",Address:"",City:"",Email:"",IFSC:"",Mobile_number:"",State:""});k(()=>{v().then(a=>{a!=null&&a.data&&Object.assign(l,a.data),console.log("info",l)})});const r=a=>{Object.keys(a).length||(A({overlay:!0}),$(l).then(e=>{e.code===1?(d({message:e.msg,type:"success"}),setTimeout(()=>{i(),m()},2e3)):(i(),d({message:e.msg,type:"fail"}))}))};return(a,e)=>{const b=C,n=S,p=N,V=U;return _(),y(B,null,[t(b,{title:a.$t("mine.card"),"left-arrow":"",onClickLeft:m},null,8,["title"]),t(V,{"label-width":"10em",class:"bank-form",onSubmit:r},{default:s(()=>[t(n,{label:a.$t("bank.name"),modelValue:l.Actual_name,"onUpdate:modelValue":e[0]||(e[0]=o=>l.Actual_name=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("bank.code"),modelValue:l.IFSC,"onUpdate:modelValue":e[1]||(e[1]=o=>l.IFSC=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("bank.number"),modelValue:l.Account_number,"onUpdate:modelValue":e[2]||(e[2]=o=>l.Account_number=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("bank.state"),modelValue:l.State,"onUpdate:modelValue":e[3]||(e[3]=o=>l.State=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("bank.city"),modelValue:l.City,"onUpdate:modelValue":e[4]||(e[4]=o=>l.City=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("bank.address"),modelValue:l.Address,"onUpdate:modelValue":e[5]||(e[5]=o=>l.Address=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("login.phonenum"),modelValue:l.Mobile_number,"onUpdate:modelValue":e[6]||(e[6]=o=>l.Mobile_number=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("mine.email"),modelValue:l.Email,"onUpdate:modelValue":e[7]||(e[7]=o=>l.Email=o)},null,8,["label","modelValue"]),c("p",null,u(a.$t("bank.note")),1),t(p,{block:"",round:"",type:"primary","native-type":"submit"},{default:s(()=>[g(u(a.$t("bank.submit")),1)]),_:1})]),_:1})],64)}}},K=F(w,[["__scopeId","data-v-8830c193"]]);export{K as default};
