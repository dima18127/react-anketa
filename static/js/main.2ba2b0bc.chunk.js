(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports={profile:"Person_profile__1llDb",profile_wrap:"Person_profile_wrap__2DjK-",ProfileData:"Person_ProfileData__n-qjn",social:"Person_social__3v7WM"}},23:function(e,t,a){e.exports={container:"Advantages_container__1UXn0",plus:"Advantages_plus__9ADxO"}},28:function(e,t,a){e.exports={container:"Auth_container__1gHt7"}},29:function(e,t,a){e.exports={metric:"metric_metric__jGh_A"}},30:function(e,t,a){e.exports={container:"About_container__2DzYm"}},31:function(e,t,a){e.exports=a(55)},39:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(25),l=a.n(c),i=(a(39),a(0)),o=a(7),m=a(15),u=a.n(m);var s=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:u.a.rofile},r.a.createElement("div",{className:u.a.profile_wrap},r.a.createElement("img",{width:"80px",height:"80px",src:"images/ava.png"}),r.a.createElement("div",{className:u.a.ProfileData},r.a.createElement("h1",null,"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041c\u0430\u043a\u0430\u0440\u043e\u0432"),r.a.createElement("div",{className:u.a.social},r.a.createElement("a",{href:"#"}," Telegram"),r.a.createElement("a",{href:"#"}," GitGub"),r.a.createElement("a",{href:"#"}," Resume")))),r.a.createElement("div",null)),r.a.createElement("hr",null))},p=a(5),f="email",E="phone",b="nike",d="name",v="sername",h="sex";a(47);var _=function(e){var t=e.value,a=e.func;return r.a.createElement("input",{type:"text",name:"phone",onChange:function(e){return a(e.target.value)},value:t})},N=function(){var e=Object(p.b)(),t=Object(p.c)(function(e){return e.profile.email}),a=Object(p.c)(function(e){return e.profile.phone}),n=Object(p.c)(function(e){return e.profile});console.log(n);return r.a.createElement("div",{className:"container"},r.a.createElement(s,null),r.a.createElement("form",{action:""},r.a.createElement("span",null,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),r.a.createElement(_,{value:a,func:function(t){e(function(e){return{type:E,phone:e}}(t))}}),r.a.createElement("span",null,"Email"),r.a.createElement(_,{value:t,func:function(t){e(function(e){return{type:f,email:e}}(t))}}),r.a.createElement(o.b,{to:"/auth",id:"button-start",className:"btn"},"\u041d\u0430\u0447\u0430\u0442\u044c")))},j=a(3),O=a(28),x=a.n(O),w=a(29),g=a.n(w);var k=function(e){var t=e.width;return console.log(t),r.a.createElement("div",{className:g.a.metric},r.a.createElement("div",{style:t,className:"metricProgress"}),r.a.createElement("span",{className:"metricPoint metricPoint1"}),r.a.createElement("span",{className:"metricPoint metricPoint2"}),r.a.createElement("span",{className:"metricPoint metricPoint3"}))};var y=function(){var e=Object(p.b)(),t=function(t){return e({type:h,sex:t})},a=Object(p.c)(function(e){return e.profile.nickName}),c=Object(p.c)(function(e){return e.profile.name}),l=Object(p.c)(function(e){return e.profile.serName}),i=Object(p.c)(function(e){return e.profile.sex}),m=Object(p.c)(function(e){return e.profile});console.log(m);var u=Object(n.useState)({width:"25%"}),s=Object(j.a)(u,2),f=s[0],E=s[1];return r.a.createElement("div",{className:x.a.container},r.a.createElement(k,{width:f}),r.a.createElement("form",{action:""},r.a.createElement("span",null,"Nick name"),r.a.createElement(_,{value:a,func:function(t){return e(function(e){return{type:b,nick:e}}(t))}}),r.a.createElement("p",null,"Tip"),r.a.createElement("span",null,"Name"),r.a.createElement(_,{value:c,func:function(t){return e(function(e){return{type:d,name:e}}(t))}}),r.a.createElement("p",null,"Tip"),r.a.createElement("span",null,"Sername"),r.a.createElement(_,{value:l,func:function(t){return e(function(e){return{type:v,serName:e}}(t))}}),r.a.createElement("p",null,"Tip"),r.a.createElement("span",null,"Sex"),r.a.createElement("select",{name:"sex",defaultValue:i,id:"field-sex",placeholder:"\u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{disabled:!0,value:"not-determed"},"\u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"),r.a.createElement("option",{id:"field-sex-option-man",value:"man"},"man"),r.a.createElement("option",{id:"field-sex-option-woman",value:"woman"},"woman")),r.a.createElement(o.b,{to:"/",id:"button-back",className:"btn btn_back"},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement(o.b,{to:"/advantages",id:"button-next",onClick:function(){return E({width:"50%"})},className:"btn"},"\u0412\u043f\u0435\u0440\u0435\u0434")))},P=a(23),A=a.n(P);var D=function(){Object(p.b)(),Object(p.c)(function(e){return e.profile});var e=Object(n.useState)({width:"50%"}),t=Object(j.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:A.a.container},r.a.createElement(k,{width:a}),r.a.createElement("form",{action:""},r.a.createElement("span",null,"Advantages"),r.a.createElement(_,null),r.a.createElement(_,null),r.a.createElement(_,null),r.a.createElement("button",{to:"/auth",id:"add",className:A.a.plus},"+"),r.a.createElement("input",{type:"radio"}),r.a.createElement("input",{type:"radio"}),r.a.createElement("input",{type:"radio"}),r.a.createElement("input",{type:"checkbox"}),r.a.createElement("input",{type:"checkbox"}),r.a.createElement("input",{type:"checkbox"}),r.a.createElement(o.b,{to:"/auth",id:"button-back",className:"btn btn_back"},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement(o.b,{to:"/about",id:"button-next",onClick:function(){return c({width:"75%"})},className:"btn"},"\u0412\u043f\u0435\u0440\u0435\u0434")))},C=a(30),S=a.n(C);var T=function(){Object(p.b)(),Object(p.c)(function(e){return e.profile});var e=Object(n.useState)({width:"100%"}),t=Object(j.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:S.a.container},r.a.createElement(k,{width:a}),r.a.createElement("form",{action:""},r.a.createElement("span",null,"Advantages"),r.a.createElement("textarea",{name:"",id:"",cols:"30",rows:"10"}),r.a.createElement(o.b,{to:"/auth",id:"button-back",className:"btn btn_back"},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement(o.b,{to:"",id:"button-next",onClick:function(){return c({width:"75%"})},className:"btn"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))};a(53);var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(N,null)}),r.a.createElement(i.a,{path:"/auth",element:r.a.createElement(y,null)}),r.a.createElement(i.a,{path:"/advantages",element:r.a.createElement(D,null)}),r.a.createElement(i.a,{path:"/about",element:r.a.createElement(T,null)}),"\u263b"))},J=a(19),R=a(10),q={phone:"",email:"",nickName:"",name:"",serName:"",sex:"not-determed"},z=Object(J.a)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(R.a)({},e,{email:t.email});case E:return Object(R.a)({},e,{phone:t.phone});case b:return Object(R.a)({},e,{nickName:t.nick});case d:return Object(R.a)({},e,{name:t.name});case v:return Object(R.a)({},e,{serName:t.serName});case h:return Object(R.a)({},e,{sex:t.sex});default:return e}}}),B=Object(J.b)(z);l.a.createRoot(document.getElementById("root")).render(r.a.createElement(o.a,null,r.a.createElement(p.a,{store:B},r.a.createElement(G,null))))}},[[31,2,1]]]);
//# sourceMappingURL=main.2ba2b0bc.chunk.js.map