"use strict";
window.fbAsyncInit = _=> {
    FB.init({
        appId            : '138834466685610',
        cookie           : true,
        xfbml            : true,
        version          : 'v2.9'
    });
    //FB.AppEvents.logPageView();
};
function loginHandler(response) {
    if(response.status === 'connected'){
        state.status = "Conectado";
        FB.api('/me?fields=email,name', user =>{
            state.user =user;
            state.doRender();
        });
    }else if(response.status ==='not_authorized'){
        state.user = null;
        state.status = "Aplicación no autorizada";
        state.doRender();
    }
}
function doLogin() {
    FB.login(loginHandler, {scope:'email'});
}
