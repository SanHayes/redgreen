(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setup-updateLoginPassword"],{"053c":function(t,o,n){var s=n("ce0e");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=n("4f06").default;i("0cc6311e",s,!0,{sourceMap:!1,shadowMode:!1})},"97b1":function(t,o,n){"use strict";n("7a82"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s={data:function(){return{password:"",repassword:"",confirmPassord:""}},onShow:function(){uni.setNavigationBarTitle({title:this._i18n.getLanguage().updateLoginPassword.title})},computed:{i18n:function(){return this._i18n.getLanguage()}},methods:{submit:function(){this.$http({url:"/api/users/set_password",method:"POST",data:{token:this.$store.state.user.token,password:this.password,newpassword:this.repassword,newpassword2:this.confirmPassord},success:function(t){1==t.code?(uni.showToast({icon:"none",duration:3e3,title:t.msg}),setTimeout((function(){uni.redirectTo({url:"../login/login"})}),3e3)):uni.showToast({icon:"none",duration:3e3,title:t.msg})}})}}};o.default=s},a15b:function(t,o,n){"use strict";n.r(o);var s=n("c471"),i=n("f547");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(o,t,(function(){return i[t]}))}(a);n("c07b");var e=n("f0c5"),r=Object(e["a"])(i["default"],s["b"],s["c"],!1,null,"79f7880c",null,!1,s["a"],void 0);o["default"]=r.exports},c07b:function(t,o,n){"use strict";var s=n("053c"),i=n.n(s);i.a},c471:function(t,o,n){"use strict";n.d(o,"b",(function(){return s})),n.d(o,"c",(function(){return i})),n.d(o,"a",(function(){}));var s=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("v-uni-view",{staticClass:"name"},[n("v-uni-view",{staticClass:"form-controler form-border"},[n("v-uni-view",{staticClass:"iconfont icon-mima"}),n("v-uni-input",{staticClass:"form-inp",attrs:{type:"text",password:"true",placeholder:t.i18n.updateLoginPassword.LoginPassword},model:{value:t.password,callback:function(o){t.password=o},expression:"password"}})],1),n("v-uni-view",{staticClass:"form-controler form-border"},[n("v-uni-view",{staticClass:"iconfont icon-xiugai"}),n("v-uni-input",{staticClass:"form-inp",attrs:{type:"text",password:"true",placeholder:t.i18n.updateLoginPassword.NewPassword},model:{value:t.repassword,callback:function(o){t.repassword=o},expression:"repassword"}})],1),n("v-uni-view",{staticClass:"form-controler form-border"},[n("v-uni-view",{staticClass:"iconfont icon-xiugai"}),n("v-uni-input",{staticClass:"form-inp",attrs:{type:"text",password:"true",placeholder:t.i18n.updateLoginPassword.ConfirmPassword},model:{value:t.confirmPassord,callback:function(o){t.confirmPassord=o},expression:"confirmPassord"}})],1),n("v-uni-view",{staticStyle:{"margin-top":"80px"}},[n("v-uni-view",{staticClass:"form-controler form-btn"},[n("v-uni-button",{staticClass:"form-button btn",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.submit()}}},[t._v(t._s(t.i18n.updateLoginPassword.Submit))])],1)],1)],1)},i=[]},ce0e:function(t,o,n){var s=n("24fb");o=s(!1),o.push([t.i,".name[data-v-79f7880c]{padding:15px}.form-controler[data-v-79f7880c]{margin-bottom:15px;position:relative}.form-border[data-v-79f7880c]{border-bottom:1px solid #ccc;padding:15px 0}.form-button[data-v-79f7880c]{background-color:#11ccc0;color:#fff;margin-top:20px}.form-btn[data-v-79f7880c]{margin-top:20px}.btn[data-v-79f7880c]{border-radius:0}.btn[data-v-79f7880c]::after{border-radius:0}.form-inp[data-v-79f7880c]{padding-left:45px}.forgetPassword[data-v-79f7880c]{display:flex;align-items:center;justify-content:flex-end;font-size:12px}.form-controler .iconfont[data-v-79f7880c]{color:#ccc;font-size:24px;position:absolute;top:0;left:5px;line-height:53px}",""]),t.exports=o},f547:function(t,o,n){"use strict";n.r(o);var s=n("97b1"),i=n.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(o,t,(function(){return s[t]}))}(a);o["default"]=i.a}}]);