(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"sg+I":function(e,t,r){},tjUo:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("i8i4"),l=r.n(o),c=r("9rZX"),i=r.n(c),u=(r("sg+I"),r("55Ip")),s=r("Ty5D"),f=r("/MKj"),m=r("ANjH"),p=[{id:"title",title:"Главная",path:"/"},{id:"News",title:"Новости",path:"/news"}],b=[{login:"admin",password:"admin",usertype:"admin"},{login:"user",password:"user",usertype:"user"}],y=[{id:0,title:"Кошка построила домик!",text:"Но никого не впускает! Почему ты такая злюка и никого не пускаешь? Из-за лапок?",approved:!0,createdAt:160056e7},{id:1,title:"Котика перепутали с хлебушком!",text:"И засунули в пакетик! По последним данным, он не очень этому рад.",approved:!1,createdAt:16006464e5},{id:2,title:"В аэропорту задержан котик!",text:"Он ничего не сделал, просто сотрудникам полиции не хватает милых котиков.",approved:!0,createdAt:16007328e5},{id:3,title:"Собачка залезла в коробку и сидит",text:"Зачем она это делает? Что это значит? Она что, кот?",approved:!1,createdAt:16008192e5},{id:4,title:"Местные крыски такие маленькие, такие утютю",text:"Нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх",approved:!1,createdAt:16009056e5},{id:5,title:"Доллар упал уже до 90 рублей",text:"Министерство кошачих дел заявило что они ничего не роняли",approved:!0,createdAt:1600992e6},{id:6,title:"Котик устроился программистом",text:"Вот только писать код он не может - у него лапки. Держись, котик, мы с тобой!",approved:!1,createdAt:16010784e5}],d={isAuthorized:!1,login:"Гость",usertype:"guest"};function v(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j={list:y},w=Object(m.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":var r=t.payload,n=b.find((function(e){return e.login===r.login}));return{isAuthorized:!0,login:n.login,usertype:n.usertype};case"SIGN_OUT":return d;default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_NEWS":var r=t.filter;if(!r)return j;var n=y.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));return{list:n};case"APPROVE_NEWS":var a=t.id,o=e.list.map((function(e){return e.id===a?g(g({},e),{},{approved:!0}):e}));return{list:o};case"ADD_NEWS":var l=t.payload,c=g(g({},l),{},{id:e.list.length,approved:!1,createdAt:Date.now()});return{list:[c].concat(v(e.list))};case"REMOVE_NEWS":var i=t.id,u=e.list.filter((function(e){return e.id!==i}));return{list:u};default:return e}}}),S=Object(m.c)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),N=r("TSYQ"),_=r.n(N),A=function(e){var t=e.children,r=e.className;return a.a.createElement("div",{className:_()("container",r)},t)},P=r.p+"img/4698e9ae891e0404f78ecfb48c37f160.png",C=function(){return a.a.createElement("img",{src:P,className:"logo"})};function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var x=n.createElement("path",{d:"M325.332 251H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h309.332c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"}),k=n.createElement("path",{d:"M240 336.332c-4.098 0-8.191-1.555-11.309-4.691-6.25-6.25-6.25-16.383 0-22.637l74.028-74.024-74.028-74.027c-6.25-6.25-6.25-16.387 0-22.637 6.254-6.25 16.387-6.25 22.637 0l85.332 85.336c6.25 6.25 6.25 16.383 0 22.633l-85.332 85.332A15.88 15.88 0 01240 336.332zm0 0"}),D=n.createElement("path",{d:"M256 469.668c-97.09 0-182.805-58.41-218.41-148.824-3.242-8.192.808-17.492 9.023-20.735 8.192-3.199 17.516.79 20.758 9.047C98.113 387.215 172.161 437.668 256 437.668c111.742 0 202.668-90.926 202.668-202.668S367.742 32.332 256 32.332c-83.84 0-157.887 50.453-188.629 128.512-3.266 8.258-12.566 12.246-20.758 9.047-8.215-3.243-12.265-12.543-9.023-20.735C73.195 58.742 158.91.332 256 .332 385.387.332 490.668 105.613 490.668 235S385.387 469.668 256 469.668zm0 0"});var M=function(e){return n.createElement("svg",I({height:"490pt",viewBox:"0 -10 490.667 490",width:"490pt"},e),x,k,D)};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var R=function(e){var t=e.width,r=void 0===t?"1rem":t,n=e.height,o=void 0===n?"1rem":n,l=e.fill,c=void 0===l?"#fff":l,i=e.className,u=e.onClick,s=U(e,["width","height","fill","className","onClick"]);return a.a.createElement("button",{onClick:u,className:_()("auth-btn",i)},a.a.createElement(M,T({fill:c,width:r,height:o},s)))},z=function(){return a.a.createElement("nav",{className:"navigation navigation--ml-auto"},a.a.createElement("ul",{className:"navigation__list"},p.map((function(e){var t=e.title,r=e.path,n=e.id;return a.a.createElement("li",{key:n,className:"navigation__list-item"},a.a.createElement(u.c,{exact:!0,className:"navigation__list-item-link",to:r},t))}))))};function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var L=function(e){var t,r=e.children,n=e.variant,o=void 0===n?"primary":n,l=e.className,c=e.block,i=G(e,["children","variant","className","block"]);return a.a.createElement("button",W({},i,{className:_()("button",l,(t={},$(t,"button--primary","primary"===o),$(t,"button--error","error"===o),$(t,"button--block",c),t))}),r)};function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var B=function(e){var t=e.children,r=e.className,n=X(e,["children","className"]);return a.a.createElement("form",V({className:_()("form",r)},n),t)},F=function(e){var t=e.children,r=e.className,n=X(e,["children","className"]);return a.a.createElement("label",V({className:_()(r,"form__label")},n),t)},q=function(e){var t=e.children,r=e.className,n=X(e,["children","className"]);return a.a.createElement("h4",V({className:_()("form__title",r)},n),t)},H=function(e){var t=e.children,r=e.className,n=X(e,["children","className"]);return a.a.createElement("div",V({className:_()("form__group",r)},n),t)},J=function(e){var t=e.className,r=X(e,["className"]);return a.a.createElement("input",V({className:_()("form__input",t)},r))},Y=function(e){var t=e.className,r=X(e,["className"]);return a.a.createElement("textarea",V({className:_()("form__textarea",t)},r))},K=function(e){var t=e.className,r=e.children,n=X(e,["className","children"]);return a.a.createElement("span",V({},n,{className:_()(t,"form__error")}),r)};function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return re(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ne={login:"",password:""},ae=function(){var e=te(Object(n.useState)(ne),2),t=e[0],r=e[1],a=te(Object(n.useState)(""),2),o=a[0],l=a[1],c=Object(f.b)();return[t,function(e){var n=e.target;return r(Z(Z({},t),{},ee({},n.name,n.value)))},function(e,r){r.preventDefault();var n=function(e){var t=b.find((function(t){return t.login===e.login}));return t?t.password===e.password?void 0:"Неверный пароль":"Юзер не найден"}(t);if(n)return l(n);c({type:"SIGN_IN",payload:t}),e()},o]};function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return le(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return le(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ce=function(e){var t=e.handleCloseModal,r=oe(ae(),4),n=r[0],o=r[1],l=r[2],c=r[3];return a.a.createElement(B,{onSubmit:l.bind(null,t)},a.a.createElement(q,null,"Авторизация"),c&&a.a.createElement(K,null,c),a.a.createElement(H,null,a.a.createElement(F,null,"Имя пользователя"),a.a.createElement(J,{value:n.login,onChange:o,name:"login"})),a.a.createElement(H,null,a.a.createElement(F,null,"Пароль"),a.a.createElement(J,{value:n.password,onChange:o,name:"password",type:"password",error:"Неверный логин"})),a.a.createElement(L,{block:!0,className:"form__btn",type:"submit"},"Авторизоваться"))};function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var ue=n.createElement("path",{d:"M437.126 74.939c-99.826-99.826-262.307-99.826-362.133 0C26.637 123.314 0 187.617 0 256.005s26.637 132.691 74.993 181.047c49.923 49.923 115.495 74.874 181.066 74.874s131.144-24.951 181.066-74.874c99.826-99.826 99.826-262.268.001-362.113zM409.08 409.006c-84.375 84.375-221.667 84.375-306.042 0-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143 63.37-153.021c84.375-84.375 221.667-84.355 306.042 0 84.355 84.375 84.355 221.667 0 306.022z"}),se=n.createElement("path",{d:"M341.525 310.827l-56.151-56.071 56.151-56.071c7.735-7.735 7.735-20.29.02-28.046-7.755-7.775-20.31-7.755-28.065-.02l-56.19 56.111-56.19-56.111c-7.755-7.735-20.31-7.755-28.065.02-7.735 7.755-7.735 20.31.02 28.046l56.151 56.071-56.151 56.071c-7.755 7.735-7.755 20.29-.02 28.046 3.868 3.887 8.965 5.811 14.043 5.811s10.155-1.944 14.023-5.792l56.19-56.111 56.19 56.111c3.868 3.868 8.945 5.792 14.023 5.792a19.828 19.828 0 0014.043-5.811c7.733-7.756 7.733-20.311-.022-28.046z"});var fe=function(e){return n.createElement("svg",ie({viewBox:"0 0 511.995 511.995"},e),ue,se)},me=function(e){var t=e.onClose;return a.a.createElement("button",{onClick:t,className:"ReactModal__close-btn"},a.a.createElement(fe,{width:"1rem",height:"1rem",fill:"#b4b4b4"}))},pe=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.auth.login}));return a.a.createElement("div",{className:"logout-form"},a.a.createElement("div",{className:"logout-form__text"},"Вы вошли как"),a.a.createElement("h2",{className:"logout-form__login"},t),a.a.createElement(L,{block:!0,onClick:function(){return e({type:"SIGN_OUT"})}},"Выйти"))},be=function(e){var t=e.isOpen,r=e.onClose,n=Object(f.c)((function(e){return e.auth.isAuthorized}));return a.a.createElement(i.a,{isOpen:t,onRequestClose:r},a.a.createElement(me,{onClose:r}),n?a.a.createElement(pe,null):a.a.createElement(ce,{handleCloseModal:r}))};function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return de(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return de(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ve=function(){var e=ye(Object(n.useState)(!1),2),t=e[0],r=e[1],o=function(){return r(!t)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"header"},a.a.createElement(A,{className:"container--flex container--no-padding"},a.a.createElement(u.b,{to:"/"},a.a.createElement(C,null)),a.a.createElement(z,null),a.a.createElement(R,{onClick:o,className:"auth-btn--full-heigth"}))),a.a.createElement(be,{isOpen:t,onClose:o}))},he=function(){var e=Object(f.c)((function(e){return e.auth.login}));return a.a.createElement(A,null,a.a.createElement("h1",{className:"text-center"},"Привет, ",e))};function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(r),!0).forEach((function(t){Ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function je(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return we(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return we(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Se={title:"",text:""};function Ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _e(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _e(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Ae=function(e){var t=e.handleCloseModal,r=Ne(function(){var e=je(Object(n.useState)(Se),2),t=e[0],r=e[1],a=je(Object(n.useState)(""),2),o=a[0],l=a[1],c=Object(f.b)();return[t,function(e){var n=e.target;r(ge(ge({},t),{},Ee({},n.name,n.value)))},function(e,r){r.preventDefault();var n=function(e){var t;return e.title&&e.text||(t="Все поля обязательны"),t}(t);if(n)return l(n);c({type:"ADD_NEWS",payload:t}),e()},o]}(),4),o=r[0],l=r[1],c=r[2],i=r[3];return a.a.createElement(B,{onSubmit:c.bind(null,t)},a.a.createElement(q,null,"Добавить новость"),i&&a.a.createElement(K,null,i),a.a.createElement(H,null,a.a.createElement(F,null,"Название"),a.a.createElement(J,{onChange:l,name:"title",value:o.title})),a.a.createElement(H,null,a.a.createElement(F,null,"Текст"),a.a.createElement(Y,{rows:"5",onChange:l,name:"text",value:o.text})),a.a.createElement(L,{className:"form__btn",block:!0,type:"submit"},"Добавить новость"))},Pe=function(e){var t=e.isOpen,r=e.onClose;return a.a.createElement(i.a,{isOpen:t,onRequestClose:r},a.a.createElement(me,{onClose:r}),a.a.createElement(Ae,{handleCloseModal:r}))},Ce=r("sWYD");function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var xe=n.createElement("path",{d:"M238.933 0C106.974 0 0 106.974 0 238.933s106.974 238.933 238.933 238.933 238.933-106.974 238.933-238.933C477.726 107.033 370.834.141 238.933 0zm0 443.733c-113.108 0-204.8-91.692-204.8-204.8s91.692-204.8 204.8-204.8 204.8 91.692 204.8 204.8c-.122 113.058-91.742 204.678-204.8 204.8z"}),ke=n.createElement("path",{d:"M370.046 141.534c-6.614-6.388-17.099-6.388-23.712 0l-158.601 158.6-56.201-56.201c-6.548-6.78-17.353-6.967-24.132-.419-6.78 6.548-6.967 17.353-.419 24.132.137.142.277.282.419.419l68.267 68.267c6.664 6.663 17.468 6.663 24.132 0l170.667-170.667c6.548-6.779 6.36-17.583-.42-24.131z"});var De=function(e){return n.createElement("svg",Ie({viewBox:"0 0 477.867 477.867"},e),xe,ke)},Me=function(e){var t=e.id,r=e.title,o=e.text,l=e.createdAt,c=e.approved,i=e.isAdmin,u=e.handleApproveNews,s=e.handleDeleteNews,f=Object(n.useMemo)((function(){return Object(Ce.a)(l,"dd.MM.yyyy")}),[l]);return a.a.createElement("div",{className:"news-card"},a.a.createElement("div",{className:"news-card__header"},a.a.createElement("h3",{title:r,className:"news-card__title"},r),c&&a.a.createElement(De,{className:"icon--ml",width:"1rem",height:"1rem",fill:"#f9a109"})),a.a.createElement("div",{className:"news-card__body"},a.a.createElement("small",{className:"news-card__timestamp news-card__timestamp--mb"},"Опубликовано: ",f),a.a.createElement("p",{className:"news-card__text"},o)),i&&a.a.createElement("div",{className:"news-card__actions"},a.a.createElement(L,{disabled:c,onClick:u.bind(null,t),block:!0,className:"news-card__actions--btn"},"Одобрить"),a.a.createElement(L,{onClick:s.bind(null,t),block:!0,className:"news-card__actions--btn",variant:"error"},"Удалить")))};function Te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ue(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Re=function(e){var t=e.className,r=Te(Object(n.useState)(""),2),o=r[0],l=r[1],c=Object(n.useRef)(null),i=Object(f.b)();return a.a.createElement("input",{value:o,onChange:function(e){var t=e.target.value;l(t),c.current&&clearTimeout(c.current);var r=setTimeout((function(){return i(function(e){return{type:"FILTER_NEWS",filter:e}}(t))}),300);c.current=r},placeholder:"Введите название новости",className:_()("news-filter",t)})},ze=function(e){var t=e.children;return a.a.createElement("div",{className:"grid grid--no-gap"},t)},We=function(e){var t=e.children;return a.a.createElement("div",{className:"grid__item"},t)};function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Le(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Le(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Le(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Ve=function(){var e,t=Ge(Object(n.useState)(!1),2),r=t[0],o=t[1],l=Object(f.c)((function(e){var t=e.news,r=e.auth;return{news:t.list,isUser:"user"===r.usertype,isGuest:"guest"===r.usertype,isAdmin:"admin"===r.usertype}})),c=l.news,i=l.isUser,u=l.isGuest,s=l.isAdmin,m=Object(f.b)(),p=Object(n.useCallback)((function(e){return m(function(e){return{type:"APPROVE_NEWS",id:e}}(e))}),[]),b=Object(n.useCallback)((function(e){return m(function(e){return{type:"REMOVE_NEWS",id:e}}(e))}),[]),y=function(){return o(!r)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{className:"news-page"},a.a.createElement("div",{className:"news-page__actions"},a.a.createElement(Re,{className:"news-page__actions--filter"}),i&&a.a.createElement(L,{onClick:y,className:"news-page__actions--add"},"Добавить")),a.a.createElement(ze,null,(e=c,u&&(e=e.filter((function(e){return e.approved}))),e.map((function(e){return a.a.createElement(We,{key:e.createdAt},a.a.createElement(Me,$e({isAdmin:s,handleDeleteNews:b,handleApproveNews:p},e)))}))))),i&&a.a.createElement(Pe,{isOpen:r,onClose:y}))},Xe=function(){return a.a.createElement(f.a,{store:S},a.a.createElement(u.a,null,a.a.createElement(ve,null),a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/",exact:!0,component:he}),a.a.createElement(s.a,{path:"/news",exact:!0,component:Ve}))))};function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(r),!0).forEach((function(t){qe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}i.a.setAppElement("#app"),i.a.defaultStyles.content=Fe(Fe({},i.a.defaultStyles.content),{},{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)",borderRadius:"8px",padding:"2rem",minWidth:300}),i.a.defaultStyles.overlay.backgroundColor="rgba(0, 0, 0, 46%)",l.a.render(a.a.createElement(Xe,null),document.getElementById("app"))}},[["tjUo",1,2]]]);