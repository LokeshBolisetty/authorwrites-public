(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{25:function(e,t,a){e.exports=a(70)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/search image.3c9b5c3f.png"},35:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),s=(a(30),a(31),function(e){return o.a.createElement("header",null)}),c=(a(32),a(33),a(35),function(e){return o.a.createElement("div",{className:"logo"},o.a.createElement("p",null,"Author"),o.a.createElement("p",null,"Writes"))}),i=function(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},o.a.createElement("a",{className:"navbar-brand",href:"https://lokeshbolisetty.github.io",target:"_blank",rel:"noopener noreferrer"},"Lokesh Bolisetty"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link",href:"#1"},"Home ",o.a.createElement("span",{className:"sr-only"},"(current)"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"https://lokeshbolisetty.github.io",target:"_blank",rel:"noopener noreferrer"},"Author"))),o.a.createElement("form",{className:"form-inline my-2 my-lg-0"},o.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),o.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},m=a(2),u=a(3),d=a(5),p=a(4),g=a(6),h=a.n(g),b=(a(53),a(54),a(55),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={comment:[],isLoading:!1,error:null},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),h.a.get("https://authorwrites-blog-api.herokuapp.com/").then((function(t){var a=JSON.parse(JSON.stringify(t));console.log(a),console.log(a.data.notes[e.props.cardindex].Comments[e.props.index]),e.setState({comment:a.data.notes[e.props.cardindex].Comments[e.props.index],isLoading:!1}),console.log(a)})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{class:"lister my-1 d-flex"},this.state.comment))}}]),a}(n.Component)),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.count;t++)e.push(o.a.createElement(b,{index:t,key:t,cardindex:this.props.cardindex}));return o.a.createElement("div",null,e)}}]),a}(n.Component),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={CommentCounter:NaN},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),h.a.get("https://authorwrites-blog-api.herokuapp.com/").then((function(t){var a=JSON.parse(JSON.stringify(t));console.log(a.data.notes[e.props.cardindex].Comments.length),e.setState({CommentCounter:a.data.notes[e.props.cardindex].Comments.length,isLoading:!1}),console.log(a)})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{count:this.state.CommentCounter,cardindex:this.props.cardindex}))}}]),a}(n.Component),E=(a(19),a(56),a(24)),k=a(9),y=a.n(k);y.a.setAppElement("#root");var S=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),r=a[0],l=a[1];return o.a.createElement("div",{className:"Editor"},o.a.createElement("button",{type:"button",className:"btn btn-secondary my-2 mx-2",onClick:function(){return l(!0)}},"Comment"),o.a.createElement(y.a,{isOpen:r,onRequestClose:function(){return l(!1)}},o.a.createElement("form",null,o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"exampleInputEmail1"},"Comment"),o.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Add your comment here"}),o.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"Comments are anonymous but you are requested to keep up the community guidelines"))),o.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){h.a.put("https://authorwrites-blog-api.herokuapp.com/comments/"+e.data._id,{Comments:document.activeElement.parentElement.childNodes[0].childNodes[0].childNodes[1].value}).then((function(e){console.log(e),alert("Updated successfully. Refresh to see the changes.")})).catch((function(e){alert("Sorry! Was not able to edit"),console.log(e)})),l(!1)}},"Post")))},N="https://authorwrites-blog-api.herokuapp.com/",O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handlelike=function(){var e=n.state.blogs.Likes;"Like"===localStorage.getItem(n.state.blogs._id)||""===localStorage.getItem(n.state.blogs._id)?(h.a.patch(N+"likes/"+n.state.blogs._id,{Likes:e+1}),localStorage.setItem(n.state.blogs._id,"Liked"),n.setState({display:"Liked",liked:localStorage.getItem(n.state.blogs._id)})):(h.a.patch(N+"likes/"+n.state.blogs._id,{Likes:e-1}),localStorage.setItem(n.state.blogs._id,"Like"),n.setState({display:"Like",liked:localStorage.getItem(n.state.blogs._id)}))},n.state={blogs:[],isLoading:!1,error:null,liked:!1,display:"Like"},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),h.a.get(N).then((function(t){var a=JSON.parse(JSON.stringify(t));console.log(a),console.log(a.data.notes[e.props.index]),null==localStorage.getItem(a.data.notes[e.props.index]._id)&&localStorage.setItem(a.data.notes[e.props.index]._id,"Like"),e.setState({blogs:a.data.notes[e.props.index],isLoading:!1,liked:localStorage.getItem(a.data.notes[e.props.index]._id)}),console.log(a)})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card-img-top",src:this.state.blogs.Image,alt:"Blog pic",loading:"lazy"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h1",null,this.state.blogs.Title),o.a.createElement("p",null,"Created on ",this.state.blogs.Created),o.a.createElement("p",null,"Liked by ",this.state.blogs.Likes," members"),o.a.createElement("h5",null,this.state.blogs.Body),o.a.createElement("a",{id:"Likebutton",className:"btn btn-primary mx-4 my-0.5",onClick:this.handlelike},localStorage.getItem(this.state.blogs._id)),o.a.createElement(S,{data:this.state.blogs}),o.a.createElement("section",null,o.a.createElement("ul",{className:"list-group list-group-flush my-1 namingit"},o.a.createElement("span",{class:"badge badge-pill badge-danger"},"Comments"),o.a.createElement(v,{cardindex:this.props.index}))))))}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){for(var e=[],t=this.props.cards-1;t>=0;t--)e.push(o.a.createElement(O,{index:t,key:t}));return o.a.createElement("div",null,e)}}]),a}(n.Component),x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={cardCounter:NaN},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),h.a.get("https://authorwrites-blog-api.herokuapp.com/").then((function(t){var a=JSON.parse(JSON.stringify(t));console.log(a),console.log(a.data.count),e.setState({cardCounter:a.data.count,isLoading:!1}),console.log(a)})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{cards:this.state.cardCounter}))}}]),a}(n.Component);var L=function(){return o.a.createElement("div",null,o.a.createElement(i,null),o.a.createElement(c,null),o.a.createElement("div",{className:"App"},o.a.createElement(s,null),o.a.createElement(x,null)))};a(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.f1823283.chunk.js.map