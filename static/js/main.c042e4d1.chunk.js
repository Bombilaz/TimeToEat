(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),a=c(5),i=c(2),r=(c(13),c(0)),j=function(){return Object(r.jsx)(r.Fragment,{})},l=c(3),b=(c(15),c(1)),o=Object(b.createContext)({timer:1800,setTimer:function(){},workTime:30,setWorkTime:function(){},breakTime:5,setBreakTime:function(){},pizzasCount:4,setPizzasCount:function(){}}),u=function(e){var t=e.children,c=Object(b.useState)(1800),n=Object(l.a)(c,2),s=n[0],a=n[1],i=Object(b.useState)(),j=Object(l.a)(i,2),u=j[0],m=j[1],O=Object(b.useState)(!0),x=Object(l.a)(O,2),d=x[0],p=x[1],h=Object(b.useState)(!1),T=Object(l.a)(h,2),f=T[0],g=T[1],v=Object(b.useState)(s),k=Object(l.a)(v,2),z=k[0],C=k[1],N=Object(b.useState)(4),y=Object(l.a)(N,2),S=y[0],B=y[1],P=Object(b.useState)(30),W=Object(l.a)(P,2),w=W[0],I=W[1],E=Object(b.useState)(5),D=Object(l.a)(E,2),M=D[0],A=D[1],F=Object(b.useState)(4),J=Object(l.a)(F,2),_=J[0],U=J[1],q=Object(b.useState)(1),G=Object(l.a)(q,2),H=G[0],K=G[1],L=Object(b.useState)(300),Q=Object(l.a)(L,2),R=Q[0],V=Q[1],X=Object(b.useState)(!0),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=Object(b.useState)("in Waiting"),te=Object(l.a)(ee,2),ce=te[0],ne=te[1];return Object(r.jsx)(o.Provider,{value:{timer:s,setTimer:a,typeButton:d,setTypeButton:p,timeInterval:u,setTimeInterval:m,showSettings:f,setShowSettings:g,totalTime:z,setTotalTime:C,maxPizza:S,setMaxPizza:B,workTime:w,setWorkTime:I,breakTime:M,setBreakTime:A,pizzasCount:_,setPizzasCount:U,currentPizza:H,setCurrentPizza:K,typeTimer:Z,setTypeTimer:$,currentBreakTime:R,setCurrentBreakTime:V,typeTheme:ce,setTypeTheme:ne},children:t})},m=function(){var e=Object(b.useContext)(o),t=e.timer,c=e.typeTheme;Object(b.useEffect)((function(){document.title="PizzaTimer ".concat(t/60<10?"0":"").concat(Math.floor(t/60),":").concat(t%60<10?"0":"").concat(t%60,"\n    ").concat(c)}),[t]);var n=Object(b.useState)(!1),s=Object(l.a)(n,2),i=s[0];s[1];return Object(r.jsxs)("nav",{className:function(){switch(c){case"WorkTime":return"headerWork";case"BreakTime":return"headerBreak";default:return"headerDefault"}}(),children:[i&&Object(r.jsx)("div",{className:"tutorialWrapper",children:Object(r.jsx)("div",{className:"tutorialBlock",children:Object(r.jsx)("h5",{className:"center",children:"Welcome"})})}),Object(r.jsx)("span",{className:"logo",children:Object(r.jsx)(a.b,{className:"links",to:"/TimeToEat/",children:"PizzaTimer"})}),Object(r.jsxs)("ul",{className:"menu",children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{className:"links",to:"/Skills",children:"Skills"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{className:"links",to:"/Achievements",children:"Achievements"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{className:"links",to:"/Chat",children:"Chat"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{className:"links",to:"/Donate",children:"Donate"})})]})]})},O=c.p+"static/media/8.af2a9c0a.png",x=c.p+"static/media/7.13acf0d9.png",d=c.p+"static/media/6.6e6228d6.png",p=c.p+"static/media/5.b1e568b0.png",h=c.p+"static/media/4.be5d0d5c.png",T=c.p+"static/media/3.0cc82694.png",f=c.p+"static/media/2.3a7758c2.png",g=c.p+"static/media/1.65919805.png",v=c.p+"static/media/0.0a27cba2.png",k=c.p+"static/media/play.da6c9efa.png",z=c.p+"static/media/pause.2cceedba.png",C=c.p+"static/media/inputtimer.0e136523.png",N=c.p+"static/media/finalsettings.1b21134b.png";var y=function(e){var t=e.toggle,c=Object(b.useContext)(o),n=c.workTime,s=c.setWorkTime,a=c.breakTime,i=c.setBreakTime,j=c.pizzasCount,l=c.setPizzasCount,u=c.setTimer,m=c.setTotalTime,O=c.setTypeButton,x=c.timeInterval,d=c.setMaxPizza,p=c.setCurrentBreakTime,h=c.setTypeTheme,T=function(e,t){e((function(){return t.target.value}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"popUp",children:Object(r.jsxs)("div",{className:"settings-content",children:[Object(r.jsx)("h1",{className:"headers",children:"Work Time"}),Object(r.jsxs)("span",{className:"label-input",children:[n," minutes"]}),Object(r.jsx)("input",{type:"range",min:1,max:90,value:n,onChange:function(e){return T(s,e)}}),Object(r.jsx)("h1",{className:"headers",children:"Break Time"}),Object(r.jsxs)("span",{className:"label-input",children:[a," minutes"]}),Object(r.jsx)("input",{type:"range",min:5,max:20,value:a,onChange:function(e){return T(i,e)}}),Object(r.jsx)("h1",{className:"headers",children:"Pizza's Count"}),Object(r.jsxs)("span",{className:"label-input",children:[j," pizza's"]}),Object(r.jsx)("input",{type:"range",min:1,max:10,value:j,onChange:function(e){return T(l,e)}}),Object(r.jsx)("button",{className:"saveSettingsButton",onClick:function(){t(),u(60*n),m(60*n),O(!0),clearInterval(x),d(+j),p(60*a),h("in Waiting")},children:Object(r.jsx)("span",{children:"Save"})})]})})})};var S=function(e){var t=e.seconds,c=Object(b.useContext)(o),n=c.showSettings,s=c.setShowSettings,a=c.maxPizza,i=c.currentPizza,j=(c.typeTimer,c.typeTheme),l=function(){s((function(e){return!e}))};return Object(r.jsxs)("div",{className:"timerTwo",children:[Object(r.jsx)("img",{className:"timeinput",src:C,alt:"input"}),Object(r.jsxs)("div",{className:"topBlock",children:[Object(r.jsxs)("span",{children:[i,"/",a]}),Object(r.jsx)("span",{children:j})]}),Object(r.jsx)("div",{className:"times",children:"".concat(t/60<10?"0":"").concat(Math.floor(t/60)," : \n           ").concat(t%60<10?"0":"").concat(t%60)}),Object(r.jsx)("div",{className:"settings",children:Object(r.jsx)("img",{className:"settings__img",src:N,onClick:l})}),n&&Object(r.jsx)(y,{toggle:l})]})},B=(c(16),function(){var e=Object(b.useContext)(o),t=e.timer,c=e.setTimer,n=Object(b.useContext)(o),s=n.timeInterval,a=n.setTimeInterval,i=Object(b.useContext)(o),j=i.typeButton,l=i.setTypeButton,u=Object(b.useContext)(o).totalTime,m=Object(b.useContext)(o).maxPizza,C=Object(b.useContext)(o),N=C.currentPizza,y=C.setCurrentPizza,B=Object(b.useContext)(o),P=B.typeTimer,W=B.setTypeTimer,w=Object(b.useContext)(o).currentBreakTime,I=Object(b.useContext)(o),E=I.typeTheme,D=I.setTypeTheme,M=null;Object(b.useEffect)((function(){P&&s&&!j&&D("WorkTime")}),[P,j]),Object(b.useEffect)((function(){t<=0&&P?(W((function(e){return!e})),c(w),D("BreakTime"),A()):t<=0&&!P&&(D("in Waiting"),clearInterval(s),W((function(e){return!e})),l((function(e){return!e})),c(u),N!=m?y((function(e){return e+1})):N===m&&y(1))}),[t]);var A=function(){t<=0||(l(!j),j?(M=setInterval((function(){return c((function(e){return e-1}))}),1e3),a(M)):clearInterval(s))};return Object(r.jsxs)("div",{className:function(){switch(E){case"WorkTime":return"mainWork";case"BreakTime":return"mainBreak";default:return"mainDefault"}}(),children:[Object(r.jsx)(S,{seconds:t}),Object(r.jsx)("img",{className:"pizza",src:P?t===u?O:t<u&&t>u/7*6?x:t<=u/7*6&&t>u/7*5?d:t<=u/7*5&&t>u/7*4?p:t<=u/7*4&&t>u/7*3?h:t<=u/7*3&&t>u/7*2?T:t<=u/7*2&&t>u/7*1?f:t<=u/7*1&&t>u/7*0?g:void 0:t===w?v:t<w&&t>w/7*6?g:t<=w/7*6&&t>w/7*5?f:t<=w/7*5&&t>w/7*4?T:t<=w/7*4&&t>w/7*3?h:t<=w/7*3&&t>w/7*2?p:t<=w/7*2&&t>w/7*1?d:t<=w/7*1&&t>w/7*0?x:0===t?O:void 0,alt:"\u043a\u0430\u043a\u0430\u044f-\u0442\u043e"}),Object(r.jsx)("div",{className:"playblock",children:Object(r.jsx)("img",{className:"play",src:j?k:z,alt:"\u043a\u0430\u043a\u0430\u044f-\u0442\u043e",onClick:A})})]})}),P=c.p+"static/media/cat.d075afb5.png";var W=function(){return Object(r.jsxs)("div",{className:"blankPage",children:[Object(r.jsxs)("p",{children:["This webpage is not",Object(r.jsx)("br",{})," available.",Object(r.jsx)("br",{}),"We are sorry for this",Object(r.jsx)("br",{})," inconvenience"]}),Object(r.jsx)("img",{src:P})]})};var w=function(){return Object(r.jsxs)("div",{className:"blankPage",children:[Object(r.jsxs)("p",{children:["This webpage is not",Object(r.jsx)("br",{})," available.",Object(r.jsx)("br",{}),"We are sorry for this",Object(r.jsx)("br",{})," inconvenience"]}),Object(r.jsx)("img",{src:P})]})};var I=function(){return Object(r.jsxs)("div",{className:"blankPage",children:[Object(r.jsxs)("p",{children:["This webpage is not",Object(r.jsx)("br",{})," available.",Object(r.jsx)("br",{}),"We are sorry for this",Object(r.jsx)("br",{})," inconvenience"]}),Object(r.jsx)("img",{src:P})]})},E=function(){return Object(r.jsxs)(a.a,{children:[Object(r.jsx)(m,{}),Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/TimeToEat/",element:Object(r.jsx)(B,{})}),Object(r.jsx)(i.a,{path:"/Skills",element:Object(r.jsx)(j,{})}),Object(r.jsx)(i.a,{path:"/Achievements",element:Object(r.jsx)(W,{})}),Object(r.jsx)(i.a,{path:"/Chat",element:Object(r.jsx)(I,{})}),Object(r.jsx)(i.a,{path:"/Donate",element:Object(r.jsx)(w,{})})]})]})};c(17),c(18);s.a.render(Object(r.jsx)(u,{children:Object(r.jsx)(E,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.c042e4d1.chunk.js.map