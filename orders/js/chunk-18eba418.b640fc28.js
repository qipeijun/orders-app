(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18eba418"],{c7d4:function(t,e,i){},d243:function(t,e,i){"use strict";var n=i("c7d4"),o=i.n(n);o.a},ff9a:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"orders"},[i("m-header",{attrs:{title:t.title,"show-back":!1}}),i("div",{staticClass:"i-orders"},[i("div",{staticClass:"i-orders-item",on:{click:t.getOrders}},[t._v("接单")])])],1)},o=[],s=i("be94"),c=(i("cadf"),i("551c"),i("097d"),i("a902")),a=i("2f62"),r=i("ed4f"),d=i("c8e7"),u={name:"orders",components:{mHeader:c["a"]},mixins:[d["a"]],data:function(){return{title:"任务大厅"}},methods:Object(s["a"])({getOrders:function(){var t=this;this.showToast("派发订单中...","loading"),setTimeout(function(){t.$createDialog({type:"alert",title:"哇~",content:"成功抢一单",icon:"cubeic-ok",onConfirm:function(){t.goto("/bind-tb")}}).show()},3e3)}},Object(a["b"])([r["b"]])),created:function(){this.NAV_CHANGE(this.title)},mounted:function(){}},f=u,l=(i("d243"),i("2877")),b=Object(l["a"])(f,n,o,!1,null,"c1fbe578",null);b.options.__file="orders.vue";e["default"]=b.exports}}]);