(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0ZzE":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("CcnG"),r=o("wov0"),l=o("ZYjt");n.enableProdMode(),l.platformBrowser().bootstrapModuleFactory(r.AppModuleNgFactory)},"5BPh":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("CcnG"),r=o("LuYu"),l=o("ZYCi"),u=n.ɵcrt({encapsulation:2,styles:[],data:{}});function a(e){return n.ɵvid(0,[(e()(),n.ɵeld(0,0,null,null,3,"em",[],null,null,null,null,null)),(e()(),n.ɵted(-1,null,["Redirecting to "])),(e()(),n.ɵeld(2,0,null,null,1,"code",[],null,null,null,null,null)),(e()(),n.ɵted(3,null,["",""]))],null,function(e,t){e(t,3,0,t.component.redirectTo)})}function i(e){return n.ɵvid(0,[(e()(),n.ɵeld(0,0,null,null,1,"my-absolute-redirect",[],null,null,null,a,u)),n.ɵdid(1,114688,null,0,r.AbsoluteRedirectComponent,[l.ActivatedRoute,l.Router],null,null)],function(e,t){e(t,1,0)},null)}t.RenderType_AbsoluteRedirectComponent=u,t.View_AbsoluteRedirectComponent_0=a,t.View_AbsoluteRedirectComponent_Host_0=i;var p=n.ɵccf("my-absolute-redirect",r.AbsoluteRedirectComponent,i,{},{},[]);t.AbsoluteRedirectComponentNgFactory=p},K0Kg:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.styles=["[_nghost-%COMP%] {\n  display: block ;\n  font-size: 18px ;\n}\na[_ngcontent-%COMP%] {\n  color: red ;\n}"]},LuYu:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o("ZYCi"),o("ZYCi");var n=function(){function e(e,t){this.router=t,this.redirectTo=e.snapshot.data.redirectTo}return e.prototype.ngOnInit=function(){console.warn("Absolute redirect to:",this.redirectTo),this.router.navigateByUrl(this.redirectTo,{replaceUrl:!0})},e}();t.AbsoluteRedirectComponent=n},Mn8e:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(){}}();t.AppComponent=n},ShwL:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("CcnG"),r=o("jNgN"),l=n.ɵcrt({encapsulation:2,styles:[],data:{}});function u(e){return n.ɵvid(0,[(e()(),n.ɵted(-1,null,[" People list! "]))],null,null)}function a(e){return n.ɵvid(0,[(e()(),n.ɵeld(0,0,null,null,1,"my-people-list",[],null,null,null,u,l)),n.ɵdid(1,49152,null,0,r.PeopleListComponent,[],null,null)],null,null)}t.RenderType_PeopleListComponent=l,t.View_PeopleListComponent_0=u,t.View_PeopleListComponent_Host_0=a;var i=n.ɵccf("my-people-list",r.PeopleListComponent,a,{},{},[]);t.PeopleListComponentNgFactory=i},SmDo:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ɵ0={redirectTo:"/pong"},t.ɵ1={redirectTo:"/people"};var n=function(){return function(){}}();t.AppModule=n},jNgN:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(){}}();t.PeopleListComponent=n},kcRK:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("K0Kg"),r=o("CcnG"),l=o("ZYCi"),u=o("Ip0R"),a=o("Mn8e"),i=[n.styles],p=r.ɵcrt({encapsulation:0,styles:i,data:{}});function c(e){return r.ɵvid(0,[(e()(),r.ɵeld(0,0,null,null,15,"p",[],null,null,null,null,null)),(e()(),r.ɵeld(1,0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,t,o){var n=!0;"click"===t&&(n=!1!==r.ɵnov(e,2).onClick(o.button,o.ctrlKey,o.metaKey,o.shiftKey)&&n);return n},null,null)),r.ɵdid(2,671744,null,0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),r.ɵted(-1,null,["Home"])),(e()(),r.ɵted(-1,null,[" — "])),(e()(),r.ɵeld(5,0,null,null,2,"a",[["routerLink","./people"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,t,o){var n=!0;"click"===t&&(n=!1!==r.ɵnov(e,6).onClick(o.button,o.ctrlKey,o.metaKey,o.shiftKey)&&n);return n},null,null)),r.ɵdid(6,671744,null,0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),r.ɵted(-1,null,["People"])),(e()(),r.ɵted(-1,null,[" — "])),(e()(),r.ɵeld(9,0,null,null,2,"a",[["routerLink","./users"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,t,o){var n=!0;"click"===t&&(n=!1!==r.ɵnov(e,10).onClick(o.button,o.ctrlKey,o.metaKey,o.shiftKey)&&n);return n},null,null)),r.ɵdid(10,671744,null,0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),r.ɵted(-1,null,['Users (old "People" route)'])),(e()(),r.ɵted(-1,null,[" — "])),(e()(),r.ɵeld(13,0,null,null,2,"a",[["routerLink","./ping"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,t,o){var n=!0;"click"===t&&(n=!1!==r.ɵnov(e,14).onClick(o.button,o.ctrlKey,o.metaKey,o.shiftKey)&&n);return n},null,null)),r.ɵdid(14,671744,null,0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),(e()(),r.ɵted(-1,null,["Ping-Pong-People"])),(e()(),r.ɵeld(16,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r.ɵdid(17,212992,null,0,l.RouterOutlet,[l.ChildrenOutletContexts,r.ViewContainerRef,r.ComponentFactoryResolver,[8,null],r.ChangeDetectorRef],null,null)],function(e,t){e(t,2,0,"/");e(t,6,0,"./people");e(t,10,0,"./users");e(t,14,0,"./ping"),e(t,17,0)},function(e,t){e(t,1,0,r.ɵnov(t,2).target,r.ɵnov(t,2).href),e(t,5,0,r.ɵnov(t,6).target,r.ɵnov(t,6).href),e(t,9,0,r.ɵnov(t,10).target,r.ɵnov(t,10).href),e(t,13,0,r.ɵnov(t,14).target,r.ɵnov(t,14).href)})}function d(e){return r.ɵvid(0,[(e()(),r.ɵeld(0,0,null,null,1,"my-app",[],null,null,null,c,p)),r.ɵdid(1,49152,null,0,a.AppComponent,[],null,null)],null,null)}t.RenderType_AppComponent=p,t.View_AppComponent_0=c,t.View_AppComponent_Host_0=d;var s=r.ɵccf("my-app",a.AppComponent,d,{},{},[]);t.AppComponentNgFactory=s},wov0:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("CcnG"),r=o("SmDo"),l=o("Mn8e"),u=o("pMnS"),a=o("ShwL"),i=o("5BPh"),p=o("kcRK"),c=o("Ip0R"),d=o("ZYjt"),s=o("ZYCi"),_=o("jNgN"),m=o("LuYu"),g=n.ɵcmf(r.AppModule,[l.AppComponent],function(e){return n.ɵmod([n.ɵmpd(512,n.ComponentFactoryResolver,n.ɵCodegenComponentFactoryResolver,[[8,[u.ɵEmptyOutletComponentNgFactory,a.PeopleListComponentNgFactory,i.AbsoluteRedirectComponentNgFactory,p.AppComponentNgFactory]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n.ɵmpd(5120,n.LOCALE_ID,n.ɵangular_packages_core_core_s,[[3,n.LOCALE_ID]]),n.ɵmpd(4608,c.NgLocalization,c.NgLocaleLocalization,[n.LOCALE_ID,[2,c.ɵangular_packages_common_common_a]]),n.ɵmpd(5120,n.APP_ID,n.ɵangular_packages_core_core_h,[]),n.ɵmpd(5120,n.IterableDiffers,n.ɵangular_packages_core_core_q,[]),n.ɵmpd(5120,n.KeyValueDiffers,n.ɵangular_packages_core_core_r,[]),n.ɵmpd(4608,d.DomSanitizer,d.ɵDomSanitizerImpl,[c.DOCUMENT]),n.ɵmpd(6144,n.Sanitizer,null,[d.DomSanitizer]),n.ɵmpd(4608,d.HAMMER_GESTURE_CONFIG,d.HammerGestureConfig,[]),n.ɵmpd(5120,d.EVENT_MANAGER_PLUGINS,function(e,t,o,n,r,l,u,a){return[new d.ɵDomEventsPlugin(e,t,o),new d.ɵKeyEventsPlugin(n),new d.ɵHammerGesturesPlugin(r,l,u,a)]},[c.DOCUMENT,n.NgZone,n.PLATFORM_ID,c.DOCUMENT,c.DOCUMENT,d.HAMMER_GESTURE_CONFIG,n.ɵConsole,[2,d.HAMMER_LOADER]]),n.ɵmpd(4608,d.EventManager,d.EventManager,[d.EVENT_MANAGER_PLUGINS,n.NgZone]),n.ɵmpd(135680,d.ɵDomSharedStylesHost,d.ɵDomSharedStylesHost,[c.DOCUMENT]),n.ɵmpd(4608,d.ɵDomRendererFactory2,d.ɵDomRendererFactory2,[d.EventManager,d.ɵDomSharedStylesHost,n.APP_ID]),n.ɵmpd(6144,n.RendererFactory2,null,[d.ɵDomRendererFactory2]),n.ɵmpd(6144,d.ɵSharedStylesHost,null,[d.ɵDomSharedStylesHost]),n.ɵmpd(4608,n.Testability,n.Testability,[n.NgZone]),n.ɵmpd(5120,s.ActivatedRoute,s.ɵangular_packages_router_router_g,[s.Router]),n.ɵmpd(4608,s.NoPreloading,s.NoPreloading,[]),n.ɵmpd(6144,s.PreloadingStrategy,null,[s.NoPreloading]),n.ɵmpd(135680,s.RouterPreloader,s.RouterPreloader,[s.Router,n.NgModuleFactoryLoader,n.Compiler,n.Injector,s.PreloadingStrategy]),n.ɵmpd(4608,s.PreloadAllModules,s.PreloadAllModules,[]),n.ɵmpd(5120,s.ɵangular_packages_router_router_n,s.ɵangular_packages_router_router_c,[s.Router,c.ViewportScroller,s.ROUTER_CONFIGURATION]),n.ɵmpd(5120,s.ROUTER_INITIALIZER,s.ɵangular_packages_router_router_j,[s.ɵangular_packages_router_router_h]),n.ɵmpd(5120,n.APP_BOOTSTRAP_LISTENER,function(e){return[e]},[s.ROUTER_INITIALIZER]),n.ɵmpd(1073742336,c.CommonModule,c.CommonModule,[]),n.ɵmpd(1024,n.ErrorHandler,d.ɵangular_packages_platform_browser_platform_browser_a,[]),n.ɵmpd(1024,n.NgProbeToken,function(){return[s.ɵangular_packages_router_router_b()]},[]),n.ɵmpd(512,s.ɵangular_packages_router_router_h,s.ɵangular_packages_router_router_h,[n.Injector]),n.ɵmpd(1024,n.APP_INITIALIZER,function(e,t){return[d.ɵangular_packages_platform_browser_platform_browser_j(e),s.ɵangular_packages_router_router_i(t)]},[[2,n.NgProbeToken],s.ɵangular_packages_router_router_h]),n.ɵmpd(512,n.ApplicationInitStatus,n.ApplicationInitStatus,[[2,n.APP_INITIALIZER]]),n.ɵmpd(131584,n.ApplicationRef,n.ApplicationRef,[n.NgZone,n.ɵConsole,n.Injector,n.ErrorHandler,n.ComponentFactoryResolver,n.ApplicationInitStatus]),n.ɵmpd(1073742336,n.ApplicationModule,n.ApplicationModule,[n.ApplicationRef]),n.ɵmpd(1073742336,d.BrowserModule,d.BrowserModule,[[3,d.BrowserModule]]),n.ɵmpd(1024,s.ɵangular_packages_router_router_a,s.ɵangular_packages_router_router_e,[[3,s.Router]]),n.ɵmpd(512,s.UrlSerializer,s.DefaultUrlSerializer,[]),n.ɵmpd(512,s.ChildrenOutletContexts,s.ChildrenOutletContexts,[]),n.ɵmpd(256,s.ROUTER_CONFIGURATION,{useHash:!0,scrollPositionRestoration:"enabled",anchorScrolling:"enabled",enableTracing:!1},[]),n.ɵmpd(1024,c.LocationStrategy,s.ɵangular_packages_router_router_d,[c.PlatformLocation,[2,c.APP_BASE_HREF],s.ROUTER_CONFIGURATION]),n.ɵmpd(512,c.Location,c.Location,[c.LocationStrategy]),n.ɵmpd(512,n.Compiler,n.Compiler,[]),n.ɵmpd(512,n.NgModuleFactoryLoader,n.SystemJsNgModuleLoader,[n.Compiler,[2,n.SystemJsNgModuleLoaderConfig]]),n.ɵmpd(1024,s.ROUTES,function(){return[[{path:"people",children:[{path:"",pathMatch:"full",redirectTo:"list"},{path:"list",component:_.PeopleListComponent}]},{path:"users",redirectTo:"/people"},{path:"ping",component:m.AbsoluteRedirectComponent,data:r.ɵ0},{path:"pong",component:m.AbsoluteRedirectComponent,data:r.ɵ1}]]},[]),n.ɵmpd(1024,s.Router,s.ɵangular_packages_router_router_f,[n.ApplicationRef,s.UrlSerializer,s.ChildrenOutletContexts,c.Location,n.Injector,n.NgModuleFactoryLoader,n.Compiler,s.ROUTES,s.ROUTER_CONFIGURATION,[2,s.UrlHandlingStrategy],[2,s.RouteReuseStrategy]]),n.ɵmpd(1073742336,s.RouterModule,s.RouterModule,[[2,s.ɵangular_packages_router_router_a],[2,s.Router]]),n.ɵmpd(1073742336,r.AppModule,r.AppModule,[]),n.ɵmpd(256,n.ɵAPP_ROOT,!0,[])])});t.AppModuleNgFactory=g},zn8P:function(e,t){function o(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id="zn8P"}},[["0ZzE",0,3]]]);
//# sourceMappingURL=main.be12e8a93233cd8638fb.js.map