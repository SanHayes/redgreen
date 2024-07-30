import{c as T,d as M,e as R,h as l,M as I,aE as x,aF as D,y as G,Q as K,D as j,am as q,r as y,k as H,E as h,J as b,H as g,F as V,I as v,V as J,G as w,U as P,N as S,aG as Q,R as W,W as O}from"./index-fe84b249.js";import{C as X}from"./index-e7fec83b.js";import"./index-d1164e3e.js";import"./index-8e19f2e7.js";import{F as Y}from"./index-2b972485.js";import{N as Z}from"./index-46218eec.js";import{A as ee}from"./AreaSelect-9daacac5.js";import{_ as te,I as ae}from"./_plugin-vue_export-helper-cf0546ee.js";import{b as $,s as z,a as A}from"./function-call-96a15cbc.js";import{B as oe}from"./index-310a089c.js";import"./use-expose-62bc051b.js";import"./use-placeholder-2d02890d.js";import"./index-2899a6c8.js";import"./index-e7bcbc25.js";import"./use-touch-6206199c.js";import"./index-cad4f5d0.js";const[B,ne]=T("space"),se={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function N(a=[]){const r=[];return a.forEach(o=>{Array.isArray(o)?r.push(...o):o.type===I?r.push(...N(o.children)):r.push(o)}),r.filter(o=>{var m;return!(o&&(o.type===x||o.type===I&&((m=o.children)==null?void 0:m.length)===0||o.type===D&&o.children.trim()===""))})}var re=M({name:B,props:se,setup(a,{slots:r}){const o=R(()=>{var s;return(s=a.align)!=null?s:a.direction==="horizontal"?"center":""}),m=s=>typeof s=="number"?s+"px":s,_=s=>{const n={},d=`${m(Array.isArray(a.size)?a.size[0]:a.size)}`,u=`${m(Array.isArray(a.size)?a.size[1]:a.size)}`;return s?a.wrap?{marginBottom:u}:{}:(a.direction==="horizontal"&&(n.marginRight=d),(a.direction==="vertical"||a.wrap)&&(n.marginBottom=u),n)};return()=>{var s;const n=N((s=r.default)==null?void 0:s.call(r));return l("div",{class:[ne({[a.direction]:a.direction,[`align-${o.value}`]:o.value,wrap:a.wrap,fill:a.fill})]},[n.map((d,u)=>l("div",{key:`item-${u}`,class:`${B}-item`,style:_(u===n.length-1)},[d]))])}}});const le=G(re);const ie={class:"container"},ue={class:"field-wrap"},me={class:"value"},ce={class:"field-wrap"},de={class:"links"},pe={__name:"Login",setup(a){const r=K(),{t:o}=j(),m=q(),_=()=>history.back(),s=y(0),n=H({username:"",password:""}),d=y({areaCodes:null,dialCode:"1",iso2:"us",name:"United States",priority:0}),u=y(!0),k=y(!1),U=()=>{k.value=!0},F=()=>{if(!n.username){let e=o("login.inpemail");s.value===1&&(e=o("login.phonenum")),$({message:e});return}if(!n.password){$({message:o("login.inppass")});return}r.updateState("info",null),z({overlay:!0}),Q(n).then(e=>{const{token:t,trynow:p}=e;localStorage.setItem("token",t),localStorage.setItem("trynow",p),r.updateState("token",t),r.updateState("trynow",p);let c="emailvalue",f="emailpass";s.value===1&&(c="phonevalue",f="phonepass"),u.value===!0?(localStorage.setItem(c,n.username),localStorage.setItem(f,n.password)):(localStorage.removeItem(c),localStorage.removeItem(f)),m.push({path:"/"})}).catch(e=>{console.log(e),$({message:e.msg})}).finally(()=>{A()}),W(()=>{if(u.value){const e=localStorage.getItem("emailvalue"),t=localStorage.getItem("emailpass");n.username=e,n.password=t}})},E=()=>{z({overlay:!0}),O().then(e=>{const{token:t,trynow:p}=e;localStorage.setItem("token",t),localStorage.setItem("trynow",p),r.updateState("token",t),r.updateState("trynow",p),m.push({path:"/"})}).finally(()=>{A()})};return(e,t)=>{const p=Z,c=ae,f=Y,L=X,C=oe;return h(),b(I,null,[l(p,{title:e.$t("login.login"),"left-arrow":"",onClickLeft:_},null,8,["title"]),g("div",ie,[g("div",ue,[s.value===0?(h(),V(c,{key:0,size:"20","class-prefix":"iconfont",name:"icon-youjian"})):(h(),V(c,{key:1,size:"20","class-prefix":"iconfont",name:"icon-mobile"})),s.value===1?(h(),b("div",{key:2,class:"area",onClick:U},[g("div",me,"+"+v(d.value.dialCode),1),l(c,{name:"arrow-down"})])):J("",!0),l(f,{modelValue:n.username,"onUpdate:modelValue":t[0]||(t[0]=i=>n.username=i),placeholder:s.value===0?e.$t("login.inpemail"):e.$t("login.phonenum")},null,8,["modelValue","placeholder"])]),g("div",ce,[l(c,{size:"20","class-prefix":"iconfont",name:"icon-password"}),l(f,{type:"password",modelValue:n.password,"onUpdate:modelValue":t[1]||(t[1]=i=>n.password=i),placeholder:e.$t("login.inppass")},null,8,["modelValue","placeholder"])]),l(L,{class:"remember",shape:"square",modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=i=>u.value=i)},{default:w(()=>[S(v(e.$t("login.rempass")),1)]),_:1},8,["modelValue"]),l(P(le),{direction:"vertical",size:20},{default:w(()=>[l(C,{type:"primary",block:"",round:"",onClick:F},{default:w(()=>[S(v(e.$t("login.login")),1)]),_:1}),l(C,{type:"primary",block:"",round:"",onClick:E},{default:w(()=>[S(v(e.$t("home.trys")),1)]),_:1})]),_:1}),g("div",de,[g("span",{onClick:t[3]||(t[3]=i=>e.$router.push({path:"/register"}))},v(e.$t("login.register")),1),g("span",{onClick:t[4]||(t[4]=i=>e.$router.push({path:"/forget"}))},v(e.$t("login.forget")),1)])]),l(ee,{show:k.value,"onUpdate:show":t[5]||(t[5]=i=>k.value=i),code:d.value,"onUpdate:code":t[6]||(t[6]=i=>d.value=i)},null,8,["show","code"])],64)}}},Be=te(pe,[["__scopeId","data-v-c835fd71"]]);export{Be as default};