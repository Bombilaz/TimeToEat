(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],[,,,,,function(e,t,c){e.exports={header:"Header_header__2um3k",logo:"Header_logo__1UcUH",menu:"Header_menu__3CvP0",links:"Header_links__2kvPi",tutorialWrapper:"Header_tutorialWrapper__1MgXR",tutorialBlock:"Header_tutorialBlock__gmu7Z",active:"Header_active__1fx7A",center:"Header_center__2eogl"}},,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(9),n=c.n(i),a=c(6),s=c(2),j=c.p+"static/media/cat.d075afb5.png",l=(c(14),c(0)),r=function(){return Object(l.jsxs)("div",{className:"blankPage",children:[Object(l.jsxs)("p",{children:["This webpage is not",Object(l.jsx)("br",{})," available.",Object(l.jsx)("br",{}),"We are sorry for this",Object(l.jsx)("br",{})," inconvenience"]}),Object(l.jsx)("img",{src:j})]})},b=c(3),m=c(5),u=c.n(m),d=c(1),o=Object(d.createContext)({timer:1800,setTimer:function(){},workTime:30,setWorkTime:function(){},breakTime:5,setBreakTime:function(){},pizzasCount:4,setPizzasCount:function(){}}),O=function(e){var t=e.children,c=Object(d.useState)(1800),i=Object(b.a)(c,2),n=i[0],a=i[1],s=Object(d.useState)(),j=Object(b.a)(s,2),r=j[0],m=j[1],u=Object(d.useState)(!0),O=Object(b.a)(u,2),h=O[0],p=O[1],I=Object(d.useState)(!1),x=Object(b.a)(I,2),Z=x[0],z=x[1],G=Object(d.useState)(n),v=Object(b.a)(G,2),g=v[0],M=v[1],N=Object(d.useState)(4),T=Object(b.a)(N,2),R=T[0],W=T[1],y=Object(d.useState)(30),A=Object(b.a)(y,2),k=A[0],w=A[1],S=Object(d.useState)(5),D=Object(b.a)(S,2),Y=D[0],B=D[1],C=Object(d.useState)(4),E=Object(b.a)(C,2),P=E[0],H=E[1],f=Object(d.useState)(1),U=Object(b.a)(f,2),J=U[0],V=U[1],Q=Object(d.useState)(300),X=Object(b.a)(Q,2),L=X[0],F=X[1],K=Object(d.useState)(!0),q=Object(b.a)(K,2),_=q[0],$=q[1],ee=Object(d.useState)("default"),te=Object(b.a)(ee,2),ce=te[0],ie=te[1];return Object(l.jsx)(o.Provider,{value:{timer:n,setTimer:a,typeButton:h,setTypeButton:p,timeInterval:r,setTimeInterval:m,showSettings:Z,setShowSettings:z,totalTime:g,setTotalTime:M,maxPizza:R,setMaxPizza:W,workTime:k,setWorkTime:w,breakTime:Y,setBreakTime:B,pizzasCount:P,setPizzasCount:H,currentPizza:J,setCurrentPizza:V,typeTimer:_,setTypeTimer:$,currentBreakTime:L,setCurrentBreakTime:F,typeTheme:ce,setTypeTheme:ie},children:t})},h=function(){var e=Object(d.useContext)(o).timer;Object(d.useEffect)((function(){document.title="PizzaTimer ".concat(e/60<10?"0":"").concat(Math.floor(e/60),":").concat(e%60<10?"0":"").concat(e%60)}),[e]);var t=Object(d.useState)(!1),c=Object(b.a)(t,2),i=c[0];c[1];return Object(l.jsxs)("nav",{className:u.a.header,children:[i&&Object(l.jsx)("div",{className:u.a.tutorialWrapper,children:Object(l.jsx)("div",{className:u.a.tutorialBlock,children:Object(l.jsx)("h5",{className:u.a.center,children:"Welcome"})})}),Object(l.jsx)("span",{className:u.a.logo,children:Object(l.jsx)(a.b,{className:u.a.links,to:"/",children:"PizzaTimer"})}),Object(l.jsxs)("ul",{className:u.a.menu,children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{className:u.a.links,to:"/Skills",children:"Skills"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{className:u.a.links,to:"/Achievements",children:"Achievements"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{className:u.a.links,to:"/Chat",children:"Chat"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{className:u.a.links,to:"/Donate",children:"Donate"})})]})]})},p=c.p+"static/media/8.0a5598d8.png",I=c.p+"static/media/7.b8d8bfbb.png",x=c.p+"static/media/6.72e5a95f.png",Z=c.p+"static/media/5.0419547f.png",z=c.p+"static/media/4.dfe855f6.png",G=c.p+"static/media/3.aa2cd87e.png",v=c.p+"static/media/2.16531bdc.png",g=c.p+"static/media/1.f846605b.png",M=c.p+"static/media/0.0a27cba2.png",N=c.p+"static/media/play.0f41782a.png",T=c.p+"static/media/pause.93441a64.png",R=c.p+"static/media/input22.8a7ca0f7.png";var W=function(e){var t=e.toggle,c=Object(d.useContext)(o),i=c.workTime,n=c.setWorkTime,a=c.breakTime,s=c.setBreakTime,j=c.pizzasCount,r=c.setPizzasCount,b=c.setTimer,m=c.setTotalTime,u=c.setTypeButton,O=c.timeInterval,h=c.setMaxPizza,p=c.setCurrentBreakTime,I=function(e,t){e((function(){return t.target.value}))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"popUp",children:Object(l.jsxs)("div",{className:"settings-content",children:[Object(l.jsx)("h1",{className:"headers",children:"Work Time"}),Object(l.jsxs)("span",{className:"label-input",children:[i," minutes"]}),Object(l.jsx)("input",{type:"range",min:1,max:90,value:i,onChange:function(e){return I(n,e)}}),Object(l.jsx)("h1",{className:"headers",children:"Break Time"}),Object(l.jsxs)("span",{className:"label-input",children:[a," minutes"]}),Object(l.jsx)("input",{type:"range",min:5,max:20,value:a,onChange:function(e){return I(s,e)}}),Object(l.jsx)("h1",{className:"headers",children:"Pizza's Count"}),Object(l.jsxs)("span",{className:"label-input",children:[j," pizza's"]}),Object(l.jsx)("input",{type:"range",min:1,max:10,value:j,onChange:function(e){return I(r,e)}}),Object(l.jsx)("button",{className:"saveSettingsButton",onClick:function(){t(),b(60*i),m(60*i),u(!0),clearInterval(O),h(+j),p(60*a)},children:Object(l.jsx)("span",{children:"Save"})})]})})})};var y=function(e){var t=e.seconds,c=Object(d.useContext)(o),i=c.showSettings,n=c.setShowSettings,a=c.maxPizza,s=c.currentPizza,j=c.typeTimer,r=function(){n((function(e){return!e}))};return Object(l.jsxs)("div",{className:"timerTwo",children:[Object(l.jsx)("img",{className:"timeinput",src:R,width:290,alt:"input"}),Object(l.jsxs)("div",{className:"topBlock",children:[Object(l.jsxs)("span",{children:[s,"/",a]}),Object(l.jsx)("span",{children:j?"WorkTime":"BreakTime"})]}),Object(l.jsx)("div",{className:"times",children:"".concat(t/60<10?"0":"").concat(Math.floor(t/60)," : \n           ").concat(t%60<10?"0":"").concat(t%60)}),Object(l.jsx)("div",{className:"settings",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAYAAACqNJiGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKR2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQxMDhiMWNhLTQwZTgtMWQ0MC04NTM0LWYyZWI3MGNkMzE0ZiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5YzFhNWQ5OS1lZDMwLWY5NGItYjVjYS1iZjA2MTM3ZmUyODciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNzQzQjRCQTRCMjg4RjJDRkVERUUzRkQyREZCQ0NCMDMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA4LTIyVDIwOjI1OjQ0KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0xNVQyMDoyMjowNiswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMi0xNVQyMDoyMjowNiswMzowMCIgdGlmZjpJbWFnZVdpZHRoPSIxMjgwIiB0aWZmOkltYWdlTGVuZ3RoPSI2ODUiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6WFJlc29sdXRpb249Ijk2LzEiIHRpZmY6WVJlc29sdXRpb249Ijk2LzEiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6RXhpZlZlcnNpb249IjAyMzEiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxMjgwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjg1Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjBkYzkzMTQtMjQ4ZC1lNjQyLThhNWItZDFhYWEwMGUwNzY1IiBzdEV2dDp3aGVuPSIyMDIxLTA4LTIzVDIwOjU3OjAyKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjExMWY0YTg3LTFlOGItNzc0Ny05ZDIwLTUxOGZmZTkxZmRkMiIgc3RFdnQ6d2hlbj0iMjAyMS0wOC0yM1QyMDo1NzowMiswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YzFhNWQ5OS1lZDMwLWY5NGItYjVjYS1iZjA2MTM3ZmUyODciIHN0RXZ0OndoZW49IjIwMjEtMTItMTVUMjA6MjI6MDYrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZjBkYzkzMTQtMjQ4ZC1lNjQyLThhNWItZDFhYWEwMGUwNzY1IiBzdFJlZjpkb2N1bWVudElEPSI3NDNCNEJBNEIyODhGMkNGRURFRTNGRDJERkJDQ0IwMyIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSI3NDNCNEJBNEIyODhGMkNGRURFRTNGRDJERkJDQ0IwMyIvPiA8dGlmZjpCaXRzUGVyU2FtcGxlPiA8cmRmOlNlcT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPC9yZGY6U2VxPiA8L3RpZmY6Qml0c1BlclNhbXBsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4wuEEsAAAK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",onClick:r,height:42})}),i&&Object(l.jsx)(W,{toggle:r})]})},A=(c(16),function(){var e=Object(d.useContext)(o),t=e.timer,c=e.setTimer,i=Object(d.useContext)(o),n=i.timeInterval,a=i.setTimeInterval,s=Object(d.useContext)(o),j=s.typeButton,r=s.setTypeButton,b=Object(d.useContext)(o).totalTime,m=Object(d.useContext)(o).maxPizza,u=Object(d.useContext)(o),O=u.currentPizza,h=u.setCurrentPizza,R=Object(d.useContext)(o),W=R.typeTimer,A=R.setTypeTimer,k=Object(d.useContext)(o).currentBreakTime,w=Object(d.useContext)(o),S=w.typeTheme,D=w.setTypeTheme,Y=null;Object(d.useEffect)((function(){W&&n&&!j&&D("workTime")}),[W,j]),Object(d.useEffect)((function(){t<=0&&W?(A((function(e){return!e})),c(k),D("breakTime"),B()):t<=0&&!W&&(D("default"),clearInterval(n),A((function(e){return!e})),r((function(e){return!e})),c(b),O!=m?h((function(e){return e+1})):O===m?h(1):console.log("hui"))}),[t]);var B=function(){t<=0||(r(!j),j?(Y=setInterval((function(){return c((function(e){return e-1}))}),1e3),a(Y)):clearInterval(n))};return Object(l.jsxs)("div",{className:function(){switch(S){case"workTime":return"mainWork";case"breakTime":return"mainBreak";default:return"mainDefault"}}(),children:[Object(l.jsx)(y,{seconds:t}),Object(l.jsx)("img",{className:function(){switch(S){case"workTime":return"pizzaWork";case"breakTime":return"pizzaBreak";default:return"pizzaDefault"}}(),src:W?t===b?p:t<b&&t>b/7*6?I:t<=b/7*6&&t>b/7*5?x:t<=b/7*5&&t>b/7*4?Z:t<=b/7*4&&t>b/7*3?z:t<=b/7*3&&t>b/7*2?G:t<=b/7*2&&t>b/7*1?v:t<=b/7*1&&t>b/7*0?g:void 0:t===k?M:t<k&&t>k/7*6?g:t<=k/7*6&&t>k/7*5?v:t<=k/7*5&&t>k/7*4?G:t<=k/7*4&&t>k/7*3?z:t<=k/7*3&&t>k/7*2?Z:t<=k/7*2&&t>k/7*1?x:t<=k/7*1&&t>k/7*0?I:0===t?p:void 0,alt:"\u043a\u0430\u043a\u0430\u044f-\u0442\u043e"}),Object(l.jsx)("div",{className:"playblock",children:Object(l.jsx)("img",{className:"play",src:j?N:T,alt:"\u043a\u0430\u043a\u0430\u044f-\u0442\u043e",onClick:B})})]})});var k=function(){return Object(l.jsxs)("div",{className:"blankPage",children:[Object(l.jsxs)("p",{children:["This webpage is not",Object(l.jsx)("br",{})," available.",Object(l.jsx)("br",{}),"We are sorry for this",Object(l.jsx)("br",{})," inconvenience"]}),Object(l.jsx)("img",{src:j})]})};var w=function(){return Object(l.jsxs)("div",{className:"blankPage",children:[Object(l.jsxs)("p",{children:["This webpage is not",Object(l.jsx)("br",{})," available.",Object(l.jsx)("br",{}),"We are sorry for this",Object(l.jsx)("br",{})," inconvenience"]}),Object(l.jsx)("img",{src:j})]})};var S=function(){return Object(l.jsxs)("div",{className:"blankPage",children:[Object(l.jsxs)("p",{children:["This webpage is not",Object(l.jsx)("br",{})," available.",Object(l.jsx)("br",{}),"We are sorry for this",Object(l.jsx)("br",{})," inconvenience"]}),Object(l.jsx)("img",{src:j})]})},D=function(){return Object(l.jsxs)(a.a,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/",element:Object(l.jsx)(A,{})}),Object(l.jsx)(s.a,{path:"/Skills",element:Object(l.jsx)(r,{})}),Object(l.jsx)(s.a,{path:"/Achievements",element:Object(l.jsx)(k,{})}),Object(l.jsx)(s.a,{path:"/Chat",element:Object(l.jsx)(S,{})}),Object(l.jsx)(s.a,{path:"/Donate",element:Object(l.jsx)(w,{})})]})]})};c(17),c(18);n.a.render(Object(l.jsx)(O,{children:Object(l.jsx)(D,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.27f0ee51.chunk.js.map