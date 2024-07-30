import{aY as me,ae as he,C as be,aZ as ve,aS as ye,c as Ie,n as _,a as M,m as Se,A as Ce,p as xe,d as ke,k as Ve,r as A,l as Ee,e as S,z as H,aj as Me,X as we,_ as E,R as Te,g as Le,h as u,i as I,a_ as K,au as Ae,ao as P,a$ as Pe,s as Re,N as Be,av as _e,y as ze}from"./index-52dcdc50.js";import{c as Ne,C as Oe}from"./index-d1a413f5.js";import{u as De}from"./function-call-e996e8e5.js";import{u as Fe}from"./use-expose-e45f4cc7.js";import{F as We,I as R}from"./_plugin-vue_export-helper-345f0f70.js";function J(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function $e(t,i){if(J(t)){if(i.required)return!1;if(i.validateEmpty===!1)return!0}return!(i.pattern&&!i.pattern.test(String(t)))}function je(t,i){return new Promise(l=>{const d=i.validator(t,i);if(ve(d)){d.then(l);return}l(d)})}function Y(t,i){const{message:l}=i;return ye(l)?l(t,i):l||""}function qe({target:t}){t.composing=!0}function U({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function He(t,i){const l=me();t.style.height="auto";let d=t.scrollHeight;if(be(i)){const{maxHeight:r,minHeight:c}=i;r!==void 0&&(d=Math.min(d,r)),c!==void 0&&(d=Math.max(d,c))}d&&(t.style.height=`${d}px`,he(l))}function Ke(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function v(t){return[...t].length}function B(t,i){return[...t].slice(0,i).join("")}const[Ye,m]=Ie("field"),Ue={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:_,formatter:Function,clearIcon:M("clear"),modelValue:Se(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,spellcheck:{type:Boolean,default:null},clearTrigger:M("focus"),formatTrigger:M("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Je=Ce({},Ne,Ue,{rows:_,type:M("text"),rules:Array,autosize:[Boolean,Object],labelWidth:_,labelClass:xe,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Xe=ke({name:Ye,props:Je,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(t,{emit:i,slots:l}){const d=De(),r=Ve({status:"unvalidated",focused:!1,validateMessage:""}),c=A(),z=A(),w=A(),{parent:h}=Ee(We),y=()=>{var e;return String((e=t.modelValue)!=null?e:"")},f=e=>{if(I(t[e]))return t[e];if(h&&I(h.props[e]))return h.props[e]},X=S(()=>{const e=f("readonly");if(t.clearable&&!e){const a=y()!=="",n=t.clearTrigger==="always"||t.clearTrigger==="focus"&&r.focused;return a&&n}return!1}),N=S(()=>w.value&&l.input?w.value():t.modelValue),Z=e=>e.reduce((a,n)=>a.then(()=>{if(r.status==="failed")return;let{value:o}=N;if(n.formatter&&(o=n.formatter(o,n)),!$e(o,n)){r.status="failed",r.validateMessage=Y(o,n);return}if(n.validator)return J(o)&&n.validateEmpty===!1?void 0:je(o,n).then(s=>{s&&typeof s=="string"?(r.status="failed",r.validateMessage=s):s===!1&&(r.status="failed",r.validateMessage=Y(o,n))})}),Promise.resolve()),C=()=>{r.status="unvalidated",r.validateMessage=""},O=()=>i("endValidate",{status:r.status,message:r.validateMessage}),D=(e=t.rules)=>new Promise(a=>{C(),e?(i("startValidate"),Z(e).then(()=>{r.status==="failed"?(a({name:t.name,message:r.validateMessage}),O()):(r.status="passed",a(),O())})):a()}),T=e=>{if(h&&t.rules){const{validateTrigger:a}=h.props,n=K(a).includes(e),o=t.rules.filter(s=>s.trigger?K(s.trigger).includes(e):n);o.length&&D(o)}},G=e=>{var a;const{maxlength:n}=t;if(I(n)&&v(e)>+n){const o=y();if(o&&v(o)===+n)return o;const s=(a=c.value)==null?void 0:a.selectionEnd;if(r.focused&&s){const g=[...e],b=g.length-+n;return g.splice(s-b,b),g.join("")}return B(e,+n)}return e},x=(e,a="onChange")=>{const n=e;e=G(e);const o=v(n)-v(e);if(t.type==="number"||t.type==="digit"){const g=t.type==="number";e=Ae(e,g,g)}let s=0;if(t.formatter&&a===t.formatTrigger){const{formatter:g,maxlength:b}=t;if(e=g(e),I(b)&&v(e)>+b&&(e=B(e,+b)),c.value&&r.focused){const{selectionEnd:V}=c.value,q=B(n,V);s=v(g(q))-v(q)}}if(c.value&&c.value.value!==e)if(r.focused){let{selectionStart:g,selectionEnd:b}=c.value;if(c.value.value=e,I(g)&&I(b)){const V=v(e);o?(g-=o,b-=o):s&&(g+=s,b+=s),c.value.setSelectionRange(Math.min(g,V),Math.min(b,V))}}else c.value.value=e;e!==t.modelValue&&i("update:modelValue",e)},Q=e=>{e.target.composing||x(e.target.value)},L=()=>{var e;return(e=c.value)==null?void 0:e.blur()},F=()=>{var e;return(e=c.value)==null?void 0:e.focus()},k=()=>{const e=c.value;t.type==="textarea"&&t.autosize&&e&&He(e,t.autosize)},p=e=>{r.focused=!0,i("focus",e),E(k),f("readonly")&&L()},ee=e=>{r.focused=!1,x(y(),"onBlur"),i("blur",e),!f("readonly")&&(T("onBlur"),E(k),_e())},W=e=>i("clickInput",e),te=e=>i("clickLeftIcon",e),ne=e=>i("clickRightIcon",e),ae=e=>{P(e),i("update:modelValue",""),i("clear",e)},$=S(()=>{if(typeof t.error=="boolean")return t.error;if(h&&h.props.showError&&r.status==="failed")return!0}),ie=S(()=>{const e=f("labelWidth"),a=f("labelAlign");if(e&&a!=="top")return{width:H(e)}}),re=e=>{e.keyCode===13&&(!(h&&h.props.submitOnEnter)&&t.type!=="textarea"&&P(e),t.type==="search"&&L()),i("keypress",e)},j=()=>t.id||`${d}-input`,le=()=>r.status,oe=()=>{const e=m("control",[f("inputAlign"),{error:$.value,custom:!!l.input,"min-height":t.type==="textarea"&&!t.autosize}]);if(l.input)return u("div",{class:e,onClick:W},[l.input()]);const a={id:j(),ref:c,name:t.name,rows:t.rows!==void 0?+t.rows:void 0,class:e,disabled:f("disabled"),readonly:f("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,enterkeyhint:t.enterkeyhint,spellcheck:t.spellcheck,"aria-labelledby":t.label?`${d}-label`:void 0,onBlur:ee,onFocus:p,onInput:Q,onClick:W,onChange:U,onKeypress:re,onCompositionend:U,onCompositionstart:qe};return t.type==="textarea"?u("textarea",a,null):u("input",Re(Ke(t.type),a),null)},se=()=>{const e=l["left-icon"];if(t.leftIcon||e)return u("div",{class:m("left-icon"),onClick:te},[e?e():u(R,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])},ce=()=>{const e=l["right-icon"];if(t.rightIcon||e)return u("div",{class:m("right-icon"),onClick:ne},[e?e():u(R,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},ue=()=>{if(t.showWordLimit&&t.maxlength){const e=v(y());return u("div",{class:m("word-limit")},[u("span",{class:m("word-num")},[e]),Be("/"),t.maxlength])}},de=()=>{if(h&&h.props.showErrorMessage===!1)return;const e=t.errorMessage||r.validateMessage;if(e){const a=l["error-message"],n=f("errorMessageAlign");return u("div",{class:m("error-message",n)},[a?a({message:e}):e])}},fe=()=>{const e=f("labelWidth"),a=f("labelAlign"),n=f("colon")?":":"";if(l.label)return[l.label(),n];if(t.label)return u("label",{id:`${d}-label`,for:l.input?void 0:j(),onClick:o=>{P(o),F()},style:a==="top"&&e?{width:H(e)}:void 0},[t.label+n])},ge=()=>[u("div",{class:m("body")},[oe(),X.value&&u(R,{ref:z,name:t.clearIcon,class:m("clear")},null),ce(),l.button&&u("div",{class:m("button")},[l.button()])]),ue(),de()];return Fe({blur:L,focus:F,validate:D,formValue:N,resetValidation:C,getValidationStatus:le}),Me(Pe,{customValue:w,resetValidation:C,validateWithTrigger:T}),we(()=>t.modelValue,()=>{x(y()),C(),T("onChange"),E(k)}),Te(()=>{x(y(),t.formatTrigger),E(k)}),Le("touchstart",ae,{target:S(()=>{var e;return(e=z.value)==null?void 0:e.$el})}),()=>{const e=f("disabled"),a=f("labelAlign"),n=se(),o=()=>{const s=fe();return a==="top"?[n,s].filter(Boolean):s||[]};return u(Oe,{size:t.size,class:m({error:$.value,disabled:e,[`label-${a}`]:a}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:ie.value,valueClass:m("value"),titleClass:[m("label",[a,{required:t.required}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:n&&a!=="top"?()=>n:null,title:o,value:ge,extra:l.extra})}}});const tt=ze(Xe);export{tt as F,Ue as f};
