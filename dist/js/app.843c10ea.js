(function(e){function n(n){for(var t,u,a=n[0],d=n[1],i=n[2],f=0,b=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);s&&s(n);while(b.length)b.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,n=0;n<o.length;n++){for(var c=o[n],t=!0,u=1;u<c.length;u++){var d=c[u];0!==r[d]&&(t=!1)}t&&(o.splice(n--,1),e=a(a.s=c[0]))}return e}var t={},r={app:0},o=[];function u(e){return a.p+"js/"+({"polyfills-core-js":"polyfills-core-js","polyfills-dom":"polyfills-dom"}[e]||e)+"."+{"chunk-02c995b5":"85352a93","chunk-09155df3":"52876540","chunk-09162720":"5fa9ec89","chunk-097e0872":"0c7e1b69","chunk-0e93a01c":"7c8be212","chunk-1bff95de":"59202c9c","chunk-1c4705f4":"9e22e757","chunk-1dbc15a2":"5bbc8af9","chunk-21a76241":"b0d5762e","chunk-25d83ca8":"188e830a","chunk-2d0a463b":"92735310","chunk-2d0c073f":"017f6960","chunk-2d0d43da":"edd6d8be","chunk-2d0da04a":"620f425b","chunk-2d0e5812":"bc3079e1","chunk-2d213189":"2b11f265","chunk-2d217e6a":"9d5e5387","chunk-2d218068":"4ad272c9","chunk-2d21da73":"1dd5d4ed","chunk-2d2304d2":"72233652","chunk-2d237b00":"17ee064a","chunk-30dd9750":"fb1fe266","chunk-37f2300e":"2b375e96","chunk-3ed29de3":"1276ef40","chunk-41c0f7a4":"f6d0e66b","chunk-426f2f16":"f1909c9c","chunk-462c869e":"082645c9","chunk-47245a33":"ca01aa9b","chunk-4739acd0":"bc06bcb7","chunk-53b1137a":"3970e4cb","chunk-541ea42d":"cb739116","chunk-54bbd082":"2613b08e","chunk-59d4c87c":"d2c0dc6c","chunk-5a8ac886":"5c571ac0","chunk-5ff96a24":"1b5aefd4","chunk-69eb8776":"c1fe688b","chunk-6d375f34":"70505b47","chunk-7548ca2d":"ca0b4040","chunk-79f1dac7":"b8f21504","chunk-858cd918":"fa1f982c","chunk-8bb7f81e":"1c060df2","chunk-a9395c36":"eab30296","chunk-d0e8aa0a":"143a0a2e","chunk-d8413eac":"64b3040d","chunk-e5275ddc":"954a3e7d","chunk-eaa2b130":"56fe9f30","polyfills-core-js":"12be3461","polyfills-dom":"662760da","chunk-2d2297f7":"52f02239","chunk-2d0c9758":"62f099a9","chunk-2d0b33e3":"2e69defc","chunk-2d0b9074":"cf6d8bbf","chunk-2d0b9280":"199a57da","chunk-2d0baac9":"ecbd8a2b","chunk-2d2376e6":"a05b70ee"}[e]+".js"}function a(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.e=function(e){var n=[],c=r[e];if(0!==c)if(c)n.push(c[2]);else{var t=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=t);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=u(e);var i=new Error;o=function(n){d.onerror=d.onload=null,clearTimeout(f);var c=r[e];if(0!==c){if(c){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,c[1](i)}r[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(n)},a.m=e,a.c=t,a.d=function(e,n,c){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(c,t,function(n){return e[n]}.bind(null,t));return c},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var s=i;o.push([0,"chunk-vendors"]),c()})({0:function(e,n,c){e.exports=c("56d7")},4333:function(e,n,c){"use strict";c("fd55")},"45b3":function(e,n,c){var t={"./ion-icon.entry.js":["ec64","chunk-2d2304d2"]};function r(e){if(!c.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],r=n[0];return c.e(n[1]).then((function(){return c(r)}))}r.keys=function(){return Object.keys(t)},r.id="45b3",e.exports=r},"56d7":function(e,n,c){"use strict";c.r(n);c("e260"),c("e6cf"),c("cca6"),c("a79d");var t=c("7a23"),r=c("d867");function o(e,n,c,r,o,u){var a=Object(t["u"])("router-view");return Object(t["o"])(),Object(t["d"])("div",null,[Object(t["f"])("div",{onClick:n[1]||(n[1]=function(){return e.router.push("/")}),id:"home-button"},"Victor"),Object(t["f"])(a)])}var u=c("6c02"),a=Object(t["g"])({name:"HomePage",components:{RouterView:u["a"]},setup:function(){var e=Object(u["j"])();return{router:e}}});c("4333");a.render=o;var d=a,i=c("bec5"),f={class:"home"},s=Object(t["e"])("About");function b(e,n,c,r,o,u){var a=Object(t["u"])("HomeContent"),d=Object(t["u"])("ion-button");return Object(t["o"])(),Object(t["d"])("div",f,[Object(t["f"])(a,{msg:"my github page"}),Object(t["f"])(d,{onClick:n[1]||(n[1]=function(){return e.router.push("/about")})},{default:Object(t["z"])((function(){return[s]})),_:1})])}var h=Object(t["A"])("data-v-29a44daa");Object(t["r"])("data-v-29a44daa");var l={class:"hello"};Object(t["p"])();var k=h((function(e,n,c,r,o,u){return Object(t["o"])(),Object(t["d"])("div",l,[Object(t["f"])("h1",null,Object(t["w"])(c.msg),1)])})),j={name:"HomeContent",props:{msg:String}};c("f610");j.render=k,j.__scopeId="data-v-29a44daa";var p=j,y=Object(t["g"])({name:"Home",components:{HomeContent:p,IonButton:r["a"]},setup:function(){var e=Object(u["j"])();return Object(r["c"])((function(){console.log("Home page did enter")})),Object(r["d"])((function(){console.log("Home page did leave")})),Object(r["e"])((function(){console.log("Home page will enter")})),Object(r["f"])((function(){console.log("Home page will leave")})),{router:e}}});y.render=b;var m=y,v={class:"about"},O=Object(t["f"])("h1",null,"This is an about page",-1);function g(e,n){return Object(t["o"])(),Object(t["d"])("div",v,[O])}const _={};_.render=g;var w=_,P=[{path:"/",name:"home",component:m},{path:"/about",name:"about",component:w}],x=Object(i["a"])({history:Object(i["b"])(),routes:P}),C=x,H=c("5502"),E=Object(H["a"])({state:{},mutations:{},actions:{},modules:{}});c("4b63"),c("4041"),c("51ef"),c("a237"),c("e09e"),c("46e5"),c("98b6"),c("2d22"),c("66b0"),c("ce1f");Object(t["c"])(d).use(r["b"]).use(E).use(C).mount("#app")},"87d5":function(e,n,c){},aa55:function(e,n,c){var t={"./ion-action-sheet.entry.js":["6618","chunk-426f2f16"],"./ion-alert.entry.js":["f06c","chunk-1c4705f4"],"./ion-app_8.entry.js":["c215","chunk-53b1137a"],"./ion-avatar_3.entry.js":["cf12","chunk-59d4c87c"],"./ion-back-button.entry.js":["4b35","chunk-69eb8776"],"./ion-backdrop.entry.js":["429d","chunk-2d0c073f"],"./ion-button_2.entry.js":["4453","chunk-25d83ca8"],"./ion-card_5.entry.js":["070b","chunk-541ea42d"],"./ion-checkbox.entry.js":["dfd8","chunk-09162720"],"./ion-chip.entry.js":["430d","chunk-09155df3"],"./ion-col_3.entry.js":["6a8a","chunk-2d0da04a"],"./ion-datetime_3.entry.js":["c15b","chunk-21a76241"],"./ion-fab_3.entry.js":["dd47","chunk-3ed29de3"],"./ion-img.entry.js":["9588","chunk-2d0e5812"],"./ion-infinite-scroll_2.entry.js":["d1e5","chunk-2d21da73"],"./ion-input.entry.js":["d111","chunk-37f2300e"],"./ion-item-option_3.entry.js":["1bb3","chunk-5ff96a24"],"./ion-item_8.entry.js":["69da","chunk-5a8ac886"],"./ion-loading.entry.js":["53a5","chunk-6d375f34"],"./ion-menu_3.entry.js":["cb00","chunk-097e0872"],"./ion-modal.entry.js":["1ad0","chunk-1bff95de"],"./ion-nav_2.entry.js":["e44f","chunk-4739acd0"],"./ion-popover.entry.js":["4285","chunk-e5275ddc"],"./ion-progress-bar.entry.js":["9b72","chunk-1dbc15a2"],"./ion-radio_2.entry.js":["beb3","chunk-0e93a01c"],"./ion-range.entry.js":["719f","chunk-54bbd082"],"./ion-refresher_2.entry.js":["0a47","chunk-d8413eac"],"./ion-reorder_2.entry.js":["6672","chunk-d0e8aa0a"],"./ion-ripple-effect.entry.js":["c8da","chunk-2d218068"],"./ion-route_4.entry.js":["10e8","chunk-858cd918"],"./ion-searchbar.entry.js":["8625","chunk-a9395c36"],"./ion-segment_2.entry.js":["0c02","chunk-462c869e"],"./ion-select_3.entry.js":["d25f","chunk-79f1dac7"],"./ion-slide_2.entry.js":["05dd","chunk-2d0a463b"],"./ion-spinner.entry.js":["e11b","chunk-8bb7f81e"],"./ion-split-pane.entry.js":["aae8","chunk-2d213189"],"./ion-tab-bar_2.entry.js":["a2bb","chunk-02c995b5"],"./ion-tab_2.entry.js":["6725","chunk-47245a33"],"./ion-text.entry.js":["ed3b","chunk-30dd9750"],"./ion-textarea.entry.js":["8798","chunk-eaa2b130"],"./ion-toast.entry.js":["c1a5","chunk-41c0f7a4"],"./ion-toggle.entry.js":["bef2","chunk-7548ca2d"],"./ion-virtual-scroll.entry.js":["5fd7","chunk-2d0d43da"]};function r(e){if(!c.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],r=n[0];return c.e(n[1]).then((function(){return c(r)}))}r.keys=function(){return Object.keys(t)},r.id="aa55",e.exports=r},f610:function(e,n,c){"use strict";c("87d5")},fd55:function(e,n,c){}});
//# sourceMappingURL=app.843c10ea.js.map