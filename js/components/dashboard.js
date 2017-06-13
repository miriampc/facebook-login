'use strict';
const Dashboard = _=>{
    const dashboard = $('<div class="dashboard">Dashboard component</div>');
    if(state.user){
        const name = $(`<h1>${state.user.name}</h1>`);
        const email = $(`<h1>${state.user.email}</h1>`);
        dashboard.append(name);
        dashboard.append(email);

        const logout =$('<button>Salir</button>');
        logout.on('click', _=>{
           FB.logout((response) =>{
               state.user = null;
               state.doRender();
           });
        });
        dashboard.append(logout);
    }
    return dashboard;
};