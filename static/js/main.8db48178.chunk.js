(this["webpackJsonpfind-coders"]=this["webpackJsonpfind-coders"]||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/spinner.672b62d9.gif"},41:function(e,t,a){e.exports=a(76)},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),c=a.n(s),i=(a(46),a(8)),l=a.n(i),o=a(20),u=a(11),m=a(12),d=a(16),h=a(13),p=a(17),b=a(21),f=a.n(b),g=a(22),v=function(e){var t=e.icon,a=e.title;return r.a.createElement(g.a,{bg:"primary",variant:"dark"},r.a.createElement("h1",null,r.a.createElement("i",{className:t}),r.a.createElement(g.a.Brand,{href:"#home"}," ",a)))};v.defaultProps={title:"Find Coders",icon:"fa fa-user-secret"};var E=v,y=a(9),x=a(38),C=function(e){var t=e.user,a=t.login,n=t.avatar_url,s=t.html_url;return r.a.createElement("div",{className:"cardContainer"},r.a.createElement(y.a,null,r.a.createElement(x.a,{className:"mx-auto",roundedCircle:!0,src:n,style:{width:"7rem",height:"7rem"}}),r.a.createElement(y.a.Body,{className:"text-center"},r.a.createElement(y.a.Title,null,a),r.a.createElement(y.a.Link,{href:s,className:"btn btn-primary btn-sm"},"More"))))},j=a(39),O=a.n(j),k=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:O.a,alt:"loading...",style:{width:"200px",margin:"auto",display:"block"}}))},w={display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px, 1fr)",gridGap:"1rem"},S=function(e){var t=e.users;return e.loading?r.a.createElement(k,null):r.a.createElement("div",{style:w},t.map((function(e){return r.a.createElement(C,{key:e.id,user:e})})))},N=a(40),U=a(23),_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a.onChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.searchUsers(a.state.text),a.setState({text:""})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U.a,{onSubmit:this.onSubmit},r.a.createElement(U.a.Control,{type:"text",name:"text",value:this.state.text,onChange:this.onChange,placeholder:"Search coders......."}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary"}),this.props.showClear&&r.a.createElement("input",{type:"button",className:"btn btn-light",value:"Clear",onClick:this.props.clearUsers})))}}]),t}(n.Component),B=(a(75),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],loading:!1},a.searchUsers=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a.setState({loading:!0}),e.next=4,f.a.get("https://api.github.com/search/users?q=".concat(t,"&\n      client_id=").concat("e1894770354443673bf8","\n      &client_secret=").concat("850bde2bb9c9b969b9e41669e1278d470e20ac2c"));case 4:n=e.sent,console.log(n.data.items),a.setState({users:n.data.items,loading:!1});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.clearUsers=function(){return a.setState({users:[],loading:!1})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,f.a.get("https://api.github.com/users?\n      client_id=".concat("e1894770354443673bf8","\n      &client_secret=").concat("850bde2bb9c9b969b9e41669e1278d470e20ac2c"));case 3:t=e.sent,this.setState({users:t.data,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement(_,{searchUsers:this.searchUsers,clearUsers:this.clearUsers,showClear:this.state.users.length>0}),r.a.createElement(S,{users:this.state.users,loading:this.state.loading})))}}]),t}(n.Component));c.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8db48178.chunk.js.map