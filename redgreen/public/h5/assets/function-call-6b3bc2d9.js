import{c as T,d as I,V as v,Q as M,aM as N,h as c,x as O,ak as L,a as k,n as C,_ as z,p as w,i as j,aN as A,k as E,A as g,W as U,C as V,r as _,B as q}from"./index-23f7f15c.js";import{u as D}from"./use-expose-c43790b1.js";import{I as H}from"./_plugin-vue_export-helper-65965647.js";import{P as Q}from"./index-ce495067.js";import{L as W}from"./user-92cb9047.js";let f=0;function F(e){e?(f||document.body.classList.add("van-toast--unclickable"),f++):f&&(f--,f||document.body.classList.remove("van-toast--unclickable"))}const[G,r]=T("toast"),J=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],K={icon:String,show:Boolean,type:k("text"),overlay:Boolean,message:C,iconSize:C,duration:z(2e3),position:k("middle"),teleport:[String,Object],wordBreak:String,className:w,iconPrefix:String,transition:k("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:w,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var R=I({name:G,props:K,emits:["update:show"],setup(e,{emit:t,slots:o}){let l,n=!1;const u=()=>{const s=e.show&&e.forbidClick;n!==s&&(n=s,F(n))},d=s=>t("update:show",s),y=()=>{e.closeOnClick&&d(!1)},m=()=>clearTimeout(l),p=()=>{const{icon:s,type:a,iconSize:h,iconPrefix:x,loadingType:B}=e;if(s||a==="success"||a==="fail")return c(H,{name:s||a,size:h,class:r("icon"),classPrefix:x},null);if(a==="loading")return c(W,{class:r("loading"),size:h,type:B},null)},P=()=>{const{type:s,message:a}=e;if(o.message)return c("div",{class:r("text")},[o.message()]);if(j(a)&&a!=="")return s==="html"?c("div",{key:0,class:r("text"),innerHTML:String(a)},null):c("div",{class:r("text")},[a])};return v(()=>[e.show,e.forbidClick],u),v(()=>[e.show,e.type,e.message,e.duration],()=>{m(),e.show&&e.duration>0&&(l=setTimeout(()=>{d(!1)},e.duration))}),M(u),N(u),()=>c(Q,O({class:[r([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:y,onClosed:m,"onUpdate:show":d},L(e,J)),{default:()=>[p(),P()]})}});function X(){const e=E({show:!1}),t=n=>{e.show=n},o=n=>{g(e,n,{transitionAppear:!0}),t(!0)},l=()=>t(!1);return D({open:o,close:l,toggle:t}),{open:o,close:l,state:e,toggle:t}}function Y(e){const t=A(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}const Z={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let i=[],$=!1,b=g({},Z);const ee=new Map;function S(e){return V(e)?e:{message:e}}function te(){const{instance:e,unmount:t}=Y({setup(){const o=_(""),{open:l,state:n,close:u,toggle:d}=X(),y=()=>{},m=()=>c(R,O(n,{onClosed:y,"onUpdate:show":d}),null);return v(o,p=>{n.message=p}),q().render=m,{open:l,close:u,message:o}}});return e}function oe(){if(!i.length||$){const e=te();i.push(e)}return i[i.length-1]}function ne(e={}){if(!U)return{};const t=oe(),o=S(e);return t.open(g({},b,ee.get(o.type||b.type),o)),t}const se=e=>t=>ne(g({type:e},S(t))),de=se("loading"),fe=e=>{i.length&&(e?(i.forEach(t=>{t.close()}),i=[]):i[0].close())};export{ne as a,R as b,fe as c,de as s};
