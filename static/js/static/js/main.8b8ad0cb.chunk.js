(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),s=t(19),a=t.n(s),i=(t(24),t(25),t(3)),o=t.n(i),u=t(7),j=t(5),l=t(4),d=(t(6),t(0)),b=function(){var e=Object(c.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],s=Object(c.useState)(""),a=Object(l.a)(s,2),i=a[0],b=a[1],O=Object(c.useRef)(),f=Object(c.useState)(!1),v=Object(l.a)(f,2),m=v[0],h=v[1],g=Object(c.useState)(""),x=Object(l.a)(g,2),p=x[0],S=x[1];var N=function(){var e=Object(j.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={username:p,message:i,id:Date.now(),event:"message"},O.current.send(JSON.stringify(n)),b("");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m?Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("input",{value:i,onChange:function(e){return b(e.target.value)},type:"text"}),Object(d.jsx)("button",{onClick:N,children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})]}),Object(d.jsx)("div",{className:"messages",children:t.map((function(e){return Object(d.jsx)("div",{children:"connection"===e.event?Object(d.jsxs)("div",{className:"connection_message",children:["\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 ",e.username," \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0432\u0441\u044f"]}):Object(d.jsxs)("div",{className:"message",children:[e.username,": ",e.message]})},e.id)}))})]})}):Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("input",{value:p,onChange:function(e){return S(e.target.value)},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448\u0435 \u0456\u043c'\u044f"}),Object(d.jsx)("button",{onClick:function(){O.current=new WebSocket("wss://git.heroku.com/infinite-mountain-97159.git"),O.current.onopen=function(){h(!0);var e={event:"connection",username:p,id:Date.now()};O.current.send(JSON.stringify(e))},O.current.onmessage=function(e){var n=JSON.parse(e.data);r((function(e){return[n].concat(Object(u.a)(e))}))},O.current.onclose=function(){console.log("Socket \u0437\u0430\u043a\u0440\u044b\u0442")},O.current.onerror=function(){console.log("Socket \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")}},children:"\u0412\u0432\u0456\u0439\u0442\u0438"})]})})};var O=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),f()}},[[46,1,2]]]);
//# sourceMappingURL=main.8b8ad0cb.chunk.js.map