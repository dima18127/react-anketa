(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports={wrap:"Modal_wrap__3z487",modal:"Modal_modal__3ScQ6",formtext:"Modal_formtext__3TPYp",closeButton:"Modal_closeButton__24MII",buttonClose:"Modal_buttonClose___Ylna",left:"Modal_left__3Dfiv"}},19:function(e,t,a){e.exports={profile:"Person_profile__1llDb",profile_wrap:"Person_profile_wrap__2DjK-",ProfileData:"Person_ProfileData__n-qjn",social:"Person_social__3v7WM"}},20:function(e,t,a){e.exports={metric:"metric_metric__jGh_A",active:"metric_active__2mw7P"}},31:function(e,t,a){e.exports={addBtn:"tab2_addBtn__3p3e9",img:"tab2_img__2RKih"}},37:function(e,t,a){e.exports={btnstart:"Profile_btnstart__2YTk-"}},38:function(e,t,a){e.exports={container:"create_container__1hlO-"}},40:function(e,t,a){e.exports={textarea:"Tab3_textarea__1Zu6M"}},41:function(e,t,a){e.exports=a(64)},61:function(e,t,a){},63:function(e,t){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(33),c=a.n(o),i=a(0),l=a(19),u=a.n(l);var s=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:u.a.rofile},r.a.createElement("div",{className:u.a.profile_wrap},r.a.createElement("img",{width:"80px",height:"80px",src:"images/ava.png"}),r.a.createElement("div",{className:u.a.ProfileData},r.a.createElement("h1",null,"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041c\u0430\u043a\u0430\u0440\u043e\u0432"),r.a.createElement("div",{className:u.a.social},r.a.createElement("a",{href:"https://t.me/goodvman"}," Telegram"),r.a.createElement("a",{href:"https://github.com/dima18127"}," GitGub"),r.a.createElement("a",{href:"https://github.com/dima18127"}," Resume")))),r.a.createElement("div",null)),r.a.createElement("hr",null))},m=a(8),d=a(11),f=a(36),p=a.n(f),h=a(37),b=a.n(h),v=a(26),g=Object(v.b)({name:"toolkit",initialState:{phone:"79991112233",email:"dima18127@yandex.ru",nick:"dima181271",name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",sername:"\u041c\u0430\u043a\u0430\u0440\u043e\u0432",sex:"man",advantages:[{value:"1",focus:"true"}],checkbox:["2"],radiobox:"3",aboutInp:""},reducers:{addEmail:function(e,t){e.email=t.payload},addPhone:function(e,t){e.phone=t.payload},setNick:function(e,t){e.nick=t.payload},setName:function(e,t){e.name=t.payload},setSerName:function(e,t){e.sername=t.payload},setMail:function(e,t){e.sex=t.payload},setADV:function(e,t){e.advantages=t.payload},setCheck:function(e,t){e.checkbox=t.payload},setRadio:function(e,t){e.radiobox=t.payload},setAbout:function(e,t){e.aboutInp=t.payload}}}),E=g.reducer,y=g.actions,x=y.addEmail,w=y.addPhone,_=y.setNick,k=y.setName,j=y.setSerName,O=y.setMail,N=y.setADV,S=y.setCheck,L=y.setRadio,P=y.setAbout,T=function(){var e=Object(m.c)(function(e){return e.toolkit});console.log(e);var t=Object(i.n)(),a=Object(m.c)(function(e){return e.toolkit.phone}),n=Object(m.c)(function(e){return e.toolkit.email}),o=Object(m.b)(),c=Object(d.b)({defaultValues:{email:n,phone:a},mode:"onBlur"}),l=c.register,u=c.handleSubmit,f=c.formState,h=f.errors,v=f.isValid;return r.a.createElement("div",{className:"container"},r.a.createElement(s,null),r.a.createElement("form",{onSubmit:u(function(a){var n,r;console.log(a),n=a.phone,o(w(n)),r=a.email,o(x(r)),console.log(e),t("/create")}),action:""},r.a.createElement("span",null,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),r.a.createElement(p.a,Object.assign({onFocus:function(e){e.target.value=""},mask:"+7(999)999 99 99",className:"input",placeholder:"+7(999)999 99 99"},l("phone",{required:"enter your number"}))),h.phone&&r.a.createElement("p",{className:"errorMsg"},h.phone.message),r.a.createElement("span",null,"Email"),r.a.createElement("input",Object.assign({type:"text",onFocus:function(e){e.target.value=""}},l("email",{required:"Email is required",pattern:{value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message:"Email is not valid."}}))),h.email&&r.a.createElement("p",{className:"errorMsg"},h.email.message),r.a.createElement("button",{disabled:!v,type:"submit",id:"button-start",className:"".concat(b.a.btnstart," btn")},"\u0414\u0430\u043b\u0435\u0435")))},M=a(3),I=a(38),q=a.n(I),A=a(20),C=a.n(A);var F=function(e){var t=e.width;return e.tab,r.a.createElement("div",{className:C.a.metric},r.a.createElement("div",{style:function(e){return 1==e?{width:"50%"}:e>=2?{width:"100%"}:void 0}(t),className:"metricProgress"}),r.a.createElement("span",{className:t>=0?C.a.active:null}),r.a.createElement("span",{className:t>=1?C.a.active:null}),r.a.createElement("span",{className:t>=2?C.a.active:null}))};var G=function(e){var t=e.tab,a=e.setTab,n=e.widthSet,o=Object(i.n)(),c=Object(m.b)(),l=Object(m.c)(function(e){return e.toolkit}),u=l.nick,s=l.name,f=l.sername,p=l.sex,h=Object(d.b)({defaultValues:{nick:u,name:s,sername:f},mode:"onTouched"}),b=h.handleSubmit,v=h.register,g=h.formState,E=g.errors,y=g.isValid;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:b(function(e){c(_(e.nick)),c(k(e.name)),c(j(e.sername)),c(O(e.sex)),a(t+1),n(1)})},r.a.createElement("span",null,"Nick name"),r.a.createElement("input",Object.assign({type:"text",onFocus:function(e){e.target.value=""}},v("nick",{required:"Enter Nick",pattern:{value:/^[A-Za-z\u0410-\u042f\u0430-\u044f0-9]+$/,message:"\u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b"},maxLength:{value:30,message:"\u043c\u0435\u043d\u0435\u0435 30 \u0441\u0438\u0432\u043e\u043b\u043e\u0432"}}))),E.nick&&r.a.createElement("p",{className:"errorMsg"},E.nick.message),r.a.createElement("p",null,"Tip"),r.a.createElement("span",null,"Name"),r.a.createElement("input",Object.assign({type:"text",onFocus:function(e){e.target.value=""}},v("name",{required:"Enter name",pattern:{value:/^[A-Za-z\u0410-\u042f\u0430-\u044f]+$/,message:"\u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b"},maxLength:{value:50,message:"\u043c\u0435\u043d\u0435\u0435 50 \u0441\u0438\u0432\u043e\u043b\u043e\u0432"}}))),E.name&&r.a.createElement("p",{className:"errorMsg"},E.name.message),r.a.createElement("span",null,"Sername"),r.a.createElement("input",Object.assign({type:"text",onFocus:function(e){e.target.value=""}},v("sername",{required:"Enter sername",pattern:{value:/^[A-Za-z\u0410-\u042f\u0430-\u044f]+$/,message:"\u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b"},maxLength:{value:50,message:"\u043c\u0435\u043d\u0435\u0435 50 \u0441\u0438\u0432\u043e\u043b\u043e\u0432"}}))),E.sername&&r.a.createElement("p",{className:"errorMsg"},E.sername.message),r.a.createElement("span",null,"Sex"),r.a.createElement("select",Object.assign({defaultValue:p,id:"field-sex",placeholder:"\u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"},v("sex",{required:"Enter sex"})),r.a.createElement("option",{disabled:!0,value:""},"\u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"),r.a.createElement("option",{id:"field-sex-option-man",value:"man"},"man"),r.a.createElement("option",{id:"field-sex-option-woman",value:"woman"},"woman")),r.a.createElement("button",{id:"button-back",className:"btn btn_back",onClick:function(e){e.preventDefault(),o(-1)}},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement("button",{disabled:!y,id:"button-next",className:"btn"},"\u0412\u043f\u0435\u0440\u0435\u0434")))},V=a(31),D=a.n(V);var B=function(e){var t=e.tab,a=e.setTab,n=e.widthSet,o=Object(m.b)(),c=Object(m.c)(function(e){return e.toolkit}),i=Object(m.c)(function(e){return e.toolkit}),l=i.advantages,u=i.radiobox,s=i.checkbox;console.log("render"),console.log(c);var f=Object(d.b)({defaultValues:{advantages:l,checkbox:s,radiobox:u},mode:"onTouched"}),p=f.handleSubmit,h=f.register,b=f.control,v=f.formState,g=v.errors,E=v.isValid,y=Object(d.a)({control:b,name:"advantages"}),x=y.fields,w=y.append,_=y.remove;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Advantages"),r.a.createElement("form",{onSubmit:p(function(e){o(N(e.advantages)),o(S(e.checkbox)),o(L(e.radiobox)),n(2),a(t+1)})},x.map(function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement("input",Object.assign({},h("advantages.".concat(t,".value"),{required:"advantage option required"}),{id:"field-advantages-".concat(t+1),type:"text"})),r.a.createElement("img",{id:"button-remove-".concat(t+1),onClick:function(){return function(e){return _(e)}(t)},className:D.a.img,src:"icons/delete.svg",alt:"Remove"}),g.advantages&&g.advantages[t]&&r.a.createElement("p",{className:"errorMsg"},g.advantages[t].value.message))}),r.a.createElement("button",{onClick:function(){return w({value:""})},to:"/auth",id:"button-add",className:D.a.addBtn},"+"),r.a.createElement("span",null,"Checkbox group"),[1,2,3].map(function(e,t){return r.a.createElement("label",{key:t},r.a.createElement("input",Object.assign({},h("checkbox",{required:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c"}),{value:e,key:t,id:"field-checkbox-group-option-".concat(t),type:"checkbox"})),e)}),g.checkbox&&r.a.createElement("p",null,g.checkbox.message," "),r.a.createElement("span",null,"Radio group"),[1,2,3].map(function(e,t){return r.a.createElement("label",{key:t},r.a.createElement("input",Object.assign({},h("radiobox",{required:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c"}),{key:t,value:e,id:"field-radio-group-option-".concat(t),type:"radio"}))," ",e)}),r.a.createElement("button",{id:"button-back",className:"btn btn_back",onClick:function(e){!function(e){e.preventDefault(),a(t-1)}(e)}},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement("button",{disabled:!E,id:"button-next",className:"btn"},"\u0412\u043f\u0435\u0440\u0435\u0434")))},R=a(5),Y=a(39),z=a(40),Z=a.n(z),$=a(14),J=a.n($),K=function(e){var t=e.formSubmitted,a=e.formStatus,n=e.setform,o=Object(i.n)(),c="btn",l="\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",u="icons/success.svg",s="\u0424\u043e\u0440\u043c\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430",m=function(){n(!1),o("/")};return a&&(c="".concat(J.a.buttonClose," btn"),l="\u0417\u0430\u043a\u0440\u044b\u0442\u044c",u="icons/error.svg",s="\u041e\u0448\u0438\u0431\u043a\u0430",m=function(){n(!t)}),r.a.createElement("div",{className:J.a.wrap},r.a.createElement("div",{className:J.a.modal},r.a.createElement("p",{className:"".concat(J.a.formtext," ").concat(J.a.left)},s),r.a.createElement("img",{src:u,alt:"success"}),r.a.createElement("button",{className:J.a.closeButton,onClick:m}),r.a.createElement("button",{id:"button-close",className:c,onClick:m},l)))};function Q(){Q=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,a){return e[t]=a}}function u(e,t,a,r){var o=t&&t.prototype instanceof d?t:d,c=Object.create(o.prototype),i=new j(r||[]);return n(c,"_invoke",{value:x(e,a,i)}),c}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var m={};function d(){}function f(){}function p(){}var h={};l(h,o,function(){return this});var b=Object.getPrototypeOf,v=b&&b(b(O([])));v&&v!==t&&a.call(v,o)&&(h=v);var g=p.prototype=d.prototype=Object.create(h);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function y(e,t){var r;n(this,"_invoke",{value:function(n,o){function c(){return new t(function(r,c){!function n(r,o,c,i){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return n("throw",e,c,i)})}i(l.arg)}(n,o,r,c)})}return r=r?r.then(c,c):c()}})}function x(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return N()}for(a.method=r,a.arg=o;;){var c=a.delegate;if(c){var i=w(c,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=s(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function w(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:f,configurable:!0}),f.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(y.prototype),l(y.prototype,c,function(){return this}),e.AsyncIterator=y,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var c=new y(u(t,a,n,r),o);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(g),l(g,i,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),k(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;k(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var W=function(e){var t=e.tab,a=e.setTab,o=Object(n.useState)(!1),c=Object(M.a)(o,2),i=c[0],l=c[1],u=Object(n.useState)(!1),s=Object(M.a)(u,2),f=s[0],p=s[1],h=Object(m.b)(),b=Object(m.c)(function(e){return e.toolkit}).aboutInp,v=Object(m.c)(function(e){return e.toolkit}),g=Object(d.b)({defaultValues:{aboutInp:b},mode:"all"}),E=g.handleSubmit,y=g.register,x=g.watch,w=g.formState,_=w.errors,k=w.isValid,j=function(){var e=Object(R.a)(Q().mark(function e(t){return Q().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Sending request with data:",t),e.next=4,fetch("https://api.sbercloud.ru/content/v1/bootcamp/frontend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:e.sent.ok?l(!0):(p(!0),console.error("Failed to submit form data")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),Object(Y.a)("setErr"),console.error("An error occurred while submitting form data",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),O=x("aboutInp")?x("aboutInp").length:null;return r.a.createElement("form",{onSubmit:E(function(e){h(P(e.aboutInp)),j(v)})},r.a.createElement("span",null,"About"),r.a.createElement("textarea",Object.assign({},y("aboutInp",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e",maxLength:{value:200,message:"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 200 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}}),{className:Z.a.textarea,placeholder:"placeholder"})),O?r.a.createElement("p",null,"\u0432\u044b \u0432\u0432\u0435\u043b\u0438 ",O," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):null,_.aboutInp&&r.a.createElement("p",null,_.aboutInp.message),i&&r.a.createElement(K,{formSubmitted:i,formStatus:f,setform:l}),r.a.createElement("p",null,"Tip"),r.a.createElement("button",{id:"button-back",className:"btn btn_back",onClick:function(){a(t-1)}},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement("button",{disabled:!k,id:"button-next",className:"btn"},"\u0412\u043f\u0435\u0440\u0435\u0434"))};var H=function(){var e=Object(n.useState)(0),t=Object(M.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(1),i=Object(M.a)(c,2),l=i[0],u=i[1];return r.a.createElement("div",{className:q.a.container},r.a.createElement(F,{width:a,tab:l}),1===l&&r.a.createElement(G,{tab:l,setTab:u,widthSet:o}),2===l&&r.a.createElement(B,{tab:l,setTab:u,widthSet:o}),3===l&&r.a.createElement(W,{tab:l,setTab:u,widthSet:o}))};a(61);var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(T,null)}),r.a.createElement(i.a,{path:"/create",element:r.a.createElement(H,null)})))},X=(a(63),a(9)),ee=a(10),te=Object(ee.b)({toolkit:E}),ae=Object(v.a)({reducer:te});c.a.createRoot(document.getElementById("root")).render(r.a.createElement(m.a,{store:ae},r.a.createElement(X.a,null,r.a.createElement(U,null))))}},[[41,2,1]]]);
//# sourceMappingURL=main.f8c9a06a.chunk.js.map