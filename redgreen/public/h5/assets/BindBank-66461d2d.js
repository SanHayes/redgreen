import{k as f,a1 as k,E as _,J as y,h as t,G as s,M as B,H as c,I as u,N as g}from"./index-23f7f15c.js";import"./index-53c5e84d.js";import{F as v}from"./index-20bf8e67.js";import{N as $}from"./index-09d4807f.js";import{i as A,j as S}from"./user-92cb9047.js";import{_ as C}from"./_plugin-vue_export-helper-65965647.js";import{s as F,a as d,c as i}from"./function-call-6b3bc2d9.js";import{F as U}from"./index-bdcbfca8.js";import{B as N}from"./index-663ced40.js";import"./use-id-16e8e6de.js";import"./use-expose-c43790b1.js";import"./use-placeholder-de72143c.js";import"./http-66deabba.js";import"./index-ce495067.js";import"./use-touch-07024e25.js";const w={__name:"BindBank",setup(E){const m=()=>history.back(),l=f({Account_number:"",Actual_name:"",Address:"",City:"",Email:"",IFSC:"",Mobile_number:"",State:""});k(()=>{A().then(a=>{a!=null&&a.data&&Object.assign(l,a.data),console.log("info",l)})});const r=a=>{Object.keys(a).length||(F({overlay:!0}),S(l).then(e=>{e.code===1?(d({message:e.msg,type:"success"}),setTimeout(()=>{i(),m()},2e3)):(i(),d({message:e.msg,type:"fail"}))}))};return(a,e)=>{const b=$,n=v,p=N,V=U;return _(),y(B,null,[t(b,{title:a.$t("mine.card"),"left-arrow":"",onClickLeft:m},null,8,["title"]),t(V,{"label-width":"10em",class:"bank-form",onSubmit:r},{default:s(()=>[t(n,{label:a.$t("bank.name"),modelValue:l.Actual_name,"onUpdate:modelValue":e[0]||(e[0]=o=>l.Actual_name=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("bank.code"),modelValue:l.IFSC,"onUpdate:modelValue":e[1]||(e[1]=o=>l.IFSC=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("bank.number"),modelValue:l.Account_number,"onUpdate:modelValue":e[2]||(e[2]=o=>l.Account_number=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("bank.state"),modelValue:l.State,"onUpdate:modelValue":e[3]||(e[3]=o=>l.State=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("bank.city"),modelValue:l.City,"onUpdate:modelValue":e[4]||(e[4]=o=>l.City=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("bank.address"),modelValue:l.Address,"onUpdate:modelValue":e[5]||(e[5]=o=>l.Address=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("login.phonenum"),modelValue:l.Mobile_number,"onUpdate:modelValue":e[6]||(e[6]=o=>l.Mobile_number=o)},null,8,["label","modelValue"]),t(n,{label:a.$t("mine.email"),modelValue:l.Email,"onUpdate:modelValue":e[7]||(e[7]=o=>l.Email=o)},null,8,["label","modelValue"]),c("p",null,u(a.$t("bank.note")),1),t(p,{block:"",round:"",type:"primary","native-type":"submit"},{default:s(()=>[g(u(a.$t("bank.submit")),1)]),_:1})]),_:1})],64)}}},R=C(w,[["__scopeId","data-v-8830c193"]]);export{R as default};
