(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7128dab2"],{"07c3":function(t,n,e){"use strict";var a=e("99f5"),c=e.n(a);c.a},"67f4":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bind-tb"},[e("m-header",{attrs:{title:"绑定账号"}}),e("div",{staticClass:"form-wrap"},[e("div",{staticClass:"form-item"},[e("cube-input",{attrs:{placeholder:"请输入旺旺ID账户名"},model:{value:t.acc,callback:function(n){t.acc=n},expression:"acc"}},[e("div",{staticClass:"form-item-pre",attrs:{slot:"prepend"},slot:"prepend"},[e("i",{staticClass:"cubeic-mall"})])])],1),e("cube-button",{attrs:{outline:""},on:{click:t.bindTb}},[t._v("绑定")])],1)],1)},c=[],i=e("a902"),s=e("c8e7"),o={name:"bind-tb",components:{mHeader:i["a"]},mixins:[s["a"]],data:function(){return{acc:""}},methods:{bindTb:function(){var t=this;this.$createDialog({type:"alert",title:"绑定成功",icon:"cubeic-ok",onConfirm:function(){t.goto("/task")}}).show()}},created:function(){},mounted:function(){}},r=o,l=(e("07c3"),e("2877")),u=Object(l["a"])(r,a,c,!1,null,"9677dba2",null);u.options.__file="bind-tb.vue";n["default"]=u.exports},"99f5":function(t,n,e){}}]);