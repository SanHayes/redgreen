import{k as H,E as J,J as L,h as M,H as s,I as e,M as S}from"./index-23f7f15c.js";import{N as j}from"./index-09d4807f.js";import{_ as q}from"./_plugin-vue_export-helper-65965647.js";import"./use-placeholder-de72143c.js";const z={class:"content"},A={class:"totalReport"},G={class:"report-data-item"},K={class:"title"},O={class:"number"},P={class:"sub-title"},Q={class:"sub-number"},T={class:"sub-title"},U={class:"sub-number"},W={class:"report-data-item"},X={class:"title"},Y={class:"number"},Z={class:"sub-title"},ss={class:"sub-number"},es={class:"sub-title"},ts={class:"sub-number"},os={class:"report-data-item"},is={class:"title"},ls={class:"number only"},as={class:"report-data-item"},_s={class:"title"},ns={class:"number only"},ds={class:"report-data-item"},cs={class:"title"},rs={class:"number only"},vs={class:"report-data-item"},hs={class:"title"},us={class:"number"},ms={class:"sub-title"},bs={class:"sub-number"},ps={class:"sub-title"},$s={class:"sub-number"},gs={class:"report-data-item"},ws={class:"title"},fs={class:"number"},Fs={class:"sub-title"},ys={class:"sub-number"},ks={class:"sub-title"},xs={class:"sub-number"},Bs={class:"report-data-item"},Ns={class:"title"},Rs={class:"number only"},Es={class:"report-data-item"},Is={class:"title"},Vs={class:"number"},Cs={class:"sub-title"},Ds={class:"sub-number"},Hs={class:"sub-title"},Js={class:"sub-number"},Ls={class:"report-data-item"},Ms={class:"title"},Ss={class:"number only"},js={class:"report-data-item"},qs={class:"title"},zs={class:"number only"},As={class:"report-data-item"},Gs={class:"title"},Ks={class:"number only"},Os={class:"report-data-item"},Ps={class:"title"},Qs={class:"number"},Ts={class:"sub-title"},Us={class:"sub-number"},Ws={class:"sub-title"},Xs={class:"sub-number"},Ys={class:"report-data-item"},Zs={class:"title"},se={class:"number"},ee={class:"sub-title"},te={class:"sub-number"},oe={class:"sub-title"},ie={class:"sub-number"},le={__name:"Report",setup(ae){const C=()=>history.back(),t=H({});return(o,_e)=>{var i,l,a,_,n,d,c,r,v,h,u,m,b,p,$,g,w,f,F,y,k,x,B,N,R,E,I,V;const D=j;return J(),L(S,null,[M(D,{title:o.$t("next.report"),"left-arrow":"",onClickLeft:C},null,8,["title"]),s("div",z,[s("div",A,[s("div",G,[s("div",K,e(o.$t("next.subordinates")),1),s("div",O,e(parseFloat((i=t.all_users)==null?void 0:i.level_1)+parseFloat((l=t.all_users)==null?void 0:l.level_2)),1),s("div",P,e(o.$t("next.level1")),1),s("div",Q,e((a=t.all_users)==null?void 0:a.level_1),1),s("div",T,e(o.$t("next.level2")),1),s("div",U,e((_=t.all_users)==null?void 0:_.level_2),1)]),s("div",W,[s("div",X,e(o.$t("next.registrations")),1),s("div",Y,e(parseFloat((n=t.new_users)==null?void 0:n.level_1)+parseFloat((d=t.new_users)==null?void 0:d.level_2)),1),s("div",Z,e(o.$t("next.level1")),1),s("div",ss,e((c=t.new_users)==null?void 0:c.level_1),1),s("div",es,e(o.$t("next.level2")),1),s("div",ts,e((r=t.new_users)==null?void 0:r.level_2),1)]),s("div",os,[s("div",is,e(o.$t("next.bet")),1),s("div",ls,e(t.bet_users),1)]),s("div",as,[s("div",_s,e(o.$t("next.bettoday")),1),s("div",ns,e(t.bet_id_count),1)]),s("div",ds,[s("div",cs,e(o.$t("next.login")),1),s("div",rs,e(t.login_users),1)]),s("div",vs,[s("div",hs,e(o.$t("next.firstrecharge")),1),s("div",us,e(parseFloat((v=t.recharge_first)==null?void 0:v.level_1)+parseFloat((h=t.recharge_first)==null?void 0:h.level_2)),1),s("div",ms,e(o.$t("next.level1")),1),s("div",bs,e((u=t.recharge_first)==null?void 0:u.level_1),1),s("div",ps,e(o.$t("next.level2")),1),s("div",$s,e((m=t.recharge_first)==null?void 0:m.level_2),1)]),s("div",gs,[s("div",ws,e(o.$t("next.rechargeamount")),1),s("div",fs,e(parseFloat((b=t.recharge_sum)==null?void 0:b.level_1)+parseFloat((p=t.recharge_sum)==null?void 0:p.level_2)),1),s("div",Fs,e(o.$t("next.level1")),1),s("div",ys,e(($=t.recharge_sum)==null?void 0:$.level_1),1),s("div",ks,e(o.$t("next.level2")),1),s("div",xs,e((g=t.recharge_sum)==null?void 0:g.level_1),1)]),s("div",Bs,[s("div",Ns,e(o.$t("next.rechargemembers")),1),s("div",Rs,e(t.recharge_users),1)]),s("div",Es,[s("div",Is,e(o.$t("next.withdrawalamount")),1),s("div",Vs,e(parseFloat((w=t.withdraw_sum)==null?void 0:w.level_1)+parseFloat((f=t.withdraw_sum)==null?void 0:f.level_2)),1),s("div",Cs,e(o.$t("next.level1")),1),s("div",Ds,e((F=t.withdraw_sum)==null?void 0:F.level_1),1),s("div",Hs,e(o.$t("next.level2")),1),s("div",Js,e((y=t.withdraw_sum)==null?void 0:y.level_2),1)]),s("div",Ls,[s("div",Ms,e(o.$t("next.withdrawalmembers")),1),s("div",Ss,e(t.withdraw_users),1)]),s("div",js,[s("div",qs,e(o.$t("next.balance")),1),s("div",zs,e(t.team_balance),1)]),s("div",As,[s("div",Gs,e(o.$t("next.totalbet")),1),s("div",Ks,[s("span",null,e((k=t.bet)==null?void 0:k.bet_amount),1)])]),s("div",Os,[s("div",Ps,e(o.$t("next.bettingfee")),1),s("div",Qs,e((x=t.bet)==null?void 0:x.bet_amount),1),s("div",Ts,e(o.$t("next.level1")),1),s("div",Us,e((B=t.bet)==null?void 0:B.bet_amount_fee),1),s("div",Ws,e(o.$t("next.level2")),1),s("div",Xs,e((N=t.bet)==null?void 0:N.bet_amount_fee),1)]),s("div",Ys,[s("div",Zs,e(o.$t("next.commission")),1),s("div",se,e(parseFloat((R=t.commission)==null?void 0:R.level_1)+parseFloat((E=t.commission)==null?void 0:E.level_2)),1),s("div",ee,e(o.$t("next.level1")),1),s("div",te,e((I=t.commission)==null?void 0:I.level_1),1),s("div",oe,e(o.$t("next.level2")),1),s("div",ie,e((V=t.commission)==null?void 0:V.level_2),1)])])])],64)}}},ve=q(le,[["__scopeId","data-v-8f681d49"]]);export{ve as default};
