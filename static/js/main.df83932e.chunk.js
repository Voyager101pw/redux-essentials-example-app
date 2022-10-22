(this["webpackJsonpredux-essentials-example"]=this["webpackJsonpredux-essentials-example"]||[]).push([[0],{1321:function(e,t){},1323:function(e,t,n){"use strict";n.r(t);var r=n(8),s=n(17),a=n(3),c=n.n(a),i=n(76),o=n.n(i),u=(n(145),n(20)),d=n(15),j=n(10),l=n(12),b=n(5),p=n(18),O=n(85),f=["body"];function h(e){return m.apply(this,arguments)}function m(){return m=Object(s.a)(Object(r.a)().mark((function e(t){var n,s,a,c,i,o,u,d=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:{},s=n.body,a=Object(O.a)(n,f),c={"Content-Type":"application/json"},i=Object(p.a)(Object(p.a)({method:s?"POST":"GET"},a),{},{headers:Object(p.a)(Object(p.a)({},c),a.headers)}),s&&(i.body=JSON.stringify(s)),e.prev=4,e.next=7,window.fetch(t,i);case 7:return u=e.sent,e.next=10,u.json();case 10:if(o=e.sent,!u.ok){e.next=13;break}return e.abrupt("return",{status:u.status,data:o,headers:u.headers,url:u.url});case 13:throw new Error(u.statusText);case 16:return e.prev=16,e.t0=e.catch(4),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:o));case 19:case"end":return e.stop()}}),e,null,[[4,16]])}))),m.apply(this,arguments)}h.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h(e,Object(p.a)(Object(p.a)({},t),{},{method:"GET"}))},h.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(e,Object(p.a)(Object(p.a)({},n),{},{body:t}))};var x=Object(b.c)("notifications/fetchNotifications",function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var s,a,c,i,o,u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.getState,a=S(s()),c=Object(l.a)(a,1),i=c[0],o=i?i.date:"",e.next=6,h.get("/fakeApi/notifications?since=".concat(o));case 6:return u=e.sent,e.abrupt("return",u.data);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(b.d)({sortComparer:function(e,t){return t.date.localeCompare(e.date)}}),g=Object(b.e)({name:"notifications",initialState:v.getInitialState(),reducers:{allNotificationsRead:function(e,t){Object.values(e.entities).forEach((function(e){e.read=!0}))}},extraReducers:function(e){e.addCase(x.fulfilled,(function(e,t){v.upsertMany(e,t.payload),Object.values(e.entities).forEach((function(e){e.isNew=!e.read}))}))}}),y=g.actions.allNotificationsRead,w=g.reducer,S=v.getSelectors((function(e){return e.notifications})).selectAll,N=n(4),k=function(){var e,t=Object(j.d)(),n=Object(j.e)(S).filter((function(e){return e.isNew})).length;return n>0&&(e=Object(N.jsx)("span",{className:"badge",children:n})),Object(N.jsx)("nav",{children:Object(N.jsxs)("section",{children:[Object(N.jsx)("h1",{children:"Redux Essentials Example"}),Object(N.jsxs)("div",{className:"navContent",children:[Object(N.jsxs)("div",{className:"navLinks",children:[Object(N.jsx)(u.b,{to:"/",children:"Posts"}),Object(N.jsx)(u.b,{to:"/users",children:"Users"}),Object(N.jsxs)(u.b,{to:"/notifications",children:["Notifications ",e]})]}),Object(N.jsx)("button",{className:"button",onClick:function(){t(x())},children:"Refresh Notifications"})]})]})})},P=n(86),C=n.n(P),I=n(28),A=Object(b.d)({sortComparer:function(e,t){return t.date.localeCompare(e.date)}}),T=A.getInitialState({status:"idle",error:null}),q=Object(b.c)("posts/fetchPosts",Object(s.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/fakeApi/posts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),E=Object(b.c)("posts/addNewPost",function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/fakeApi/posts",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=Object(b.e)({name:"posts",initialState:T,reducers:{reactionAdded:function(e,t){var n=t.payload,r=n.postId,s=n.reaction,a=e.entities[r];a&&a.reactions[s]++},postUpdated:function(e,t){var n=t.payload,r=n.id,s=n.title,a=n.content,c=e.entities[r];c&&(c.title=s,c.content=a)}},extraReducers:function(e){e.addCase(q.pending,(function(e,t){e.status="loading"})).addCase(q.fulfilled,(function(e,t){e.status="succeeded",A.upsertMany(e,t.payload)})).addCase(E.fulfilled,A.addOne).addCase(q.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),U=F.actions,M=(U.postAdded,U.postUpdated,U.reactionAdded),R=F.reducer,L=A.getSelectors((function(e){return e.posts})),D=L.selectAll,J=(L.selectById,L.selectIds,Object(I.a)([D,function(e,t){return t}],(function(e,t){return e.filter((function(e){return e.user===t}))}))),B=n(35),G=n(135),K=n(23),Q=Object(G.a)({reducerPath:"api",baseQuery:Object(K.d)({baseUrl:"/fakeApi"}),tagTypes:["Post"],endpoints:function(e){return{getPosts:e.query({query:function(){return"/posts"},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return["Post"].concat(Object(B.a)(e.map((function(e){return{type:"Post",id:e.id}}))))}}),getPost:e.query({query:function(e){return"/posts/".concat(e)},providesTags:function(e,t,n){return[{type:"Post",id:n}]}}),addNewPost:e.mutation({query:function(e){return{url:"/posts",method:"POST",body:e}},invalidatesTags:["Post"]}),editPost:e.mutation({query:function(e){return{url:"/posts/".concat(e.id),method:"PATCH",body:e}},invalidatesTags:function(e,t,n){return[{type:"Post",id:n.id}]}})}}}),W=Q.useGetPostsQuery,z=Q.useGetPostQuery,H=Q.useAddNewPostMutation,V=Q.useEditPostMutation,X=Object(b.d)(),Y=X.getInitialState(),Z=Object(b.c)("users/fetchUsers",Object(s.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/fakeApi/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),$=Object(b.e)({name:"users",initialState:Y,reducers:{},extraReducers:function(e){e.addCase(Z.fulfilled,X.setAll)}}).reducer,_=X.getSelectors((function(e){return e.users})),ee=_.selectAll,te=_.selectById,ne=function(e){var t=e.userId,n=Object(j.e)((function(e){return te(e,t)}));return Object(N.jsxs)("span",{children:["by ",n?n.name:"Unknown author"]})},re=n(107),se=n(108),ae=function(e){var t=e.timestamp,n="";if(t){var r=Object(re.a)(t),s=Object(se.a)(r);n="".concat(s," ago")}return Object(N.jsxs)("span",{title:t,children:["\xa0 ",Object(N.jsx)("i",{children:n})]})},ce={thumbsUp:"\ud83d\udc4d",hooray:"\ud83c\udf89",heart:"\u2764\ufe0f",rocket:"\ud83d\ude80",eyes:"\ud83d\udc40"},ie=function(e){var t=e.post,n=Object(j.d)(),r=Object.entries(ce).map((function(e){var r=Object(l.a)(e,2),s=r[0],a=r[1];return Object(N.jsxs)("button",{type:"button",className:"muted-button reaction-button",onClick:function(){return n(M({postId:t.id,reaction:s}))},children:[a," ",t.reactions[s]]},s)}));return Object(N.jsx)("div",{children:r})},oe=function(e){var t=e.text,n=void 0===t?"":t,r=e.size,s=void 0===r?"5em":r,a=n?Object(N.jsx)("h4",{children:n}):null;return Object(N.jsxs)("div",{className:"spinner",children:[a,Object(N.jsx)("div",{className:"loader",style:{height:s,width:s}})]})},ue=function(e){var t=e.post;return Object(N.jsxs)("article",{className:"post-excerpt",children:[Object(N.jsx)("h3",{children:t.title}),Object(N.jsxs)("div",{children:[Object(N.jsx)(ne,{userId:t.user}),Object(N.jsx)(ae,{timestamp:t.date})]}),Object(N.jsx)("p",{className:"post-content",children:t.content.substring(0,100)}),Object(N.jsx)(ie,{post:t}),Object(N.jsx)(u.b,{to:"/posts/".concat(t.id),className:"button muted-button",children:"View Post"})]},t.id)},de=function(){var e,t=W(),n=t.data,r=void 0===n?[]:n,s=t.isLoading,c=t.isFetching,i=t.isSuccess,o=t.isError,u=t.error,d=t.refetch,j=Object(a.useMemo)((function(){var e=r.slice();return e.sort((function(e,t){return t.date.localeCompare(e.date)})),e}),[r]);if(s)e=Object(N.jsx)(oe,{text:"Loading..."});else if(i){var l=j.map((function(e){return Object(N.jsx)(ue,{post:e},e.id)})),b=C()("posts-container",{disabled:c});e=Object(N.jsx)("div",{className:b,children:l})}else o&&(e=Object(N.jsx)("div",{children:u.toString()}));return Object(N.jsxs)("section",{className:"posts-list",children:[Object(N.jsx)("h2",{children:"Posts"}),Object(N.jsx)("button",{onClick:d,children:"Refetch Posts"}),e]})},je=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1],b=Object(a.useState)(""),p=Object(l.a)(b,2),O=p[0],f=p[1],h=Object(a.useState)("idle"),m=Object(l.a)(h,2),x=(m[0],m[1]),v=H(),g=Object(l.a)(v,2),y=g[0],w=g[1].isLoading,S=Object(j.e)(ee),k=[n,u,O].every(Boolean)&&!w,P=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=15;break}return e.prev=1,e.next=4,y({title:n,content:u,user:O}).unwrap();case 4:c(""),d(""),f(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Failed to save the post: ",e.t0);case 12:return e.prev=12,x("idle"),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),C=S.map((function(e){return Object(N.jsx)("option",{value:e.id,children:e.name},e.id)}));return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"Add a New Post"}),Object(N.jsxs)("form",{children:[Object(N.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(N.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",value:n,onChange:function(e){return c(e.target.value)}}),Object(N.jsx)("label",{htmlFor:"postAuthor",children:"Author:"}),Object(N.jsxs)("select",{id:"postAuthor",value:O,onChange:function(e){return f(e.target.value)},children:[Object(N.jsx)("option",{value:""}),C]}),Object(N.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(N.jsx)("textarea",{id:"postContent",name:"postContent",value:u,onChange:function(e){return d(e.target.value)}}),Object(N.jsx)("button",{type:"button",onClick:P,disabled:!k,children:"Save Post"})]})]})},le=function(e){var t,n=e.match.params.postId,r=z(n),s=r.data,a=void 0===s?[]:s,c=r.isFetching,i=r.isSuccess;return c?t=Object(N.jsx)(oe,{text:"loading"}):i&&(t=Object(N.jsxs)("article",{className:"post",children:[Object(N.jsx)("h2",{children:a.title}),Object(N.jsxs)("div",{children:[Object(N.jsx)(ne,{userId:a.user}),Object(N.jsx)(ae,{timestamp:a.date})]}),Object(N.jsx)("p",{className:"post-content",children:a.content}),Object(N.jsx)(ie,{post:a}),Object(N.jsx)(u.b,{to:"/editPost/".concat(a.id),className:"button",style:{marginTop:"15px"},children:"Edit Post"})]})),Object(N.jsx)("section",{children:t})},be=function(e){var t=e.match.params.postId,n=z(t).data,c=V(),i=Object(l.a)(c,2),o=i[0],u=(i[1].isLoading,Object(a.useState)(n.title)),j=Object(l.a)(u,2),b=j[0],p=j[1],O=Object(a.useState)(n.content),f=Object(l.a)(O,2),h=f[0],m=f[1],x=Object(d.f)(),v=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b||!h){e.next=4;break}return e.next=3,o({id:t,title:b,content:h});case 3:x.push("/posts/".concat(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"Edit Post"}),Object(N.jsxs)("form",{children:[Object(N.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(N.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",placeholder:"What's on your mind?",value:b,onChange:function(e){return p(e.target.value)}}),Object(N.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(N.jsx)("textarea",{id:"postContent",name:"postContent",value:h,onChange:function(e){return m(e.target.value)}})]}),Object(N.jsx)("button",{type:"button",onClick:v,children:"Save Post"})]})},pe=function(e){var t=e.match.params.userId,n=Object(j.e)((function(e){return te(e,t)})),r=Object(j.e)((function(e){return J(e,t)})).map((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)(u.b,{to:"/posts/".concat(e.id),children:e.title})},e.id)}));return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:n.name}),Object(N.jsx)("ul",{children:r})]})},Oe=function(){var e=Object(j.e)(ee).map((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)(u.b,{to:"/users/".concat(e.id),children:e.name})},e.id)}));return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"Users"}),Object(N.jsx)("ul",{children:e})]})},fe=function(){var e=Object(j.d)(),t=Object(j.e)(S),n=Object(j.e)(ee);Object(a.useLayoutEffect)((function(){e(y())}));var r=t.map((function(e){var r=Object(re.a)(e.date),s=Object(se.a)(r),a=n.find((function(e){return e.id===t.user}))||{name:"Unknown User"},c=C()("notification",{new:e.isNew});return Object(N.jsxs)("div",{className:c,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("b",{children:a.name})," ",e.message]}),Object(N.jsx)("div",{title:e.date,children:Object(N.jsxs)("i",{children:[s," ago"]})})]},e.id)}));return Object(N.jsxs)("section",{className:"notificationList",children:[Object(N.jsx)("h2",{children:"Notification"}),r]})};var he,me=function(){return Object(N.jsxs)(u.a,{children:[Object(N.jsx)(k,{}),Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(d.c,{children:[Object(N.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(je,{}),Object(N.jsx)(de,{})]})}}),Object(N.jsx)(d.a,{exact:!0,path:"/posts/:postId",component:le}),Object(N.jsx)(d.a,{exact:!0,path:"/editPost/:postId",component:be}),Object(N.jsx)(d.a,{exact:!0,path:"/users",component:Oe}),Object(N.jsx)(d.a,{exact:!0,path:"/users/:userId",component:pe}),Object(N.jsx)(d.a,{exact:!0,path:"/notifications",component:fe})]})})]})},xe=n(41),ve=Object(b.a)({reducer:Object(xe.a)({posts:R,users:$,notifications:w},Q.reducerPath,Q.reducer),middleware:function(e){return e().concat(Q.middleware)}}),ge=n(33),ye=n(81),we=n(29),Se=n(37),Ne=n.n(Se),ke=n(106),Pe=n.n(ke),Ce=n(139),Ie=n(140),Ae=["id"],Te=2e3,qe=Pe()(),Ee=localStorage.getItem("randomTimestampSeed");function Fe(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(qe()*(t-e+1))+e}Ee?he=new Date(Ee):(Ee=(he=new Date).toISOString(),localStorage.setItem("randomTimestampSeed",Ee)),qe=Pe()(Ee),Object(Ie.setRandom)(qe),Ne.a.seed(he.getTime());for(var Ue,Me=function(e){return e[Fe(0,e.length-1)]},Re=Object(we.factory)({user:{id:Object(we.primaryKey)(b.n),firstName:String,lastName:String,name:String,username:String,posts:Object(we.manyOf)("post")},post:{id:Object(we.primaryKey)(b.n),title:String,date:String,content:String,reactions:Object(we.oneOf)("reaction"),comments:Object(we.manyOf)("comment"),user:Object(we.oneOf)("user")},comment:{id:Object(we.primaryKey)(String),date:String,text:String,post:Object(we.oneOf)("post")},reaction:{id:Object(we.primaryKey)(b.n),thumbsUp:Number,hooray:Number,heart:Number,rocket:Number,eyes:Number,post:Object(we.oneOf)("post")}}),Le=function(){var e=Ne.a.name.firstName(),t=Ne.a.name.lastName();return{firstName:e,lastName:t,name:"".concat(e," ").concat(t),username:Ne.a.internet.userName()}},De=0;De<3;De++)for(var Je=Re.user.create(Le()),Be=0;Be<3;Be++){var Ge=(Ue=Je,{title:Ne.a.lorem.words(),date:Ne.a.date.recent(7).toISOString(),user:Ue,content:Ne.a.lorem.paragraphs(),reactions:Re.reaction.create()});Re.post.create(Ge)}var Ke=function(e){return Object(p.a)(Object(p.a)({},e),{},{user:e.user.id})},Qe=[ge.e.get("/fakeApi/posts",(function(e,t,n){var r=Re.post.getAll().map(Ke);return t(n.delay(Te),n.json(r))})),ge.e.post("/fakeApi/posts",(function(e,t,n){var r=e.body;if("error"===r.content)return t(n.delay(Te),n.status(500),n.json("Server error saving this post!"));r.date=(new Date).toISOString();var s=Re.user.findFirst({where:{id:{equals:r.user}}});r.user=s,r.reactions=Re.reaction.create();var a=Re.post.create(r);return t(n.delay(Te),n.json(Ke(a)))})),ge.e.get("/fakeApi/posts/:postId",(function(e,t,n){var r=Re.post.findFirst({where:{id:{equals:e.params.postId}}});return t(n.delay(Te),n.json(Ke(r)))})),ge.e.patch("/fakeApi/posts/:postId",(function(e,t,n){var r=e.body,s=(r.id,Object(O.a)(r,Ae)),a=Re.post.update({where:{id:{equals:e.params.postId}},data:s});return t(n.delay(Te),n.json(Ke(a)))})),ge.e.get("/fakeApi/posts/:postId/comments",(function(e,t,n){var r=Re.post.findFirst({where:{id:{equals:e.params.postId}}});return t(n.delay(Te),n.json({comments:r.comments}))})),ge.e.post("/fakeApi/posts/:postId/reactions",(function(e,t,n){var r=e.params.postId,s=e.body.reaction,a=Re.post.findFirst({where:{id:{equals:r}}}),c=Re.post.update({where:{id:{equals:r}},data:{reactions:Object(p.a)(Object(p.a)({},a.reactions),{},Object(xe.a)({},s,a.reactions[s]+=1))}});return t(n.delay(Te),n.json(Ke(c)))})),ge.e.get("/fakeApi/notifications",(function(e,t,n){var r=Xe(void 0,Fe(1,5),Re);return t(n.delay(Te),n.json(r))})),ge.e.get("/fakeApi/users",(function(e,t,n){return t(n.delay(Te),n.json(Re.user.getAll()))}))],We=ye.setupWorker.apply(void 0,Qe),ze=new Ce.Server("ws://localhost"),He=function(e,t){!function(e,t){e.send(JSON.stringify(t))}(e,{type:"notifications",payload:Xe(t,Fe(1,5),Re)})};ze.on("connection",(function(e){e,e.on("message",(function(t){var n=JSON.parse(t);if("notifications"===n.type){var r=n.payload;He(e,r)}}))}));var Ve=["poked you","says hi!","is glad we're friends","sent you a gift"];function Xe(e,t,n){var r,s=new Date;e?r=Object(re.a)(e):(r=new Date(s.valueOf())).setMinutes(r.getMinutes()-15);var a=Object(B.a)(Array(t)).map((function(){var e=Me(n.user.getAll()),t=Me(Ve);return{id:Object(b.n)(),date:Ne.a.date.between(r,s).toISOString(),message:t,user:e.id}}));return a}function Ye(){return(Ye=Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We.start({onUnhandledRequest:"bypass"});case 2:ve.dispatch(Z()),o.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(j.a,{store:ve,children:Object(N.jsx)(me,{})})}),document.getElementById("root"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){Ye.apply(this,arguments)}()},145:function(e,t,n){}},[[1323,1,2]]]);
//# sourceMappingURL=main.df83932e.chunk.js.map