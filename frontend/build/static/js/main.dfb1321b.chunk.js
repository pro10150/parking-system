(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{10:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(6),i=c.n(r),l=c(5),j=(c(10),c(0)),a=c(3);var o=function(e){var t;return console.log(e.parkings),1===e.parkings.status&&(t=function(e,t){var c=Math.abs(e-t)/1e3,s=Math.floor(c/86400);c-=86400*s;var n=Math.floor(c/3600)%24;c-=3600*n;var r=Math.floor(c/60)%60;return c-=60*r,[s,n,r]}(new Date,new Date(e.parkings.entry))),Object(j.jsx)("div",{className:"container-xxl ",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"text-center row gy-5 text-dark",children:Object(j.jsx)(a.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsx)("h1",{class:"display-1 text-dark font-weight-bold",children:"Car parking Online service"})})}),Object(j.jsxs)("div",{class:"row  gy-5 align-items-center",children:[Object(j.jsx)("div",{className:"row col-xxl  gy-5 ",children:Object(j.jsxs)("div",{class:"text-center",children:[Object(j.jsx)("h1",{children:"Car parking E-ticket "}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"/Piccomp/park2.png",class:"rounded mx-auto d-block img-fluid"})]})}),Object(j.jsx)("div",{className:"col-xxl",children:Object(j.jsx)("div",{class:"container-fluid ",children:Object(j.jsx)("div",{class:"form-floating mb-3",children:1===e.parkings.status?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text-center",children:Object(j.jsxs)("h1",{children:[" ID ",e.parkings.id," parking detail"]})}),Object(j.jsx)("h3",{children:Object(j.jsxs)("div",{className:"row align-items-center",children:[Object(j.jsx)("div",{className:"row col-xxl  gx-5 gy-5",children:"Parked time"}),Object(j.jsxs)("div",{className:"row col-xxl  gx-5 gy-5",children:[": ",e.parkings.entry]})]})}),Object(j.jsx)("h3",{children:Object(j.jsxs)("div",{className:"row align-items-center",children:[Object(j.jsx)("div",{className:"row col-xxl  gx-5 gy-5",children:"Current time"}),Object(j.jsxs)("div",{className:"row col-xxl  gx-5 gy-5",children:[": ",Date()]})]})}),Object(j.jsx)("h3",{children:Object(j.jsxs)("div",{className:"row align-items-center",children:[Object(j.jsx)("div",{className:"row col-xxl  gx-5 gy-5",children:"Parking period"}),0!=t[0]?Object(j.jsxs)("div",{className:"row col-xxl  gx-5 gy-5",children:[t[0]," Days: ",t[1]," Hours : ",t[2]," Minutes"]}):Object(j.jsxs)("div",{className:"row col-xxl  gx-5 gy-5",children:[t[1]," Hours : ",t[2]," Minutes"]})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),1===e.parkings.departure?Object(j.jsx)(a.b,{to:"/",children:Object(j.jsx)("button",{class:"btn btn-dark btn-block form-control btn-lg",children:"Back to Home Screen"})}):t[0]>0&&t[1]>4?Object(j.jsx)(a.b,{to:"/"+e.parkings.id+"/qr",children:Object(j.jsx)("button",{class:"btn btn-success btn-block form-control btn-lg",children:"Check out and bill"})}):Object(j.jsx)(a.b,{to:"/"+e.parkings.id+"/qr",children:Object(j.jsx)("button",{class:"btn btn-dark btn-block form-control btn-lg",children:"Create QR Code"})})]},e.parkings.id):Object(j.jsxs)("div",{class:"text-center",children:[Object(j.jsx)("h1",{children:"Sorry ID not found !"}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"/Piccomp/error2.png",class:"rounded mx-auto d-block img-fluid"}),Object(j.jsx)(a.b,{to:"/",children:Object(j.jsx)("button",{class:"btn btn-dark btn-block form-control btn-lg",children:"Back to Home Screen"})})]})})})})]})]})})},b=c(2);var d=function(){var e=Object(b.g)().id,t=Object(s.useState)([]),c=Object(l.a)(t,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){fetch("https://parking-system-iot.herokuapp.com/detail/"+e,{methods:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(o,{parkings:n})})},x=c(7),h=c.n(x);var O=function(){var e=Object(b.g)().id;return Object(j.jsx)("div",{className:"container-xxl",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"text-center row ",children:Object(j.jsx)("div",{className:"text-center row gy-5 text-dark",children:Object(j.jsx)(a.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsx)("h1",{class:"display-1 text-dark font-weight-bold",children:"Carparking Online service"})})})}),Object(j.jsxs)("div",{class:"row  gy-5 align-items-center",children:[Object(j.jsx)("div",{className:"row col-xxl  gy-5 ",children:Object(j.jsx)("div",{class:"text-center",children:Object(j.jsx)("img",{src:"/Piccomp/QR1.png",class:"rounded mx-auto d-block img-fluid",width:"400"})})}),Object(j.jsxs)("div",{class:"col-xxl",children:[Object(j.jsxs)("div",{class:"container-fluid ",children:[Object(j.jsxs)("div",{class:"text-center",children:[Object(j.jsx)("img",{src:"/Piccomp/car 6.png",class:"rounded mx-auto d-block img-fluid",width:"300"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:"Your QRCode"}),Object(j.jsx)("br",{})]}),Object(j.jsx)(h.a,{class:"rounded mx-auto d-block img-fluid",value:e})]}),Object(j.jsx)("br",{}),Object(j.jsx)(a.b,{to:"/",children:Object(j.jsx)("button",{class:"btn btn-dark btn-block form-control btn-lg",children:"Back to Home Screen"})})]})]})]})})};var u=function(){var e=Object(b.g)().id,t=Object(b.f)();return Object(j.jsx)("div",{className:"container-xxl",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"text-center row ",children:Object(j.jsx)("div",{className:"text-center row gy-5 text-dark",children:Object(j.jsx)(a.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsx)("h1",{class:"display-1 text-dark font-weight-bold",children:"Carparking Online service"})})})}),Object(j.jsxs)("div",{class:"row  gy-5 align-items-center",children:[Object(j.jsx)("div",{className:"row col-xxl  gy-5 ",children:Object(j.jsx)("div",{class:"text-center",children:Object(j.jsx)("img",{src:"/Piccomp/QR1.png",class:"rounded mx-auto d-block img-fluid",width:"400"})})}),Object(j.jsxs)("div",{className:"col-xxl",children:[Object(j.jsxs)("div",{class:"container-fluid ",children:[Object(j.jsxs)("div",{class:"text-center",children:[Object(j.jsx)("img",{src:"/Piccomp/car 6.png",class:"rounded mx-auto d-block img-fluid",width:"300"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:"Use this QR Code to enter the parking lot"}),Object(j.jsx)("br",{})]}),Object(j.jsx)(h.a,{class:"rounded mx-auto d-block img fluid",value:e})]}),Object(j.jsx)("br",{}),Object(j.jsx)("form",{onSubmit:function(c){c.preventDefault(),fetch("https://parking-system-iot.herokuapp.com/detail/"+e).then((function(c){c.json().then((function(c){console.log(c),null!=c.entry&&t("/"+e)}))})).catch((function(e){console.log(e)}))},children:Object(j.jsx)("button",{class:"btn btn-dark btn-block form-control btn-lg",children:"Done"})}),Object(j.jsx)("h3",{class:"d-flex justify-content-center",children:"OR"}),Object(j.jsx)(a.b,{to:"/",children:Object(j.jsx)("button",{class:"btn btn-dark btn-block form-control btn-lg",children:"Back to Home Screen"})})]})]})]})})},m=c(16),g=c.n(m);var p=function(){var e=Object(b.f)(),t=Object(s.useState)([]),c=Object(l.a)(t,2),n=(c[0],c[1],Object(s.useState)([])),r=Object(l.a)(n,2),i=(r[0],r[1]),a=Object(s.useState)([]),o=Object(l.a)(a,2),x=o[0],h=o[1];return Object(s.useEffect)((function(){fetch("https://parking-system-iot.herokuapp.com/parking",{methods:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{path:"/",element:Object(j.jsx)("div",{className:"container-xxl",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"text-center row gy-5",children:Object(j.jsx)("h1",{class:"display-1",children:"Carparking Online service"})}),Object(j.jsxs)("div",{class:"row  gy-5 align-items-center",children:[Object(j.jsx)("div",{className:"row col-xxl  gy-5 ",children:Object(j.jsx)("div",{class:"text-center",children:Object(j.jsx)("img",{src:"/Piccomp/park1.png",class:"rounded mx-auto d-block img-fluid",height:"100%"})})}),Object(j.jsx)("div",{className:"col-xxl",children:Object(j.jsxs)("div",{class:"container-fluid ",children:[Object(j.jsxs)("div",{class:"text-center",children:[Object(j.jsx)("img",{src:"/Piccomp/car 6.png",class:"rounded mx-auto d-block img-fluid",width:"300"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:"Check the parking detail"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsx)("h3",{children:"Parking ID"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"form-floating mb-3",children:[Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e("/"+x)},children:[Object(j.jsx)("input",{type:"number",class:"form-control",name:"name",placeholder:"Parking ID",value:x,onChange:function(e){return h(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",class:"btn btn-success btn-block form-control btn-lg",children:"Check"}),Object(j.jsx)("h3",{class:"d-flex justify-content-center",children:"OR"})]}),Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),fetch("https://parking-system-iot.herokuapp.com/enter").then((function(t){t.json().then((function(t){var c=t.id;1==t.status?(e("/enter/"+c),console.log(t)):g.a}))})).catch((function(e){console.log(e)}))},children:Object(j.jsx)("button",{type:"submit",class:"btn btn-success btn-block form-control btn-lg",children:"Enter the parking lot"})})]})]})})]})]})})}),Object(j.jsx)(b.a,{path:"/:id",element:Object(j.jsx)(d,{})}),Object(j.jsx)(b.a,{path:"/:id/qr",element:Object(j.jsx)(O,{})}),Object(j.jsx)(b.a,{path:"/enter/:id",element:Object(j.jsx)(u,{})})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(a.a,{children:Object(j.jsx)(p,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.dfb1321b.chunk.js.map