var date = new Date();
var now = date.setTime(date.getTime()+60*60*24*1000).toGMTString; 
var name = '_seb';
function readCookie(){
    regNamecookie = "#(_\w*)=#";
    var style = document.cookie.split('=');
    return(style[1]);
}
function cookieIsSet(data){
    var style = readCookie();
    if (style == ""){
        createCookie('_seb','./style/light.css');
    }
}
function changeCookie(name,value){
    createCookie('_seb',value);
}
function writeHTML(){
     document.getElementById("styleCSS").href =  readCookie();
}

function createCookie(data, value){
 document.cookie = data + '=' + value + '; expires=' + now;
}
window.onload = function(e) {
    var style = readCookie();
    cookieIsSet('_seb');
    writeHTML('_seb', style);
}


