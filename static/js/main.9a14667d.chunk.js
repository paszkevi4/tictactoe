(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),o=(n(16),n(2),n(7)),i=n(1),s=function(e){var t=e.onClick,n=e.value;return r.a.createElement("button",{className:"square",onClick:t},n)},u=function(e){var t=e.onClick,n=e.squares;return r.a.createElement("div",{className:"board"},n.map((function(e,n){return r.a.createElement(s,{key:n,value:e,onClick:function(){return t(n)}})})))},m=(n(17),n(4)),v=function(e){var t=e.restart,n=e.returnMove,a=e.winner,c=e.draw,l=e.concede,o=e.xIsNext,i=e.player;return r.a.createElement("div",{className:"controllers "+"".concat(i||" ")},r.a.createElement("div",{className:"controllerButtons"},a||c?r.a.createElement(m.a,{variant:"success",onClick:function(){return t()}},"next round"):r.a.createElement(m.a,{variant:"primary",onClick:!i===o?function(){return n()}:null},"return move"),r.a.createElement(m.a,{variant:"danger",onClick:function(){return l()}},"Concede")),"X"===i?r.a.createElement("div",{className:"controllerVictory"},a?a==i?r.a.createElement("div",{className:"controllerVictoryWin"},"WIN"):r.a.createElement("div",{className:"controllerVictoryLose"},"LOSE"):null):r.a.createElement("div",{className:"controllerVictory"},a?a==i?r.a.createElement("div",{className:"controllerVictoryWinO"},"WIN"):r.a.createElement("div",{className:"controllerVictoryLoseO"},"LOSE"):null))},E=function(e){var t=e.player,n=e.count,c=Object(a.useState)(null),l=Object(i.a)(c,2),o=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"scoreName",onClick:function(){return s(prompt())}},r.a.createElement("p",null,o?t?o+" plays for X":o+" plays for O":"Set your name")),r.a.createElement("div",{className:"scoreCount"},r.a.createElement("p",null,n)))},f=function(){var e=Object(a.useState)([Array(9).fill(null)]),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),s=Object(i.a)(l,2),m=s[0],f=s[1],d=Object(a.useState)(!0),O=Object(i.a)(d,2),b=O[0],N=O[1],j=Object(a.useState)([]),y=Object(i.a)(j,2),p=(y[0],y[1],Object(a.useState)(0)),k=Object(i.a)(p,2),w=k[0],h=k[1],S=Object(a.useState)(0),C=Object(i.a)(S,2),g=C[0],x=C[1],X=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(i.a)(t[n],3),r=a[0],c=a[1],l=a[2];if(e[r]&&e[r]===e[c]&&e[c]===e[l])return e[r]}return null}(n[m]),I=Object(a.useState)(!1),V=Object(i.a)(I,2),W=V[0],L=V[1];Object(a.useEffect)((function(){"X"==X&&(h(++w),N(!0)),"O"==X&&(x(++g),N(!1))}),[X]);var M=function(){f(m>0?--m:m),N(!b)},q=function(){c([Array(9).fill(null)]),L(!1),f(0)};return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"score score--O"},r.a.createElement(E,{count:g})),r.a.createElement("div",{className:"score score--X"},r.a.createElement(E,{count:w,player:"X"})),r.a.createElement(u,{squares:n[m],onClick:function(e){var t=n.slice(0,m+1),a=Object(o.a)(t[m]);X||a[e]||(a[e]=b?"X":"O",c([].concat(Object(o.a)(t),[a])),f(t.length),N(!b),9===n.length&&(L(!0),h(++w),x(++g)))}}),r.a.createElement(v,{winner:X,draw:W,returnMove:M,restart:q,concede:function(){h(++w),q()},xIsNext:b,player:"O"}),r.a.createElement(v,{winner:X,draw:W,returnMove:M,restart:q,concede:function(){x(++g),q()},xIsNext:b,player:"X"}))};var d=function(){return r.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.9a14667d.chunk.js.map