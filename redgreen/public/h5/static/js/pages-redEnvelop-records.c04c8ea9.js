(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-redEnvelop-records"],{"1a14":function(e,t,a){"use strict";var i=a("3eef"),n=a.n(i);n.a},"2d94":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".records[data-v-b187e1d0]{padding:15px}.tabs[data-v-b187e1d0]{display:flex;align-items:center;border:1px solid #11ccc0;border-radius:5px;height:30px}.tabs .tabs-item[data-v-b187e1d0]{flex:1;text-align:center;color:#11ccc0;font-size:14px;line-height:30px}.active[data-v-b187e1d0]{background-color:#11ccc0!important;color:#fff!important}.table-header[data-v-b187e1d0],\n.table-body[data-v-b187e1d0]{display:flex;justify-content:space-between;border-bottom:1px solid #dadada}.table-header .table-header-td[data-v-b187e1d0]{color:#279890;font-size:13px;display:flex;align-items:flex-end;padding:10px 0;flex:1;display:flex;justify-content:center}.table-body .table-header-td[data-v-b187e1d0]{font-size:13px;height:40px;line-height:40px;flex:1;display:flex;justify-content:center;align-items:center;color:#555}",""]),e.exports=t},"3b0b":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"records"},[a("v-uni-view",{staticClass:"tabs"},e._l(e.tabs,(function(t,i){return a("v-uni-view",{key:i,staticClass:"tabs-item",class:{active:e.active==i?"active":""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeHadle(i)}}},[e._v(e._s(t))])})),1),a("v-uni-view",{staticClass:"record"},[a("v-uni-view",{staticClass:"table-header"},[a("v-uni-view",{staticClass:"table-header-td",staticStyle:{flex:"2","justify-content":"flex-start"}},[e._v(e._s(e.i18n.index.period))]),a("v-uni-view",{staticClass:"table-header-td"},[e._v(e._s(e.i18n.index.price))]),a("v-uni-view",{staticClass:"table-header-td"},[e._v(e._s(e.i18n.index.number))]),a("v-uni-view",{staticClass:"table-header-td",staticStyle:{"justify-content":"flex-end"}},[e._v(e._s(e.i18n.index.result))])],1),e._l(e.recodeData,(function(t,i){return a("v-uni-view",{key:i,staticClass:"table-body"},[a("v-uni-view",{staticClass:"table-header-td",staticStyle:{flex:"2","justify-content":"flex-start"}},[e._v(e._s(t.Period))]),a("v-uni-view",{staticClass:"table-header-td"},[e._v(e._s(t.Price))]),a("v-uni-view",{staticClass:"table-header-td"},[e._v(e._s(t.Number))]),a("v-uni-view",{staticClass:"table-header-td",staticStyle:{"justify-content":"flex-end"}},[e._v(e._s(t.result))])],1)}))],2)],1)},n=[]},"3eef":function(e,t,a){var i=a("9347");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("191d0f99",i,!0,{sourceMap:!1,shadowMode:!1})},4954:function(e,t,a){var i=a("2d94");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("3d099790",i,!0,{sourceMap:!1,shadowMode:!1})},"6e75":function(e,t,a){"use strict";var i=a("4954"),n=a.n(i);n.a},"77e6":function(e,t,a){"use strict";a.r(t);var i=a("debf"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},9347:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-b187e1d0]{background-color:#f5f5f5}body.?%PAGE?%[data-v-b187e1d0]{background-color:#f5f5f5}",""]),e.exports=t},"9c37":function(e,t,a){"use strict";a.r(t);var i=a("3b0b"),n=a("77e6");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("1a14"),a("6e75");var d=a("f0c5"),r=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"b187e1d0",null,!1,i["a"],void 0);t["default"]=r.exports},debf:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{tabs:["Given Record","Recevied Record"],active:0,recodeData:[{Period:"20200916300",Price:"203990",Number:"1",result:"24"},{Period:"20200916300",Price:"203990",Number:"1",result:"24"},{Period:"20200916300",Price:"203990",Number:"1",result:"24"},{Period:"20200916300",Price:"203990",Number:"1",result:"24"}]}},onShow:function(){uni.setNavigationBarTitle({title:this._i18n.getLanguage().redEnvelop.title})},computed:{i18n:function(){return this._i18n.getLanguage()}},methods:{changeHadle:function(e){this.active=e}}};t.default=i}}]);