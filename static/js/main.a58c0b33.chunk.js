(this["webpackJsonplearning-redux-saga"]=this["webpackJsonplearning-redux-saga"]||[]).push([[0],{179:function(e,t,a){e.exports=a.p+"static/media/loading.73abf012.gif"},200:function(e,t,a){e.exports=a(337)},337:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"showModal",(function(){return C})),a.d(n,"hideModal",(function(){return S})),a.d(n,"changeModalTitle",(function(){return x})),a.d(n,"changeModalContent",(function(){return A}));var r={};a.r(r),a.d(r,"fetchListTasks",(function(){return ie})),a.d(r,"fetchListTaskSuccess",(function(){return le})),a.d(r,"fetchListTaskFailed",(function(){return se})),a.d(r,"filterTask",(function(){return ue})),a.d(r,"filterTaskSuccess",(function(){return de})),a.d(r,"addTask",(function(){return me})),a.d(r,"addTaskSuccess",(function(){return pe})),a.d(r,"addTaskFailed",(function(){return be})),a.d(r,"setTaskEditing",(function(){return fe})),a.d(r,"updateTask",(function(){return he})),a.d(r,"updateTaskSuccess",(function(){return Ee})),a.d(r,"updateTaskFailed",(function(){return ge})),a.d(r,"deleteTask",(function(){return Oe})),a.d(r,"deleteTaskSuccess",(function(){return ve})),a.d(r,"deleteTaskFailed",(function(){return je}));var c={};a.r(c),a.d(c,"showLoading",(function(){return vt})),a.d(c,"hideLoading",(function(){return jt})),a.d(c,"showSidebar",(function(){return kt})),a.d(c,"hideSidebar",(function(){return yt}));var o=a(0),i=a.n(o),l=a(19),s=a.n(l),u=a(15),d=a(16),m=a(18),p=a(17),b=a(395),f=a(394),h=a(28),E=a(46),g=a(24),O=a(85),v=(a(208),a(399)),j=a(171),k=a.n(j),y=a(339),T=a(11),C=function(){return{type:"SHOW_MODAL"}},S=function(){return{type:"HIDE_MODAL"}},x=function(e){return{type:"CHANGE_MODAL_TITLE",payload:{title:e}}},A=function(e){return{type:"CHANGE_MODAL_CONTENT",payload:{component:e}}},w=function(e){return{modal:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",width:400,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],outLine:"none"},header:{backgroundColor:e.color.primary,color:e.color.textColor,padding:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"space-between"},title:{color:e.color.textColor,fontWeight:700},icon:{cursor:"pointer",fontSize:30},content:{padding:e.spacing(2)}}},D=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.open,n=e.component,r=e.modalActionCreators,c=e.title,o=r.hideModal;return i.a.createElement(v.a,{open:a,onClose:o},i.a.createElement("div",{className:t.modal},i.a.createElement("div",{className:t.header},i.a.createElement("span",{className:t.title},c),i.a.createElement(k.a,{className:t.icon,onClick:o})),i.a.createElement("div",{className:t.content},n)))}}]),a}(o.Component),_=Object(h.b)((function(e,t){return{open:e.modal.showModal,component:e.modal.component,title:e.modal.title}}),(function(e,t){return{modalActionCreators:Object(T.b)(n,e)}})),L=Object(T.d)(Object(y.a)(w),_)(D),N=a(57),F=a(50),I=function(e){return{wrapper:{display:"flex",flexDirection:"row",height:"100vh"},wrapperContent:{width:"100%",padding:10,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},shiftLeft:{marginLeft:-240,transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.leavingScreen})}}},M=a(383),K=a(385),B=a(184),H=a(382),R=a(384),W=a(342),U=a(175),P=a.n(U),G=a(174),z=a.n(G),X=a(26),V=function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(F.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(F.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(X.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(X.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(F.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(F.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(F.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}},q="primary-search-account-menu",J=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleProfileMenuOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuClose=function(){n.setState({anchorEl:null})},n.handleLogout=function(){console.log(n.props);var e=n.props.history;e&&e.push("/login")},n.renderMenu=function(){var e=n.state.anchorEl,t=Boolean(e);return i.a.createElement(B.a,{anchorEl:e,anchorOrigin:{vertical:"top",horizontal:"right"},id:q,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:t,onClose:n.handleMenuClose},i.a.createElement(H.a,{onClick:n.handleLogout},"Logout"))},n.handleToggleSidebar=function(){var e=n.props,t=e.openSideBar,a=e.onToggleSidebar;a&&a(!t)},n.state={anchorEl:null},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.name;return i.a.createElement("div",{className:t.grow},i.a.createElement(M.a,{position:"static"},i.a.createElement(R.a,null,i.a.createElement(K.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"Open drawer",onClick:this.handleToggleSidebar},i.a.createElement(z.a,null)),i.a.createElement(W.a,{className:t.title,variant:"h6",noWrap:!0},a),i.a.createElement("div",{className:t.grow}),i.a.createElement("div",{className:t.sectionDesktop},i.a.createElement(K.a,{edge:"end","aria-label":"Account of current user","aria-controls":q,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},i.a.createElement(P.a,null))))),this.renderMenu())}}]),a}(o.Component),Q=Object(y.a)(V)(Object(g.f)(J)),Y=function(e){return{drawerPaper:{width:240,maxWidth:240,zIndex:10,height:"100%",position:"relative"},menuLink:{textDecoration:"none",color:e.color.deFaultTextColor},menuLinkActive:{"&>div":{backgroundColor:"#4287f5",color:"#ffffff","&:hover":{backgroundColor:"#6e98dc"}}}}},$=a(401),Z=a(381),ee=a(341),te=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Admin home page works"))}}]),a}(o.Component),ae=a(397),ne=a(388),re=a(7),ce=a(387),oe=a(403),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:"FETCH_TASK",payload:{params:e}}},le=function(e){return{type:"FETCH_TASK_SUCCESS",payload:{data:e}}},se=function(e){return{type:"FETCH_TASK_FAILED",payload:{error:e}}},ue=function(e){return{type:"FILTER_TASK",payload:{keyword:e}}},de=function(e){return{type:"FILTER_TASK_SUCCESS",payload:{data:e}}},me=function(e,t){return{type:"ADD_TASK",payload:{title:e,description:t}}},pe=function(e){return{type:"ADD_TASK_SUCCESS",payload:{data:e}}},be=function(e){return{type:"ADD_TASK_FAILED",payload:{error:e}}},fe=function(e){return{type:"SET_TASK_EDITING",payload:{task:e}}},he=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:pt[0].value;return{type:"UPDATE_TASK",payload:{title:e,description:t,status:a}}},Ee=function(e){return{type:"UPDATE_TASK_SUCCESS",payload:{data:e}}},ge=function(e){return{type:"UPDATE_TASK_FAILED",payload:{error:e}}},Oe=function(e){return{type:"DELETE_TASK",payload:{id:e}}},ve=function(e){return{type:"DELETE_TASK_SUCCESS",payload:{data:e}}},je=function(e){return{type:"DELETE_TASK_FAILED",payload:{error:e}}},ke={container:{},textField:{width:"30%"}},ye=a(386),Te=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.handleChange;return i.a.createElement("div",null,i.a.createElement("h1",null,"Search box"),i.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},i.a.createElement(ye.a,{id:"standard-basic",className:t.textField,label:"Nh\u1eadp t\u1eeb kh\xf3a",onChange:a})))}}]),a}(o.Component),Ce=Object(y.a)(ke)(Te),Se=a(398),xe=a(396),Ae=function(e){var t=e.label,a=e.input,n=e.meta,r=n.touched,c=n.invalid,o=n.error,l=Object(N.a)(e,["label","input","meta"]);return i.a.createElement(ye.a,Object.assign({label:t,placeholder:t,error:r&&c,helperText:r&&o},a,l))},we=function(){return{textField:{width:"100%"},select:{display:"flex",flexWrap:"wrap"}}},De=function(e){var t={},a=e.title;return a?a.trim()&&a.length<5&&(t.title="Ti\xeau \u0111\u1ec1 ph\u1ea3i t\u1eeb 5 k\xed t\u1ef1"):t.title="Vui l\xf2ng nh\u1eadp ti\xeau \u0111\u1ec1",t},_e=a(346),Le=a(345),Ne=a(350),Fe=a(348),Ie=function(){return{formControl:{width:"100%"}}},Me=Object(y.a)(Ie)((function(e){var t=e.classes,a=e.input,n=e.label,r=e.meta,c=r.touched,o=r.error,l=e.children,s=Object(N.a)(e,["classes","input","label","meta","children"]);return i.a.createElement(Le.a,{className:t.formControl,error:c&&o},i.a.createElement(Ne.a,{htmlFor:"age-native-simple"},n),i.a.createElement(Fe.a,Object.assign({},a,s,{inputProps:{name:"age",id:"age-native-simple"},value:a.value}),l),function(e){var t=e.touched,a=e.error;return t&&a?i.a.createElement(_e.a,null,t&&a):void 0}({touched:c,error:o}))})),Ke=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSubmitForm=function(t){var a=e.props,n=a.taskActionCreators,r=a.taskEditing,c=n.addTask,o=n.updateTask,i=t.title,l=t.description,s=t.status;r&&r.id?(o(i,l,s),console.log(t)):c(i,l)},e.renderStatusSelection=function(){var t=null,a=e.props,n=a.classes,r=a.taskEditing;return r&&r.id&&(t=i.a.createElement(Se.a,{id:"status",label:"Tr\u1ea1ng th\xe1i",className:n.select,name:"status",component:Me},i.a.createElement(H.a,{value:0},"Ready"),i.a.createElement(H.a,{value:1},"In Progress"),i.a.createElement(H.a,{value:2},"Completed"))),t},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.modalActionCreators,n=e.handleSubmit,r=e.invalid,c=e.submitting,o=a.hideModal;return i.a.createElement("form",{onSubmit:n(this.handleSubmitForm)},i.a.createElement(ce.a,{container:!0,spacing:2},i.a.createElement(ce.a,{item:!0,md:12},i.a.createElement(Se.a,{id:"title",label:"Ti\xeau \u0111\u1ec1",className:t.textField,margin:"dense",name:"title",component:Ae,fullWidth:!0})),i.a.createElement(ce.a,{item:!0,md:12},i.a.createElement(Se.a,{id:"description",label:"M\xf4 t\u1ea3",name:"description",multiple:!0,rowsMax:"4",className:t.textField,margin:"dense",component:Ae,fullWidth:!0})),i.a.createElement(ce.a,{item:!0,md:12},this.renderStatusSelection()),i.a.createElement(ce.a,{item:!0,md:12},i.a.createElement(ae.a,{display:"flex",flexDirection:"row-reverse",p:1,m:1},i.a.createElement(ae.a,{m:1},i.a.createElement(ne.a,{variant:"contained",color:"primary",type:"submit",disabled:r||c},"L\u01b0u l\u1ea1i")),i.a.createElement(ae.a,{m:1},i.a.createElement(ne.a,{variant:"contained",color:"secondary",onClick:o},"H\u1ee7y b\u1ecf"))))))}}]),a}(o.Component),Be=Object(h.b)((function(e,t){return{taskEditing:e.task.taskEditing,initialValues:e.task.taskEditing}}),(function(e,t){return{modalActionCreators:Object(T.b)(n,e),taskActionCreators:Object(T.b)(r,e)}})),He=Object(xe.a)({form:"TASK_MANAGEMENT",validate:De}),Re=Object(T.d)(Object(y.a)(we),Be,He)(Ke),We=function(){return{}},Ue=a(392),Pe=a(389),Ge=a(390),ze=a(391),Xe=function(){return{card:{marginTop:20},cardAction:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}},Ve=a(177),qe=a.n(Ve),Je=a(178),Qe=a.n(Je),Ye=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.status,n=e.task,r=e.onClickEdit,c=e.onClickDetele;return i.a.createElement(Pe.a,{key:n.id,className:t.card},i.a.createElement(Ge.a,null,i.a.createElement(ce.a,{container:!0,justify:"space-between"},i.a.createElement(ce.a,{item:!0,md:8},i.a.createElement(W.a,{component:"h2"},n.title)),i.a.createElement(ce.a,{item:!0,md:4},a.label)),i.a.createElement("p",null,n.description)),i.a.createElement(ze.a,{className:t.cardAction},i.a.createElement(Ue.a,{size:"small",color:"secondary","aria-label":"add",className:t.margin,onClick:r},i.a.createElement(qe.a,null)),i.a.createElement(Ue.a,{size:"small",color:"secondary","aria-label":"add",className:t.margin,onClick:c},i.a.createElement(Qe.a,null))))}}]),a}(o.Component),$e=Object(re.a)(Xe)(Ye),Ze=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.tasks,n=e.status,r=e.onClickEdit,c=e.onClickDetele;return i.a.createElement(ce.a,{item:!0,md:4,xs:12,key:n.value},i.a.createElement(ae.a,{mb:2,mt:2},i.a.createElement("div",{className:t.status},n.label)),i.a.createElement("div",{className:t.wrapListTask},a.map((function(e){return i.a.createElement($e,{task:e,status:n,key:e.id,onClickEdit:function(){return r(e)},onClickDetele:function(){return c(e)}})}))))}}]),a}(o.Component),et=Object(re.a)(We)(Ze),tt=function(e){return{taskboard:{alignItems:"center","& > *":{margin:e.spacing(1)}},shape:{padding:20,margin:10,backgroundColor:e.color.primary,color:e.shape.textColor},modalConfirmTextBold:{fontWeight:700}}},at=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handEditTask=function(t){var a=e.props,n=a.taskActionCreators,r=a.modalActionCreators;(0,n.setTaskEditing)(t);var c=r.showModal,o=r.changeModalTitle,l=r.changeModalContent;c(),o("Ch\u1ec9nh s\u1eeda c\xf4ng vi\u1ec7c"),l(i.a.createElement(Re,null))},e.handleDeleteTask=function(t){var a=t.id;(0,e.props.taskActionCreators.deleteTask)(a)},e.showModalDeleteTask=function(t){var a=e.props,n=a.modalActionCreators,r=a.classes,c=n.showModal,o=n.hideModal,l=n.changeModalTitle,s=n.changeModalContent;c(),l("X\xf3a c\xf4ng vi\u1ec7c"),s(i.a.createElement("div",{className:r.modalDelete},i.a.createElement("div",{className:r.modalConfirmText},"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a ",i.a.createElement("span",{className:r.modalConfirmTextBold},t.title)," ?"),i.a.createElement(ae.a,{display:"flex",flexDirection:"row-reverse",mt:2},i.a.createElement(ae.a,{ml:1},i.a.createElement(ne.a,{variant:"contained",onClick:o},"H\u1ee7y b\u1ecf")),i.a.createElement(ae.a,null,i.a.createElement(ne.a,{variant:"contained",color:"primary",onClick:function(){return e.handleDeleteTask(t)}},"\u0110\u1ed3ng \xfd")))))},e.renderBoard=function(){var t=e.props.listTask;return i.a.createElement(ce.a,{container:!0,spacing:3},pt.map((function(a,n){var r=t.filter((function(e){return e.status===a.value}));return i.a.createElement(et,{key:n,tasks:r,status:a,index:n,onClickEdit:e.handEditTask,onClickDetele:e.showModalDeleteTask})})))},e.openForm=function(){var t=e.props,a=t.modalActionCreators,n=t.taskActionCreators,r=a.showModal,c=a.changeModalTitle,o=a.changeModalContent;(0,n.setTaskEditing)(null),r(),c("Th\xeam m\u1edbi c\xf4ng vi\u1ec7c"),o(i.a.createElement(Re,null))},e.loadData=function(){(0,e.props.taskActionCreators.fetchListTasks)()},e.handleFilter=function(t){var a=t.target.value;(0,e.props.taskActionCreators.filterTask)(a)},e.renderSearchBox=function(){return i.a.createElement(Ce,{handleChange:e.handleFilter})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.taskActionCreators.fetchListTasks)()}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.taskboard},i.a.createElement(ne.a,{variant:"contained",color:"primary",onClick:this.loadData},"Load data"),i.a.createElement(ne.a,{variant:"contained",color:"primary",onClick:this.openForm},i.a.createElement(oe.a,null),"Th\xeam m\u1edbi c\xf4ng vi\u1ec7c"),this.renderSearchBox(),this.renderBoard())}}]),a}(o.Component),nt=Object(re.a)(tt)(Object(h.b)((function(e,t){return{listTask:e.task.listTask}}),(function(e,t){return{taskActionCreators:Object(T.b)(r,e),modalActionCreators:Object(T.b)(n,e)}}))(at)),rt=function(e){return{background:{backgroundColor:e.palette.primary.main,padding:40,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",textAlign:"center",flex:"1 0 auto"}}},ct=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.background},i.a.createElement("div",{className:e.login},i.a.createElement(Pe.a,null,i.a.createElement(Ge.a,null,i.a.createElement("form",null,i.a.createElement("div",{className:"text-xs-center pb-xs"},i.a.createElement(W.a,{variant:"caption",className:e.title,color:"textSecondary",gutterBottom:!0},"\u0110\u0103ng nh\u1eadp \u0111\u1ec3 ti\u1ebfp t\u1ee5c"),i.a.createElement(ye.a,{id:"email",label:"Email",className:e.textField,fullWidth:!0,margin:"normal"}),i.a.createElement(ye.a,{id:"password",label:"Password",className:e.textField,fullWidth:!0,type:"password",margin:"normal"}),i.a.createElement(ne.a,{variant:"contained",color:"primary",fullWidth:!0,type:"submit"},"Login"),i.a.createElement("div",{className:"pt-1 text-md-center"},i.a.createElement(E.b,{to:"/signup"},i.a.createElement(ne.a,null,"\u0110\u0103ng k\xed t\xe0i kho\u1ea3n")))))))))}}]),a}(o.Component),ot=Object(re.a)(rt)(ct),it=function(e){return{background:{backgroundColor:e.palette.primary.main,padding:40,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",textAlign:"center",flex:"1 0 auto"},signup:{maxWidth:400}}},lt=a(393),st=a(400),ut=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.background},i.a.createElement("div",{className:e.signup},i.a.createElement(Pe.a,null,i.a.createElement(Ge.a,null,i.a.createElement("form",null,i.a.createElement("div",{className:"text-xs-center pb-xs"},i.a.createElement(W.a,{variant:"caption",className:e.title,color:"textSecondary",gutterBottom:!0},"\u0110\u0103ng k\xed t\xe0i kho\u1ea3n"),i.a.createElement(ye.a,{id:"email",label:"Email",className:e.textField,fullWidth:!0,margin:"normal"}),i.a.createElement(ye.a,{id:"password",label:"Password",className:e.textField,fullWidth:!0,type:"password",margin:"normal"}),i.a.createElement(ye.a,{id:"cpassword",label:"Confirm Password",className:e.textField,fullWidth:!0,type:"password",margin:"normal"}),i.a.createElement(lt.a,{control:i.a.createElement(st.a,{value:"agree"}),label:"T\xf4i \u0111\xe3 \u0111\u1ecdc v\xe0 \u0111\u1ed3ng \xfd \u0111i\u1ec1u kho\u1ea3n"}),i.a.createElement(ne.a,{variant:"contained",color:"primary",fullWidth:!0,type:"submit"},"Sign Up"),i.a.createElement("div",{className:"pt-1 text-md-center"},i.a.createElement(E.b,{to:"/login"},i.a.createElement(ne.a,null,"\u0110\u0103ng nh\u1eadp")))))))))}}]),a}(o.Component),dt=Object(re.a)(it)(ut),mt="http://localhost:3000",pt=[{value:0,label:"READY"},{value:1,label:"IN PROGRESS"},{value:2,label:"COMPLETE"}],bt=200,ft=201,ht=[{path:"/admin",name:"Trang qu\u1ea3n tr\u1ecb",exact:!0,component:te},{path:"/admin/task-board",name:"Qu\u1ea3n l\xfd c\xf4ng vi\u1ec7c",component:nt}],Et=[{path:"/login",name:"\u0110\u0103ng nh\u1eadp",component:ot},{path:"/signup",name:"\u0110\u0103ng k\xed",component:dt}],gt=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).toggleDrawer=function(t){var a=e.props.onToggleSidebar;a&&a(t)},e.renderList=function(){var t=e.props.classes;return i.a.createElement("div",{className:t.list},i.a.createElement(Z.a,{component:"div"},ht.map((function(e,a){return i.a.createElement(E.c,{key:a,to:e.path,exact:e.exact,className:t.menuLink,activeClassName:t.menuLinkActive},i.a.createElement(ee.a,{key:a,className:t.menuItem,button:!0},e.name))}))))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.openSideBar;return i.a.createElement($.a,{open:n,onClose:function(){return e.toggleDrawer(!1)},variant:"persistent",classes:{paper:a.drawerPaper}},this.renderList())}}]),a}(o.Component),Ot=Object(y.a)(Y)(gt),vt=function(){return{type:"GLOBAL_SHOW_LOADING"}},jt=function(){return{type:"GLOBAL_HIDE_LOADING"}},kt=function(){return{type:"SHOW_SIDEBAR"}},yt=function(){return{type:"HIDE_SIDEBAR"}},Tt=a(74),Ct=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleToggleSidebar=function(t){var a=e.props.uiActionCreators,n=a.showSidebar,r=a.hideSidebar;!0===t?n():r()},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.classes,n=e.name,r=e.openSideBar;return i.a.createElement("div",{className:a.dashboard},i.a.createElement(Q,{name:n,openSideBar:r,onToggleSidebar:this.handleToggleSidebar}),i.a.createElement("div",{className:a.wrapper},i.a.createElement(Ot,{openSideBar:r,onToggleSidebar:this.handleToggleSidebar}),i.a.createElement("div",{className:Tt(a.wrapperContent,Object(F.a)({},a.shiftLeft,!1===r))},t)))}}]),a}(o.Component),St=Object(h.b)((function(e,t){return{openSideBar:e.ui.openSideBar}}),(function(e,t){return{uiActionCreators:Object(T.b)(c,e)}})),xt=Object(T.d)(St,Object(y.a)(I))(Ct),At=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.component,a=Object(N.a)(e,["component"]);return i.a.createElement(g.a,Object.assign({},a,{render:function(e){return i.a.createElement(xt,a,i.a.createElement(t,e))}}))}}]),a}(o.Component),wt=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.component,a=Object(N.a)(e,["component"]);return i.a.createElement(g.a,Object.assign({},a,{render:function(e){return i.a.createElement(t,e)}}))}}]),a}(o.Component),Dt=a(183),_t=Object(Dt.a)({color:{primary:"#1976D2",secondary:"#CDDC39",error:"#D32F2F",textColor:"#FFFFFF",deFaultTextColor:"#000000"},typography:{fontFamily:"Roboto"},shape:{borderRadius:4,backgroundColor:"#7C4DFF",textColor:"#FFFFFF",boderColor:"#CCCCCC"}}),Lt=a(179),Nt=a.n(Lt),Ft=function(){return{globallLoading:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:999,background:"rgba(0,0,0,0.4)"},icon:{position:"fixed",marginLeft:"auto",marginRight:"auto",left:0,right:0,top:"40%",width:120}}},It=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=null;return e.showLoading&&(a=i.a.createElement("div",{className:t.globallLoading},i.a.createElement("img",{src:Nt.a,alt:"loading",className:t.icon}))),a}}]),a}(o.Component),Mt=Object(h.b)((function(e,t){return{showLoading:e.ui.showLoading}}),null),Kt=Object(T.d)(Object(y.a)(Ft),Mt)(It),Bt=a(133),Ht=a(9),Rt=function(e){var t=null;"object"===typeof e&&e.message&&(t=e.message),null!==t&&"undefined"!==typeof t&&""!==t&&O.b.error(t)},Wt=function(e){null!==e&&"undefined"!==typeof e&&""!==e&&O.b.success(e)},Ut={listTask:[],taskEditing:null},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TASK":return Object(Ht.a)(Object(Ht.a)({},e),{},{listTask:[]});case"FETCH_TASK_SUCCESS":var a=t.payload.data;return Object(Ht.a)(Object(Ht.a)({},e),{},{listTask:a});case"FETCH_TASK_FAILED":var n=t.payload.error;return Rt(n),Object(Ht.a)(Object(Ht.a)({},e),{},{listTask:[]});case"FILTER_TASK_SUCCESS":var r=t.payload.data;return Object(Ht.a)(Object(Ht.a)({},e),{},{listTask:r});case"ADD_TASK":return Object(Ht.a)({},e);case"ADD_TASK_SUCCESS":var c=t.payload.data;return Wt("Th\xeam m\u1edbi c\xf4ng vi\u1ec7c th\xe0nh c\xf4ng"),Object(Ht.a)(Object(Ht.a)({},e),{},{listTask:[c].concat(e.listTask)});case"ADD_TASK_FAILED":var o=t.payload.error;return Rt(o),Object(Ht.a)({},e);case"SET_TASK_EDITING":var i=t.payload.task;return console.log(t),Object(Ht.a)(Object(Ht.a)({},e),{},{taskEditing:i});case"UPDATE_TASK":return Object(Ht.a)({},e);case"UPDATE_TASK_SUCCESS":var l=t.payload.data,s=e.listTask,u=s.findIndex((function(e){return e.id===l.id}));if(-1!==u){var d=[].concat(Object(Bt.a)(s.slice(0,u)),[l],Object(Bt.a)(s.slice(u+1)));return Wt("C\u1eadp nh\u1eadt c\xf4ng vi\u1ec7c th\xe0nh c\xf4ng"),Object(Ht.a)(Object(Ht.a)({},e),{},{listTask:d})}return Object(Ht.a)({},e);case"UPDATE_TASK_FAILED":var m=t.payload.error;return Rt(m),Object(Ht.a)({},e);case"DELETE_TASK":return Object(Ht.a)({},e);case"DELETE_TASK_SUCCESS":var p=t.payload.data;return Wt("X\xf3a c\xf4ng vi\u1ec7c th\xe0nh c\xf4ng"),Object(Ht.a)(Object(Ht.a)({},e),{},{listTask:e.listTask.filter((function(e){return e.id!==p}))});case"DELETE_TASK_FAILED":var b=t.payload.error;return Rt(b),Object(Ht.a)({},e);default:return e}},Gt={showLoading:!1,openSideBar:!0},zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GLOBAL_SHOW_LOADING":return Object(Ht.a)(Object(Ht.a)({},e),{},{showLoading:!0});case"GLOBAL_HIDE_LOADING":return Object(Ht.a)(Object(Ht.a)({},e),{},{showLoading:!1});case"SHOW_SIDEBAR":return Object(Ht.a)(Object(Ht.a)({},e),{},{openSideBar:!0});case"HIDE_SIDEBAR":return Object(Ht.a)(Object(Ht.a)({},e),{},{openSideBar:!1});default:return e}},Xt={showModal:!1,title:"",component:null},Vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MODAL":return Object(Ht.a)(Object(Ht.a)({},e),{},{showModal:!0});case"HIDE_MODAL":return Object(Ht.a)(Object(Ht.a)({},e),{},{showModal:!1,title:"",component:null});case"CHANGE_MODAL_TITLE":var a=t.payload.title;return Object(Ht.a)(Object(Ht.a)({},e),{},{title:a});case"CHANGE_MODAL_CONTENT":var n=t.payload.component;return Object(Ht.a)(Object(Ht.a)({},e),{},{component:n});default:return e}},qt=a(402),Jt=Object(T.c)({task:Pt,ui:zt,modal:Vt,form:qt.a}),Qt=a(180),Yt=a(185),$t=a(35),Zt=a.n($t),ea=a(13),ta=a(181),aa=a.n(ta),na=new(function(){function e(){Object(u.a)(this,e);var t=aa.a.create({});t.interceptors.response.use(this.handleSusscess,this.handleError),this.instance=t}return Object(d.a)(e,[{key:"handleSusscess",value:function(e){return e}},{key:"handleError",value:function(e){return Promise.reject(e)}},{key:"get",value:function(e){return this.instance.get(e)}},{key:"post",value:function(e,t){return this.instance.post(e,t)}},{key:"put",value:function(e,t){return this.instance.put(e,t)}},{key:"delete",value:function(e){return this.instance.delete(e)}}]),e}()),ra=a(182),ca=a.n(ra),oa="tasks",ia=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="";return Object.keys(e).length>0&&(t="?".concat(ca.a.stringify(e))),na.get("".concat(mt,"/").concat(oa).concat(t))},la=function(e){return na.post("".concat(mt,"/").concat(oa),e)},sa=function(e,t){return na.put("".concat(mt,"/").concat(oa,"/").concat(t),e)},ua=function(e){return na.delete("".concat(mt,"/").concat(oa,"/").concat(e))},da=Zt.a.mark(Ea),ma=Zt.a.mark(ga),pa=Zt.a.mark(Oa),ba=Zt.a.mark(va),fa=Zt.a.mark(ja),ha=Zt.a.mark(ka);function Ea(){var e,t,a,n,r;return Zt.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,Object(ea.f)("FETCH_TASK");case 3:return e=c.sent,t=e.payload.params,c.next=7,Object(ea.d)(vt());case 7:return c.next=9,Object(ea.a)(ia,t);case 9:if(a=c.sent,console.log("resp:",a),n=a.status,r=a.data,n!==bt){c.next=17;break}return c.next=15,Object(ea.d)(le(r));case 15:c.next=19;break;case 17:return c.next=19,Object(ea.d)(se(r));case 19:return c.next=21,Object(ea.b)(500);case 21:return c.next=23,Object(ea.d)(jt());case 23:c.next=0;break;case 25:case"end":return c.stop()}}),da)}function ga(e){var t,a;return Zt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(ea.b)(500);case 3:return a=t.keyword,console.log(a),n.next=7,Object(ea.d)(ie({q:a}));case 7:case"end":return n.stop()}}),ma)}function Oa(e){var t,a,n,r,c;return Zt.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,a=t.title,n=t.description,o.next=4,Object(ea.d)(vt());case 4:return o.next=6,Object(ea.a)(la,{title:a,description:n,status:pt[0].value});case 6:if(r=o.sent,c=r.data,r.status!==ft){o.next=15;break}return o.next=11,Object(ea.d)(pe(c));case 11:return o.next=13,Object(ea.d)(S());case 13:o.next=19;break;case 15:return o.next=17,Object(ea.d)(be(c));case 17:return o.next=19,Object(ea.d)(S());case 19:return o.next=21,Object(ea.b)(1e3);case 21:return o.next=23,Object(ea.d)(jt());case 23:case"end":return o.stop()}}),pa)}function va(e){var t,a,n,r,c,o,i;return Zt.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,a=t.title,n=t.description,r=t.status,l.next=4,Object(ea.e)((function(e){return e.task.taskEditing}));case 4:return c=l.sent,l.next=7,Object(ea.d)(vt());case 7:return l.next=9,Object(ea.a)(sa,{title:a,description:n,status:r},c.id);case 9:if(o=l.sent,i=o.data,o.status!==bt){l.next=18;break}return l.next=14,Object(ea.d)(Ee(i));case 14:return l.next=16,Object(ea.d)(S());case 16:l.next=20;break;case 18:return l.next=20,Object(ea.d)(ge(i));case 20:return l.next=22,Object(ea.b)(1e3);case 22:return l.next=24,Object(ea.d)(jt());case 24:case"end":return l.stop()}}),ba)}function ja(e){var t,a,n,r;return Zt.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,a=t.id,console.log(a),c.next=5,Object(ea.d)(vt());case 5:return c.next=7,Object(ea.a)(ua,a);case 7:if(n=c.sent,r=n.data,n.status!==bt){c.next=16;break}return c.next=12,Object(ea.d)(ve(a));case 12:return c.next=14,Object(ea.d)(S());case 14:c.next=18;break;case 16:return c.next=18,Object(ea.d)(je(r));case 18:return c.next=20,Object(ea.b)(1e3);case 20:return c.next=22,Object(ea.d)(jt());case 22:case"end":return c.stop()}}),fa)}function ka(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ea.c)(Ea);case 2:return e.next=4,Object(ea.h)("FILTER_TASK",ga);case 4:return e.next=6,Object(ea.g)("ADD_TASK",Oa);case 6:return e.next=8,Object(ea.h)("UPDATE_TASK",va);case 8:return e.next=10,Object(ea.h)("DELETE_TASK",ja);case 10:case"end":return e.stop()}}),ha)}var ya=ka,Ta=Object(Yt.a)(),Ca=function(){var e=[Qt.a],t=Object(T.e)(Jt,Object(T.d)(T.a.apply(void 0,e.concat([Ta])),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));return Ta.run(ya),t}(),Sa=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderAdminRoute=function(){return ht.map((function(e,t){return console.log(ht),i.a.createElement(At,{key:t,path:e.path,component:e.component,exact:e.exact,name:e.name})}))},e.renderDefaultRoute=function(){return Et.map((function(e,t){return console.log(Et),i.a.createElement(wt,{key:t,path:e.path,component:e.component,name:e.name})}))},e}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,{store:Ca},i.a.createElement(E.a,null,i.a.createElement(f.a,{theme:_t},i.a.createElement(b.a,null),i.a.createElement(O.a,null),i.a.createElement(Kt,null),i.a.createElement(L,null),i.a.createElement(g.c,null,this.renderAdminRoute(),this.renderDefaultRoute()))))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.Fragment,null,i.a.createElement(Sa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[200,1,2]]]);
//# sourceMappingURL=main.a58c0b33.chunk.js.map