(function(e){function t(t){for(var c,a,o=t[0],i=t[1],b=t[2],s=0,f=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,b||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],c=!0,o=1;o<r.length;o++){var i=r[o];0!==n[i]&&(c=!1)}c&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var c={},n={app:0},u=[];function a(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=c,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(r,c,function(t){return e[t]}.bind(null,c));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/varid-currency/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var b=0;b<o.length;b++)t(o[b]);var d=i;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"490e":function(e,t,r){},"4fc3":function(e,t,r){"use strict";r("56d4")},"56d4":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23");function n(e,t,r,n,u,a){var o=Object(c["z"])("Sidenav"),i=Object(c["z"])("Breadcrumb"),b=Object(c["z"])("router-view");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(o),Object(c["i"])(i),Object(c["i"])(b)],64)}var u=function(e){return Object(c["u"])("data-v-40e925ae"),e=e(),Object(c["s"])(),e},a={class:"sidenav",id:"nav"},o=u((function(){return Object(c["f"])("h2",null,"CURRENCY APP",-1)})),i=Object(c["h"])("Add Currency"),b=Object(c["h"])("Table"),d=Object(c["h"])("Converter");function s(e,t,r,n,u,s){var f=Object(c["z"])("router-link");return Object(c["r"])(),Object(c["e"])("div",a,[o,Object(c["i"])(f,{to:"/addCurrency"},{default:Object(c["E"])((function(){return[i]})),_:1}),Object(c["i"])(f,{to:"/currencyTable"},{default:Object(c["E"])((function(){return[b]})),_:1}),Object(c["i"])(f,{to:"/currencyConverter"},{default:Object(c["E"])((function(){return[d]})),_:1})])}var f={name:"Sidenav"},l=(r("5e37"),r("6b0d")),O=r.n(l);const j=O()(f,[["render",s],["__scopeId","data-v-40e925ae"]]);var v=j,y={class:"nav"},p=Object(c["h"])("Add Currency"),m=Object(c["h"])(" > "),h=Object(c["h"])("Table"),C=Object(c["h"])(" > "),_=Object(c["h"])("Converter");function g(e,t,r,n,u,a){var o=Object(c["z"])("router-link");return Object(c["r"])(),Object(c["e"])("div",y,[Object(c["i"])(o,{to:"/addCurrency"},{default:Object(c["E"])((function(){return[p]})),_:1}),m,Object(c["i"])(o,{to:"/currencyTable"},{default:Object(c["E"])((function(){return[h]})),_:1}),C,Object(c["i"])(o,{to:"/currencyConverter"},{default:Object(c["E"])((function(){return[_]})),_:1})])}var w={name:"Breadcrumb"};r("ace0");const S=O()(w,[["render",g],["__scopeId","data-v-3c7ac80a"]]);var E=S,F={components:{Breadcrumb:E,Sidenav:v}};r("c8b5");const P=O()(F,[["render",n]]);var k=P,x=r("6c02"),T=(r("b680"),function(e){return Object(c["u"])("data-v-112f25ca"),e=e(),Object(c["s"])(),e}),z={class:"converter"},B=Object(c["h"])("Calculate"),R=Object(c["h"])("Amount"),A={class:"result"},I=T((function(){return Object(c["f"])("h1",null,"Result",-1)}));function M(e,t,r,n,u,a){var o=Object(c["z"])("CurrencyForm");return Object(c["r"])(),Object(c["e"])("div",z,[Object(c["i"])(o,{onSubmitForm:a.calculateCurrency,currencies:e.currencies},{button:Object(c["E"])((function(){return[B]})),rate:Object(c["E"])((function(){return[R]})),_:1},8,["onSubmitForm","currencies"]),Object(c["f"])("div",A,[I,Object(c["f"])("h1",null,Object(c["B"])(u.result.toFixed(2))+" PLN",1)])])}var N=r("5530"),$=(r("7db0"),function(e){return Object(c["u"])("data-v-1d4bec7e"),e=e(),Object(c["s"])(),e}),U=Object(c["g"])('<div class="line" data-v-1d4bec7e></div><div class="line" data-v-1d4bec7e></div><div class="line" data-v-1d4bec7e></div><div class="line" data-v-1d4bec7e></div><div class="line" data-v-1d4bec7e></div><div class="line" data-v-1d4bec7e></div>',6),q={for:"currency"},D={key:0},J=Object(c["h"])(" Currency"),L={key:0,required:"",name:"currency"},G={key:1,id:"currency",name:"currency"},Y=$((function(){return Object(c["f"])("option",null,"USD",-1)})),H=$((function(){return Object(c["f"])("option",{selected:""},"EUR",-1)})),K=$((function(){return Object(c["f"])("option",null,"GBP",-1)})),Q=[Y,H,K],V={for:"rate"},W=$((function(){return Object(c["f"])("input",{required:"",type:"number",step:"0.01",min:"0.01",id:"rate",name:"rate"},null,-1)}));function X(e,t,r,n,u,a){return Object(c["r"])(),Object(c["e"])("form",{onSubmit:t[0]||(t[0]=Object(c["F"])((function(t){return e.$emit("submitForm",t)}),["prevent"]))},[U,Object(c["f"])("label",q,[r.currencies?Object(c["d"])("",!0):(Object(c["r"])(),Object(c["e"])("span",D,"New")),J]),r.currencies?(Object(c["r"])(),Object(c["e"])("select",L,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(r.currencies,(function(e){return Object(c["r"])(),Object(c["e"])("option",{key:e.currency},Object(c["B"])(e.currency),1)})),128))])):(Object(c["r"])(),Object(c["e"])("select",G,Q)),Object(c["f"])("label",V,[Object(c["y"])(e.$slots,"rate",{},void 0,!0)]),W,Object(c["f"])("button",null,[Object(c["y"])(e.$slots,"button",{},void 0,!0)])],32)}var Z={name:"CurrencyForm",props:["currencies"]};r("ed40");const ee=O()(Z,[["render",X],["__scopeId","data-v-1d4bec7e"]]);var te=ee,re=r("5502"),ce={name:"CurrencyConverter",components:{CurrencyForm:te},data:function(){return{result:0}},computed:Object(N["a"])({},Object(re["b"])({currencies:"currencies"})),methods:{calculateCurrency:function(e){var t=this.currencies.find((function(t){return t.currency===e.target.currency.value}));this.result=e.target.rate.value*t.rate}}};r("4fc3");const ne=O()(ce,[["render",M],["__scopeId","data-v-112f25ca"]]);var ue=ne,ae=function(e){return Object(c["u"])("data-v-067b3eeb"),e=e(),Object(c["s"])(),e},oe=ae((function(){return Object(c["f"])("tr",null,[Object(c["f"])("th",null,"Currency"),Object(c["f"])("th",null,"Exchange Rate")],-1)}));function ie(e,t,r,n,u,a){return Object(c["r"])(),Object(c["e"])("table",null,[oe,(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.currencies,(function(e){return Object(c["r"])(),Object(c["e"])("tr",{key:e.currency},[Object(c["f"])("th",null,Object(c["B"])(e.currency),1),Object(c["f"])("th",null,Object(c["B"])(e.rate)+" PLN",1)])})),128))])}var be={name:"CurrencyTable",computed:Object(N["a"])({},Object(re["b"])({currencies:"currencies"}))};r("f24d");const de=O()(be,[["render",ie],["__scopeId","data-v-067b3eeb"]]);var se=de,fe={class:"currency"},le=Object(c["h"])("Save Currency"),Oe=Object(c["h"])("Rate");function je(e,t,r,n,u,a){var o=Object(c["z"])("CurrencyForm"),i=Object(c["z"])("router-view");return Object(c["r"])(),Object(c["e"])("div",fe,[Object(c["i"])(o,{onSubmitForm:a.addCurrency},{button:Object(c["E"])((function(){return[le]})),rate:Object(c["E"])((function(){return[Oe]})),_:1},8,["onSubmitForm"]),Object(c["i"])(i)])}var ve=r("1da1"),ye=(r("96cf"),r("c1f9"),{name:"AddCurrency",components:{CurrencyForm:te},methods:{addCurrency:function(e){var t=this;return Object(ve["a"])(regeneratorRuntime.mark((function r(){var c,n,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:c=Object.fromEntries(new FormData(e.target)),n=c.currency,u=c.rate,t.$store.dispatch("addToCurrencies",{currency:n,rate:u}),e.target.reset();case 3:case"end":return r.stop()}}),r)})))()}}});r("77f6");const pe=O()(ye,[["render",je],["__scopeId","data-v-579e919f"]]);var me=pe,he=[{path:"/",name:"App",component:k,redirect:"/addCurrency",children:[{path:"/addCurrency",name:"AddCurrency",component:me},{path:"/currencyTable",name:"CurrencyTable",component:se},{path:"/currencyConverter",name:"CurrencyConverter",component:ue}]}],Ce=Object(x["a"])({history:Object(x["b"])("/varid-currency/"),routes:he}),_e=Ce,ge=(r("4de4"),Object(re["a"])({state:{currencies:[]},mutations:{setCurrency:function(e,t){e.currencies.find((function(e){return e.currency===t.currency}))&&(e.currencies=e.currencies.filter((function(e){return e.currency!==t.currency}))),e.currencies.push(t)}},actions:{addToCurrencies:function(e,t){e.commit("setCurrency",t)}},getters:{currencies:function(e){return e.currencies}}}));Object(c["c"])(k).use(ge).use(_e).mount("#app")},"578e":function(e,t,r){},"5c90":function(e,t,r){},"5e37":function(e,t,r){"use strict";r("490e")},7357:function(e,t,r){},"77f6":function(e,t,r){"use strict";r("578e")},ace0:function(e,t,r){"use strict";r("ccc3")},c8b5:function(e,t,r){"use strict";r("5c90")},ccc3:function(e,t,r){},d773:function(e,t,r){},ed40:function(e,t,r){"use strict";r("7357")},f24d:function(e,t,r){"use strict";r("d773")}});
//# sourceMappingURL=app.68d438e1.js.map