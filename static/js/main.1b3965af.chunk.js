(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],{100:function(e){e.exports=JSON.parse('[{"id":0,"mobile":548185009,"diners":2},{"id":1,"mobile":524335199,"diners":6},{"id":2,"mobile":505306599,"diners":8},{"id":3,"mobile":523460700,"diners":5},{"id":4,"mobile":545778465,"diners":2},{"id":5,"mobile":535831788,"diners":6},{"id":6,"mobile":522313989,"diners":6},{"id":7,"mobile":525706281,"diners":7},{"id":8,"mobile":544471977,"diners":4},{"id":9,"mobile":509090977,"diners":8},{"id":10,"mobile":524601191,"diners":4},{"id":11,"mobile":522542509,"diners":3},{"id":12,"mobile":503750590,"diners":2},{"id":13,"mobile":543452061,"diners":3},{"id":14,"mobile":543009519,"diners":2},{"id":15,"mobile":524041012,"diners":1},{"id":16,"mobile":542473026,"diners":2},{"id":17,"mobile":505473777,"diners":2},{"id":18,"mobile":505216716,"diners":5},{"id":19,"mobile":504005186,"diners":1},{"id":20,"mobile":528242181,"diners":3},{"id":21,"mobile":546280828,"diners":5},{"id":22,"mobile":545860810,"diners":2},{"id":23,"mobile":546763793,"diners":6},{"id":24,"mobile":543339577,"diners":8},{"id":25,"mobile":527725511,"diners":2},{"id":26,"mobile":505230077,"diners":8},{"id":27,"mobile":526750305,"diners":1},{"id":28,"mobile":544372738,"diners":4},{"id":29,"mobile":543263300,"diners":4},{"id":30,"mobile":526884446,"diners":1},{"id":31,"mobile":524343731,"diners":3},{"id":32,"mobile":542435818,"diners":5},{"id":33,"mobile":509400455,"diners":8},{"id":34,"mobile":524325919,"diners":6},{"id":35,"mobile":525914955,"diners":7},{"id":36,"mobile":507779995,"diners":1},{"id":37,"mobile":526486897,"diners":5},{"id":38,"mobile":507604488,"diners":2},{"id":39,"mobile":544481883,"diners":6},{"id":40,"mobile":522831624,"diners":3},{"id":41,"mobile":507315231,"diners":6},{"id":42,"mobile":542100905,"diners":8},{"id":43,"mobile":503635633,"diners":7},{"id":44,"mobile":543373878,"diners":5},{"id":45,"mobile":547903121,"diners":6},{"id":46,"mobile":505560815,"diners":1},{"id":47,"mobile":525441905,"diners":5},{"id":48,"mobile":526460418,"diners":2},{"id":49,"mobile":546712842,"diners":1}]')},101:function(e){e.exports=JSON.parse('[{"id":1,"size":2,"orderId":false},{"id":2,"size":2,"orderId":false},{"id":3,"size":2,"orderId":false},{"id":4,"size":2,"orderId":false},{"id":5,"size":2,"orderId":false},{"id":6,"size":3,"orderId":false},{"id":7,"size":3,"orderId":false},{"id":8,"size":3,"orderId":false},{"id":9,"size":3,"orderId":false},{"id":10,"size":4,"orderId":false},{"id":11,"size":4,"orderId":false},{"id":12,"size":5,"orderId":false},{"id":13,"size":5,"orderId":false},{"id":14,"size":6,"orderId":false},{"id":15,"size":7,"orderId":false},{"id":16,"size":7,"orderId":false},{"id":17,"size":8,"orderId":false},{"id":18,"size":8,"orderId":false}]')},135:function(e,i,t){},136:function(e,i,t){"use strict";t.r(i);var n=t(195),r=t(0),d=t.n(r),c=t(38),o=t.n(c),s=t(12),a=t(24),l=t(104),b=t(207),j=t(103),u=t.n(j),x=t(102),h=t.n(x),O=t(213),f=t(214),m=t(211),g=t(216),p=t(217),v=t(210),I=t(215),S=t(201),z=t(209),C=t(200),T=d.a.createContext({ordersQueue:[],tables:[],updateTableStatus:function(){},deleteOrder:function(e){},updateOrder:function(e){}}),k=t(208),y=t(203),E=t(187),w=[{id:"id",label:"GUEST ID"},{id:"mobile",label:"MOBILE"},{id:"diners",label:"NUMBER OF DINNERS"},{id:"tableId",label:"TABLE NUMBER"}],D=t(1);var P=function(e){var i=e.onSelectAllClick,t=e.order,n=e.orderBy,r=e.numSelected,d=e.rowCount,c=e.onRequestSort;return Object(D.jsx)(k.a,{sx:{background:"darkGray",height:"30px"},children:Object(D.jsxs)(z.a,{children:[Object(D.jsx)(v.a,{padding:"checkbox",children:Object(D.jsx)(C.a,{color:"primary",indeterminate:r>0&&r<d,checked:d>0&&r===d,onChange:i,inputProps:{"aria-label":"select all desserts"}})}),w.map((function(e,i){return Object(D.jsx)(v.a,{align:"center",padding:"normal",sortDirection:n===e.id&&t,children:Object(D.jsxs)(y.a,{sx:{fontSize:"1.5vh"},active:n===e.id,direction:n===e.id?t:"asc",onClick:(r=e.id,function(e){c(e,r)}),children:[e.label,n===e.id?Object(D.jsx)(m.a,{component:"span",sx:E.a,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))]})})};function R(e,i,t){return i[t]<e[t]?-1:i[t]>e[t]?1:0}function A(e,i){return"desc"===e?function(e,t){return R(e,t,i)}:function(e,t){return-R(e,t,i)}}function B(e,i){var t=e.map((function(e,i){return[e,i]}));return t.sort((function(e,t){var n=i(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}var M=t(27),L=t(70),F=t(212),N=t(71),U=t(196),J=t(95),W=t.n(J),_=t(96),Q=t.n(_),q=t(97),G=t.n(q);var H=function(e){var i=e.numSelected;return Object(D.jsxs)(F.a,{sx:Object(M.a)({pl:{sm:2},pr:{xs:1,sm:1}},i>0&&{bgcolor:function(e){return Object(L.a)(e.palette.primary.main,e.palette.action.activatedOpacity)}}),children:[i>0?Object(D.jsxs)(N.a,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[i," selected"]}):Object(D.jsx)(N.a,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Orders"}),i>0?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(U.a,{title:"Confirm",children:Object(D.jsx)(O.a,{children:Object(D.jsx)(W.a,{})})}),Object(D.jsx)(U.a,{title:"Clear",children:Object(D.jsx)(O.a,{children:Object(D.jsx)(Q.a,{})})})]}):Object(D.jsx)(U.a,{title:"Filter list",children:Object(D.jsx)(O.a,{children:Object(D.jsx)(G.a,{})})})]})},K=t(198),V=t(205);function Z(){var e=Object(r.useContext)(T),i=e.ordersQueue,t=void 0===i?[]:i,n=e.tables,d=void 0===n?[]:n,c=e.updateTableStatus,o=Object(r.useState)("asc"),a=Object(s.a)(o,2),l=a[0],b=a[1],j=Object(r.useState)("id"),u=Object(s.a)(j,2),x=u[0],h=u[1],O=Object(r.useState)([]),k=Object(s.a)(O,2),y=k[0],E=k[1],w=Object(r.useState)(0),R=Object(s.a)(w,2),M=R[0],L=R[1],F=Object(r.useState)(5),U=Object(s.a)(F,2),J=U[0],W=U[1],_=M>0?Math.max(0,(1+M)*J-t.length):0;return Object(D.jsx)(m.a,{sx:{width:"100%"},children:Object(D.jsxs)(f.a,{sx:{width:"100%",mb:2},children:[Object(D.jsx)(H,{numSelected:y.length}),Object(D.jsx)(I.a,{children:Object(D.jsxs)(g.a,{"aria-labelledby":"tableTitle",size:"small",children:[Object(D.jsx)(P,{numSelected:y.length,order:l,orderBy:x,onSelectAllClick:function(e){if(e.target.checked){var i=t.map((function(e){return e.id}));E(i)}else E([])},onRequestSort:function(e,i){b(x===i&&"asc"===l?"desc":"asc"),h(i)},rowCount:t.length}),Object(D.jsxs)(p.a,{children:[B(t,A(l,x)).slice(M*J,M*J+J).map((function(e,i){var t,n,r=(n=e.id,-1!==y.indexOf(n)),o="enhanced-table-checkbox-".concat(i),s=null===(t=d.find((function(i){return i.orderId===e.id})))||void 0===t?void 0:t.id;return Object(D.jsxs)(z.a,{hover:!0,onClick:function(i){return function(e,i){e.preventDefault(),e.stopPropagation();var t=y.indexOf(i),n=[];-1===t?n=n.concat(y,i):0===t?n=n.concat(y.slice(1)):t===y.length-1?n=n.concat(y.slice(0,-1)):t>0&&(n=n.concat(y.slice(0,t),y.slice(t+1))),E(n)}(i,e.id)},role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:[Object(D.jsx)(v.a,{padding:"checkbox",children:Object(D.jsx)(C.a,{color:"primary",checked:r,inputProps:{"aria-labelledby":o}})}),Object(D.jsx)(v.a,{align:"center",component:"th",id:o,children:e.id}),Object(D.jsx)(v.a,{align:"center",children:e.mobile}),Object(D.jsx)(v.a,{align:"center",children:e.diners}),s?Object(D.jsx)(v.a,{align:"center",children:s}):Object(D.jsx)(v.a,{padding:"normal",align:"center",children:Object(D.jsx)(K.a,{sx:{padding:"0",width:"100%"},id:"outlined-select-table",select:!0,label:"Table ID",value:-1,onChange:function(i){i.stopPropagation(),i.preventDefault(),c(i.target.value,e.id)},size:"small",children:d.filter((function(i){return!i.orderId&&i.size===e.diners})).map((function(e){return Object(D.jsx)(V.a,{value:e.id,children:Object(D.jsxs)(N.a,{sx:{fontSize:"1.6vh"},children:["Table ID ",e.id,"/",e.size]})},e.id)}))})})]},e.id)})),_>0&&Object(D.jsx)(z.a,{style:{height:33*_},children:Object(D.jsx)(v.a,{colSpan:6})})]})]})}),Object(D.jsx)(S.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:J,page:M,onPageChange:function(e,i){L(i)},onRowsPerPageChange:function(e){W(parseInt(e.target.value,10)),L(0)}})]})})}var X=t(5),Y=t(206),$=t(197),ee=t(220),ie=t(202),te=t(192),ne=t(193),re=t(194),de=t(99),ce=t.n(de),oe=Object(X.a)(f.a)((function(e){var i=e.theme;return Object(M.a)(Object(M.a)({},i.typography.body1),{},{textAlign:"center",color:"white",height:"10vh",fontSize:"1.3vh",borderRadius:"30px",boxSizing:"border-box"})}));function se(){var e=r.useContext(T).tables,i=void 0===e?[]:e,t=r.useState(null),n=Object(s.a)(t,2),d=n[0],c=n[1],o=function(e){c(e.currentTarget)},a=function(){c(null)},l=Boolean(d),b=l?"simple-popover":void 0;return Object(D.jsx)(Y.a,{container:!0,rowSpacing:3,columnSpacing:{xs:1,sm:2,md:3},children:i.map((function(e,i){var t=e.id,n=e.size,r=e.orderId;return Object(D.jsxs)(Y.a,{item:!0,xs:n+1,children:[Object(D.jsx)(f.a,{sx:{background:"brown"},elevation:24,children:Object(D.jsxs)(oe,{onClick:o,sx:{background:"".concat(r||0===r?"red":"green")},children:[Object(D.jsxs)(N.a,{children:["ID:",t]}),Object(D.jsxs)(N.a,{sx:{fontSize:"1.7vh",fontWeight:500},children:["SIZE:",n]}),(r||0===r)&&Object(D.jsxs)(N.a,{sx:{fontSize:"1.7vh",fontWeight:500},children:["ORDER ID:",r]})]})}),Object(D.jsx)($.a,{elevation:0,id:b,open:l,anchorEl:d,onClose:a,anchorOrigin:{vertical:"top",horizontal:"left"},children:Object(D.jsx)(ee.a,{children:Object(D.jsx)(ie.a,{disablePadding:!0,children:Object(D.jsxs)(te.a,{children:[Object(D.jsx)(ne.a,{children:Object(D.jsx)(ce.a,{})}),Object(D.jsx)(re.a,{primary:"Release table"})]})})})})]},t)}))})}var ae=t(100),le=t(101),be="DELETE_ORDER",je="UPDATE_ORDER",ue="UPDATE_TABLE_STATUS",xe=function(e,i){switch(i.type){case be:case je:return;case ue:return function(e,i){return Object(M.a)(Object(M.a)({},i),{},{tables:i.tables.map((function(i){return e.tableId===i.id?Object(M.a)(Object(M.a)({},i),{},{orderId:e.orderId}):i}))})}(i,e);default:return e}},he=function(e){var i=Object(r.useReducer)(xe,{ordersQueue:ae,tables:le}),t=Object(s.a)(i,2),n=t[0],d=t[1];return Object(D.jsx)(T.Provider,{value:Object(M.a)({updateTableStatus:function(e,i){d({type:ue,tableId:e,orderId:i})},deleteOrder:function(e){setTimeout((function(){d({type:be,orderId:e})}),700)},updateOrder:function(e){setTimeout((function(){d({type:je,order:e})}),700)}},n),children:e.children})},Oe=function(){var e=Object(r.useContext)(T).tables,i=void 0===e?[]:e,t=Object(r.useMemo)((function(){return i.filter((function(e){return!1===e.orderId})).length}),[i]),n=Object(r.useMemo)((function(){return i.length-t}),[t,i]);return console.log("availableTables",t),Object(D.jsxs)(m.a,{padding:0,sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},component:"div",children:[Object(D.jsx)(m.a,{m:1,children:Object(D.jsxs)(N.a,{sx:{color:"green",fontWeight:700,lineHeight:"3vh",fontSize:"2vh"},children:["AVAILABLE TABLES: (",t,")"]})}),Object(D.jsx)(m.a,{m:1,children:Object(D.jsxs)(N.a,{sx:{color:"red",fontWeight:700,lineHeight:"3vh",fontSize:"2vh"},children:["TAKEN TABLES: (",n,")"]})})]})},fe=Object(r.createContext)({toggleColorMode:function(){}});function me(){var e=Object(a.a)(),i=Object(r.useContext)(fe);return Object(D.jsx)(he,{children:Object(D.jsxs)(m.a,{sx:{width:"100vw",height:"100vh"},children:[Object(D.jsxs)(m.a,{sx:{display:"flex",width:"100%",alignItems:"center",justifyContent:"flex-start",bgcolor:"background.default",color:"text.primary",p:3},children:[e.palette.mode," mode",Object(D.jsx)(O.a,{sx:{ml:1},onClick:i.toggleColorMode,color:"inherit",children:"dark"===e.palette.mode?Object(D.jsx)(h.a,{}):Object(D.jsx)(u.a,{})})]}),Object(D.jsxs)(m.a,{component:"div",sx:{bgcolor:"background.default",flexDirection:"row",display:"flex",padding:"50px",boxSizing:"border-box"},children:[Object(D.jsx)(m.a,{component:"div",sx:{flex:4,boxSizing:"border-box",height:"fit-content"},children:Object(D.jsx)(Z,{})}),Object(D.jsx)(f.a,{elevation:3,component:"div",sx:{padding:"10px",flex:3,boxSizing:"border-box",marginRight:"5vw",marginLeft:"5vw"},children:Object(D.jsx)(se,{numberOfTables:17})}),Object(D.jsx)(f.a,{elevation:3,component:"div",sx:{flex:2,boxSizing:"border-box",height:"fit-content"},children:Object(D.jsx)(Oe,{})})]})]})})}var ge=function(){var e=Object(r.useState)("light"),i=Object(s.a)(e,2),t=i[0],n=i[1],d=Object(r.useMemo)((function(){return{toggleColorMode:function(){n((function(e){return"light"===e?"dark":"light"}))}}}),[]),c=Object(r.useMemo)((function(){return Object(l.a)({palette:{mode:t}})}),[t]);return Object(D.jsx)(fe.Provider,{value:d,children:Object(D.jsx)(b.a,{theme:c,children:Object(D.jsx)(me,{})})})},pe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,221)).then((function(i){var t=i.getCLS,n=i.getFID,r=i.getFCP,d=i.getLCP,c=i.getTTFB;t(e),n(e),r(e),d(e),c(e)}))};t(135);o.a.render(Object(D.jsxs)(d.a.StrictMode,{children:[Object(D.jsx)(n.a,{}),Object(D.jsx)(ge,{})]}),document.getElementById("root")),pe()}},[[136,1,2]]]);
//# sourceMappingURL=main.1b3965af.chunk.js.map