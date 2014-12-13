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

function renderGalleryPage(){
    $.post('/query', [], function(result){
        $('#div4').html(result);
    })
}

function renderQueryPetPage(){
    $('#div4').html(getContent('renderJade/div4_queryPet'));
    queryButtonHandler();
    //window.addEventListener("load", , false);

}

function renderInputPetPage(){
    $('#div4').html(getContent('renderJade/div4_inputPet'));
}

function renderStatisticPage(){
    $('#div4').html(getContent('renderJade/div4_statistics'));
}

function start() {
    //add button listeners in div3
    document.getElementById("submit_gallery").addEventListener("click",function(){renderGalleryPage()});
    document.getElementById("submit_queryPet").addEventListener("click",function(){renderQueryPetPage()});
    document.getElementById("submit_inputPet").addEventListener("click",function(){renderInputPetPage()});
    document.getElementById("submit_statistic").addEventListener("click",function(){renderStatisticPage()});

    //load default div4 page
    renderGalleryPage();
}


//function renderQueryPetPage(){
//    var xmlhttp = new XMLHttpRequest();
//
//    xmlhttp.onreadystatechange = function() {
//        if(xmlhttp.readyState ==4){
//            document.getElementById("div4").innerHTML = xmlhttp.responseText;
//        }
//    };
//    xmlhttp.open("GET", "renderJade/renderQueryPet", true);
//    xmlhttp.send();
//}
//
//function renderInputPetPage(){
//    var xmlhttp = new XMLHttpRequest();
//
//    xmlhttp.onreadystatechange = function() {
//        if(xmlhttp.readyState ==4){
//            document.getElementById("div4").innerHTML = xmlhttp.responseText;
//        }
//    };
//    xmlhttp.open("GET", "renderJade/renderInputPet", true);
//    xmlhttp.send();
//}
//
//function renderStatisticPage(){
//    var xmlhttp = new XMLHttpRequest();
//
//    xmlhttp.onreadystatechange = function() {
//        if(xmlhttp.readyState ==4){
//            document.getElementById("div4").innerHTML = xmlhttp.responseText;
//        }
//    };
//    xmlhttp.open("GET", "renderJade/renderStatistic", true);
//    xmlhttp.send();
//}

window.addEventListener("load", start, false);
