(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),r=n.n(c),o=n(6),a=n(3),i=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},l=n(4),j=n.n(l),f="/api/notes",b={getAll:function(){return j.a.get(f).then((function(t){return t.data}))},create:function(t){return j.a.post(f,t).then((function(t){return t.data}))},update:function(t,e){return j.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))}},d=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1],r=Object(i.useState)(""),l=Object(a.a)(r,2),j=l[0],f=l[1],d=Object(i.useState)(!0),p=Object(a.a)(d,2),m=p[0],O=p[1],h=Object(i.useState)(null),v=Object(a.a)(h,2),x=v[0],g=v[1];Object(i.useEffect)((function(){b.getAll().then((function(t){c(t)}))}),[]);var S=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},k=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},y=m?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(S,{message:x}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return O(!m)},children:["show ",m?"important":"all"]})}),Object(u.jsx)("ul",{children:y.map((function(t,e){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),r=Object(o.a)(Object(o.a)({},e),{},{important:!e.important});b.update(t,r).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){g("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){g(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},e)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:j,date:(new Date).toISOString(),important:Math.random()<.5,id:n.length+1};b.create(e).then((function(t){c(n.concat(t)),f("")}))},children:[Object(u.jsx)("input",{value:j,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(k,{})]})};n(39);r.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b052b89a.chunk.js.map