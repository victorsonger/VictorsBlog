(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237b00"],{fbd2:function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return N}));var n=r("f530"),c=function(t){var e,r=[],n=0;t=t.replace(/(\[[^\]]*\])/g,(function(t,e){var c="__ph-"+n+"__";return r.push(e),n++,c})),e=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,e,c){var o="__ph-"+n+"__";return r.push(c),n++,e+o}));var c={content:e,placeholders:r};return c},o=function(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,r){return t[+r]}))},s="-shadowcsshost",i="-shadowcssslotted",a="-shadowcsscontext",u=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+s+u,"gim"),f=new RegExp("("+a+u,"gim"),p=new RegExp("("+i+u,"gim"),h=s+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,v=[/::shadow/g,/::content/g],d="([>\\s~+[.,{:][\\s\\S]*)?$",m=/-shadowcsshost/gim,x=/:host/gim,w=/::slotted/gim,_=/:host-context/gim,b=/\/\*\s*[\s\S]*?\*\//g,S=function(t){return t.replace(b,"")},O=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,W=function(t){return t.match(O)||[]},j=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,k=/([{}])/g,E="{",R="}",T="%BLOCK%",C=function(t,e){var r=L(t),n=0;return r.escapedString.replace(j,(function(){for(var t=[],c=0;c<arguments.length;c++)t[c]=arguments[c];var o=t[2],s="",i=t[4],a="";i&&i.startsWith("{"+T)&&(s=r.blocks[n++],i=i.substring(T.length+1),a="{");var u={selector:o,content:s},l=e(u);return""+t[1]+l.selector+t[3]+a+l.content+i}))},L=function(t){for(var e=t.split(k),r=[],n=[],c=0,o=[],s=0;s<e.length;s++){var i=e[s];i===R&&c--,c>0?o.push(i):(o.length>0&&(n.push(o.join("")),r.push(T),o=[]),r.push(i)),i===E&&c++}o.length>0&&(n.push(o.join("")),r.push(T));var a={escapedString:r.join(""),blocks:n};return a},B=function(t){return t=t.replace(_,a).replace(x,s).replace(w,i),t},I=function(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),c=[],o=0;o<n.length;o++){var s=n[o].trim();if(!s)break;c.push(r(h,s,t[3]))}return c.join(",")}return h+t[3]}))},J=function(t,e,r){return t+e.replace(s,"")+r},K=function(t){return I(t,l,J)},$=function(t,e,r){return e.indexOf(s)>-1?J(t,e,r):t+e+r+", "+e+" "+t+r},M=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(p,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var c=t[2].trim(),o=t[3],s=r+c+o,i="",a=t[4]-1;a>=0;a--){var u=t[5][a];if("}"===u||","===u)break;i=u+i}var l=i+s,f=""+i.trimRight()+s.trim();if(l.trim()!==f.trim()){var p=f+", "+l;n.push({orgSelector:l,updatedSelector:p})}return s}return h+t[3]})),{selectors:n,cssText:t}},U=function(t){return I(t,f,$)},q=function(t){return v.reduce((function(t,e){return t.replace(e," ")}),t)},y=function(t){var e=/\[/g,r=/\]/g;return t=t.replace(e,"\\[").replace(r,"\\]"),new RegExp("^("+t+")"+d,"m")},z=function(t,e){var r=y(e);return!r.test(t)},A=function(t,e,r){if(m.lastIndex=0,m.test(t)){var n="."+r;return t.replace(g,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,c){return e+n+r+c}))})).replace(m,n+" ")}return e+" "+t},D=function(t,e,r){var n=/\[is=([^\]]*)\]/g;e=e.replace(n,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}));var s="."+e,i=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(h)>-1)n=A(t,e,r);else{var c=t.replace(m,"");if(c.length>0){var o=c.match(/([^:]*)(:*)(.*)/);o&&(n=o[1]+s+o[2]+o[3])}}return n},a=c(t);t=a.content;var u,l="",f=0,p=/( |>|\+|~(?!=))\s*/g,g=t.indexOf(h)>-1,v=!g;while(null!==(u=p.exec(t))){var d=u[1],x=t.slice(f,u.index).trim();v=v||x.indexOf(h)>-1;var w=v?i(x):x;l+=w+" "+d+" ",f=p.lastIndex}var _=t.substring(f);return v=v||_.indexOf(h)>-1,l+=v?i(_):_,o(a.placeholders,l)},F=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():z(t,e)?D(t,e,r).trim():t.trim()})).join(", ")},G=function(t,e,r,n,c){return C(t,(function(t){var c=t.selector,o=t.content;"@"!==t.selector[0]?c=F(t.selector,e,r,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(o=G(t.content,e,r,n));var s={selector:c.replace(/\s{2,}/g," ").trim(),content:o};return s}))},H=function(t,e,r,n,c){t=B(t),t=K(t),t=U(t);var o=M(t,n);return t=o.cssText,t=q(t),e&&(t=G(t,e,r,n)),t=t.replace(/-shadowcsshost-no-combinator/g,"."+r),t=t.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:t.trim(),slottedSelectors:o.selectors}},N=function(t,e,r){var c=e+"-h",o=e+"-s",s=W(t);t=S(t);var i=[];if(r){var a=function(t){var e="/*!@___"+i.length+"___*/",r="/*!@"+t.selector+"*/";return i.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=C(t,(function(t){return"@"!==t.selector[0]?a(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=C(t.content,a),t):t}))}var u=H(t,e,c,o);return t=Object(n["d"])([u.cssText],s).join("\n"),r&&i.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */}}]);
//# sourceMappingURL=chunk-2d237b00.17ee064a.js.map