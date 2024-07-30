import{r as b,E as v,F as S,G as U,H as e,h as f,aA as K,D as z,am as B,k as q,aB as G,Q as J,a1 as Q,aC as X,aD as O,aE as W,e as Y,J as C,U as R,I as l,N as $,V as D,M as Z,K as ee,L as oe}from"./index-0cc0024e.js";import{g as te}from"./_commonjsHelpers-725317a4.js";import"./index-922de5f3.js";import{F as L}from"./index-8ac01b93.js";import{_ as P,I as M}from"./_plugin-vue_export-helper-1a19f80c.js";import{D as j}from"./index-311327fa.js";import{b as V,s as ne,a as se}from"./function-call-63d82f46.js";import"./use-expose-11266f13.js";import"./index-deee1849.js";import"./index-4e43274f.js";import"./use-placeholder-f9009b0a.js";import"./use-touch-4ce5b760.js";var ae=function(){var c=document.getSelection();if(!c.rangeCount)return function(){};for(var n=document.activeElement,p=[],s=0;s<c.rangeCount;s++)p.push(c.getRangeAt(s));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return c.removeAllRanges(),function(){c.type==="Caret"&&c.removeAllRanges(),c.rangeCount||p.forEach(function(m){c.addRange(m)}),n&&n.focus()}},le=ae,N={"text/plain":"Text","text/html":"Url",default:"Text"},ie="Copy to clipboard: #{key}, Enter";function re(c){var n=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return c.replace(/#{\s*key\s*}/g,n)}function ce(c,n){var p,s,m,w,u,i,a=!1;n||(n={}),p=n.debug||!1;try{m=le(),w=document.createRange(),u=document.getSelection(),i=document.createElement("span"),i.textContent=c,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",function(r){if(r.stopPropagation(),n.format)if(r.preventDefault(),typeof r.clipboardData>"u"){p&&console.warn("unable to use e.clipboardData"),p&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=N[n.format]||N.default;window.clipboardData.setData(d,c)}else r.clipboardData.clearData(),r.clipboardData.setData(n.format,c);n.onCopy&&(r.preventDefault(),n.onCopy(r.clipboardData))}),document.body.appendChild(i),w.selectNodeContents(i),u.addRange(w);var h=document.execCommand("copy");if(!h)throw new Error("copy command was unsuccessful");a=!0}catch(r){p&&console.error("unable to copy using execCommand: ",r),p&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",c),n.onCopy&&n.onCopy(window.clipboardData),a=!0}catch(d){p&&console.error("unable to copy using clipboardData: ",d),p&&console.error("falling back to prompt"),s=re("message"in n?n.message:ie),window.prompt(s,c)}}finally{u&&(typeof u.removeRange=="function"?u.removeRange(w):u.removeAllRanges()),i&&document.body.removeChild(i),m()}return a}var de=ce;const ue=te(de);const pe={class:"name-field"},me={__name:"Username",props:["username"],emits:["update"],setup(c,{expose:n,emit:p}){const s=c;console.log("props",s);const m=b(!1),w=()=>{m.value=!0},u=b(s.username);console.log(u.value);const i=()=>{K({nickname:u.value}).then(a=>{(a==null?void 0:a.code)===1&&(V({message:a.msg}),p("update"))})};return n({showForm:w}),(a,h)=>{const r=L,d=j;return v(),S(d,{show:m.value,"onUpdate:show":h[1]||(h[1]=_=>m.value=_),title:a.$t("mine.username"),"show-cancel-button":"","confirm-button-text":a.$t("win.confirm"),"cancel-button-text":a.$t("win.cancel"),"confirm-button-color":"#11a77c",onConfirm:i},{default:U(()=>[e("div",pe,[f(r,{modelValue:u.value,"onUpdate:modelValue":h[0]||(h[0]=_=>u.value=_)},null,8,["modelValue"])])]),_:1},8,["show","title","confirm-button-text","cancel-button-text"])}}},ve=P(me,[["__scopeId","data-v-2ee9c431"]]);const fe={class:"name-field"},we={class:"name-field"},_e={class:"name-field"},ge={class:"name-field"},ye={__name:"Password",props:["username"],emits:["update"],setup(c,{expose:n,emit:p}){const s=c,{t:m}=z(),w=B();console.log("props",s);const u=b(!1),i=()=>{u.value=!0},a=q({password:"",newpassword:"",newpassword2:""}),h=()=>{if(!a.password){V({message:m("mine.oldpassword")});return}if(!a.newpassword||a.newpassword!==a.newpassword2){V({message:m("mine.newpassword")});return}G(a).then(r=>r.code!==0?(V(r.msg),setTimeout(()=>{localStorage.removeItem("token"),w.push("/login")},1e3),!0):!1)};return n({showForm:i}),(r,d)=>{const _=L,k=M,I=j;return v(),S(I,{show:u.value,"onUpdate:show":d[4]||(d[4]=g=>u.value=g),title:r.$t("mine.password"),"show-cancel-button":"","confirm-button-text":r.$t("win.confirm"),"cancel-button-text":r.$t("win.cancel"),"confirm-button-color":"#11a77c",onConfirm:h},{default:U(()=>[e("div",fe,[f(_,{modelValue:s.username,"onUpdate:modelValue":d[0]||(d[0]=g=>s.username=g),readonly:""},null,8,["modelValue"])]),e("div",we,[f(_,{modelValue:a.password,"onUpdate:modelValue":d[1]||(d[1]=g=>a.password=g),type:"password",placeholder:r.$t("mine.oldpassword")},{"left-icon":U(()=>[f(k,{"class-prefix":"iconfont",name:"icon-password1"})]),_:1},8,["modelValue","placeholder"])]),e("div",_e,[f(_,{modelValue:a.newpassword,"onUpdate:modelValue":d[2]||(d[2]=g=>a.newpassword=g),type:"password",placeholder:r.$t("mine.newpassword")},{"left-icon":U(()=>[f(k,{"class-prefix":"iconfont",name:"icon-password1"})]),_:1},8,["modelValue","placeholder"])]),e("div",ge,[f(_,{modelValue:a.newpassword2,"onUpdate:modelValue":d[3]||(d[3]=g=>a.newpassword2=g),type:"password",placeholder:r.$t("mine.newpassword")},{"left-icon":U(()=>[f(k,{"class-prefix":"iconfont",name:"icon-password1"})]),_:1},8,["modelValue","placeholder"])])]),_:1},8,["show","title","confirm-button-text","cancel-button-text"])}}},he=P(ye,[["__scopeId","data-v-08d531ea"]]),be="/h5/assets/img_avatar100-038e8902.png",Ce="/h5/assets/recharge-b6d3123c.png",$e="/h5/assets/withdrawal-cbbd6375.png",ke="/h5/assets/transactions-5fd58c58.png";const xe={class:"container-mine"},De={class:"header bg"},Ue={class:"info"},Ve={class:"pic"},Ie=["src"],Ee={class:"name"},Re={key:0},Se={class:"right"},Fe={class:"pass"},Te={class:"bottn bg"},Pe=["src"],Ae=["src"],Ne=["src"],ze={key:0,class:"email bg"},Be={class:"wallet-addr flex-between"},Le={class:"promotion bg",style:{padding:"20px 0px"}},Me={class:"promotionheader"},je={class:"leve"},He={class:"promotion-content-bom-wrap",style:{padding:"15px 10px"}},Ke={class:"promotion-level-wrap"},qe={class:"promotion-level-nav"},Ge=["onClick"],Je={class:"people"},Qe={key:0,style:{color:"#0CC892"}},Xe={key:1,style:{color:"#0CC892"}},Oe={key:0,style:{color:"#0CC892"}},We={key:1,style:{color:"#0CC892"}},Ye={class:"email bg",style:{"margin-bottom":"0px","padding-bottom":"0px"}},Ze={class:"wallet-addr flex-between"},eo={key:0,class:"email bg",style:{"margin-bottom":"0px","padding-bottom":"0px"}},oo={class:"wallet-addr flex-between"},to={class:"btton"},no={__name:"index",setup(c){const{t:n}=z(),p=J(),s=b({}),m=B(),w=b(0),u=async o=>{ue(o,{debug:!0,message:"Press #{key} to copy"}),V({message:n("mine.copy"),icon:"success"})},i=["level1","level2"],a=(o,t)=>{w.value=t},h=()=>{},r=()=>{},d=b(""),_=b(""),k=()=>{localStorage.removeItem("token"),p.updateState("token",""),m.push("/home")};Q(()=>{A(),X().then(o=>{var t;o.code===1&&(_.value=(t=o.data)==null?void 0:t.kefu_url)}),H()});const I=b(),g=b(),A=()=>{ne({overlay:!0}),O().then(o=>{s.value=o,o&&(d.value=window.location.href+"?invite_code="+o.verification)}).finally(()=>{se()})},F=b({}),H=()=>{W({tt:"day"}).then(o=>{o.code===1&&(F.value=o.data)})},E=Y(()=>{const o=w.value+1,t={users:F.value[`inviter${o}_count`],contribution:F.value[`Contribution${o}`]};return console.log(t),t});return(o,t)=>{const x=M;return v(),C("div",xe,[e("div",De,[e("div",Ue,[e("div",Ve,[e("img",{src:R(be)},null,8,Ie)]),e("div",Ee,[e("p",null,[e("span",null,l(o.$t("mine.user")),1),$(" "+l(s.value.nickname),1)]),e("p",null,[e("span",null,[e("span",null,l(o.$t("mine.id")),1)]),$(" "+l(s.value.id),1)]),s.value.phone?(v(),C("p",Re,[e("span",null,l(o.$t("login.phone")),1),$(" "+l(s.value.phone),1)])):D("",!0),e("p",null,[e("span",null,l(o.$t("mine.email")),1),$(" "+l(s.value.email),1)])]),e("div",Se,[e("div",{class:"right_top",onClick:t[0]||(t[0]=y=>I.value.showForm())},[e("div",null,[f(x,{size:"20",name:"icon-biaodanbianji","class-prefix":"iconfont"})])]),e("div",{class:"right_bottom",onClick:t[1]||(t[1]=y=>u(s.value.id))},[e("div",null,[f(x,{size:"20",name:"icon-copy","class-prefix":"iconfont"})])])])]),e("p",Fe,[e("span",{onClick:t[2]||(t[2]=y=>g.value.showForm())},l(o.$t("mine.password")),1)])]),e("div",Te,[e("div",{onClick:t[3]||(t[3]=y=>o.$router.push("/recharge"))},[e("img",{src:R(Ce)},null,8,Pe),e("span",null,l(o.$t("mine.recharge")),1)]),e("div",{onClick:t[4]||(t[4]=y=>o.$router.push("/withdrawal"))},[e("img",{src:R($e)},null,8,Ae),e("span",null,l(o.$t("mine.withdrawal")),1)]),e("div",{onClick:t[5]||(t[5]=y=>o.$router.push("/bank"))},[e("img",{src:R(ke)},null,8,Ne),e("span",null,l(o.$t("mine.card")),1)])]),_.value?(v(),C("div",ze,[e("p",null,l(o.$t("mine.customer"))+" ",1),e("div",Be,[$(l(_.value)+" ",1),f(x,{size:"20",name:"icon-copy","class-prefix":"iconfont"})])])):D("",!0),e("div",Le,[e("div",Me,[e("div",null,[$(l(o.$t("mine.promotion"))+" ",1),e("span",{class:"question",onClick:t[6]||(t[6]=y=>o.$router.push("illustrate"))},"?")]),e("span",{onClick:t[7]||(t[7]=y=>o.$router.push("/report"))},"...")]),e("div",je,[e("div",He,[e("div",Ke,[e("div",qe,[(v(),C(Z,null,ee(i,(y,T)=>e("div",{onClick:so=>a(y,T),class:oe([{"level-text-active":w.value==T},"level-text"])},l(o.$t("mine.level"))+" "+l(T+1),11,Ge)),64))])])]),e("div",Je,[e("div",{class:"left",onClick:h},[e("p",null,l(o.$t("mine.people")),1),E.value.users?(v(),C("span",Qe,l(E.value.users),1)):(v(),C("span",Xe,"0"))]),e("div",{class:"left",onClick:r},[e("p",null,l(o.$t("mine.contribution")),1),E.value.contribution?(v(),C("span",Oe,l(E.value.contribution),1)):(v(),C("span",We,"0"))])])]),e("div",Ye,[e("p",null,l(o.$t("mine.code")),1),e("div",Ze,[$(l(s.value.verification)+" ",1),f(x,{size:"20",name:"icon-copy","class-prefix":"iconfont",onClick:t[8]||(t[8]=y=>u(s.value.verification))})])]),d.value?(v(),C("div",eo,[e("p",null,l(o.$t("mine.link")),1),e("div",oo,[$(l(d.value)+" ",1),f(x,{size:"20",name:"icon-copy","class-prefix":"iconfont",onClick:t[9]||(t[9]=y=>u(d.value))})])])):D("",!0)]),e("div",to,[e("div",{class:"submit-button",onClick:k},[e("p",null,l(o.$t("mine.logout")),1)])]),s.value.nickname?(v(),S(ve,{key:1,ref_key:"nameRef",ref:I,onUpdate:A,username:s.value.nickname},null,8,["username"])):D("",!0),s.value.email?(v(),S(he,{key:2,ref_key:"passRef",ref:g,username:s.value.email},null,8,["username"])):D("",!0)])}}},go=P(no,[["__scopeId","data-v-a35f8c54"]]);export{go as default};
