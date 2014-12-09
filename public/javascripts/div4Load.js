/**
 * Created by Yan on 12/8/2014.
 */

//receive data from get request
function getContent(fileName){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", fileName, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}

function loadDefault(){
    $('#div4').html(getContent('gallery.html'));
}


window.addEventListener("load", loadDefault, false);