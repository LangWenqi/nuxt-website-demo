export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    // if((location.host).indexOf('pc.bestjlb.com')>-1){
    // 百度埋点
    // _hmt.push(['_trackPageview', '/pcweb/#' + to.fullPath])
    // }
    // if(to.fullPath == '/') {
    //        sessionStorage.removeItem('access_token');
    //        sessionStorage.removeItem('token_type');
    // }
    next();
  });
};
