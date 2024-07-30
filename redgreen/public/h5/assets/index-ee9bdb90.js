import{aL as ne,ah as te,B as M,c as _,h as a,d as A,e as H,A as D,a8 as ae,n as y,a as P,z as oe,y as $,t as I,p as k,at as le,as as U,X as re,V as N,aO as se,ac as Y,r as T,g as q,aP as F,q as ce,i as O,s as G,v as Q,Y as ie,Q as ue,ax as de,aE as fe,T as ve,M as ye,aQ as me,x as he}from"./index-66f9120d.js";import{a as be,u as Se}from"./use-touch-6d2e86ab.js";import{P as Ie,H as ge,I as R}from"./index-802b872b.js";function xe(e,{args:n=[],done:t,canceled:l}){if(e){const r=e.apply(null,n);ne(r)?r.then(o=>{o?t():l&&l()}).catch(te):r?t():l&&l()}else t()}const Ce={to:[String,Object],url:String,replace:Boolean};function we({to:e,url:n,replace:t,$router:l}){e&&l?l[t?"replace":"push"](e):n&&(t?location.replace(n):location.href=n)}function Pe(){const e=M().proxy;return()=>we(e)}const[ke,z]=_("loading"),Oe=Array(12).fill(null).map((e,n)=>a("i",{class:z("line",String(n+1))},null)),ze=a("svg",{class:z("circular"),viewBox:"25 25 50 50"},[a("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Le={size:y,type:P("circular"),color:String,vertical:Boolean,textSize:y,textColor:String};var Be=A({name:ke,props:Le,setup(e,{slots:n}){const t=H(()=>D({color:e.color},ae(e.size))),l=()=>{const o=e.type==="spinner"?Oe:ze;return a("span",{class:z("spinner",e.type),style:t.value},[n.icon?n.icon():o])},r=()=>{var o;if(n.default)return a("span",{class:z("text"),style:{fontSize:oe(e.textSize),color:(o=e.textColor)!=null?o:e.color}},[n.default()])};return()=>{const{type:o,vertical:i}=e;return a("div",{class:z([o,{vertical:i}]),"aria-live":"polite","aria-busy":!0},[l(),r()])}}});const Ge=$(Be),Z={show:Boolean,zIndex:y,overlay:I,duration:y,teleport:[String,Object],lockScroll:I,lazyRender:I,beforeClose:Function,overlayStyle:Object,overlayClass:k,transitionAppear:Boolean,closeOnClickOverlay:I},Qe=Object.keys(Z);let w=0;const K="van-overflow-hidden";function Te(e,n){const t=be(),l="01",r="10",o=d=>{t.move(d);const m=t.deltaY.value>0?r:l,C=se(d.target,e.value),{scrollHeight:S,offsetHeight:g,scrollTop:h}=C;let v="11";h===0?v=g>=S?"00":"01":h+g>=S&&(v="10"),v!=="11"&&t.isVertical()&&!(parseInt(v,2)&parseInt(m,2))&&Y(d,!0)},i=()=>{document.addEventListener("touchstart",t.start),document.addEventListener("touchmove",o,{passive:!1}),w||document.body.classList.add(K),w++},u=()=>{w&&(document.removeEventListener("touchstart",t.start),document.removeEventListener("touchmove",o),w--,w||document.body.classList.remove(K))},c=()=>n()&&i(),f=()=>n()&&u();le(c),U(f),re(f),N(n,d=>{d?i():u()})}function W(e){const n=T(!1);return N(e,t=>{t&&(n.value=t)},{immediate:!0}),t=>()=>n.value?t():null}const[_e,Ae]=_("overlay"),De={show:Boolean,zIndex:y,duration:y,className:k,lockScroll:I,lazyRender:I,customStyle:Object};var $e=A({name:_e,props:De,setup(e,{slots:n}){const t=T(),l=W(()=>e.show||!e.lazyRender),r=i=>{e.lockScroll&&Y(i,!0)},o=l(()=>{var i;const u=D(ce(e.zIndex),e.customStyle);return O(e.duration)&&(u.animationDuration=`${e.duration}s`),G(a("div",{ref:t,style:u,class:[Ae(),e.className]},[(i=n.default)==null?void 0:i.call(n)]),[[Q,e.show]])});return q("touchmove",r,{target:t}),()=>a(F,{name:"van-fade",appear:!0},{default:o})}});const Ee=$($e),Re=D({},Z,{round:Boolean,position:P("center"),closeIcon:P("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:P("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Ne,j]=_("popup");var Ve=A({name:Ne,inheritAttrs:!1,props:Re,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:n,attrs:t,slots:l}){let r,o;const i=T(),u=T(),c=W(()=>e.show||!e.lazyRender),f=H(()=>{const s={zIndex:i.value};if(O(e.duration)){const b=e.position==="center"?"animationDuration":"transitionDuration";s[b]=`${e.duration}s`}return s}),d=()=>{r||(r=!0,i.value=e.zIndex!==void 0?+e.zIndex:me(),n("open"))},m=()=>{r&&xe(e.beforeClose,{done(){r=!1,n("close"),n("update:show",!1)}})},C=s=>{n("clickOverlay",s),e.closeOnClickOverlay&&m()},S=()=>{if(e.overlay)return a(Ee,{show:e.show,class:e.overlayClass,zIndex:i.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:C},{default:l["overlay-content"]})},g=s=>{n("clickCloseIcon",s),m()},h=()=>{if(e.closeable)return a(R,{role:"button",tabindex:0,name:e.closeIcon,class:[j("close-icon",e.closeIconPosition),ge],classPrefix:e.iconPrefix,onClick:g},null)};let v;const L=()=>{v&&clearTimeout(v),v=setTimeout(()=>{n("opened")})},X=()=>n("closed"),J=s=>n("keydown",s),p=c(()=>{var s;const{round:b,position:B,safeAreaInsetTop:E,safeAreaInsetBottom:ee}=e;return G(a("div",he({ref:u,style:f.value,role:"dialog",tabindex:0,class:[j({round:b,[B]:B}),{"van-safe-area-top":E,"van-safe-area-bottom":ee}],onKeydown:J},t),[(s=l.default)==null?void 0:s.call(l),h()]),[[Q,e.show]])}),V=()=>{const{position:s,transition:b,transitionAppear:B}=e,E=s==="center"?"van-fade":`van-popup-slide-${s}`;return a(F,{name:b||E,appear:B,onAfterEnter:L,onAfterLeave:X},{default:p})};return N(()=>e.show,s=>{s&&!r&&(d(),t.tabindex===0&&ie(()=>{var b;(b=u.value)==null||b.focus()})),!s&&r&&(r=!1,n("close"))}),Se({popupRef:u}),Te(u,()=>e.show&&e.lockScroll),q("popstate",()=>{e.closeOnPopstate&&(m(),o=!1)}),ue(()=>{e.show&&d()}),de(()=>{o&&(n("update:show",!0),o=!1)}),U(()=>{e.show&&e.teleport&&(m(),o=!0)}),fe(Ie,()=>e.show),()=>e.teleport?a(ve,{to:e.teleport},{default:()=>[S(),V()]}):a(ye,null,[S(),V()])}});const Ze=$(Ve);let Ke=0;function We(){const e=M(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++Ke}`}const[je,x]=_("cell"),Me={tag:P("div"),icon:String,size:String,title:y,value:y,label:y,center:Boolean,isLink:Boolean,border:I,required:Boolean,iconPrefix:String,valueClass:k,labelClass:k,titleClass:k,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},He=D({},Me,Ce);var Ue=A({name:je,props:He,setup(e,{slots:n}){const t=Pe(),l=()=>{if(n.label||O(e.label))return a("div",{class:[x("label"),e.labelClass]},[n.label?n.label():e.label])},r=()=>{var c;if(n.title||O(e.title)){const f=(c=n.title)==null?void 0:c.call(n);return Array.isArray(f)&&f.length===0?void 0:a("div",{class:[x("title"),e.titleClass],style:e.titleStyle},[f||a("span",null,[e.title]),l()])}},o=()=>{const c=n.value||n.default;if(c||O(e.value))return a("div",{class:[x("value"),e.valueClass]},[c?c():a("span",null,[e.value])])},i=()=>{if(n.icon)return n.icon();if(e.icon)return a(R,{name:e.icon,class:x("left-icon"),classPrefix:e.iconPrefix},null)},u=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const c=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return a(R,{name:c,class:x("right-icon")},null)}};return()=>{var c;const{tag:f,size:d,center:m,border:C,isLink:S,required:g}=e,h=(c=e.clickable)!=null?c:S,v={center:m,required:g,clickable:h,borderless:!C};return d&&(v[d]=!!d),a(f,{class:x(v),role:h?"button":void 0,tabindex:h?0:void 0,onClick:t},{default:()=>{var L;return[i(),r(),o(),u(),(L=n.extra)==null?void 0:L.call(n)]}})}}});const Xe=$(Ue);export{Xe as C,Ge as L,Ee as O,Ze as P,Pe as a,Qe as b,xe as c,we as d,Me as e,Z as p,Ce as r,We as u};