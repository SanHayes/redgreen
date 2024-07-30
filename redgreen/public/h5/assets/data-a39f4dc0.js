import{c as M,d as H,u as ue,h as y,t as p,y as z,A as se,n as F,r as V,l as de,e as B,X as O,ai as ce,_ as le,a3 as re,ak as Y,s as K,q as R,v as $,aq as w,m as P,a as ve,ar as be,z as Z,as as ge,at as me,au as J,i as Q,av as he,ao as q,aw as fe,ax as D,ay as ye}from"./index-cfd015a1.js";import{c as te,C as _e}from"./index-cd470fc3.js";import{u as W}from"./use-expose-e3ba634b.js";import{B as Se,H as ee,L as Ce}from"./_plugin-vue_export-helper-80d4114a.js";import{d as pe,c as xe}from"./function-call-aab94aa3.js";const[ae,Be]=M("collapse"),ne=Symbol(ae),Ee={border:p,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var Pe=H({name:ae,props:Ee,emits:["change","update:modelValue"],setup(e,{emit:n,slots:o}){const{linkChildren:r,children:u}=ue(ne),d=a=>{n("change",a),n("update:modelValue",a)},t=(a,b)=>{const{accordion:m,modelValue:_}=e;d(m?a===_?"":a:b?_.concat(a):_.filter(S=>S!==a))},i=(a={})=>{if(e.accordion)return;typeof a=="boolean"&&(a={expanded:a});const{expanded:b,skipDisabled:m}=a,S=u.filter(C=>C.disabled&&m?C.expanded.value:b??!C.expanded.value).map(C=>C.itemName.value);d(S)},v=a=>{const{accordion:b,modelValue:m}=e;return b?m===a:m.includes(a)};return W({toggleAll:i}),r({toggle:t,isExpanded:v}),()=>{var a;return y("div",{class:[Be(),{[Se]:e.border}]},[(a=o.default)==null?void 0:a.call(o)])}}});const Ke=z(Pe),[Te,L]=M("collapse-item"),we=["icon","title","value","label","right-icon"],Fe=se({},te,{name:F,isLink:p,disabled:Boolean,readonly:Boolean,lazyRender:p});var Ve=H({name:Te,props:Fe,setup(e,{slots:n}){const o=V(),r=V(),{parent:u,index:d}=de(ne);if(!u)return;const t=B(()=>{var c;return(c=e.name)!=null?c:d.value}),i=B(()=>u.isExpanded(t.value)),v=V(i.value),a=pe(()=>v.value||!e.lazyRender),b=()=>{i.value?o.value&&(o.value.style.height=""):v.value=!1};O(i,(c,E)=>{if(E===null)return;c&&(v.value=!0),(c?le:re)(()=>{if(!r.value||!o.value)return;const{offsetHeight:h}=r.value;if(h){const T=`${h}px`;o.value.style.height=c?"0":T,ce(()=>{o.value&&(o.value.style.height=c?T:"0")})}else b()})});const m=(c=!i.value)=>{u.toggle(t.value,c)},_=()=>{!e.disabled&&!e.readonly&&m()},S=()=>{const{border:c,disabled:E,readonly:x}=e,h=Y(e,Object.keys(te));return x&&(h.isLink=!1),(E||x)&&(h.clickable=!1),y(_e,K({role:"button",class:L("title",{disabled:E,expanded:i.value,borderless:!c}),"aria-expanded":String(i.value),onClick:_},h),Y(n,we))},C=a(()=>{var c;return R(y("div",{ref:o,class:L("wrapper"),onTransitionend:b},[y("div",{ref:r,class:L("content")},[(c=n.default)==null?void 0:c.call(n)])]),[[$,v.value]])});return W({toggle:m,expanded:i,itemName:t}),()=>y("div",{class:[L({border:d.value&&e.border})]},[S(),C()])}});const We=z(Ve);function Oe(e,n){const{days:o}=n;let{hours:r,minutes:u,seconds:d,milliseconds:t}=n;if(e.includes("DD")?e=e.replace("DD",w(o)):r+=o*24,e.includes("HH")?e=e.replace("HH",w(r)):u+=r*60,e.includes("mm")?e=e.replace("mm",w(u)):d+=u*60,e.includes("ss")?e=e.replace("ss",w(d)):t+=d*1e3,e.includes("S")){const i=w(t,3);e.includes("SSS")?e=e.replace("SSS",i):e.includes("SS")?e=e.replace("SS",i.slice(0,2)):e=e.replace("S",i.charAt(0))}return e}const[De,Ie]=M("count-down"),Ae={time:P(0),format:ve("HH:mm:ss"),autoStart:p,millisecond:Boolean};var Le=H({name:De,props:Ae,emits:["change","finish"],setup(e,{emit:n,slots:o}){const{start:r,pause:u,reset:d,current:t}=be({time:+e.time,millisecond:e.millisecond,onChange:a=>n("change",a),onFinish:()=>n("finish")}),i=B(()=>Oe(e.format,t.value)),v=()=>{d(+e.time),e.autoStart&&r()};return O(()=>e.time,v,{immediate:!0}),W({start:r,pause:u,reset:v}),()=>y("div",{role:"timer",class:Ie()},[o.default?o.default(t.value):i.value])}});const je=z(Le),[ke,k]=M("stepper"),Ne=200,N=(e,n)=>String(e)===String(n),Re={min:P(1),max:P(1/0),name:P(""),step:P(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:p,showMinus:p,showInput:p,longPress:p,autoFixed:p,allowEmpty:Boolean,modelValue:F,inputWidth:F,buttonSize:F,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:P(1),decimalLength:F};var $e=H({name:ke,props:Re,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(e,{emit:n}){const o=(l,s=!0)=>{const{min:g,max:I,allowEmpty:f,decimalLength:A}=e;return f&&l===""||(l=J(String(l),!e.integer),l=l===""?0:+l,l=Number.isNaN(l)?+g:l,l=s?Math.max(Math.min(+I,l),+g):l,Q(A)&&(l=l.toFixed(+A))),l},r=()=>{var l;const s=(l=e.modelValue)!=null?l:e.defaultValue,g=o(s);return N(g,e.modelValue)||n("update:modelValue",g),g};let u;const d=V(),t=V(r()),i=B(()=>e.disabled||e.disableMinus||+t.value<=+e.min),v=B(()=>e.disabled||e.disablePlus||+t.value>=+e.max),a=B(()=>({width:Z(e.inputWidth),height:Z(e.buttonSize)})),b=B(()=>ge(e.buttonSize)),m=()=>{const l=o(t.value);N(l,t.value)||(t.value=l)},_=l=>{e.beforeChange?xe(e.beforeChange,{args:[l],done(){t.value=l}}):t.value=l},S=()=>{if(u==="plus"&&v.value||u==="minus"&&i.value){n("overlimit",u);return}const l=u==="minus"?-e.step:+e.step,s=o(fe(+t.value,l));_(s),n(u)},C=l=>{const s=l.target,{value:g}=s,{decimalLength:I}=e;let f=J(String(g),!e.integer);if(Q(I)&&f.includes(".")){const X=f.split(".");f=`${X[0]}.${X[1].slice(0,+I)}`}e.beforeChange?s.value=String(t.value):N(g,f)||(s.value=f);const A=f===String(+f);_(A?+f:f)},c=l=>{var s;e.disableInput?(s=d.value)==null||s.blur():n("focus",l)},E=l=>{const s=l.target,g=o(s.value,e.autoFixed);s.value=String(g),t.value=g,le(()=>{n("blur",l),he()})};let x,h;const T=()=>{h=setTimeout(()=>{S(),T()},Ne)},oe=()=>{e.longPress&&(x=!1,clearTimeout(h),h=setTimeout(()=>{x=!0,S(),T()},Ce))},j=l=>{e.longPress&&(clearTimeout(h),x&&q(l))},ie=l=>{e.disableInput&&q(l)},U=l=>({onClick:s=>{q(s),u=l,S()},onTouchstartPassive:()=>{u=l,oe()},onTouchend:j,onTouchcancel:j});return O(()=>[e.max,e.min,e.integer,e.decimalLength],m),O(()=>e.modelValue,l=>{N(l,t.value)||(t.value=o(l))}),O(t,l=>{n("update:modelValue",l),n("change",l,{name:e.name})}),me(()=>e.modelValue),()=>y("div",{role:"group",class:k([e.theme])},[R(y("button",K({type:"button",style:b.value,class:[k("minus",{disabled:i.value}),{[ee]:!i.value}],"aria-disabled":i.value||void 0},U("minus")),null),[[$,e.showMinus]]),R(y("input",{ref:d,type:e.integer?"tel":"text",role:"spinbutton",class:k("input"),value:t.value,style:a.value,disabled:e.disabled,readonly:e.disableInput,inputmode:e.integer?"numeric":"decimal",placeholder:e.placeholder,"aria-valuemax":e.max,"aria-valuemin":e.min,"aria-valuenow":t.value,onBlur:E,onInput:C,onFocus:c,onMousedown:ie},null),[[$,e.showInput]]),R(y("button",K({type:"button",style:b.value,class:[k("plus",{disabled:v.value}),{[ee]:!v.value}],"aria-disabled":v.value||void 0},U("plus")),null),[[$,e.showPlus]])])}});const Ue=z($e),Xe=e=>D({url:"/cai/cai_log",method:"POST",data:e}),Ye=e=>D({url:"/cai/cai_current",method:"POST",data:e}),Ze=e=>D({url:"/cai/bet_log",method:"POST",data:e}),Je=e=>D({url:"/cai/bet",method:"POST",data:e,extra:!0}),Qe=e=>D({url:"/cai/cai_getdata",method:"post",data:e});const G=ye.global.t,el={colors:[{type:"lottery-big",value:G("win.green"),option_value:"green",select_value:"Green",bgColor:"#39B54A"},{type:"lottery-bigsingle",value:G("win.violet"),option_value:"violet",select_value:"Violet",bgColor:"#6739B6"},{type:"lottery-small",value:G("win.red"),option_value:"red",select_value:"Red",bgColor:"#FF4019"}],numbers:[{type:"lottery-bigdouble",value:0,option_value:0,select_value:0,bgImage:"linear-gradient(160deg,#6739b6 50%,#e54d42 0)"},{type:"lottery-bigdouble",value:1,option_value:1,select_value:1,bgColor:"#39B54A"},{type:"lottery-bigdouble",value:2,option_value:2,select_value:2,bgColor:"#e54d42"},{type:"lottery-bigdouble",value:3,option_value:3,select_value:3,bgColor:"#39B54A"},{type:"lottery-bigdouble",value:4,option_value:4,select_value:4,bgColor:"#e54d42"},{type:"lottery-bigdouble",value:5,option_value:5,select_value:5,bgImage:"linear-gradient(160deg,#6739b6 50%,#e54d42 0)"},{type:"lottery-bigdouble",value:6,option_value:6,select_value:6,bgColor:"#e54d42"},{type:"lottery-bigdouble",value:7,option_value:7,select_value:7,bgColor:"#39B54A"},{type:"lottery-bigdouble",value:8,option_value:8,select_value:8,bgColor:"#e54d42"},{type:"lottery-bigdouble",value:9,option_value:9,select_value:9,bgColor:"#39B54A"}],letters:[{type:"lottery-bigdouble",value:"B",option_value:"big",select_value:"B",index:10,bgColor:"#EC818B"},{type:"lottery-bigdouble",value:"S",option_value:"small",select_value:"S",index:11,bgColor:"#FACE8C"},{type:"lottery-bigdouble",value:"O",option_value:"odd",select_value:"O",index:12,bgColor:"#81D3F8"},{type:"lottery-bigdouble",value:"E",option_value:"even",select_value:"E",index:13,bgColor:"#807FFD"}],game:[{type:"lottery-bigdouble",value:"B",option_value:"big",select_value:"B",index:10,bgColor:"#EC818B"},{type:"lottery-bigdouble",value:"S",option_value:"small",select_value:"S",index:11,bgColor:"#FACE8C"},{type:"lottery-bigdouble",value:"O",option_value:"odd",select_value:"O",index:12,bgColor:"#81D3F8"},{type:"lottery-bigdouble",value:"E",option_value:"even",select_value:"E",index:13,bgColor:"#807FFD"},{value:"BO",bgColor:"#A512F7",option_value:"bigodd",select_value:"BO"},{value:"BE",bgColor:"#FF7023",option_value:"bigeven",select_value:"BE"},{value:"SO",bgColor:"#00A99B",option_value:"smallodd",select_value:"SO"},{value:"SE",bgColor:"#DE3CAE",option_value:"smalleven",select_value:"SE"}]};export{We as C,Ue as S,Ke as a,Je as b,Ye as c,je as d,Xe as h,el as l,Qe as m,Ze as o};