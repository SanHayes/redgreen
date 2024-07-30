import{aJ as q,aF as J,n as w,t as y,p as B,a6 as W,a5 as E,X,V as g,aO as ee,am as D,r as C,c as L,d as _,g as R,h as f,aP as $,A as N,q as oe,i as K,s as M,v as j,y as F,a as T,e as te,Y as ne,Q as ae,ab as se,ah as le,T as ce,M as re,aQ as ie,x as ue,B as de}from"./index-a76ee34d.js";import{u as fe}from"./use-expose-f24e194a.js";import{u as ve}from"./use-touch-24e3c7a8.js";import{P as ye,H as me,I as he}from"./_plugin-vue_export-helper-1e07be8f.js";function Ie(e,{args:o=[],done:t,canceled:s}){if(e){const a=e.apply(null,o);q(a)?a.then(l=>{l?t():s&&s()}).catch(J):a?t():s&&s()}else t()}const H={show:Boolean,zIndex:w,overlay:y,duration:w,teleport:[String,Object],lockScroll:y,lazyRender:y,beforeClose:Function,overlayStyle:Object,overlayClass:B,transitionAppear:Boolean,closeOnClickOverlay:y},Ee=Object.keys(H);let h=0;const A="van-overflow-hidden";function Oe(e,o){const t=ve(),s="01",a="10",l=i=>{t.move(i);const v=t.deltaY.value>0?a:s,x=ee(i.target,e.value),{scrollHeight:m,offsetHeight:O,scrollTop:P}=x;let u="11";P===0?u=O>=m?"00":"01":P+O>=m&&(u="10"),u!=="11"&&t.isVertical()&&!(parseInt(u,2)&parseInt(v,2))&&D(i,!0)},c=()=>{document.addEventListener("touchstart",t.start),document.addEventListener("touchmove",l,{passive:!1}),h||document.body.classList.add(A),h++},r=()=>{h&&(document.removeEventListener("touchstart",t.start),document.removeEventListener("touchmove",l),h--,h||document.body.classList.remove(A))},b=()=>o()&&c(),I=()=>o()&&r();W(b),E(I),X(I),g(o,i=>{i?c():r()})}function V(e){const o=C(!1);return g(e,t=>{t&&(o.value=t)},{immediate:!0}),t=>()=>o.value?t():null}const[Pe,ke]=L("overlay"),we={show:Boolean,zIndex:w,duration:w,className:B,lockScroll:y,lazyRender:y,customStyle:Object};var Ce=_({name:Pe,props:we,setup(e,{slots:o}){const t=C(),s=V(()=>e.show||!e.lazyRender),a=c=>{e.lockScroll&&D(c,!0)},l=s(()=>{var c;const r=N(oe(e.zIndex),e.customStyle);return K(e.duration)&&(r.animationDuration=`${e.duration}s`),M(f("div",{ref:t,style:r,class:[ke(),e.className]},[(c=o.default)==null?void 0:c.call(o)]),[[j,e.show]])});return R("touchmove",a,{target:t}),()=>f($,{name:"van-fade",appear:!0},{default:l})}});const be=F(Ce),xe=N({},H,{round:Boolean,position:T("center"),closeIcon:T("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:T("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Se,p]=L("popup");var Te=_({name:Se,inheritAttrs:!1,props:xe,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:o,attrs:t,slots:s}){let a,l;const c=C(),r=C(),b=V(()=>e.show||!e.lazyRender),I=te(()=>{const n={zIndex:c.value};if(K(e.duration)){const d=e.position==="center"?"animationDuration":"transitionDuration";n[d]=`${e.duration}s`}return n}),i=()=>{a||(a=!0,c.value=e.zIndex!==void 0?+e.zIndex:ie(),o("open"))},v=()=>{a&&Ie(e.beforeClose,{done(){a=!1,o("close"),o("update:show",!1)}})},x=n=>{o("clickOverlay",n),e.closeOnClickOverlay&&v()},m=()=>{if(e.overlay)return f(be,{show:e.show,class:e.overlayClass,zIndex:c.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:x},{default:s["overlay-content"]})},O=n=>{o("clickCloseIcon",n),v()},P=()=>{if(e.closeable)return f(he,{role:"button",tabindex:0,name:e.closeIcon,class:[p("close-icon",e.closeIconPosition),me],classPrefix:e.iconPrefix,onClick:O},null)};let u;const Y=()=>{u&&clearTimeout(u),u=setTimeout(()=>{o("opened")})},G=()=>o("closed"),U=n=>o("keydown",n),Q=b(()=>{var n;const{round:d,position:k,safeAreaInsetTop:S,safeAreaInsetBottom:Z}=e;return M(f("div",ue({ref:r,style:I.value,role:"dialog",tabindex:0,class:[p({round:d,[k]:k}),{"van-safe-area-top":S,"van-safe-area-bottom":Z}],onKeydown:U},t),[(n=s.default)==null?void 0:n.call(s),P()]),[[j,e.show]])}),z=()=>{const{position:n,transition:d,transitionAppear:k}=e,S=n==="center"?"van-fade":`van-popup-slide-${n}`;return f($,{name:d||S,appear:k,onAfterEnter:Y,onAfterLeave:G},{default:Q})};return g(()=>e.show,n=>{n&&!a&&(i(),t.tabindex===0&&ne(()=>{var d;(d=r.value)==null||d.focus()})),!n&&a&&(a=!1,o("close"))}),fe({popupRef:r}),Oe(r,()=>e.show&&e.lockScroll),R("popstate",()=>{e.closeOnPopstate&&(v(),l=!1)}),ae(()=>{e.show&&i()}),se(()=>{l&&(o("update:show",!0),l=!1)}),E(()=>{e.show&&e.teleport&&(v(),l=!0)}),le(ye,()=>e.show),()=>e.teleport?f(ce,{to:e.teleport},{default:()=>[m(),z()]}):f(re,null,[m(),z()])}});const De=F(Te);let ge=0;function Le(){const e=de(),{name:o="unknown"}=(e==null?void 0:e.type)||{};return`${o}-${++ge}`}export{be as O,De as P,V as a,Ee as b,Ie as c,H as p,Le as u};
