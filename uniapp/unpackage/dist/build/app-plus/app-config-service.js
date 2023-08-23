
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/pwd/pwd","pages/index/index","pages/index/caiLog","pages/index/betLog","pages/record/record","pages/my/my","pages/my/download","pages/my/service","pages/setup/setup","pages/setup/updateName","pages/setup/updatePaymentPassword","pages/setup/updateLoginPassword","pages/redEnvelop/redEnvelop","pages/redEnvelop/records","pages/myTask/myTask","pages/myTask/taskDel","pages/myPromotion/myPromotion","pages/myPromotion/apply","pages/myPromotion/recharge","pages/myPromotion/rechargeDel","pages/myPromotion/bounsRecord","pages/myPromotion/applyRecord","pages/myPromotion/promotionRecord","pages/myPromotion/inviteFriend","pages/myBank/myBank","pages/myBank/addBank","pages/suggestions/suggestions","pages/suggestions/sugDel","pages/suggestions/addsugger","pages/notice/notice","pages/notice/noticeDel"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#00BCD4","backgroundColor":"#00BCD4"},"tabBar":{"color":"#7a7e83","selectedColor":"#11ccc0","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"home","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/record/record","text":"Record","iconPath":"static/img/record.png","selectedIconPath":"static/img/recordHL.png"},{"pagePath":"pages/my/my","text":"My","iconPath":"static/img/my.png","selectedIconPath":"static/img/myHL.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":false},"appname":"Game 6","compilerVersion":"2.9.3","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Login"}},{"path":"/pages/pwd/pwd","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Reset Password"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/index/caiLog","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/index/betLog","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/record/record","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#11ccc0","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/my/download","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"download"}},{"path":"/pages/my/service","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Customer Service"}},{"path":"/pages/setup/setup","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0"}},{"path":"/pages/setup/updateName","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/setup/updatePaymentPassword","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/setup/updateLoginPassword","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/redEnvelop/redEnvelop","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Red Envelop","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/redEnvelop/records","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Red Envelop","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/myTask/myTask","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/myTask/taskDel","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Task Details"}},{"path":"/pages/myPromotion/myPromotion","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"My Promotion"}},{"path":"/pages/myPromotion/apply","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Withdraw","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/myPromotion/recharge","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Recharge"}},{"path":"/pages/myPromotion/rechargeDel","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/myPromotion/bounsRecord","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Detail of sub Commision","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/myPromotion/applyRecord","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Apply Records","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/myPromotion/promotionRecord","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Promotion Record","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/myPromotion/inviteFriend","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Invite Friends","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/myBank/myBank","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"My Bank"}},{"path":"/pages/myBank/addBank","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"My Bank Card"}},{"path":"/pages/suggestions/suggestions","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Complaints&Suggestions","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/suggestions/sugDel","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/suggestions/addsugger","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0"}},{"path":"/pages/notice/notice","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","navigationBarTitleText":"Notice","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/notice/noticeDel","meta":{},"window":{"navigationBarBackgroundColor":"#11ccc0","enablePullDownRefresh":true,"onReachBottomDistance":50}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
