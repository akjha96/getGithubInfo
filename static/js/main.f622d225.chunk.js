(this.webpackJsonpgetgithub=this.webpackJsonpgetgithub||[]).push([[0],{10:function(e,n,t){e.exports=t.p+"static/media/octocat.d617763f.svg"},16:function(e,n,t){e.exports=t(25)},21:function(e,n,t){},22:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(7),o=t.n(c),i=(t(21),t(8)),l=t(9),u=t(15),s=t(14),m=(t(22),t(10)),f=t.n(m),p=t(1),d=t(2);function h(){var e=Object(p.a)(["\n  width: 5rem;\n"]);return h=function(){return e},e}function g(){var e=Object(p.a)(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  text-transform: uppercase;\n  font-size: 4rem;\n"]);return g=function(){return e},e}var v=d.a.h1(g()),b=d.a.img(h()),E=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("header",null,r.a.createElement(v,null,"Get GitHub Info",r.a.createElement(b,{src:f.a,alt:"GitHub Logo"}))))};function x(){var e=Object(p.a)(["\n  border-radius: 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);\n  height: 40px;\n  width: 200px;\n  text-align: center;\n  &:focus {\n    outline: none;\n  }\n"]);return x=function(){return e},e}function j(){var e=Object(p.a)(["\n  padding-bottom: 0.3em;\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n"]);return O=function(){return e},e}var w=d.a.div(O()),y=d.a.label(j()),k=d.a.input(x()),C=function(e){var n=e.onInputChange;return r.a.createElement(a.Fragment,null,r.a.createElement("form",{autocomplete:"off",onSubmit:function(e){e.preventDefault()}},r.a.createElement(w,null,r.a.createElement(y,{htmlFor:"user"},"Search User"),r.a.createElement(k,{id:"user",type:"search",placeholder:"Enter username",name:"user",onChange:n}))))};function D(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 1em;\n"]);return D=function(){return e},e}function N(){var e=Object(p.a)(["\n  width: 10em;\n  padding-right: 1em;\n"]);return N=function(){return e},e}function I(){var e=Object(p.a)(["\n  padding-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"]);return I=function(){return e},e}var F=d.a.div(I()),G=d.a.img(N()),S=d.a.div(D()),_=function(e){var n=e.profile;return r.a.createElement(F,null,r.a.createElement("div",null,r.a.createElement(G,{src:n.avatar_url,alt:n.name})),r.a.createElement(S,null,r.a.createElement("div",null,"Name: ",n.name),r.a.createElement("div",null,"GitHub Link:"," ",r.a.createElement("a",{href:n.html_url,target:"_blank",rel:"noopener noreferrer"},n.html_url)),r.a.createElement("div",null,"Email: ",n.Email),r.a.createElement("div",null,"Location:",n.location),r.a.createElement("div",null,"Public repos: ",n.public_repos),r.a.createElement("div",null,"Bio: ",n.bio)))},H=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).onInputChange=function(e){a.setState({searchName:e.target.value},(function(){a.getData(a.state.searchName)}))},a.getData=function(e){fetch("https://api.github.com/users/".concat(e)).then((function(e){return e.json()})).then((function(e){return a.setState({userData:e})})).catch((function(e){alert("Oops! Could not reach GitHub"),console.log("Oops! We have an error",e)}))},a.state={searchName:"",userData:""},a}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(E,null),r.a.createElement(C,{onInputChange:this.onInputChange}),this.state.userData.id&&""!==this.state.searchName?r.a.createElement(_,{profile:this.state.userData}):r.a.createElement("div",{className:"no-data"},"No user Found! ",r.a.createElement("br",null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f622d225.chunk.js.map