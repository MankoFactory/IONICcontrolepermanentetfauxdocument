(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{YkNJ:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){return function(){}}(),u=e("pMnS"),i=e("oBZk"),r=e("ZZ/e"),a=e("ZYCi"),c=e("Ip0R"),d=e("PET4"),s=function(){function n(n,l,e,t){this._aut=n,this.router=l,this.navCtrl=e,this.render=t,this.authenticated=!1,this.superadmin=!1,this.admin=!1,this.agent=!1,this.listuser=[],this.PtagClicked=!1,this.currentUser=this._aut.currentUserValue,this.token=this._aut.getToken()}return n.prototype.ngOnInit=function(){var n=this;this._aut.todo().subscribe((function(l){return n.listuser=l.data}),(function(n){return console.log(n)})),this.isSuperadmin(),this.isAdmin(),this.isAuthenticated(),localStorage.setItem("admin",this.admin+""),localStorage.setItem("authenticated",this.authenticated+""),localStorage.setItem("superadmin",this.superadmin+""),localStorage.setItem("agent",this.agent+""),console.log("getStatus 1",this.getStatus("admin")),console.log("getStatus 2",this.getStatus("authenticated")),console.log("getStatus 3",this.getStatus("superadmin")),console.log("getStatus 4",this.getStatus("agent")),this.isAgent()},n.prototype.onHide=function(n){this.render.setStyle(n,"visibility","hidden")},n.prototype.isSuperadmin=function(){this._aut.isSuperadmin()&&(this.superadmin=!0),localStorage.setItem("superadmin",this.superadmin+"")},n.prototype.isAdmin=function(){this._aut.isAdmin()&&(this.admin=!0)},n.prototype.isAgent=function(){this._aut.isAgent()&&(this.agent=!0),localStorage.setItem("agent",this.agent+"")},n.prototype.logout=function(){return this._aut.logout()},n.prototype.isAuthenticated=function(){this._aut.isAuthenticated()&&(this.authenticated=!0)},n.prototype.getStatus=function(n){return"true"==localStorage.getItem(n)},n}(),g=t["\u0275crt"]({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{margin:15px;font-weight:700}ion-toolbar[_ngcontent-%COMP%]{background-color:0}ion-title[_ngcontent-%COMP%]{font-size:15px;text-align:center}ion-button[_ngcontent-%COMP%]{background:#50a125}ion-icon[_ngcontent-%COMP%]{color:#fff}h2[_ngcontent-%COMP%]{color:#50a125}ion-card[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#e28008}@supports ((position:-webkit-sticky) or (position:sticky)){ion-card[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0}}"]],data:{}});function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"h2",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,8,"ion-item",[],null,null,null,i.K,i.n)),t["\u0275did"](2,49152,null,0,r.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](3,0,[" "," "])),(n()(),t["\u0275eld"](4,0,null,0,5,"ion-button",[["color","energized"],["routerLink","/register"],["slot","end"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,6).onClick()&&o),"click"===l&&(o=!1!==t["\u0275nov"](n,7).onClick(e)&&o),o}),i.z,i.c)),t["\u0275did"](5,49152,null,0,r.IonButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),t["\u0275did"](6,16384,null,0,a.n,[a.m,a.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](7,737280,null,0,r.RouterLinkDelegate,[c.LocationStrategy,r.NavController,t.ElementRef,a.m,[2,a.n]],null,null),(n()(),t["\u0275eld"](8,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.G,i.j)),t["\u0275did"](9,49152,null,0,r.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,5,0,"energized"),n(l,6,0,"/register"),n(l,7,0),n(l,9,0,"add")}),(function(n,l){n(l,3,0,l.context.$implicit.telephone)}))}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,15,"ion-header",[],null,null,null,i.F,i.i)),t["\u0275did"](1,49152,null,0,r.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,13,"ion-toolbar",[["color","primary"]],null,null,null,i.T,i.w)),t["\u0275did"](3,49152,null,0,r.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.A,i.d)),t["\u0275did"](5,49152,null,0,r.IonButtons,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,8).onClick(e)&&o),o}),i.y,i.b)),t["\u0275did"](7,49152,null,0,r.IonBackButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](8,16384,null,0,r.IonBackButtonDelegate,[[2,r.IonRouterOutlet],r.NavController],null,null),(n()(),t["\u0275eld"](9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,i.A,i.d)),t["\u0275did"](10,49152,null,0,r.IonButtons,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](11,0,null,0,1,"ion-menu-button",[],null,null,null,i.M,i.q)),t["\u0275did"](12,49152,null,0,r.IonMenuButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](13,0,null,0,2,"ion-title",[],null,null,null,i.S,i.v)),t["\u0275did"](14,49152,null,0,r.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,[" Controle permanent"])),(n()(),t["\u0275eld"](16,0,null,null,13,"ion-content",[],null,null,null,i.E,i.h)),t["\u0275did"](17,49152,null,0,r.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](18,0,null,0,5,"ion-card",[["class","welcome-card"],["id","carte"]],null,null,null,i.C,i.e)),t["\u0275did"](19,49152,null,0,r.IonCard,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](20,0,null,0,3,"ion-card-content",[["style","text-align: center;"]],null,null,null,i.B,i.f)),t["\u0275did"](21,49152,null,0,r.IonCardContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](22,0,null,0,1,"p",[["style","font-size: 20px;"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" liste des clients \xe0 visiter "])),(n()(),t["\u0275eld"](24,0,null,0,5,"ion-card",[],null,null,null,i.C,i.e)),t["\u0275did"](25,49152,null,0,r.IonCard,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](26,0,null,0,3,"ion-list",[],null,null,null,i.L,i.o)),t["\u0275did"](27,49152,null,0,r.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](29,278528,null,0,c.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,29,0,e.listuser)}),null)}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-todo",[],null,null,null,f,g)),t["\u0275did"](1,114688,null,0,s,[d.a,a.m,r.NavController,t.Renderer2],null,null)],(function(n,l){n(l,1,0)}),null)}var h=t["\u0275ccf"]("app-todo",s,p,{},{},[]),C=e("gIcY"),R=function(){return function(){}}();e.d(l,"TodoPageModuleNgFactory",(function(){return _}));var _=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,h]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[t.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,C["\u0275angular_packages_forms_forms_o"],C["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,r.AngularDelegate,r.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,r.ModalController,r.ModalController,[r.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,r.PopoverController,r.PopoverController,[r.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),t["\u0275mpd"](1073742336,C["\u0275angular_packages_forms_forms_d"],C["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,C.FormsModule,C.FormsModule,[]),t["\u0275mpd"](1073742336,r.IonicModule,r.IonicModule,[]),t["\u0275mpd"](1073742336,a.p,a.p,[[2,a.u],[2,a.m]]),t["\u0275mpd"](1073742336,R,R,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,a.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);