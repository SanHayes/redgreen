(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myTask-taskDel"],{"061f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{id:"",delData:"",status:!1}},onShow:function(){uni.setNavigationBarTitle({title:this._i18n.getLanguage().taskDel.title})},computed:{i18n:function(){return this._i18n.getLanguage()}},onLoad:function(t){this.id=t.id,this.getDel()},methods:{getDel:function(){var t=this;this.$http({url:"/api/sundry/task_info",method:"POST",data:{token:this.$store.state.user.token,id:this.id},success:function(e){1!=e.data.status?t.status=!1:t.status=!0,t.delData=e.data}})},apply:function(){var t=this;this.$http({url:"/api/sundry/task_ok",method:"POST",data:{token:this.$store.state.user.token,id:this.id},success:function(e){1==e.code?(uni.showToast({title:t._i18n.getLanguage().taskDel.Successfulapplication,icon:"none"}),t.getDel()):uni.showToast({title:t._i18n.getLanguage().taskDel.Applicationfailed,icon:"none"})}})}}};e.default=i},"0fb6":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-tag[data-v-f5a34e84]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\npadding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-f5a34e84]{border-radius:15px}.uni-tag--mark[data-v-f5a34e84]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-f5a34e84]{opacity:.5}.uni-tag--small[data-v-f5a34e84]{height:20px;padding:0 8px;line-height:20px;font-size:%?24?%}.uni-tag--default[data-v-f5a34e84]{color:#333;font-size:%?28?%}.uni-tag-text--small[data-v-f5a34e84]{font-size:%?24?%!important}.uni-tag-text[data-v-f5a34e84]{color:#fff;font-size:%?28?%}.uni-tag-text--primary[data-v-f5a34e84]{color:#007aff!important}.uni-tag-text--success[data-v-f5a34e84]{color:#4cd964!important}.uni-tag-text--warning[data-v-f5a34e84]{color:#f0ad4e!important}.uni-tag-text--error[data-v-f5a34e84]{color:#dd524d!important}.uni-tag--primary[data-v-f5a34e84]{color:#fff;background-color:#007aff;border-width:%?1?%;border-style:solid;border-color:#007aff}.primary-uni-tag--inverted[data-v-f5a34e84]{color:#007aff;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#007aff}.uni-tag--success[data-v-f5a34e84]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-f5a34e84]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-f5a34e84]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-f5a34e84]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-f5a34e84]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-f5a34e84]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-f5a34e84]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}",""]),t.exports=e},3580:function(t,e,a){"use strict";a.r(e);var i=a("c209"),r=a("bb85");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("ce18");var o,d=a("f0c5"),s=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"8c587d52",null,!1,i["a"],o);e["default"]=s.exports},"4a81":function(t,e,a){var i=a("74a7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("41e8c092",i,!0,{sourceMap:!1,shadowMode:!1})},6634:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.text?a("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+t.type,!0===t.disabled||"true"===t.disabled?"uni-tag--disabled":"",!0===t.inverted||"true"===t.inverted?t.type+"-uni-tag--inverted":"",!0===t.circle||"true"===t.circle?"uni-tag--circle":"",!0===t.mark||"true"===t.mark?"uni-tag--mark":"","uni-tag--"+t.size],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[a("v-uni-text",{class:["default"===t.type?"uni-tag--default":"uni-tag-text",!0===t.inverted||"true"===t.inverted?"uni-tag-text--"+t.type:"","small"===t.size?"uni-tag-text--small":""]},[t._v(t._s(t.text))])],1):t._e()},n=[]},"738a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};e.default=i},"74a7":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".taskItem[data-v-8c587d52]{font-size:14px;padding:10px 0;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.taskItem .item[data-v-8c587d52]{color:#555}.apply[data-v-8c587d52]{padding:30px 15px}.btn[data-v-8c587d52]{background-color:#11ccc0;color:#fff}",""]),t.exports=e},"83aae":function(t,e,a){"use strict";a.r(e);var i=a("6634"),r=a("ec55");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("db88");var o,d=a("f0c5"),s=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"f5a34e84",null,!1,i["a"],o);e["default"]=s.exports},bb85:function(t,e,a){"use strict";a.r(e);var i=a("061f"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},c209:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uniList:a("2a07").default,uniListItem:a("98ed").default,uniTag:a("83aae").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"taskDel"},[a("uni-list",[a("uni-list-item",{attrs:{direction:"column",title:t.delData.title,note:t.delData.data}},[a("template",{slot:"footer"},[a("v-uni-view",{staticClass:"taskItem"},[a("v-uni-text",[t._v(t._s(t.i18n.taskDel.Taskstatus)+"：")]),a("uni-tag",{staticClass:"tag",attrs:{text:1==t.delData.status?t.i18n.taskDel.Notapplied:t.i18n.taskDel.Alreadyapplied,inverted:!0,circle:!0,type:1==t.delData.status?"default":"error",size:"small"}})],1),a("v-uni-view",{staticClass:"taskItem"},[a("v-uni-text",[t._v(t._s(t.i18n.taskDel.missionrewards)+"：")]),a("v-uni-text",{staticClass:"item",staticStyle:{color:"#dd534e"}},[t._v(t._s(t.delData.score))])],1),a("v-uni-view",{staticClass:"taskItem"},[a("v-uni-text",[t._v(t._s(t.i18n.taskDel.Creationtime)+"：")]),a("v-uni-text",{staticClass:"item"},[t._v(t._s(t.delData.createtime))])],1),a("v-uni-view",{staticClass:"taskItem"},[a("v-uni-text",[t._v(t._s(t.i18n.taskDel.Updatetime)+"：")]),a("v-uni-text",{staticClass:"item"},[t._v(t._s(t.delData.updatetime))])],1)],1)],2)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"apply"},[a("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.apply.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.taskDel.complete))])],1)],1)},n=[]},ce18:function(t,e,a){"use strict";var i=a("4a81"),r=a.n(i);r.a},d600:function(t,e,a){var i=a("0fb6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("36e37730",i,!0,{sourceMap:!1,shadowMode:!1})},db88:function(t,e,a){"use strict";var i=a("d600"),r=a.n(i);r.a},ec55:function(t,e,a){"use strict";a.r(e);var i=a("738a"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a}}]);