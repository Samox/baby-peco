(this["webpackJsonpbaby-peco-client"]=this["webpackJsonpbaby-peco-client"]||[]).push([[0],{18:function(e,a,t){e.exports=t(47)},23:function(e,a,t){},24:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),s=(t(23),t(3)),o=(t(24),t(17)),m=function(e){var a=e.resultat;return r.a.createElement("div",{className:"contener-table"},r.a.createElement("div",{className:"avatar"}),r.a.createElement("div",{className:"username"},a.player.name),r.a.createElement("img",{src:"up.svg",alt:"",className:"evol"}),r.a.createElement("div",{className:"score"},a.score),r.a.createElement("div",{className:"dash"}))},i=function(e){return r.a.createElement("div",{className:e.isVisible?"contener-splashscreen":"contener-splashscreen contener-splashscreen-undisplayed"},r.a.createElement("div",{className:"splashscreen-wrapper"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"title-add"},"Ajouter un score"),r.a.createElement("div",null,r.a.createElement("div",{className:"contener-add-score"},r.a.createElement("div",null,"Gagnants"),r.a.createElement("input",{placeholder:"Nom du gagnant 1",type:"text"}),r.a.createElement("input",{placeholder:"Nom du gagnant 2",type:"text"}),r.a.createElement("input",{placeholder:"Score",value:"10",type:"number"})),r.a.createElement("div",{className:"contener-add-score"},r.a.createElement("div",null,"Perdants"),r.a.createElement("input",{placeholder:"Nom du perdant 1",type:"text"}),r.a.createElement("input",{placeholder:"Nom du perdant 2",type:"text"}),r.a.createElement("input",{placeholder:"Score",type:"number"}))),r.a.createElement("div",{className:"contener-button"},r.a.createElement("button",{onClick:e.closeModal},"Ajouter")))))},d=function(){var e=r.a.useState(!1),a=Object(s.a)(e,2),t=a[0],n=a[1],c=Object(o.a)("https://baby-peco.herokuapp.com"),l=Object(s.a)(c,1)[0],d=l.data,u=l.loading,p=l.error;if(u)return r.a.createElement("p",null,"Loading...");if(p)return r.a.createElement("p",null,"Error!");return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header-peco"},r.a.createElement("img",{className:"logo",alt:"",src:"logo.png"}),r.a.createElement("img",{onClick:function(){n(!0)},className:"add",src:"plus.svg",alt:""})),r.a.createElement("header",{className:"App-header"},d.resultDays[0].results.map((function(e){return r.a.createElement(m,{key:e.player.name,resultat:e})})),r.a.createElement(i,{isVisible:t,closeModal:function(){n(!1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.8d7dd1bf.chunk.js.map