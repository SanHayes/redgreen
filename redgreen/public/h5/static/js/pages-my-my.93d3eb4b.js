(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"1d6d":function(t,i,e){"use strict";var n=e("4b9c"),a=e.n(n);a.a},"1f44":function(t,i,e){"use strict";e.r(i);var n=e("f806"),a=e("7fc4");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("ec34"),e("1d6d");var s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"45e188d2",null,!1,n["a"],void 0);i["default"]=c.exports},"381d":function(t,i,e){var n=e("24fb"),a=e("1de5"),o=e("977e");i=n(!1);var s=a(o);i.push([t.i,".my[data-v-45e188d2]{background:url("+s+") 50% no-repeat;width:100%;overflow:hidden;background-size:cover;color:#fefefe}.my-info[data-v-45e188d2]{display:flex;align-items:center;margin-top:30px}.my-info-avatar[data-v-45e188d2]{padding:20px 15px 0 24px;width:40px;height:40px}.my-info-avatar uni-image[data-v-45e188d2]{width:100%;height:100%;overflow:hidden;border-radius:50%}.my-info-name[data-v-45e188d2]{flex:1;margin-top:20px;font-size:16px;color:#fff}.my-info-icon[data-v-45e188d2]{display:flex;margin-top:20px;justify-content:center;min-width:48px;color:#fafafa}.my-info-icon .icon-shezhi[data-v-45e188d2]{font-size:30px}.my-chunk[data-v-45e188d2]{display:flex;justify-content:space-between;padding:10px}.my-chunk-sub[data-v-45e188d2]{color:#fff;text-align:center;flex:1}.my-chunk-sub-title[data-v-45e188d2]{padding:9px 0;font-size:18px}.my-chunk-sub-text[data-v-45e188d2]{padding-bottom:9px;font-size:15px}.my-list[data-v-45e188d2]{padding:15px 0}.btn[data-v-45e188d2]{background-color:#fff;color:#11ccc0;border:none;border-radius:20px;padding:4px 12px;font-size:14px;float:right;position:relative;top:10px}",""]),t.exports=i},"4b9c":function(t,i,e){var n=e("381d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("5fb39679",n,!0,{sourceMap:!1,shadowMode:!1})},7405:function(t,i,e){t.exports=e.p+"static/img/avatar.3ab7e73f.png"},"7fc4":function(t,i,e){"use strict";e.r(i);var n=e("b035"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"8aba":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"uni-page-body[data-v-45e188d2]{background-color:#f5f5f5}body.?%PAGE?%[data-v-45e188d2]{background-color:#f5f5f5}",""]),t.exports=i},"977e":function(t,i,e){t.exports=e.p+"static/img/grzx_bj.35b3c57f.png"},b035:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{userInfo:{nickname:"",money:0,score:0}}},computed:{i18n:function(){return this._i18n.getLanguage()}},methods:{singOut:function(){var t=this;this.$http({url:"/api/users/logout",method:"POST",data:{token:this.$store.state.user.token},success:function(i){console.log(i),1==i.code?(t.$store.commit("logout"),uni.redirectTo({url:"/pages/login/login"})):uni.showToast({icon:"none",duration:3e3,title:i.msg})}})},clearCache:function(){uni.showModal({content:"Force cache clear?",cancelText:"Cancel",confirmText:"Confirm",confirmColor:"#11ccc0",success:function(t){t.confirm&&console.log("confirm")}})},jumpHandle:function(t){uni.navigateTo({url:t})}}};i.default=n},d538:function(t,i,e){var n=e("8aba");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("76abd178",n,!0,{sourceMap:!1,shadowMode:!1})},ec34:function(t,i,e){"use strict";var n=e("d538"),a=e.n(n);a.a},f806:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uniList:e("4bd9").default,uniListItem:e("4618").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"my"},[n("v-uni-view",{staticClass:"my-info"},[n("v-uni-view",{staticClass:"my-info-avatar"},[n("v-uni-image",{attrs:{src:e("7405"),alt:""}})],1),n("v-uni-view",{staticClass:"my-info-name"},[t._v(t._s(t.$store.state.user.nickname))]),n("v-uni-view",{staticClass:"my-info-icon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpHandle("/pages/setup/setup")}}},[n("v-uni-view",{staticClass:"iconfont icon-shezhi"})],1)],1),n("v-uni-view",{staticClass:"my-chunk"},[n("v-uni-view",{staticClass:"my-chunk-sub"},[n("v-uni-view",{staticClass:"my-chunk-sub-title"},[t._v(t._s(t.$store.state.user.money))]),n("v-uni-view",{staticClass:"my-chunk-sub-text"},[t._v(t._s(t.i18n.my.availableBalance))])],1)],1)],1),n("v-uni-view",{staticClass:"my-list"},[n("uni-list",[n("uni-list-item",{attrs:{title:t.i18n.my.myTask,to:"/pages/myTask/myTask"}}),n("uni-list-item",{attrs:{title:t.i18n.my.MyPromotion,to:"/pages/myPromotion/myPromotion"}}),n("uni-list-item",{attrs:{title:t.i18n.my.MyBank,to:"/pages/myBank/myBank"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpHandle("")}}}),n("uni-list-item",{attrs:{title:t.i18n.my.Accountsecurity,to:"/pages/setup/setup"}}),n("uni-list-item",{attrs:{title:t.i18n.my.suggestions,to:"/pages/suggestions/suggestions"}}),n("uni-list-item",{attrs:{title:t.i18n.my.Notice,to:"/pages/notice/notice"}}),n("uni-list-item",{attrs:{title:t.i18n.my.appdownload,to:"/pages/my/download"}}),n("uni-list-item",{attrs:{title:t.i18n.my.customerService,to:"/pages/my/service"}}),n("uni-list-item",{attrs:{title:t.i18n.my.Forcecacheclear,clickable:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clearCache.apply(void 0,arguments)}}}),n("uni-list-item",{attrs:{title:t.i18n.my.Signout,clickable:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.singOut.apply(void 0,arguments)}}})],1)],1)],1)},o=[]}}]);