(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-suggestions-addsugger"],{1138:function(e,t,n){"use strict";var a=n("1bd0"),i=n.n(a);i.a},"1bd0":function(e,t,n){var a=n("9d97");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("3b48caa7",a,!0,{sourceMap:!1,shadowMode:!1})},"1de5":function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"224d":function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var i=a(n("cd1a")),l={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:i.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=l},3402:function(e,t,n){"use strict";n.r(t);var a=n("db82"),i=n.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(l);t["default"]=i.a},3676:function(e,t,n){var a=n("24fb"),i=n("1de5"),l=n("ec1d");t=a(!1);var s=i(l);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+s+') format("truetype")}.uni-icons[data-v-5c0264f4]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},6319:function(e,t,n){"use strict";n.r(t);var a=n("224d"),i=n.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(l);t["default"]=i.a},"75ee":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return a}));var a={uniIcons:n("9cad").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"add"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"label"},[e._v(e._s(e.i18n.addsugger.Type))]),n("v-uni-view",{staticClass:"inp"},[n("v-uni-picker",{attrs:{mode:"selector",range:e.range,value:"0"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeHandle.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[n("v-uni-text",[e._v(e._s(e.range[e.index]))]),n("uni-icons",{attrs:{type:"arrowright"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"label"},[e._v(e._s(e.i18n.addsugger.OutId))]),n("v-uni-view",{staticClass:"inp"},[n("v-uni-input",{attrs:{type:"text",placeholder:e.i18n.addsugger.problem},model:{value:e.OutId,callback:function(t){e.OutId=t},expression:"OutId"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"label",staticStyle:{"align-self":"flex-start"}},[e._v(e._s(e.i18n.addsugger.Description))]),n("v-uni-view",{staticClass:"inp"},[n("v-uni-textarea",{staticClass:"textarea",attrs:{placeholder:e.i18n.addsugger.desc,maxlength:"500"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputChange.apply(void 0,arguments)}},model:{value:e.desc,callback:function(t){e.desc=t},expression:"desc"}}),n("v-uni-view",{staticClass:"count"},[e._v(e._s(e.count)+"/500")])],1)],1),n("v-uni-button",{staticClass:"btn",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit()}}},[e._v(e._s(e.i18n.addsugger.submit))])],1)},l=[]},"9cad":function(e,t,n){"use strict";n.r(t);var a=n("d832"),i=n("6319");for(var l in i)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(l);n("e851");var s=n("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"5c0264f4",null,!1,a["a"],void 0);t["default"]=d.exports},"9d97":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".add[data-v-f6ccc044]{padding:15px}.btn[data-v-f6ccc044]{margin-top:30px;background-color:#11ccc0;color:#fff}.item[data-v-f6ccc044]{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ccc;padding:12px 0}.item .label[data-v-f6ccc044]{width:100px}.item .inp[data-v-f6ccc044]{flex:1}.picker[data-v-f6ccc044]{display:flex;align-items:center;justify-content:space-between}.textarea[data-v-f6ccc044]{width:100%;box-sizing:border-box}.count[data-v-f6ccc044]{font-size:12px;font-weight:500;text-align:right}",""]),e.exports=t},a885:function(e,t,n){var a=n("3676");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("70c6994a",a,!0,{sourceMap:!1,shadowMode:!1})},cd1a:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""}},d832:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},i=[]},db82:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{index:"",range:[this._i18n.getLanguage().addsugger.Suggest,this._i18n.getLanguage().addsugger.consult,this._i18n.getLanguage().addsugger.Rechargeproblem,this._i18n.getLanguage().addsugger.Withdrawalissues,this._i18n.getLanguage().addsugger.Parityproblem,this._i18n.getLanguage().addsugger.Redenvelopequestion,this._i18n.getLanguage().addsugger.other],OutId:"",desc:"",count:0}},onShow:function(){uni.setNavigationBarTitle({title:this._i18n.getLanguage().addsugger.title})},computed:{i18n:function(){return this._i18n.getLanguage()}},methods:{inputChange:function(e){this.count=e.detail.value.length},changeHandle:function(e){this.index=e.detail.value},submit:function(){var e=this;this.$http({url:"/api/sundry/suggest_add",method:"POST",data:{token:this.$store.state.user.token,type:this.index+1,OutId:this.OutId,data:this.desc},success:function(t){1==t.code?(uni.showToast({icon:"none",title:e._i18n.getLanguage().addsugger.addedsuccessfully,duration:3e3}),setTimeout((function(){uni.navigateBack({url:"/pages/suggestions/suggestions"})}),3e3)):uni.showToast({icon:"none",title:e._i18n.getLanguage().addsugger.addfailed,duration:3e3})}})}}};t.default=a},e851:function(e,t,n){"use strict";var a=n("a885"),i=n.n(a);i.a},e964:function(e,t,n){"use strict";n.r(t);var a=n("75ee"),i=n("3402");for(var l in i)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(l);n("1138");var s=n("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"f6ccc044",null,!1,a["a"],void 0);t["default"]=d.exports},ec1d:function(e,t,n){e.exports=n.p+"static/fonts/uni.75745d34.ttf"}}]);