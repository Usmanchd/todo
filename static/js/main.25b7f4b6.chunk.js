(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(11),n(4)),s=n(5),i=n(1);n(12);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),m=Object(i.a)(c,2),p=m[0],f=m[1],d=function(e){var t=p.map((function(t){return t===e?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{class:"list"===t.class?"list through":"list"}):t}));f(t),console.log(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"TODOList"),r.a.createElement("div",{className:"todo"},r.a.createElement("div",{className:"inputtag"},r.a.createElement("input",{type:"text",value:n,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){if(13===(e.keyCode||e.which)&&""!==e.target.value){var t=Object(s.a)(p),a={todoValue:n,class:"list"};t.push(a),f(t),o(""),console.log(t)}},placeholder:"What you Want to do?"})),r.a.createElement("span",{className:"noselect"},r.a.createElement("div",{className:"todolist"},r.a.createElement("h4",null,"Your Todo's"),p.map((function(e,t){return r.a.createElement("div",{className:"flex",key:t},r.a.createElement("p",{className:e.class,onClick:function(){return d(e)}},r.a.createElement("span",null,t+1," :"),e.todoValue),r.a.createElement("button",{className:"delBtn",onClick:function(){return function(e){var t=p.filter((function(t){return t!==e}));f(t)}(e)}},"Delete"))})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.25b7f4b6.chunk.js.map