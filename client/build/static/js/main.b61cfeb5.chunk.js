(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,n){e.exports=n(26)},20:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),l=n.n(c),r=(n(20),n(8)),i=n.n(r),s=(n(21),n(9)),p=n(5),d=n(10),u=n(11),h=n(1),f=n(13),m=n(39),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={displayRes:"RandDOO"},n.happy2=n.happy2.bind(Object(h.a)(n)),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"happy2",value:function(e){var t=this;console.log("in happy 2"),fetch("/api/feeder/").then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({displayRes:e.data}),console.log(e)})).catch((function(e){console.log(e)}))}},{key:"feedPet",value:function(){var e=this;console.log("feeding pet"),fetch("/api/feedpet").then((function(e){return e.json()})).then((function(t){e.setState({displayRes:t.data.payload.data}),console.log(t)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,{variant:"contained",color:"secondary",className:"App-link",onClick:this.happy2},"click ME2!"),o.a.createElement("p",null,this.state.displayRes),o.a.createElement(m.a,{variant:"contained",color:"secondary",className:"App-link",onClick:this.feedPet},"Feed Pet"))}}]),t}(o.a.Component);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),o.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[15,1,2]]]);
//# sourceMappingURL=main.b61cfeb5.chunk.js.map