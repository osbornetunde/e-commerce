(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{38:function(e,t,a){e.exports=a(77)},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),l=a(7),o=a(3),s=a(33),m=a(9),u=(a(47),a(23)),p=a(34),d=a.n(p),b=a(4),g="SET_CURRENT_USER",f={currentUser:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(b.a)({},e,{currentUser:t.payload});default:return e}},E={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEMS:"ADD_ITEMS",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},v=a(37),y=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(v.a)(e),[Object(b.a)({},t,{quantity:1})])},O=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity-1}):e}))},k={hidden:!0,cartItems:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.TOGGLE_CART_HIDDEN:return Object(b.a)({},e,{hidden:!e.hidden});case E.ADD_ITEMS:return Object(b.a)({},e,{cartItems:y(e.cartItems,t.payload)});case E.CLEAR_ITEM_FROM_CART:return Object(b.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case E.REMOVE_ITEM:return Object(b.a)({},e,{cartItems:O(e.cartItems,t.payload)});default:return e}},j={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},N={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U={key:"root",storage:d.a,whitelist:["cart"]},I=Object(m.c)({user:h,cart:w,directory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return t.type,e},shops:C}),T=Object(u.a)(U,I);var S=Object(m.d)(T,m.a.apply(void 0,[])),x=Object(u.b)(S),R=(a(50),a(5)),A=a.n(R),M=a(10),_=a(12),B=a(2),P=(a(52),a(11)),D=(a(53),function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.linkUrl,i=(e.match,Object(_.g)()),l=Object(_.h)().url;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return i.push("".concat(l).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"title"},"SHOP NOW")))}),G=(a(55),Object(B.a)([function(e){return e.directory}],(function(e){return e.sections}))),H=Object(B.b)({sections:G}),W=Object(o.b)(H)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(P.a)(e,["id"]);return r.a.createElement(D,Object.assign({key:t},a))})))})),J=(a(56),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(W,null))}),q=(a(57),a(58),a(59),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(P.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),L=function(){return{type:E.TOGGLE_CART_HIDDEN}},V=function(e){return{type:E.ADD_ITEMS,payload:e}},z=Object(o.b)(null,{AddItemToCart:V})((function(e){var t=e.item,a=e.AddItemToCart,n=t.imageUrl,c=t.price,i=t.name;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"price"},c)),r.a.createElement(q,{inverted:!0,onClick:function(){return a(t)}}," ","Add To Cart"))})),F=function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(z,{key:e.id,item:e})}))))},K=Object(B.a)([function(e){return e.shops}],(function(e){return e.collections})),Q=Object(B.a)([K],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),X=(a(60),Object(B.b)({collections:Q})),Y=Object(o.b)(X)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collction-overview"},t.map((function(e){var t=e.id,a=Object(P.a)(e,["id"]);return r.a.createElement(F,Object.assign({key:t},a))})))})),Z=(a(61),Object(_.i)(Object(o.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(B.a)([K],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collection;console.log("collection",t);var a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(z,{key:e.id,item:e})}))))})))),$=function(){var e=Object(_.h)().path;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(_.b,{exact:!0,path:"".concat(e)},r.a.createElement(Y,null)),r.a.createElement(_.b,{path:"".concat(e,"/:collectionId")},r.a.createElement(Z,null)))},ee=a(16),te=a.n(ee),ae=(a(62),a(65),function(){var e=Object(M.a)(A.a.mark((function e(t,a){var n,r,c,i,l;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=re.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(r=e.sent,console.log("=========>",r),r.exists){e.next=18;break}return c=t.displayName,i=t.email,l=new Date,e.prev=10,e.next=13,n.set(Object(b.a)({displayName:c,email:i,createdAt:l},a));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("error creating user",e.t0);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,a){return e.apply(this,arguments)}}());te.a.initializeApp({apiKey:"AIzaSyAOR1m5TJXXo6_g3JK_QTUKfa5dO_7u6h8",authDomain:"e-commerce-f578c.firebaseapp.com",databaseURL:"https://e-commerce-f578c.firebaseio.com",projectId:"e-commerce-f578c",storageBucket:"e-commerce-f578c.appspot.com",messagingSenderId:"187131380630",appId:"1:187131380630:web:026885124477427d6b53b7"});var ne=te.a.auth(),re=te.a.firestore(),ce=new te.a.auth.GoogleAuthProvider;ce.setCustomParameters({prompt:"select_account"});var ie=function(){return ne.signInWithPopup(ce)};te.a,a(67);function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var se=r.a.createElement("title",null,"Group"),me=r.a.createElement("desc",null,"Created with Sketch."),ue=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),pe=function(e){var t=e.svgRef,a=e.title,n=oe(e,["svgRef","title"]);return r.a.createElement("svg",le({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?se:a?r.a.createElement("title",null,a):null,me,ue)},de=r.a.forwardRef((function(e,t){return r.a.createElement(pe,le({svgRef:t},e))}));a.p,a(68);function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ge(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var fe=r.a.createElement("g",null),he=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ve=r.a.createElement("g",null),ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),ke=r.a.createElement("g",null),we=r.a.createElement("g",null),je=r.a.createElement("g",null),Ne=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Te=r.a.createElement("g",null),Se=r.a.createElement("g",null),xe=function(e){var t=e.svgRef,a=e.title,n=ge(e,["svgRef","title"]);return r.a.createElement("svg",be({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),fe,he,Ee,ve,ye,Oe,ke,we,je,Ne,Ce,Ue,Ie,Te,Se)},Re=r.a.forwardRef((function(e,t){return r.a.createElement(xe,be({svgRef:t},e))})),Ae=(a.p,function(e){return e.cart}),Me=Object(B.a)([Ae],(function(e){return e.cartItems})),_e=Object(B.a)([Ae],(function(e){return e.hidden})),Be=Object(B.a)([Me],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Pe=Object(B.a)([Me],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),De=Object(B.b)({itemCount:Be}),Ge=Object(o.b)(De,{toggleCartHidden:L})((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Re,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),He=(a(69),a(70),function(e){var t=e.item,a=t.price,n=t.name,c=t.imageUrl,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:c,alt:"items"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"}," ",i," x $",a)))}),We=Object(B.b)({cartItems:Me}),Je=Object(o.b)(We,{toggleCartHidden:L})((function(e){var t=e.cartItems,a=e.toggleCartHidden,n=Object(_.g)();return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(He,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(q,{onClick:function(){n.push("/checkout"),a()}},"CHECKOUT"))})),qe=Object(B.a)([function(e){return e.user}],(function(e){return e.currentUser})),Le=Object(B.b)({currentUser:qe,cartHidden:_e}),Ve=Object(o.b)(Le)((function(e){var t=e.currentUser,a=e.cartHidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(de,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"Shop"),r.a.createElement(l.b,{className:"option",to:"/contact"},"Contact"),t?r.a.createElement("div",{className:"option",onClick:function(){return ne.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGNIN"),r.a.createElement(Ge,null)),a?null:r.a.createElement(Je,null))})),ze=(a(71),a(13)),Fe=(a(72),a(73),function(e){var t=e.handleChange,a=e.label,n=Object(P.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),Ke=function(){var e=Object(n.useState)(""),t=Object(ze.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(ze.a)(i,2),o=l[0],s=l[1],m=function(){var e=Object(M.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,ne.signInWithEmailAndPassword(a,o);case 4:c(""),s(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(M.a)(A.a.mark((function e(t){var a,n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target,n=a.value,"email"===(r=a.name)&&c(n),"password"===r&&s(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:m},r.a.createElement(Fe,{type:"email",name:"email",value:a,required:!0,id:"email",handleChange:u,label:"email"}),r.a.createElement(Fe,{type:"password",name:"password",value:o,required:!0,id:"password",handleChange:u,label:"password"}),r.a.createElement("div",{className:"buttons"},r.a.createElement(q,{type:"submit"}," Sign in "),r.a.createElement(q,{type:"button",onClick:ie,isGoogleSignIn:!0}," ","Sign in with Google"," "))))},Qe=(a(74),function(){var e=Object(n.useState)(""),t=Object(ze.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(ze.a)(i,2),o=l[0],s=l[1],m=Object(n.useState)(""),u=Object(ze.a)(m,2),p=u[0],d=u[1],b=Object(n.useState)(""),g=Object(ze.a)(b,2),f=g[0],h=g[1],E=function(){var e=Object(M.a)(A.a.mark((function e(t){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p===f){e.next=4;break}return alert("passwords didnt match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,ne.createUserWithEmailAndPassword(o,p);case 7:return n=e.sent,r=n.user,e.next=11,ae(r,{displayName:a});case 11:h(""),c(""),d(""),s(""),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.target,a=t.name,n=t.value;"confirmPassword"===a&&h(n),"password"===a&&d(n),"email"===a&&s(n),"displayName"===a&&c(n)};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:E},r.a.createElement(Fe,{type:"text",name:"displayName",value:a,onChange:v,label:"Display Name",required:!0}),r.a.createElement(Fe,{type:"email",name:"email",value:o,onChange:v,label:"Email",required:!0}),r.a.createElement(Fe,{type:"password",name:"password",value:p,onChange:v,label:"Password",required:!0}),r.a.createElement(Fe,{type:"password",name:"confirmPassword",value:f,onChange:v,label:"Confirm Password",required:!0}),r.a.createElement(q,{type:"submit"},"SIGN UP")))}),Xe=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Ke,null),r.a.createElement(Qe,null))},Ye=(a(75),Object(o.b)(null,{clearItemFromCart:function(e){return{type:E.CLEAR_ITEM_FROM_CART,payload:e}},AddItemToCart:V,removeItemFromCart:function(e){return{type:E.REMOVE_ITEM,payload:e}}})((function(e){var t=e.cartItem,a=e.clearItemFromCart,n=e.AddItemToCart,c=e.removeItemFromCart,i=t.name,l=t.price,o=t.quantity,s=t.imageUrl;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:s,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},l),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),Ze=(a(76),a(36)),$e=a.n(Ze),et=function(e){var t=e.price,a=100*t;return r.a.createElement($e.a,{label:"Pay Now",name:"Clothing Store Ltd",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_dIMUgaTC26ZEwte3V1ocoXK6004fWakSyJ"})},tt=Object(B.b)({cartItems:Me,total:Pe}),at=Object(o.b)(tt)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(Ye,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"Total: $",a)),r.a.createElement("div",{className:"test-warning"},"*Please Use the following test credential for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/21 - CVV: 123"),r.a.createElement(et,{price:a}))}));var nt=Object(B.b)({currentUser:qe}),rt=Object(o.b)(nt,{setCurrentUser:function(e){return{type:g,payload:e}}})((function(e){var t=e.setCurrentUser,a=e.currentUser;return Object(n.useEffect)((function(){return ne.onAuthStateChanged(function(){var e=Object(M.a)(A.a.mark((function e(a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return e.next=3,ae(a);case 3:e.sent.onSnapshot((function(e){t(Object(b.a)({id:e.id},e.data()))})),e.next=8;break;case 7:t(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){null()}}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(Ve,null),r.a.createElement(_.d,null,r.a.createElement(_.b,{exact:!0,path:"/"},r.a.createElement(J,null)),r.a.createElement(_.b,{path:"/shop"},r.a.createElement($,null)),r.a.createElement(_.b,{path:"/signin"},a?r.a.createElement(_.a,{to:"/"}):r.a.createElement(Xe,null)),r.a.createElement(_.b,{exact:!0,path:"/checkout"},r.a.createElement(at,null))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,{store:S},r.a.createElement(l.a,null,r.a.createElement(s.a,{persistor:x},r.a.createElement(rt,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.f7e4aa29.chunk.js.map