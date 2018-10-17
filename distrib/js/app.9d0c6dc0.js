(function(t){function e(e){for(var n,s,a=e[0],i=e[1],c=e[2],f=0,d=[];f<a.length;f++)s=a[f],r[s]&&d.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(d.length)d.shift()();return u.push.apply(u,c||[]),o()}function o(){for(var t,e=0;e<u.length;e++){for(var o=u[e],n=!0,a=1;a<o.length;a++){var i=o[a];0!==r[i]&&(n=!1)}n&&(u.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},u=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=i;u.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0189":function(t,e,o){},"0544":function(t,e,o){"use strict";var n=o("c8c9"),r=o("ba93"),u=(o("95fa"),o("2877")),s=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,"783c1165",null);s.options.__file="Quote.vue",e["default"]=s.exports},"4a15":function(t,e,o){"use strict";var n=o("f737"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("Header",{attrs:{quotesCount:t.quotes.length,maxQuotes:t.maxQuotes}}),o("NewQuote",{on:{quoteAdded:t.newQuote}}),o("QuoteGrid",{attrs:{quotes:t.quotes},on:{quoteDeleted:t.deleteQuote}}),t._m(0)],1)},u=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12 text-center"},[o("div",{staticClass:"alert alert-info margin-top"},[t._v("Info: Click on a Quote to delete it!")])])])}],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},t._l(t.quotes,function(e,n){return o("Quote",{nativeOn:{click:function(e){t.deleteQuote(n)}}},[t._v(t._s(e))])}))},a=[],i=o("0544"),c={props:["quotes"],components:{Quote:i["default"]},methods:{deleteQuote:function(t){this.$emit("quoteDeleted",t)}},name:"QuoteGrid"},l=c,f=(o("a649"),o("2877")),d=Object(f["a"])(l,s,a,!1,null,"a79f8232",null);d.options.__file="QuoteGrid.vue";var p=d.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",[o("div",{staticClass:"col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 form-group"},[o("label",[t._v("Quote")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote,expression:"quote"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:t.quote},on:{input:function(e){e.target.composing||(t.quote=e.target.value)}}})]),o("div",{staticClass:"col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 form-group"},[o("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.createNew(e)}}},[t._v("Add Quote")])])])},m=[],_={name:"NewQuote",data:function(){return{quote:""}},methods:{createNew:function(){this.$emit("quoteAdded",this.quote),this.quote=""}}},h=_,b=(o("4a15"),Object(f["a"])(h,v,m,!1,null,"07f1d6e0",null));b.options.__file="NewQuote.vue";var Q=b.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("h3",[t._v("Quotes Added")]),o("div",{staticClass:"progress"},[o("div",{staticClass:"progress-bar",style:{width:t.quotesCount/t.maxQuotes*100+"%"},attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("\n        "+t._s(t.quotesCount)+" / "+t._s(t.maxQuotes)+"\n      ")])])])])},g=[],w={name:"Header",props:["quotesCount","maxQuotes"]},x=w,C=(o("d9a4"),Object(f["a"])(x,q,g,!1,null,"33b3ef28",null));C.options.__file="Header.vue";var y=C.exports,O={data:function(){return{quotes:["Just a sting to see something"],maxQuotes:10}},methods:{newQuote:function(t){if(this.quotes.length>=this.maxQuotes)return alert("Please delete quotes first!");t?this.quotes.push(t):alert("Please enter quote first!")},deleteQuote:function(t){this.quotes.splice(t,1)}},components:{QuoteGrid:p,NewQuote:Q,Header:y}},j=O,P=(o("6f77"),Object(f["a"])(j,r,u,!1,null,"5dff7390",null));P.options.__file="App.vue";var $=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t($)}}).$mount("#app")},"6f77":function(t,e,o){"use strict";var n=o("0189"),r=o.n(n);r.a},"95fa":function(t,e,o){"use strict";var n=o("a801"),r=o.n(n);r.a},"9f02":function(t,e,o){},a649:function(t,e,o){"use strict";var n=o("e6f2"),r=o.n(n);r.a},a801:function(t,e,o){},ba93:function(t,e,o){"use strict";var n=o("be8a"),r=o.n(n);e["default"]=r.a},be8a:function(t,e){},c8c9:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-sm-6 col-md-4 col-lg-3"},[o("div",{staticClass:"card-deck card-default"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body quote"},[t._t("default")],2)])])])},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},d9a4:function(t,e,o){"use strict";var n=o("9f02"),r=o.n(n);r.a},e6f2:function(t,e,o){},f737:function(t,e,o){}});
//# sourceMappingURL=app.9d0c6dc0.js.map