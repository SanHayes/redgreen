(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-suggestions-sugDel"],{"10fe":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uniList:a("2a07").default,uniListItem:a("98ed").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"taskDel"},[a("uni-list",[a("uni-list-item",{attrs:{direction:"column",title:t.delData.OutId,note:t.delData.data}},[a("template",{slot:"footer"},[a("v-uni-view",{staticClass:"taskItem"},[a("v-uni-text",[t._v(t._s(t.i18n.sugdel.status)+"：")]),a("v-uni-text",{staticClass:"item",staticStyle:{color:"#dd534e"}},[t._v(t._s(1==t.delData.status?t.i18n.sugdel.Replied:t.i18n.sugdel.Unanswered))])],1),a("v-uni-view",{staticClass:"taskItem"},[a("v-uni-text",[t._v(t._s(t.i18n.sugdel.Typesof)+"：")]),a("v-uni-text",{staticClass:"item",staticStyle:{color:"#dd534e"}},[t._v(t._s(1==t.delData.type?t.i18n.sugdel.Suggest:2==t.delData.type?t.i18n.sugdel.consult:3==t.delData.type?t.i18n.sugdel.Rechargeproblem:4==t.delData.type?t.i18n.sugdel.Withdrawalissues:15==t.delData.type?t.i18n.sugdel.Parityproblem:6==t.delData.type?t.i18n.sugdel.Redenvelope:t.i18n.sugdel.other))])],1),a("v-uni-view",{staticClass:"taskItem"},[a("v-uni-text",[t._v(t._s(t.i18n.taskDel.Creationtime)+"：")]),a("v-uni-text",{staticClass:"item"},[t._v(t._s(t.delData.createtime))])],1),a("v-uni-view",{staticClass:"taskItem"},[a("v-uni-text",[t._v(t._s(t.i18n.taskDel.Updatetime)+"：")]),a("v-uni-text",{staticClass:"item"},[t._v(t._s(t.delData.updatetime))])],1)],1)],2)],1)],1)},s=[]},"55a6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{delData:""}},onShow:function(){uni.setNavigationBarTitle({title:this._i18n.getLanguage().sugdel.title})},computed:{i18n:function(){return this._i18n.getLanguage()}},onLoad:function(t){this.id=t.id,this.getData()},methods:{getData:function(){var t=this;this.$http({url:"/api/sundry/suggest_info",method:"POST",data:{token:this.$store.state.user.token,id:this.id},success:function(e){t.delData=e.data}})}}};e.default=i},"5b6e":function(t,e,a){var i=a("b71e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("56f613f6",i,!0,{sourceMap:!1,shadowMode:!1})},"90a9":function(t,e,a){"use strict";a.r(e);var i=a("55a6"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},ae02:function(t,e,a){"use strict";var i=a("5b6e"),n=a.n(i);n.a},b0cd:function(t,e,a){"use strict";a.r(e);var i=a("10fe"),n=a("90a9");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("ae02");var u,l=a("f0c5"),d=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"cd4bbb8a",null,!1,i["a"],u);e["default"]=d.exports},b71e:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".taskItem[data-v-cd4bbb8a]{font-size:14px;padding:10px 0;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.taskItem .item[data-v-cd4bbb8a]{color:#555}.apply[data-v-cd4bbb8a]{padding:30px 15px}.taskDel[data-v-cd4bbb8a] .uni-list-item__content-title{text-align:center;font-size:20px}.taskDel[data-v-cd4bbb8a] .uni-list-item__content-note{font-size:14px;text-indent:28px;padding:15px 0;color:#555}",""]),t.exports=e}}]);