(this.webpackJsonpmini2=this.webpackJsonpmini2||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(15),r=a.n(s),l=(a(22),a(9)),o=a(8),i=a(0);var d=function(e){var t={color:e.colormode};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(i.jsx)(o.b,{className:"navbar-brand mx-2",to:"/",children:"WORD MAGIC"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsx)(o.b,{className:"nav-link",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link",to:"/about",children:"About"})})]})}),Object(i.jsxs)("div",{className:"form-check form-switch mx-3",children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleDark,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",style:t,htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})})};var b=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container my-3",style:{fontFamily:"Roboto"},children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",id:"hehecopy",rows:"7",value:n,name:"textArea",onChange:function(e){s(e.target.value)}})}),Object(i.jsx)("button",{className:"btn btn-danger mx-1 my-1",onClick:function(){var t=n.toUpperCase();s(t),e.showalert("Converted to Uppercase","success")},children:"Convert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-danger mx-1 my-1",onClick:function(){var t=n.toLowerCase();s(t),e.showalert("Converted to Lowercase","success")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-danger mx-1 my-1",onClick:function(){var t=n.replace(n,"");s(t),e.showalert("Text Cleared","success")},children:"Clear Text"}),Object(i.jsx)("button",{className:"btn btn-danger mx-1 my-1",onClick:function(){var t=document.getElementById("hehecopy");t.select(),navigator.clipboard.writeText(t.value),e.showalert("Copied to clipboard","success")},children:"Copy Text"})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Text Summary"}),Object(i.jsxs)("p",{children:[n.split(" ").filter((function(e){return 0!==e.length})).length," words and ",n.length," characters"]}),Object(i.jsxs)("p",{children:[.008*n.split(" ").filter((function(e){return 0!==e.length})).length," minutes to read."]}),Object(i.jsx)("h1",{className:"my-3",style:{fontFamily:"Roboto"},children:"Text Preview"}),Object(i.jsx)("p",{children:n.length>0?n:Object(i.jsx)("b",{children:"Enter Something to Preview it here."})})]})]})};var j=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("footer",{className:"py-2 bg-".concat(e.mode," text-").concat(e.colormode," navbar fixed-bottom"),children:Object(i.jsx)("div",{className:"container text-center",children:Object(i.jsx)("small",{children:"Copyright \xa9 Chetanya Sharma~2021"})})})})},h=function(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show role=alert"),children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},m=function(e){return Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h1",{children:"About Us"}),Object(i.jsx)("div",{className:"accordion",id:"accordionExample",children:Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Description"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",children:Object(i.jsx)("strong",{children:"This is just a project built for fun by Chetanya Sharma."})})})]})})]})},x=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("black"),r=Object(l.a)(s,2),u=r[0],O=r[1],p=Object(c.useState)(null),v=Object(l.a)(p,2),g=v[0],f=v[1],y=function(e,t){f({msg:e,type:t}),setTimeout((function(){f(null)}),1500)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(d,{mode:a,colormode:u,toggleDark:function(){"light"===a?(n("dark"),O("white"),y("Dark mode has been enabled","success")):(n("light"),O("black"),y("Light mode has been enabled","success"))}}),Object(i.jsx)(h,{alert:g}),Object(i.jsxs)(x.c,{children:[Object(i.jsx)(x.a,{path:"/about",children:Object(i.jsx)(m,{})}),Object(i.jsx)(x.a,{path:"/",children:Object(i.jsx)(b,{showalert:y,heading:"Word Magic- word counter|character counter|copy text"})})]}),Object(i.jsx)(j,{mode:a,colormode:u})]})})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d0c073dc.chunk.js.map