(this.webpackJsonptextdex=this.webpackJsonptextdex||[]).push([[0],{150:function(e,t,a){e.exports=a(342)},155:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),i=a.n(c),o=(a(155),a(62)),u=a(6),s=a(9),l=a(33),d=a.n(l),p=(a(158),d.a.initializeApp({apiKey:"AIzaSyDv8QurzSgHQowVeynUlG-BEgSt4VS2jWY",authDomain:"textdex-26d79.firebaseapp.com",projectId:"textdex-26d79",storageBucket:"textdex-26d79.appspot.com",messagingSenderId:"480015238304",appId:"1:480015238304:web:6795976246cacd2e9ff5c5"}).auth()),m=r.a.createContext(),h=function(e){var t=e.children,a=Object(n.useState)(!0),c=Object(s.a)(a,2),i=c[0],o=c[1],l=Object(n.useState)(null),d=Object(s.a)(l,2),h=d[0],f=d[1],g=Object(u.f)();Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){f(e),o(!1),e&&g.push("/chats")}))}),[h,g]);var b={user:h};return r.a.createElement(m.Provider,{value:b},!i&&t)},f=a(15),g=a.n(f),b=a(28),v=a(148),E=a(4),w=a.n(E),j=function(){var e=Object(n.useRef)(!1),t=Object(u.f)(),a=Object(n.useContext)(m).user,c=Object(n.useState)(!0),i=Object(s.a)(c,2),o=i[0],l=i[1],d=function(){var e=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.signOut();case 2:t.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(!e.current){if(e.current=!0,!a)return void t.push("/");w.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"2d334256-1333-4aa6-8b9b-be587d507740","user-name":a.email,"user-secret":a.uid}}).then((function(){l(!1)})).catch((function(){var e=new FormData;e.append("email",a.email),e.append("username",a.email),e.append("secret",a.uid),h(a.photoURL).then((function(t){e.append("avatar",t,t.name),w.a.post("https://api.chatengine.io/users/",e,{headers:{"private-key":"780f780b-afb3-4334-ad5f-3305aa4a8fb2"}}).then((function(){return l(!1)})).catch((function(e){return console.log(e)}))}))}))}}),[a,t]),!a||o?r.a.createElement("div",{className:"loading"},"Loading..."):r.a.createElement("div",{className:"chats-page"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"logo-tab"},"TEXTDEX"),r.a.createElement("div",{onClick:d,className:"logout-tab"},"Logout")),r.a.createElement("div",{className:"white-text",style:{color:"white"}},r.a.createElement(v.d,{height:"calc(100vh - 66px)",projectID:"2d334256-1333-4aa6-8b9b-be587d507740",userName:a.email,userSecret:a.uid})))},x=a(344),O=a(345),S=function(){return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card"},r.a.createElement("h2",{className:"logo"},"TEXTDEX"),r.a.createElement("div",{id:"hover",className:"login-button google loginbtnwidth",onClick:function(){return p.signInWithRedirect(new d.a.auth.GoogleAuthProvider)}},r.a.createElement(x.a,{class:"googleicon"})," Sign in with Google"),r.a.createElement("br",null),"  ",r.a.createElement("br",null),r.a.createElement("div",{className:"login-button twitter loginbtnwidth",onClick:function(){return p.signInWithRedirect(new d.a.auth.TwitterAuthProvider)}},r.a.createElement(O.a,{class:"twittericon"}),"  Sign in with Twitter")))};var y=function(){return r.a.createElement("div",{style:{fontFamily:"poppins"}},r.a.createElement(o.a,null,r.a.createElement(h,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/chats",component:j}),r.a.createElement(u.a,{path:"/",component:S})))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.6e171928.chunk.js.map