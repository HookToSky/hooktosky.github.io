(this["webpackJsonpportfolio-webapp"]=this["webpackJsonpportfolio-webapp"]||[]).push([[0],{129:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(60),n=c.n(a),i=(c(68),c(6)),r=c(7),l=c(9),j=c(8),o=c(45),d=c(62),h=c.n(d),b=(c(71),c(63)),O=c(5),m=c.n(O),u=c(1),x=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(b.a,{type:"cobweb",bg:!0,color:"#ff0000"}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(m.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:e})}),Object(u.jsx)(m.a,{bottom:!0,duration:1200,children:Object(u.jsxs)("h3",{children:[t,"."]})}),Object(u.jsx)("hr",{})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),c}(s.Component),p=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(m.a,{bottom:!0,children:Object(u.jsx)("div",{className:"twelve columns",children:Object(u.jsx)("ul",{className:"social-links",children:e})})}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})})}}]),c}(s.Component),f=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;var e="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.social[0].url,s=this.props.data.email,a="cv/"+this.props.data.resumedownload;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(m.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:e,alt:"Hande Akin"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:t}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contact Details"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("span",{children:s}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:c}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"Or you can fill the form below..."})]})]}),Object(u.jsx)("div",{className:"columns download",children:Object(u.jsx)("p",{children:Object(u.jsxs)("a",{href:a,target:"_blank",rel:"noreferrer",className:"button",children:[Object(u.jsx)("i",{className:"fa fa-download"}),"Download CV"]})})})]})]})]})})})}}]),c}(s.Component),v=function(e){var t=e.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("h6",{children:e.title}),Object(u.jsx)("p",{children:e.description})]})}));return Object(u.jsx)("ul",{children:t})},N=function(e){var t=e.map((function(e){return Object(u.jsx)("li",{children:e})}));return Object(u.jsx)("ul",{children:t})},g=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]})]},e.company),Object(u.jsx)("div",{children:N(e.description)})]})})),t=this.props.data.education.map((function(e){return console.log(e),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]})]}),Object(u.jsx)("div",{children:v(e.projects)})]})}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Work"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:e})]})}),Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:t})})})]})})]})}}]),c}(s.Component),w=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.address.city,t=this.props.data.contactmessage;return Object(u.jsxs)("section",{id:"contact",children:[Object(u.jsx)(O.Fade,{bottom:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"row section-head",children:[Object(u.jsx)("div",{className:"two columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Get In Touch."})})}),Object(u.jsx)("div",{className:"ten columns",children:Object(u.jsx)("p",{className:"lead",children:t})})]})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(O.Slide,{left:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"eight columns",children:[Object(u.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"submit",children:"Submit"}),Object(u.jsx)("span",{id:"image-loader",children:Object(u.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(u.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(u.jsxs)("div",{id:"message-success",children:[Object(u.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(u.jsx)("br",{})]})]})}),Object(u.jsx)(O.Slide,{right:!0,duration:1e3,children:Object(u.jsx)("aside",{className:"four columns footer-widgets",children:Object(u.jsxs)("div",{className:"widget widget_contact",children:[Object(u.jsx)("h4",{children:"Location"}),Object(u.jsxs)("p",{className:"address",children:[e,Object(u.jsx)("br",{})]})]})})})]})]})}}]),c}(s.Component),y=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.data?Object(u.jsx)("section",{id:"portfolio",children:Object(u.jsx)(m.a,{left:!0,duration:1e3,distance:"40px",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"twelve columns collapsed",children:Object(u.jsx)("h1",{children:"Check Out Some of My Works."})})})})}):null}}]),c}(s.Component),k=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),s}return Object(r.a)(c,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,c){console.log(c),alert(c)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{data:this.state.resumeData.main}),Object(u.jsx)(f,{data:this.state.resumeData.main}),Object(u.jsx)(y,{data:this.state.resumeData.portfolio}),Object(u.jsx)(g,{data:this.state.resumeData.resume}),Object(u.jsx)(w,{data:this.state.resumeData.main}),Object(u.jsx)(p,{data:this.state.resumeData.main})]})}}]),c}(s.Component),C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,130)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};n.a.render(Object(u.jsx)(k,{}),document.getElementById("root")),C()},68:function(e,t,c){},71:function(e,t,c){}},[[129,1,2]]]);
//# sourceMappingURL=main.cc2bdeec.chunk.js.map