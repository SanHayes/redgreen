import{k as v,E as a,J as n,h as r,H as y,G as l,M as d,aN as k,K as w,F as L,I as b,V as c,U as C}from"./index-fe84b249.js";import{L as N}from"./index-22c4e18f.js";import{C as x}from"./index-e7bcbc25.js";import{C as B}from"./index-8e19f2e7.js";import{N as V}from"./index-46218eec.js";import{i as R}from"./img_gold-5b24bd9e.js";import{_ as W}from"./_plugin-vue_export-helper-cf0546ee.js";import{L as $}from"./index-cad4f5d0.js";import"./use-expose-62bc051b.js";import"./use-placeholder-2d02890d.js";const E={class:"content"},F={key:0,class:"state color-graw"},G={key:1,class:"state color-success"},I={key:2,class:"state color-red"},U={__name:"WithdrawRecord",setup(D){const _=()=>history.back(),t=v({loading:!1,finished:!1,list:[],type:2,limit:20,page:1}),p=()=>{k({type:t.type,limit:t.limit,page:t.page}).then(e=>{var s,i;t.loading=!1,e.code===0&&(t.finished=!0),e.data!=null&&(t.list=[...t.list,...(s=e.data)==null?void 0:s.list]),t.list.length>=((i=e.data)==null?void 0:i.count)&&(t.finished=!0)})};return(e,s)=>{const i=V,m=B,f=x,u=$,g=N;return a(),n(d,null,[r(i,{title:e.$t("next.withdrawrecord"),"left-arrow":"",onClickLeft:_},null,8,["title"]),y("div",E,[r(g,{loading:t.loading,"onUpdate:loading":s[0]||(s[0]=o=>t.loading=o),finished:t.finished,"finished-text":e.$t("nomore"),onLoad:p},{loading:l(()=>[r(u,{type:"spinner"})]),default:l(()=>[r(f,{inset:""},{default:l(()=>[(a(!0),n(d,null,w(t.list,(o,h)=>(a(),L(m,{title:o.money,key:h,label:o.createtime,icon:C(R)},{value:l(()=>[o.status==0?(a(),n("span",F,b(e.$t("mine.waiting")),1)):c("",!0),o.status==1?(a(),n("span",G,"ok")):c("",!0),o.status==2?(a(),n("span",I,"no")):c("",!0)]),_:2},1032,["title","label","icon"]))),128))]),_:1})]),_:1},8,["loading","finished","finished-text"])])],64)}}},P=W(U,[["__scopeId","data-v-0b03ec49"]]);export{P as default};