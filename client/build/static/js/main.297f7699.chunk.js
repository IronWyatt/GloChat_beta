(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{149:function(e,t){},157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(39),o=a.n(s),l=(a(99),a(7)),c=a(8),i=a(10),m=a(9),u=a(11),d=a(27),g=a(17),h=a(163),p=a(161),f=a(5),E=a.n(f),b=function(e){return r.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",className:"navBar"},r.a.createElement(h.a.Brand,{className:"brand"},r.a.createElement(g.b,{className:"text-white",to:"/"},"GL",r.a.createElement("img",{className:"globalImg",src:"global.gif"}),"Chat"))," ",r.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"}),r.a.createElement(p.a,{className:"align-items-center menuRight"},e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loginDiv"},r.a.createElement("img",{src:e.user.profilePic,className:"imgProfile"}),r.a.createElement("p",null,"Hello ",e.user.username)),r.a.createElement(g.c,{className:"text-white nav-link ml-3",style:{textDecoration:"none",fontSize:"20px"},to:"/"},"Chat"),r.a.createElement(g.c,{className:"text-white ml-3",style:{textDecoration:"none",fontSize:"20px"},to:"/Settings"},"Settings"),r.a.createElement(g.c,{className:"text-white ml-3",style:{textDecoration:"none",fontSize:"20px"},to:"/About"},"About"),r.a.createElement(g.c,{className:"text-white ml-3",style:{textDecoration:"none",fontSize:"20px"},to:"/",onClick:function(){E.a.delete("/auth/logout"),e.clearUser(null)}},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"text-white ",style:{textDecoration:"none",fontSize:"20px",color:"white"},href:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_SERVER_URL||"","/auth/google")},"Sign up with Google"),r.a.createElement(g.c,{className:"text-white ml-3",style:{textDecoration:"none",fontSize:"20px"},to:"/login"},"Login"),r.a.createElement(g.c,{className:"text-white ml-3",style:{textDecoration:"none",fontSize:"20px"},to:"/signup"},"Signup"),r.a.createElement(g.c,{className:"text-white ml-3",style:{textDecoration:"none",fontSize:"20px"},to:"/About"},"About")))))},y=a(21),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:"carouselMain"},r.a.createElement(y.a.Item,null,r.a.createElement("img",{className:"d-block carouselIMG",src:"../globe2.jpg",alt:"First slide"}),r.a.createElement(y.a.Caption,{className:"caption"},r.a.createElement("h3",null,"GloChat"),r.a.createElement("p",null,"It's never been so easy !"))),r.a.createElement(y.a.Item,null,r.a.createElement("img",{className:"d-block  carouselIMG",src:"../googleLogo.png",alt:"Second slide"}),r.a.createElement(y.a.Caption,{className:"caption"},r.a.createElement("h3",null,"Simple"),r.a.createElement("p",null,"Simply log in with your google account or sign up."))),r.a.createElement(y.a.Item,null,r.a.createElement("img",{className:"d-block carouselIMGThree",src:"../chatLogo3.png",alt:"Third slide"}),r.a.createElement(y.a.Caption,{className:"caption"},r.a.createElement("h3",null,"Chat Globally"),r.a.createElement("p",null,"Connect to people from all around the World."))),r.a.createElement(y.a.Item,null,r.a.createElement("img",{className:"d-block  carouselIMG",src:"../translation.png",alt:"Third slide"}),r.a.createElement(y.a.Caption,{className:"caption"},r.a.createElement("h3",null,"Auto-Translation"),r.a.createElement("p",null,"Let us take care of everything and chat live in your mother tongue. ",r.a.createElement("br",null),"We speak more than 90 languages !")))))}}]),t}(n.Component),w=a(19),O=a(162),x=a(164),C=a(160),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",email:"",bio:"",defaultLanguage:"en - Anglais",listeLanguages:{},profilePic:"",error:"",upload:!1},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value),(function(){return console.log(a.state.defaultLanguage)}))},a.imageUpload=function(e){console.log("the file to be added is",e.target.files[0]);var t=e.target.files[0],n=new FormData;n.append("profilePic",t),a.setState({upload:!0},(function(){E.a.post("/api/cloudinary",n).then((function(e){a.setState({profilePic:e.data.secure_url},(function(){console.log(a.state),a.setState({upload:!1})}))}))}))},a.handleSubmit=function(e){e.preventDefault(),E.a.post("/auth/signup",{username:a.state.username,password:a.state.password,email:a.state.email,defaultLanguage:a.state.defaultLanguage,profilePic:a.state.profilePic,bio:a.state.bio}).then((function(e){console.log("LOOOOOOOOOOOOOOOOK",a.state.defaultLanguage),console.log(e.data),a.props.setUser(e.data),a.props.history.push("/")})).catch((function(e){e.response.data.message&&a.setState({error:e.response.data.message})}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://api.cognitive.microsofttranslator.com/languages?api-version=3.0").then((function(t){e.setState({listeLanguages:t.data.dictionary})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container border border-secondary p-4 mt-4 mr-auto ml-auto col-md-4 loginDivPage "},r.a.createElement("h2",{className:"text-center",style:{fontWeight:"bold"}},"SignUp"),r.a.createElement(O.a,{onSubmit:this.handleSubmit,encType:"multipart/form-data"},r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,{htmlFor:"email",style:{fontWeight:"500"}},"Email id:"," "),r.a.createElement(O.a.Control,{type:"text",name:"email",id:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,{htmlFor:"username",style:{fontWeight:"500"}},"Username:"," "),r.a.createElement(O.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,{htmlFor:"password",style:{fontWeight:"500"}},"Password:"," "),r.a.createElement(O.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange,required:"true"}),r.a.createElement("p",{style:Object(w.a)({color:"#1D2951",textAlign:"center",fontSize:"0.9em "},"textAlign","left")},"Your password should contain at least one uppercase letter, one downcase letter, one number and be at least 8 to 15 characters long and special characters.")),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,{htmlFor:"text",style:{fontWeight:"500"}},"Add Biography:"," "),r.a.createElement(O.a.Control,{type:"text",name:"bio",id:"bio",value:this.state.bio,onChange:this.handleChange})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,{htmlFor:"text",style:{fontWeight:"500"}},"Upload an Image:"," "),r.a.createElement(O.a.Control,{id:"image",type:"file",name:"imagePath",placeholder:"User image",onChange:this.imageUpload})),this.state.upload&&r.a.createElement("div",null,"Please wait for a second while we make your image look amazing"),r.a.createElement(O.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(O.a.Label,{style:{fontWeight:"500"}},"Default Language"),r.a.createElement(O.a.Control,{as:"select",value:this.state.defaultLanguage,onChange:this.handleChange,name:"defaultLanguage"},Object.entries(this.state.listeLanguages).map((function(e){return r.a.createElement("option",{key:e[0]}," ",e[0]," - ",e[1].name," ")})))),this.state.error&&r.a.createElement(x.a,{variant:"danger"},this.state.error),!this.state.upload&&r.a.createElement(C.a,{className:"btn btn-primary btn-lg",style:{color:"white",margin:"20px auto",display:"flex",justifyContent:"center",alignItems:"center",width:"50%"},type:"submit"},"SignUp")))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),E.a.post("/auth/login",{username:a.state.username,password:a.state.password}).then((function(e){console.log(e.data),a.props.setUser(e.data),a.props.history.push("/"),console.log(e.data)})).catch((function(e){e.response.data.message&&a.setState({error:e.response.data.message})}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"container border border-secondary p-4 mt-4 mr-auto ml-auto col-md-3 loginDivPage"},r.a.createElement("h2",{className:"text-center",style:{marginTop:"20px",marginBot:"20px",fontWeight:"bold"}},"Login"),r.a.createElement(O.a,{onSubmit:this.handleSubmit},r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,{htmlFor:"username",style:{fontWeight:"500"}},"Username:"," "),r.a.createElement(O.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,{htmlFor:"password",style:{fontWeight:"500"}},"Password:"," "),r.a.createElement(O.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&r.a.createElement(x.a,{variant:"danger"},this.state.error),r.a.createElement(C.a,{className:"btn btn-primary btn-lg",style:{color:"white",margin:"20px auto",display:"flex",justifyContent:"center",alignItems:"center",width:"50%"},type:"submit"},"Log in")))}}]),t}(n.Component),N=a(43),k=a(91),P=a.n(k),L=function(e){var t=e.msg,a=e.user;return r.a.createElement(r.a.Fragment,null,a.username===t.username?r.a.createElement("div",{class:"outgoing_msg"},r.a.createElement("div",{key:t._id,id:"message",className:"sent_msg"},r.a.createElement("p",null,a.username===t.username?t.text:t.translation),r.a.createElement("span",{class:"time_date"}," ",t.created_at," "))):r.a.createElement("div",{class:"incoming_msg"},r.a.createElement("div",{class:"incoming_msg_img"},r.a.createElement("img",{className:"profile-pic",src:e.user2.profilePic,alt:"sunil"})),r.a.createElement("div",{class:"received_msg"},r.a.createElement("div",{key:t._id,id:"message",class:"received_withd_msg"},r.a.createElement("p",null,a.username===t.username?t.text:t.translation),r.a.createElement("span",{class:"time_date"}," ",t.created_at," ")))))},_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selected:null},a.getCountyFlag=function(e){return"https://www.countryflags.io/".concat(e,"/flat/64.png")},a.userIsOnline=function(e){return a.props.onlineUsers.map((function(e){return e&&e._id})).includes(e.users[1]._id)},a.selectRoom=function(e){a.setState({selected:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props;return t.rooms.map((function(a){return r.a.createElement("a",{onClick:function(){t.joinRoom(a),e.selectRoom(a._id)}},r.a.createElement("div",{key:a._id,className:"room ".concat(e.state.selected===a._id?"selected":"")},r.a.createElement("img",{className:"profile-pic",src:t.user._id===a.users[0]._id?a.users[1].profilePic:a.users[0].profilePic,alt:"user"}),r.a.createElement("h5",null,t.user._id===a.users[0]._id?a.users[1].username:a.users[0].username),r.a.createElement("img",{className:"dot",src:e.userIsOnline(a)?"green-dot.png":"red-dot.png",alt:"dot"})))}))}}]),t}(n.Component);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){Object(w.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a(152).config();var I=Object({NODE_ENV:"production",PUBLIC_URL:""}).CALLBACK_URL,A=P()(I),F=(Object({NODE_ENV:"production",PUBLIC_URL:""}).GEO_KEY,function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user,users:[],user2:{},onlineUsers:[],messages:[],message:"",roomId:"",rooms:[],search:"",socketId:A.id,listeLanguages:{},defaultLanguage:a.props.user.defaultLanguage,searchOn:!1,isTyping:!1},a.scrollToBottom=function(){a.messagesEnd.scrollIntoView({behavior:"smooth"})},a.componentDidMount=function(){E.a.get("https://api.cognitive.microsofttranslator.com/languages?api-version=3.0").then((function(e){a.setState({listeLanguages:e.data.dictionary})})).catch((function(e){return console.log(e)})),E.a.get("/geo").then((function(e){var t=e.data,n=t.country,r=t.region;a.getRooms(),A.emit("new_user",a.state.user),A.on("users",(function(e){a.setState({onlineUsers:e,user:D({},a.props.user,{isOnline:!0,connection:{countryCode:n,city:r}})})})),A.on("message",(function(e){a.setState({messages:[].concat(Object(N.a)(a.state.messages),[e])})})),A.on("welcome",(function(e){a.getRooms()})),A.on("room",(function(e){a.setState({roomId:e[0]._id},(function(){return a.joinRoom(e[0])})),a.getRooms()}))})).catch((function(e){return console.log(e)})),a.scrollToBottom(),A.emit("disconnect"),A.off()},a.handleChange=function(e){a.state.message&&A.emit("typing","typing"),a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleSubmitLang=function(e){e.preventDefault(),a.setState({defaultLanguage:e.target.value},(function(){E.a.post("/auth/updateLang",{id:a.state.user._id,defaultLanguage:a.state.defaultLanguage}).then((function(e){})).catch((function(e){e.response.data.message&&a.setState({error:e.response.data.message})}))}))},a.searchUsers=function(e){e.preventDefault(),E.a.get("/users/".concat(a.state.search)).then((function(e){console.log(e.data),a.setState({users:[].concat(Object(N.a)(a.state.users),Object(N.a)(e.data)),search:""})})).catch((function(e){return console.log(e)}))},a.joinRoom=function(e){var t;t=a.state.user._id===e.users[0]._id?e.users[1]:e.users[0],A.emit("joinRoom",{user:a.state.user,room:e._id}),a.setState({roomId:e._id,user2:t}),a.getMessages(e)},a.joinPrivate=function(e){A.emit("joinPrivate",{user1:a.state.user,user2:e}),a.setState({users:[],user2:e,searchOn:!1})},a.sendMessage=function(e){e.preventDefault(),a.state.message&&(A.emit("message",{message:a.state.message,userId:a.state.user._id,username:a.state.user.username,socketId:a.state.socketId,roomId:a.state.roomId,defaultLanguage:a.state.user.defaultLanguage}),a.setState({message:""}))},a.getMessages=function(e){E.a.get("/messages/".concat(e._id)).then((function(e){a.setState({messages:e.data})})).catch((function(e){return console.log(e)}))},a.getRooms=function(){E.a.get("/rooms").then((function(e){a.setState({rooms:e.data})}))},a.userIsOnline=function(e){return a.state.onlineUsers.map((function(e){return e&&e._id})).includes(e._id)},a.openSearch=function(){a.setState({searchOn:!a.state.searchOn})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"chat-container loginDivPage"},this.state.searchOn?r.a.createElement("div",{className:"rooms-container"},r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{onSubmit:this.searchUsers},r.a.createElement("div",{className:"search-area"},r.a.createElement("input",{type:"text",placeholder:"Insert username or email",className:"search-bar",name:"search",id:"search",value:this.state.search,onChange:this.handleChange})," ")),this.state.users.map((function(t){return r.a.createElement("a",{classNameName:"",onClick:function(){return e.joinPrivate(t)}},r.a.createElement("div",{key:t._id,className:"room searched-user"},r.a.createElement("img",{src:t.profilePic,alt:"user",className:"profile-pic"}),r.a.createElement("h5",null,t.username),r.a.createElement("img",{className:"dot",src:e.userIsOnline(t)?"green-dot.png":"red-dot.png"})))}))),r.a.createElement("div",{className:"search-footer"},r.a.createElement("span",{onClick:this.openSearch},"Go back ",r.a.createElement("i",{class:"fas fa-chevron-right"})))):r.a.createElement("div",{className:"rooms-container"},r.a.createElement("div",{className:"search-header"},r.a.createElement("button",{className:"btn",onClick:this.openSearch},"Search for a user")),r.a.createElement(_,{user:this.state.user,rooms:this.state.rooms,users:this.state.users,onlineUsers:this.state.onlineUsers,joinRoom:this.joinRoom}),r.a.createElement("div",{className:"select-language"},r.a.createElement("label",null,"Select your language"),r.a.createElement("select",{value:this.state.defaultLanguage,onChange:this.handleSubmitLang,name:"defaultLanguage",class:"form-control"},Object.entries(this.state.listeLanguages).map((function(e){return r.a.createElement("option",{key:e[0]},e[0]," - ",e[1].name)}))))),r.a.createElement("div",{className:"messages-container"},r.a.createElement("div",{className:"messages"},this.state.messages.map((function(t){return r.a.createElement("div",null,r.a.createElement(L,{user:e.state.user,user2:e.state.user2,msg:t,key:t._id}))})),r.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}})),r.a.createElement("form",{className:"message-area",onSubmit:this.sendMessage},this.state.isTyping?r.a.createElement("span",null," Is typing..."):r.a.createElement("div",null),r.a.createElement("input",{type:"text",name:"message",id:"message-text",value:this.state.message,onChange:this.handleChange,onKeyPress:this.isTyping,rows:"2"}),r.a.createElement("button",{className:"submit-message",type:"submit"},r.a.createElement("i",{class:"far fa-paper-plane send-plane fa-2x","aria-hidden":"true"})))))}}]),t}(n.Component)),z=a(54),B=a.n(z),T=a(92),R=a(89),W=a(93),G=a(90),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={password:"",confirmPassword:"",error:"",profilePic:a.props.user,bio:"",completed:!1,upload:!1},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.id,e.target.value))},a.imageUpload=function(e){console.log("the file to be added is",e.target.files[0]);var t=e.target.files[0],n=new FormData;n.append("profilePic",t),a.setState({upload:!0},(function(){E.a.post("/api/cloudinary",n).then((function(e){a.setState({profilePic:e.data.secure_url},(function(){console.log(a.state),a.setState({upload:!1})}))}))}))},a.handleChangeClick=function(){var e=Object(T.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(a.validateForm()),!0===a.validateForm()?E.a.post("/auth/changeDetails",{password:a.state.password,bio:a.state.bio,profilePic:a.state.profilePic}).then((function(e){console.log(e.data),a.setState({completed:!0,error:""}),setTimeout((function(){a.props.history.push("/")}),1e3)})).catch((function(e){console.log(e)})):a.setState({error:"Password is too short / did not match"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){console.log(a.props.user.profilePic),console.log("hello"),a.setState({profilePic:a.props.user.profilePic})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"validateForm",value:function(){return this.state.password.length>8&&this.state.password===this.state.confirmPassword}},{key:"render",value:function(){return r.a.createElement("div",{className:"container border border-secondary p-4 mt-4 mr-auto ml-auto col-md-6 loginDivPage"},r.a.createElement("form",{onSubmit:this.handleChangeClick},r.a.createElement(O.a.Label,{htmlFor:"text",style:{fontWeight:"500"}},"Change your Profile Pic:"," "),r.a.createElement("div",{className:"container  "},r.a.createElement(O.a.Group,null,r.a.createElement("img",{src:this.state.profilePic,style:{border:"1px solid black",display:"flex",float:"left",width:"20%",margin:"10px 0px 10px"},alt:"profile"}),r.a.createElement(O.a.Control,{id:"image",type:"file",name:"imagePath",placeholder:"User image",onChange:this.imageUpload}))),this.state.upload&&r.a.createElement("div",null,"Please wait for a second while we make your image look amazing"),r.a.createElement(R.a,{bsSize:"large",controlId:"password"},r.a.createElement(W.a,{style:{fontWeight:"500"}},"Change Password"),r.a.createElement(G.a,{type:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(R.a,{bsSize:"large",controlId:"confirmPassword"},r.a.createElement(W.a,{style:{fontWeight:"500"}},"Confirm Password"),r.a.createElement(G.a,{type:"password",onChange:this.handleChange,value:this.state.confirmPassword,pattern:"(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{8,15}"}),r.a.createElement("p",{style:Object(w.a)({color:"#1D2951",textAlign:"center",fontSize:"0.9em "},"textAlign","left")},"Your password should contain at least one uppercase letter, one downcase letter, one number and be at least 8 to 15 characters long and special characters.")),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,{htmlFor:"text",style:{fontWeight:"500"}},"Add a Bio:"," "),r.a.createElement(O.a.Control,{type:"text",name:"bio",id:"bio",value:this.state.bio,onChange:this.handleChange})),r.a.createElement(C.a,{block:!0,type:"submit",bsSize:"large",text:"Change Password",loadingText:"Changing\u2026",isLoading:this.state.isChanging,className:"btn btn-primary btn-lg",style:{color:"white",margin:"20px auto",display:"flex",justifyContent:"center",alignItems:"center",width:"50%"}},"Submit")),this.state.error&&r.a.createElement(x.a,{variant:"danger"},this.state.error),this.state.completed&&r.a.createElement(x.a,{variant:"success"},"Password updaded"))}}]),t}(n.Component),H=a(165),V=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H.a,{className:"text-center container border border-dark p-4 mt-4"},r.a.createElement(H.a.Header,{style:{fontWeight:"bolder",fontSize:"20px",color:"#1D2951",backgroundColor:"#EFE2BA"}},"About GloChat"),r.a.createElement(H.a.Body,null,r.a.createElement(H.a.Text,{style:{fontSize:"15px",color:"  #5b342e"}},"GloChat is a web App which help people around the world to connect with each other by chatting with people in different languages globally."))),r.a.createElement(H.a,{className:"text-center container border border-dark p-4 mt-4"},r.a.createElement(H.a.Header,{style:{fontWeight:"bolder",fontSize:"20px",color:"#1D2951",backgroundColor:"#EFE2BA"}},"How to use this App?"),r.a.createElement(H.a.Body,null,r.a.createElement(H.a.Text,{style:{fontSize:"15px",color:"#5b342e"}},"Simply Signup and Login with your credentials, choose the language in which you want to chat and connect with people around the globe."))),r.a.createElement(H.a,{className:"text-center container border border-dark p-4 mt-4"},r.a.createElement(H.a.Header,{style:{fontWeight:"bolder",fontSize:"20px",color:"#1D2951",backgroundColor:"#EFE2BA"}},"About us!"),r.a.createElement(H.a.Body,null,r.a.createElement(H.a.Text,{style:{fontSize:"15px",color:"#5b342e"}},"This project was made as part of the Ironhack Web Development bootcamp in Berlin by Davide Bernocchi, Floriano Albertini and Madhavi Yalamanchili. The aim of the project was to build our full-stack MERN web application. This was our final project during the bootcamp and the development time was one week. You can check out the Github repo here."))),r.a.createElement(H.a,{className:"text-center container border border-dark p-4 mt-4",style:{marginBottom:"20px"}},r.a.createElement(H.a.Header,{style:{fontWeight:"bolder",fontSize:"20px",color:"#1D2951",backgroundColor:"#EFE2BA"}},"Technologies Used"),r.a.createElement(H.a.Body,null,r.a.createElement(H.a.Text,{style:{fontSize:"15px",color:"#5b342e"}},"The tech stack we used was the MERN stack: HTML/CSS, JavaScript,Bootstrap, Node.js,MongoDB,Cloudinary(Uploading Images) Express.js,Socket.io,Microsoft Azure API(Translation) and React.js."))),r.a.createElement(H.a.Footer,{className:"text-center",style:{fontWeight:"bolder",fontSize:"20px",color:"#1D2951"}},"Find our Project Repo on","   ",r.a.createElement("a",{href:"https://github.com/davideberno/GloChat",style:{color:"#1D2951",fontWeight:"bold"}},r.a.createElement("img",{src:"github.png",style:{marginLeft:"10px",width:"50px",height:"50px",alt:"github-image",color:"white"}}))))}}]),t}(n.Component),Y=(a(156),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(b,{user:this.state.user,clearUser:this.setUser}),this.state.user?r.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(F,Object.assign({user:e.state.user},t))}}):r.a.createElement(d.a,{exact:!0,path:"/",component:v}),r.a.createElement(d.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(S,Object.assign({user:e.state.user,setUser:e.setUser},t))}}),r.a.createElement(d.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(j,Object.assign({user:e.state.user,setUser:e.setUser},t))}}),r.a.createElement(d.a,{exact:!0,path:"/auth/google",render:function(t){return r.a.createElement(j,Object.assign({user:e.state.user,setUser:e.setUser},t))}}),r.a.createElement(d.a,{exact:!0,path:"/settings",render:function(t){return r.a.createElement(M,Object.assign({user:e.state.user,setUser:e.setUser},t))}}),r.a.createElement(d.a,{exact:!0,path:"/about",setUser:this.setUser,component:V}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(157);E.a.get("/auth/loggedin").then((function(e){var t=e.data;o.a.render(r.a.createElement(g.a,null,r.a.createElement(Y,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},94:function(e,t,a){e.exports=a(158)}},[[94,1,2]]]);
//# sourceMappingURL=main.297f7699.chunk.js.map