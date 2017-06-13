'use strict';
const Header = _=>{
    const header = $('<header></header>');
    const img = $('<img src="img/logo.png"/>');
    header.append(img);
    return header;
}