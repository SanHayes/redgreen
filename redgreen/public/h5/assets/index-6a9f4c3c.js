import{aI as Pe,ac as Le,C as oe,aJ as Oe,aG as Be,c as ie,n as L,a as T,m as Ae,A as O,p as H,d as le,k as re,r as _,l as ze,e as E,z as Z,ah as Ne,V as D,Y as p,Q as se,g as Re,h as u,i as x,aK as ee,at as pe,am as U,aL as _e,x as K,N as We,au as De,y as Fe,aM as $e,ai as je,ar as Ue,aN as qe,W as He,B as Ke}from"./index-a76ee34d.js";import{c as Ye,C as Je,L as Ge}from"./user-e8209e15.js";import{u as Qe,P as Xe}from"./use-id-d3946d26.js";import{u as ce}from"./use-expose-f24e194a.js";import{F as Ze,I as W}from"./_plugin-vue_export-helper-1e07be8f.js";function ue(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function et(e,n){if(ue(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function tt(e,n){return new Promise(a=>{const r=n.validator(e,n);if(Oe(r)){r.then(a);return}a(r)})}function te(e,n){const{message:a}=n;return Be(a)?a(e,n):a||""}function nt({target:e}){e.composing=!0}function ne({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function at(e,n){const a=Pe();e.style.height="auto";let r=e.scrollHeight;if(oe(n)){const{maxHeight:o,minHeight:s}=n;o!==void 0&&(r=Math.min(r,o)),s!==void 0&&(r=Math.max(r,s))}r&&(e.style.height=`${r}px`,Le(a))}function ot(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function k(e){return[...e].length}function q(e,n){return[...e].slice(0,n).join("")}const[it,y]=ie("field"),lt={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:L,formatter:Function,clearIcon:T("clear"),modelValue:Ae(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,spellcheck:{type:Boolean,default:null},clearTrigger:T("focus"),formatTrigger:T("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},rt=O({},Ye,lt,{rows:L,type:T("text"),rules:Array,autosize:[Boolean,Object],labelWidth:L,labelClass:H,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var st=le({name:it,props:rt,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:a}){const r=Qe(),o=re({status:"unvalidated",focused:!1,validateMessage:""}),s=_(),S=_(),I=_(),{parent:f}=ze(Ze),b=()=>{var t;return String((t=e.modelValue)!=null?t:"")},g=t=>{if(x(e[t]))return e[t];if(f&&x(f.props[t]))return f.props[t]},v=E(()=>{const t=g("readonly");if(e.clearable&&!t){const l=b()!=="",i=e.clearTrigger==="always"||e.clearTrigger==="focus"&&o.focused;return l&&i}return!1}),h=E(()=>I.value&&a.input?I.value():e.modelValue),B=t=>t.reduce((l,i)=>l.then(()=>{if(o.status==="failed")return;let{value:c}=h;if(i.formatter&&(c=i.formatter(c,i)),!et(c,i)){o.status="failed",o.validateMessage=te(c,i);return}if(i.validator)return ue(c)&&i.validateEmpty===!1?void 0:tt(c,i).then(d=>{d&&typeof d=="string"?(o.status="failed",o.validateMessage=d):d===!1&&(o.status="failed",o.validateMessage=te(c,i))})}),Promise.resolve()),M=()=>{o.status="unvalidated",o.validateMessage=""},A=()=>n("endValidate",{status:o.status,message:o.validateMessage}),F=(t=e.rules)=>new Promise(l=>{M(),t?(n("startValidate"),B(t).then(()=>{o.status==="failed"?(l({name:e.name,message:o.validateMessage}),A()):(o.status="passed",l(),A())})):l()}),$=t=>{if(f&&e.rules){const{validateTrigger:l}=f.props,i=ee(l).includes(t),c=e.rules.filter(d=>d.trigger?ee(d.trigger).includes(t):i);c.length&&F(c)}},fe=t=>{var l;const{maxlength:i}=e;if(x(i)&&k(t)>+i){const c=b();if(c&&k(c)===+i)return c;const d=(l=s.value)==null?void 0:l.selectionEnd;if(o.focused&&d){const m=[...t],C=m.length-+i;return m.splice(d-C,C),m.join("")}return q(t,+i)}return t},z=(t,l="onChange")=>{const i=t;t=fe(t);const c=k(i)-k(t);if(e.type==="number"||e.type==="digit"){const m=e.type==="number";t=pe(t,m,m)}let d=0;if(e.formatter&&l===e.formatTrigger){const{formatter:m,maxlength:C}=e;if(t=m(t),x(C)&&k(t)>+C&&(t=q(t,+C)),s.value&&o.focused){const{selectionEnd:R}=s.value,X=q(i,R);d=k(m(X))-k(X)}}if(s.value&&s.value.value!==t)if(o.focused){let{selectionStart:m,selectionEnd:C}=s.value;if(s.value.value=t,x(m)&&x(C)){const R=k(t);c?(m-=c,C-=c):d&&(m+=d,C+=d),s.value.setSelectionRange(Math.min(m,R),Math.min(C,R))}}else s.value.value=t;t!==e.modelValue&&n("update:modelValue",t)},ge=t=>{t.target.composing||z(t.target.value)},j=()=>{var t;return(t=s.value)==null?void 0:t.blur()},Y=()=>{var t;return(t=s.value)==null?void 0:t.focus()},N=()=>{const t=s.value;e.type==="textarea"&&e.autosize&&t&&at(t,e.autosize)},me=t=>{o.focused=!0,n("focus",t),p(N),g("readonly")&&j()},he=t=>{o.focused=!1,z(b(),"onBlur"),n("blur",t),!g("readonly")&&($("onBlur"),p(N),De())},J=t=>n("clickInput",t),ye=t=>n("clickLeftIcon",t),be=t=>n("clickRightIcon",t),ve=t=>{U(t),n("update:modelValue",""),n("clear",t)},G=E(()=>{if(typeof e.error=="boolean")return e.error;if(f&&f.props.showError&&o.status==="failed")return!0}),Ce=E(()=>{const t=g("labelWidth"),l=g("labelAlign");if(t&&l!=="top")return{width:Z(t)}}),ke=t=>{t.keyCode===13&&(!(f&&f.props.submitOnEnter)&&e.type!=="textarea"&&U(t),e.type==="search"&&j()),n("keypress",t)},Q=()=>e.id||`${r}-input`,Se=()=>o.status,we=()=>{const t=y("control",[g("inputAlign"),{error:G.value,custom:!!a.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(a.input)return u("div",{class:t,onClick:J},[a.input()]);const l={id:Q(),ref:s,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:g("disabled"),readonly:g("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${r}-label`:void 0,onBlur:he,onFocus:me,onInput:ge,onClick:J,onChange:ne,onKeypress:ke,onCompositionend:ne,onCompositionstart:nt};return e.type==="textarea"?u("textarea",l,null):u("input",K(ot(e.type),l),null)},Ie=()=>{const t=a["left-icon"];if(e.leftIcon||t)return u("div",{class:y("left-icon"),onClick:ye},[t?t():u(W,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},xe=()=>{const t=a["right-icon"];if(e.rightIcon||t)return u("div",{class:y("right-icon"),onClick:be},[t?t():u(W,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},Te=()=>{if(e.showWordLimit&&e.maxlength){const t=k(b());return u("div",{class:y("word-limit")},[u("span",{class:y("word-num")},[t]),We("/"),e.maxlength])}},Me=()=>{if(f&&f.props.showErrorMessage===!1)return;const t=e.errorMessage||o.validateMessage;if(t){const l=a["error-message"],i=g("errorMessageAlign");return u("div",{class:y("error-message",i)},[l?l({message:t}):t])}},Ve=()=>{const t=g("labelWidth"),l=g("labelAlign"),i=g("colon")?":":"";if(a.label)return[a.label(),i];if(e.label)return u("label",{id:`${r}-label`,for:a.input?void 0:Q(),onClick:c=>{U(c),Y()},style:l==="top"&&t?{width:Z(t)}:void 0},[e.label+i])},Ee=()=>[u("div",{class:y("body")},[we(),v.value&&u(W,{ref:S,name:e.clearIcon,class:y("clear")},null),xe(),a.button&&u("div",{class:y("button")},[a.button()])]),Te(),Me()];return ce({blur:j,focus:Y,validate:F,formValue:h,resetValidation:M,getValidationStatus:Se}),Ne(_e,{customValue:I,resetValidation:M,validateWithTrigger:$}),D(()=>e.modelValue,()=>{z(b()),M(),$("onChange"),p(N)}),se(()=>{z(b(),e.formatTrigger),p(N)}),Re("touchstart",ve,{target:E(()=>{var t;return(t=S.value)==null?void 0:t.$el})}),()=>{const t=g("disabled"),l=g("labelAlign"),i=Ie(),c=()=>{const d=Ve();return l==="top"?[i,d].filter(Boolean):d||[]};return u(Je,{size:e.size,class:y({error:G.value,disabled:t,[`label-${l}`]:l}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:Ce.value,valueClass:y("value"),titleClass:[y("label",[l,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:i&&l!=="top"?()=>i:null,title:c,value:Ee,extra:a.extra})}}});const Et=Fe(st);let P=0;function ct(e){e?(P||document.body.classList.add("van-toast--unclickable"),P++):P&&(P--,P||document.body.classList.remove("van-toast--unclickable"))}const[ut,V]=ie("toast"),dt=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],ft={icon:String,show:Boolean,type:T("text"),overlay:Boolean,message:L,iconSize:L,duration:Ue(2e3),position:T("middle"),teleport:[String,Object],wordBreak:String,className:H,iconPrefix:String,transition:T("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:H,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var gt=le({name:ut,props:ft,emits:["update:show"],setup(e,{emit:n,slots:a}){let r,o=!1;const s=()=>{const v=e.show&&e.forbidClick;o!==v&&(o=v,ct(o))},S=v=>n("update:show",v),I=()=>{e.closeOnClick&&S(!1)},f=()=>clearTimeout(r),b=()=>{const{icon:v,type:h,iconSize:B,iconPrefix:M,loadingType:A}=e;if(v||h==="success"||h==="fail")return u(W,{name:v||h,size:B,class:V("icon"),classPrefix:M},null);if(h==="loading")return u(Ge,{class:V("loading"),size:B,type:A},null)},g=()=>{const{type:v,message:h}=e;if(a.message)return u("div",{class:V("text")},[a.message()]);if(x(h)&&h!=="")return v==="html"?u("div",{key:0,class:V("text"),innerHTML:String(h)},null):u("div",{class:V("text")},[h])};return D(()=>[e.show,e.forbidClick],s),D(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(r=setTimeout(()=>{S(!1)},e.duration))}),se(s),$e(s),()=>u(Xe,K({class:[V([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:I,onClosed:f,"onUpdate:show":S},je(e,dt)),{default:()=>[b(),g()]})}});function mt(){const e=re({show:!1}),n=o=>{e.show=o},a=o=>{O(e,o,{transitionAppear:!0}),n(!0)},r=()=>n(!1);return ce({open:a,close:r,toggle:n}),{open:a,close:r,state:e,toggle:n}}function ht(e){const n=qe(e),a=document.createElement("div");return document.body.appendChild(a),{instance:n.mount(a),unmount(){n.unmount(),document.body.removeChild(a)}}}const yt={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let w=[],bt=!1,ae=O({},yt);const vt=new Map;function de(e){return oe(e)?e:{message:e}}function Ct(){const{instance:e,unmount:n}=ht({setup(){const a=_(""),{open:r,state:o,close:s,toggle:S}=mt(),I=()=>{},f=()=>u(gt,K(o,{onClosed:I,"onUpdate:show":S}),null);return D(a,b=>{o.message=b}),Ke().render=f,{open:r,close:s,message:a}}});return e}function kt(){if(!w.length||bt){const e=Ct();w.push(e)}return w[w.length-1]}function St(e={}){if(!He)return{};const n=kt(),a=de(e);return n.open(O({},ae,vt.get(a.type||ae.type),a)),n}const wt=e=>n=>St(O({type:e},de(n))),Pt=wt("loading"),Lt=e=>{w.length&&(e?(w.forEach(n=>{n.close()}),w=[]):w[0].close())};export{Et as F,St as a,Lt as c,lt as f,Pt as s};