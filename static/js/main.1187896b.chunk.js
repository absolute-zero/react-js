(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(40),r=n(9),o={dialogsData:[{id:1,name:"Aleksandr"},{id:2,name:"Dashka"},{id:3,name:"Alex"},{id:4,name:"Timoha"},{id:5,name:"Kirill"},{id:6,name:"Tihon"}],messagesData:[{id:1,message:"Hi!"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"What?"},{id:4,message:"What is this?"},{id:5,message:"Good night"}]},c=function(e){return{type:"dialogs/ADD-MESSAGE",newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":return Object(r.a)({},e,{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:e.messagesData.length,message:t.newMessage}])});default:return e}}},128:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(12),c=n(40),i=n(9),u=n(14),s=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(i.a)({},e,{},a):e}))};n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return E})),n.d(t,"f",(function(){return b}));var l="users/FOLLOW",f={users:[],pageSize:7,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(e){return{type:l,userId:e}},p=function(e){return{type:"users/UNFOLLOW",userId:e}},d=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},h=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"users/FOLLOWING_IN_PROGRESS",isFetching:e,userId:t}},v=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(h(!0)),a(d(e)),n.next=4,u.c.getUsers(e,t);case 4:o=n.sent,a(h(!1)),a({type:"users/SET_USERS",users:o.items});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(n,e,u.c.followUsers.bind(e),m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(n,e,u.c.unfollowUsers.bind(e),p);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,n)),e.next=3,a(n);case 3:e.sent.resultCode||t(o(n)),t(g(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}();t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"users/SET_USERS":return Object(i.a)({},e,{users:e.users.concat(t.users)});case"users/SET_CURRENT_PAGE":return Object(i.a)({},e,{currentPage:t.currentPage+1});case"users/SET_TOTAL_COUNT":return Object(i.a)({},e,{totalUsersCount:t.totalCount});case"users/TOGGLE_IS_FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"users/FOLLOWING_IN_PROGRESS":return Object(i.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var a=n(129),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"886c1936-e61e-4e36-b11d-9b344d1c02a8"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUsers:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUsers:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getLogin:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},i={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveInfoAboutUser:function(e){return r.put("profile",e).then((function(e){return e.data}))}}},15:function(e,t,n){e.exports={nav:"Navbar_nav__28Ug1","nav-content":"Navbar_nav-content__3BLoD",link:"Navbar_link__3lbpz","link-logo-name":"Navbar_link-logo-name__QpsEV",active:"Navbar_active__1rJ0C"}},158:function(e,t,n){e.exports=n(284)},241:function(e,t,n){},242:function(e,t,n){},25:function(e,t,n){e.exports={header:"header_header__3fOW-",name:"header_name__2PEEW",dropList:"header_dropList__EjeiJ",arrow:"header_arrow__3S0l6","menu-mobile":"header_menu-mobile__19m1s",qwe:"header_qwe__8uLrA",active:"header_active___b9hh"}},284:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(93),o=n(102),c={friendName:[{id:1,name:"Aleksandr"},{id:2,name:"Dashka"},{id:3,name:"Alex"},{id:4,name:"Timoha"},{id:5,name:"Kirill"},{id:6,name:"Tihon"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;arguments.length>1&&arguments[1];return e},u=n(128),s=n(7),l=n.n(s),f=n(12),m=n(9),p=n(14),d=n(30),h={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},g=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{userId:e,email:t,login:n,isAuth:a}}},v=function(){return function(){var e=Object(f.a)(l.a.mark((function e(t){var n,a,r,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.getLogin();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,o=a.login,c=a.email,t(g(r,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(m.a)({},e,{},t.data);case"auth/TOGGLE_IS_FETCHING":return Object(m.a)({},e,{isFetching:t.isFetching});default:return e}},b=n(130),_=n(127),O={initialized:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(m.a)({},e,{initialized:!0});default:return e}},S=Object(a.c)({profilePage:r.b,dialogsPage:o.b,sideBar:i,usersPage:u.a,auth:E,form:_.a,app:w}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,I=Object(a.e)(S,j(Object(a.a)(b.a)));window.__store__=I;var y=I,C=n(0),N=n.n(C),k=n(59),P=n.n(k),A=(n(241),n(126)),T=(n(242),n(15)),x=n.n(T),L=n(22),U=n(64),F=n.n(U);var D=function(e){return N.a.createElement("nav",{className:e.active?F()(x.a.active,x.a.nav):x.a.nav,onClick:function(){return e.setActive(!1)}},N.a.createElement("div",{className:x.a["nav-content"],onClick:function(e){return e.stopPropagation()}},N.a.createElement(L.b,{to:"/profile",className:x.a.link,activeClassName:x.a.activeLink},N.a.createElement("span",{className:x.a["link-logo-name"]},N.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},N.a.createElement("path",{d:"M16,13.29A6.15,6.15,0,1,0,9.86,7.14,6.15,6.15,0,0,0,16,13.29ZM16,\r 3a4.15,4.15,0,1,1-4.14,4.14A4.15,4.15,0,0,1,16,3ZM27.38,26.81C26.18,29.9,20.72,31,16,\r 31S5.82,29.9,4.62,26.81c-.64-1.65-.07-4.1,1.49-6.39A12.11,12.11,0,0,1,16,15a12.24,12.24,\r 0,0,1,10.91,7.25,1,1,0,1,1-1.82.81A10.37,10.37,0,0,0,16,17a10.09,10.09,0,0,0-8.23,4.55c-1.34,\r 1.95-1.61,3.72-1.29,4.54C7.14,27.78,11.14,29,16,29s8.86-1.22,9.52-2.91a1,1,0,0,1,1.86.72Z"})))),N.a.createElement(L.b,{to:"/people",className:x.a.link,activeClassName:x.a.activeLink},N.a.createElement("span",{className:x.a["link-logo-name"]},N.a.createElement("svg",{viewBox:"0 0 62 62",version:"1.1"},N.a.createElement("path",{d:"M51.81 35.962h-6.4c-.915 0-1.524-.61-1.524-1.524s.61-1.524 1.524-1.524h6.4c1.523 0 3.047-.304 4.571-.61.914-.304 1.524-.609 2.133-.914.61-.304.915-1.219.915-1.828 0-.61-.305-1.22-.61-1.829-1.524-1.828-4.267-3.047-7.924-4.266-.305 0-.305-.305-.61-.305-.914-.61-1.523-1.524-1.828-2.438 0-1.22.61-2.134 1.524-2.743 2.133-3.048 3.352-5.79 3.048-8.229-.305-1.523-.915-2.742-2.134-3.657-2.133-1.524-5.18-1.524-7.01 0-1.218.915-1.828 2.134-2.133 3.657-.304 2.438.915 5.181 3.048 8.229.61.61.305 1.524-.305 2.133-.61.61-1.524.305-2.133-.304-3.048-3.658-4.267-7.315-3.657-10.667.305-2.133 1.524-4.267 3.352-5.486 3.048-2.438 7.62-2.438 10.667 0 1.828 1.524 3.047 3.353 3.352 5.486.305 3.352-.914 7.01-3.657 10.667-.305.304-.305.609-.61.609 0 0 .305 0 .305.305 3.962 1.219 7.01 3.047 8.838 5.18.915.915 1.524 2.439 1.524 3.963a5.332 5.332 0 0 1-2.133 4.266c-.914.61-1.829 1.22-3.048 1.524-1.828 0-3.657.305-5.485.305z",id:"Shape"}),N.a.createElement("path",{d:"M18.59 35.962h-6.4c-2.133 0-3.961-.305-5.485-.914-1.22-.305-2.134-.915-3.048-1.524-1.219-.914-2.133-2.743-2.133-4.267 0-1.524.61-2.743 1.524-3.962 2.133-2.133 5.18-3.657 9.142-4.876 0 0 .305 0 .305-.305 0 0-.305-.304-.305-.61C9.143 15.849 7.62 11.887 8.23 8.839c.304-2.133 1.523-4.267 3.352-5.486 3.048-2.438 7.619-2.438 10.667 0 1.828 1.524 3.047 3.353 3.352 5.486.305 3.352-.914 7.01-3.657 10.667-.61.61-1.524.61-2.133.305-.61-.61-.915-1.524-.305-2.134 2.438-3.047 3.352-6.095 3.047-8.228 0-1.524-.914-2.743-2.133-3.658-2.133-1.523-4.876-1.523-7.01 0-1.219.915-2.133 2.134-2.133 3.353-.305 2.438.914 5.18 3.048 8.228.61.915 1.524 1.829 1.219 2.743 0 1.22-.914 1.829-1.829 2.438 0 0-.304.305-.61.305-3.352 1.524-5.79 2.743-7.618 4.572-.305.61-.61 1.219-.61 1.828 0 .914.305 1.524.914 1.829.61.304 1.22.61 2.134.914 1.219.61 2.743.914 4.266.914h6.4c.915 0 1.524.61 1.524 1.524s-.61 1.524-1.524 1.524z",id:"Shape"}),N.a.createElement("path",{d:"M38.4 62.476H25.905c-2.743 0-5.181-.305-7.315-1.219-1.523-.61-2.742-1.219-3.657-2.133-1.828-.914-2.743-3.048-2.743-5.181 0-1.829.61-3.353 1.829-4.876 2.438-2.743 6.4-4.877 11.886-6.705l.914-.914-.914-.915c-3.962-5.18-5.79-9.752-5.181-14.019.61-2.743 1.828-5.18 4.266-7.01 3.962-2.742 10.058-2.742 13.715 0 2.438 1.83 3.962 4.267 4.266 7.01.61 4.267-1.219 9.143-4.876 14.02-.914.914-.914 1.218-.914 1.218s.61.305.914.61c5.486 1.828 9.448 3.962 11.886 6.705 1.219 1.219 1.829 3.047 1.829 4.876 0 2.133-.915 4.267-2.439 5.486-.914.914-2.133 1.523-3.657 2.133-2.438.61-4.876.914-7.314.914zM32 20.114c-1.829 0-3.657.61-5.181 1.524-1.829 1.22-2.743 3.048-3.048 5.181-.304 3.352 1.22 7.314 4.267 11.581.914.914 1.829 1.829 1.524 3.352 0 1.22-1.22 2.134-2.133 3.048 0 0-.305.305-.61.305-5.18 1.524-8.533 3.657-10.971 6.095-.305.61-.61 1.829-.61 2.743 0 1.219.61 2.438 1.524 3.047.61.61 1.828 1.22 3.048 1.524 1.828.61 3.961.915 6.095.915H38.4c2.133 0 4.267-.305 6.095-.915 1.22-.304 2.134-.914 3.048-1.524.914-.609 1.524-1.828 1.524-3.047 0-.914-.305-2.133-1.22-2.743-2.133-2.438-5.79-4.267-10.97-6.095-.306 0-.306-.305-.61-.305-.915-.914-2.134-1.829-2.134-3.048s.915-2.438 1.829-3.352c3.048-3.962 4.571-8.229 4.267-11.581-.305-2.133-1.22-3.657-3.048-5.18-1.524-.915-3.352-1.525-5.181-1.525z",id:"Shape"})))),N.a.createElement(L.b,{to:"/dialogs",className:x.a.link,activeClassName:x.a.activeLink},N.a.createElement("span",{className:x.a["link-logo-name"]},N.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},N.a.createElement("path",{d:"M52,13H12a6,6,0,0,0-6,6V46a6,6,0,0,0,6,6H52a6,6,0,0,0,6-6V19A6,6,0,0,0,52,13Zm2,33a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V19a2,2,0,0,1,2-2H52a2,2,0,0,1,2,2Z"}),N.a.createElement("path",{d:"M47.91,19.32,32,29.62,16.09,19.32a2,2,0,0,0-2.18,3.36l17,11a2,2,0,0,0,2.18,0l17-11a2,2,0,1,0-2.18-3.36Z"}))))))},G=n(10),M=n(88),R=n(89),z=n(91),H=n(90),W=n(92),Z=n(25),V=n.n(Z),q=function(e){return N.a.createElement("header",{className:V.a.header},console.log(e),N.a.createElement("div",{className:V.a["menu-mobile"],onClick:function(){return e.setActive(!e.active)}},N.a.createElement("span",{className:V.a.qwe}),N.a.createElement("span",{className:V.a.qwe}),N.a.createElement("span",{className:V.a.qwe})),N.a.createElement("div",{className:V.a.name},e.isAuth?e.login:N.a.createElement(L.b,{to:"/login"},"Login"),N.a.createElement("div",{className:V.a.arrow}),N.a.createElement("div",{className:V.a.dropList},N.a.createElement("div",{onClick:e.logout},"Logout"))))},B=n(19),J=function(e){function t(){return Object(M.a)(this,t),Object(z.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return N.a.createElement(q,this.props)}}]),t}(N.a.Component),Y=Object(B.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{toggleIsFetching:function(e){return{type:"auth/TOGGLE_IS_FETCHING",isFetching:e}},logout:function(){return function(){var e=Object(f.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.resultCode&&t(g(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(J),K=n(125),X=n(45),Q=n(33),$=n(41),ee=n.n($),te=Object(X.a)(30),ne=Object(X.b)(3),ae=Object(K.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return N.a.createElement("form",{action:"",onSubmit:t},n&&N.a.createElement("div",{className:ee.a.formSummaryError},n),Object(Q.c)("Email","email",[X.c,te,ne],Q.a),Object(Q.c)("password","password",[X.c,te,ne],Q.a,{type:"password"}),Object(Q.c)(null,"rememberMe",[],Q.a,{type:"checkbox"},"remember me"),N.a.createElement("div",null,N.a.createElement("button",null,"Login")))})),re=Object(B.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(f.a)(l.a.mark((function a(r){var o,c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.login(e,t,n);case 2:(o=a.sent).resultCode?(c=o.messages.length>0?o.messages[0]:"Some error",r(Object(d.a)("login",{_error:c}))):r(v());case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login;return e.isAuth?N.a.createElement(G.a,{to:"/profile"}):N.a.createElement("div",null,N.a.createElement("h1",null,"LOGIN"),N.a.createElement(ae,{onSubmit:function(e){t(e.email,e.password,e.rememberMe),console.log(e)}}))})),oe=N.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),ce=N.a.lazy((function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,302))})),ie=N.a.lazy((function(){return n.e(6).then(n.bind(null,303))}));var ue=Object(a.d)(G.f,Object(B.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(v()).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}}))((function(e){var t=e.initializeApp;Object(C.useEffect)((function(){t()}));var n=Object(C.useState)(!1),a=Object(A.a)(n,2),r=a[0],o=a[1];return N.a.createElement("div",null,N.a.createElement(Y,{className:"header-container",active:r,setActive:o}),N.a.createElement(D,{active:r,setActive:o}),N.a.createElement("main",null,N.a.createElement(G.b,{path:"/profile/:userId?"},N.a.createElement(C.Suspense,{fallback:N.a.createElement("div",null,"Loading")},N.a.createElement(ce,null))),N.a.createElement(G.b,{path:"/dialogs"},N.a.createElement(C.Suspense,{fallback:N.a.createElement("div",null,"Loading")},N.a.createElement(oe,null))),N.a.createElement(G.b,{path:"/people"},N.a.createElement(C.Suspense,{fallback:N.a.createElement("div",null,"Loading")},N.a.createElement(ie,null))),N.a.createElement(G.b,{path:"/news"}),N.a.createElement(G.b,{path:"/music"}),N.a.createElement(G.b,{path:"/setting"}),N.a.createElement(G.b,{path:"/login"},N.a.createElement(re,null))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));P.a.render(N.a.createElement(B.a,{store:y},N.a.createElement(L.a,null,N.a.createElement(ue,{store:y}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return d}));var a=n(87),r=n(0),o=n.n(r),c=n(41),i=n.n(c),u=n(81),s=n(61),l=n.n(s),f=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:i.a["form-container"]},o.a.createElement("div",{className:"".concat(i.a.formControl," ").concat(c?i.a.error:void 0)},r),c&&o.a.createElement("span",null,a))},m=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return o.a.createElement(f,e,o.a.createElement("textarea",Object.assign({},n,t,{className:l.a.newPost})))},p=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return o.a.createElement(f,e,o.a.createElement("input",Object.assign({},n,t,{className:l.a.newPost,autoComplete:"off"})),o.a.createElement("span",{className:l.a.bar}))},d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({name:t,placeholder:e,component:a,validate:n},r)),c)}},41:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3ZCfC",error:"FormsControls_error__2azU_",formSummaryError:"FormsControls_formSummaryError__2VYED","form-container":"FormsControls_form-container__1l08R"}},45:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},o=function(e){return function(t){return t&&t.length<e?"Must be ".concat(e," characters or more"):void 0}}},61:function(e,t,n){e.exports={content:"ProfileInformation_content__mQwxp",connections:"ProfileInformation_connections__C1Ofs","connections-count":"ProfileInformation_connections-count__3pGhY","connections-count__purple":"ProfileInformation_connections-count__purple__1gq9U",form:"ProfileInformation_form__x22Xz",newPost:"ProfileInformation_newPost__2SxYg",bar:"ProfileInformation_bar__1Pzy4",button:"ProfileInformation_button__3tjsU"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return v})),n.d(t,"f",(function(){return E})),n.d(t,"e",(function(){return b}));var a=n(7),r=n.n(a),o=n(12),c=n(40),i=n(9),u=n(14),s=n(30),l="profile/ADD-POST",f={posts:[{id:1,message:"Hi, how are you?",likeCount:12},{id:2,message:"It is my first project!",likeCount:25}],profile:null,status:""},m=function(e){return{type:l,newPost:e}},p=function(e){return{type:"profile/SET_STATUS",status:e}},d=function(e){return{type:"profile/SAVE_PHOTOS",photos:e}},h=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(p(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(a=t.sent).resultCode&&n(d(a.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n,a){var o,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userId,t.next=3,u.b.saveInfoAboutUser(e);case 3:0==(c=t.sent).resultCode?n(h(o)):n(Object(s.a)("setting-form",{_error:c.messages[0]}));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[{id:e.posts.length,message:t.newPost,likeCount:0}]),newPostText:""});case"profile/SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"profile/SET_STATUS":return Object(i.a)({},e,{status:t.status});case"profile/DELETE_POST":return Object(i.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/SAVE_PHOTOS":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});default:return e}}}},[[158,1,2]]]);
//# sourceMappingURL=main.1187896b.chunk.js.map