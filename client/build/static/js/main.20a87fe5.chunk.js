(this["webpackJsonpface-detection"]=this["webpackJsonpface-detection"]||[]).push([[0],{265:function(e,a,t){},267:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(58),r=t.n(c),i=(t(65),t(27)),s=t(3),o=t(59),m=t.n(o),d=function(e){var a=e.handleRoute,t=e.isSignedIn;return l.a.createElement("div",{className:"z"},t?l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 link dim white underline pa3 pointer ma3"},"Sign Out")):l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 link dim white underline pa3 pointer ma3"},"Sign In"),l.a.createElement("p",{onClick:function(){return a("register")},className:"f3 link dim white underline pa3 pointer ma3"},"Register")))},p=function(e){var a=e.handleChange,t=e.input,c=e.handleClick,r=Object(n.useState)("hello"),i=Object(s.a)(r,2),o=i[0],m=i[1];return l.a.createElement("div",{className:"z"},l.a.createElement("p",{className:"f3 center measure-wide"},"hello"===o?"Please select your choice bellow":"face"===o?"This Magic will detect the presence and location of human faces in your pictures":"demo"===o?"This Magic will predict the age, gender, and culture appearance of detected faces in your pictures":"cele"===o&&"This Magic will identify celebrities that closely resemble detected faces in your pictures"),l.a.createElement("div",{className:"center"},l.a.createElement("article",{className:"br3 ba b--white-10 mv4 w-100 w-50-m w-85-l mw6 shadow-5 "},l.a.createElement("nav",{className:"pa1 pa3-ns pb0-ns mb0"},l.a.createElement("a",{className:"pointer hover link dim white f4 f5-ns dib mr4",title:"",onClick:function(){return m("face")}},"Face Detection"),l.a.createElement("a",{className:"pointer hover link dim white f4 f5-ns dib mr4",title:"",onClick:function(){return m("demo")}},"Demographics"),l.a.createElement("a",{className:"pointer hover link dim white f4 f5-ns dib mr4",title:"",onClick:function(){return m("cele")}},"Celebrity")),l.a.createElement("div",{className:"  b--white pa4 br12 shadow-5 "},l.a.createElement("input",{onChange:a,value:t,className:"f4 pa2 w-70 b--white ",placeholder:"Enter your URL here",type:"text"}),l.a.createElement("button",{onClick:function(){return c(o)},className:"w-30 grow f4 link ph3 pv2 dib b--white white bg-light-blue pointer"},"Detect")))))},u=function(e){var a=e.name,t=e.entries;return l.a.createElement("div",null,l.a.createElement("div",{className:"tc white f3"},"Hi ".concat(a,"! Your current entry count is...")),l.a.createElement("div",{className:"tc white f1"},t))},b=function(e){var a=e.item,t=e.id;return l.a.createElement("div",{className:"bounding-box pointer",style:{top:"".concat(100*a.region_info.bounding_box.top_row,"% "),right:"".concat(100*(1-a.region_info.bounding_box.right_col),"% "),bottom:" ".concat(100*(1-a.region_info.bounding_box.bottom_row),"%"),left:"".concat(100*a.region_info.bounding_box.left_col,"% ")}},l.a.createElement("div",{className:"bounding-box-concepts"},l.a.createElement("div",{className:"concept bounding-box__concept",title:"face (ai_8jtPl3Xj) : 0"},l.a.createElement("span",{className:"concept__name"},a.data.concepts[0].name),l.a.createElement("span",{className:"concept__prediction-val"},"face"===a.data.concepts[0].name?t+1:(100*a.data.concepts[0].value).toFixed(2)+"%"))))},h=function(e){var a=e.info,t=e.type;return"demo"===t?a.map((function(e,a){return l.a.createElement("article",{className:"pa3 pa1-ns static"},l.a.createElement("h1",{className:"f4 bold mw6 center tc"},"Face ",a+1),l.a.createElement("ul",{className:"list pl0 ml0 center mw6 ba b--light-silver br2 tl db db-ns db-m db-l"},l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver db"},l.a.createElement("nav",{className:"b blue"},"Gender Appearance:")," ",e.data.concepts[20].name,l.a.createElement("nav",{className:"fr"},(100*e.data.concepts[20].value).toFixed(2),"%")),l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver db"},l.a.createElement("nav",{className:"b blue"},"Age Appearance:")," ",e.data.concepts[0].name,l.a.createElement("nav",{className:"fr"},(100*e.data.concepts[0].value).toFixed(2),"%")),l.a.createElement("li",{className:"ph3 pv3 bb b b--light-silver db"},l.a.createElement("nav",{className:"b blue"},"Multicultural Appearance:"),l.a.createElement("li",{className:"ph3 pv3  b--light-silver db"},e.data.concepts[22].name,l.a.createElement("nav",{className:"fr"},(100*e.data.concepts[22].value).toFixed(2),"%")),l.a.createElement("li",{className:"ph3 pv3  b--light-silver db"},e.data.concepts[23].name,l.a.createElement("nav",{className:"fr"},(100*e.data.concepts[23].value).toFixed(2),"%")),l.a.createElement("li",{className:"ph3 pv3  b--light-silver db"},e.data.concepts[24].name,l.a.createElement("nav",{className:"fr"},(100*e.data.concepts[24].value).toFixed(2),"%")),l.a.createElement("li",{className:"ph3 pv3  b--light-silver db"},e.data.concepts[25].name,l.a.createElement("nav",{className:"fr"},(100*e.data.concepts[25].value).toFixed(2),"%")),l.a.createElement("li",{className:"ph3 pv3  b--light-silver db"},e.data.concepts[26].name,l.a.createElement("nav",{className:"fr"},(100*e.data.concepts[26].value).toFixed(2),"%")),l.a.createElement("li",{className:"ph3 pv3  b--light-silver db"},e.data.concepts[27].name,l.a.createElement("nav",{className:"fr"},(100*e.data.concepts[27].value).toFixed(2),"%")),l.a.createElement("li",{className:"ph3 pv3  b--light-silver db"},e.data.concepts[28].name,l.a.createElement("nav",{className:"fr"},(100*e.data.concepts[28].value).toFixed(2),"%")))))})):"cele"===t?l.a.createElement("article",{className:"pa3 pa5-ns"},l.a.createElement("h1",{className:"f4 bold mw6 center tc"},"Celebrity"),l.a.createElement("ul",{className:"list pl0 ml0 center mw6 ba b--light-silver br2 tl db  db-ns db-m db-l"},a.map((function(e){return l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver db"},l.a.createElement("nav",{className:"b blue dib"},e.data.concepts[0].name," "),l.a.createElement("nav",{className:"fr"},(100*e.data.concepts[0].value).toFixed(2),"%"))})))):l.a.createElement("h1",null)},v=function(e){var a=e.imageURL,t=e.info,n=Object(s.a)(t,2),c=n[0],r=n[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"z center ma"},l.a.createElement("div",{className:"relative mt2"},l.a.createElement("img",{src:a,alt:"",width:"500px",height:"auto"}),c&&c.length>0&&c.map((function(e,a){return l.a.createElement(b,{item:e,id:a})})))),c&&c.length>0&&l.a.createElement(h,{info:c,type:r}))},f=function(e){var a=e.handleRoute,t=e.loadUser,c=Object(n.useState)(""),r=Object(s.a)(c,2),i=r[0],o=r[1],m=Object(n.useState)(""),d=Object(s.a)(m,2),p=d[0],u=d[1],b=function(e){"Enter"===e.key&&h()},h=function(){fetch("http://localhost:7000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:p})}).then((function(e){return e.json()})).then((function(e){e.email===i&&(t(e),a("home"))}))};return l.a.createElement("div",null,l.a.createElement("div",{id:"demotext"},l.a.createElement("h1",{className:"MsoNormal",style:{textAlign:"center"}},l.a.createElement("span",{style:{fontFamily:'"Verdana",sans-serif',color:"#f4b183"}},"Hello there! ok")),l.a.createElement("h2",{className:"MsoNormal measure-wide center",style:{textAlign:"center"}},l.a.createElement("span",{style:{fontFamily:'"Verdana",sans-serif',color:"#bdd7ee"}},"Explore our image recognition models including Face Detection, Celebrity Detection, Age Detection and more!"))),l.a.createElement("article",{className:"z white br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 white"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset  b--white ba bg-transparent hover-bg-white hover-black w-100",type:"email",name:"email-address",id:"email-address",required:!0,value:i,onChange:function(e){var a=e.target.value;o(a)},onKeyPress:b})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba b--white bg-transparent hover-bg-white hover-black w-100",type:"password",name:"password",id:"password",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",required:!0,value:p,onChange:function(e){var a=e.target.value;u(a)},onKeyPress:b}))),l.a.createElement("div",{className:""},l.a.createElement("input",{onClick:h,className:"b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("p",{onClick:function(){return a("register")},className:"f6 link dim white db pointer"},"Register"))))))},E=function(e){var a=e.handleRoute,t=e.loadUser,c=Object(n.useState)(""),r=Object(s.a)(c,2),i=r[0],o=r[1],m=Object(n.useState)(""),d=Object(s.a)(m,2),p=d[0],u=d[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),v=h[0],f=h[1],E=Object(n.useState)(""),g=Object(s.a)(E,2),N=g[0],w=g[1],y=function(e){"Enter"===e.key&&j()},j=function(){fetch("http://localhost:7000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(i," ").concat(p),email:v,password:N})}).then((function(e){return e.json()})).then((function(e){e.name==="".concat(i," ").concat(p)&&e.email===v&&(t(e),a("home"))}))};return l.a.createElement("article",{className:"z br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 white-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"fname"},"First Name"),l.a.createElement("input",{className:"pa2 input-reset b--white ba bg-transparent hover-bg-white hover-black w-100",type:"text",name:"fname",id:"fname",required:!0,value:i,onChange:function(e){var a=e.target.value;o(a)},onKeyPress:y})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"lname"},"Last Name"),l.a.createElement("input",{className:"pa2 input-reset b--white ba bg-transparent hover-bg-white hover-black w-100",type:"text",name:"lname",id:"lname",required:!0,value:p,onChange:function(e){var a=e.target.value;u(a)},onKeyPress:y})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset b--white ba bg-transparent hover-bg-white hover-black w-100",type:"email",name:"email-address",id:"email-address",required:!0,value:v,onChange:function(e){var a=e.target.value;f(a)},onKeyPress:y})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset b--white ba bg-transparent hover-bg-white hover-black w-100",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",type:"password",name:"password",id:"password",required:!0,value:N,onChange:function(e){var a=e.target.value;w(a)},onKeyPress:y}))),l.a.createElement("div",{className:""},l.a.createElement("input",{onClick:j,className:"b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))};t(265);var g=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),b=o[0],h=o[1],g=Object(n.useState)([]),N=Object(s.a)(g,2),w=N[0],y=N[1],j=Object(n.useState)("signin"),O=Object(s.a)(j,2),k=O[0],C=O[1],x=Object(n.useState)(!1),_=Object(s.a)(x,2),S=_[0],F=_[1],A=Object(n.useState)({id:"",name:"",email:"",entries:0,joined:""}),P=Object(s.a)(A,2),R=P[0],T=P[1],M=function(e){C(e),"signin"!==e&&"register"!==e||(F(!1),c(""),h(""),y([]),T({id:"",name:"",email:"",entries:0,joined:""})),"home"===e&&F(!0)},z=function(e){T(e)};return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,{className:"particles",params:{particles:{number:{value:100,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.01},move:{direction:"right",speed:.07},size:{value:2},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}}),l.a.createElement(d,{handleRoute:M,isSignedIn:S}),"signin"===k?l.a.createElement(f,{handleRoute:M,loadUser:z}):"register"===k?l.a.createElement(E,{handleRoute:M,loadUser:z}):l.a.createElement("div",null,l.a.createElement(u,{entries:R.entries,name:R.name}),l.a.createElement(p,{handleChange:function(e){var a=e.target.value;c(a)},input:t,handleClick:function(e){t.length>0&&(h(t),fetch("http://localhost:7000",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",_method:"POST",Authorization:""},body:JSON.stringify({input:t,type:e})}).then((function(e){return e.json()})).then((function(a){a.outputs[0].data.regions&&a.outputs[0].data.regions.length>0&&fetch("http://localhost:7000/image",{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",_method:"PATCH",Authorization:""},body:JSON.stringify({id:R.id})}).then((function(e){return e.json()})).then((function(e){T((function(a){return Object(i.a)(Object(i.a)({},a),{},{entries:e})}))})).catch(console.log),y([a.outputs[0].data.regions,e]),c("")})).catch((function(e){return console.log(e)})))}}),l.a.createElement(v,{imageURL:b,info:w})))};t(266);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))},60:function(e,a,t){e.exports=t(267)},65:function(e,a,t){}},[[60,1,2]]]);
//# sourceMappingURL=main.20a87fe5.chunk.js.map