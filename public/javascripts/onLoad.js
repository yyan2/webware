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
// Render Gallery page when button "Gallery" is clicked
function renderGalleryPage(){
    $.post('/query', [], function(result){
        $('#div4').html(result);
    })
}
// Render queryPet page when button "I want a pet" is clicked
function renderQueryPetPage(){
    $('#div4').html(getContent('renderJade/div4_queryPet'));
    queryButtonHandler();
}

function renderQueryDogsPage(){
    $.post('/query', [{"name":"pet_type", "value":"dog"}], function(result){
        $('#div4').html(result);
    })
}

function renderQueryCatsPage(){
    $.post('/query', [{"name":"pet_type", "value":"cat"}], function(result){
        $('#div4').html(result);
    })
}
// Render inputPet page when button "I have a pet" is clicked 
function renderInputPetPage(){
    $('#div4').html(getContent('renderJade/div4_inputPet'));
    submitInputButtonHandler();
}
// Render inputResult page when user successfully submit the input
function renderInputResult() {
    $('#div4').html(getContent('renderJade/div4_inputResult'));
}
// Render statistic page when button "statistic" is clicked, showing 4 graphs using highchart
function renderStatisticPage(){
    $('#div4').html(getContent('renderJade/div4_statistics'));
}

//Loads an individual paragraph
function changeText(id){
    var xmlhttp2 = new XMLHttpRequest();

    xmlhttp2.onreadystatechange = function () {
        if (xmlhttp2.readyState == 4){
            document.getElementById("instructions" + id).innerHTML = xmlhttp2.responseText;
        }
    };
    xmlhttp2.open("GET", "paragraph/" + id, true);
    xmlhttp2.send();
}

function start() {
    // Load paragraph into div1
    changeText(1);
    
    //add button listeners in div3
    document.getElementById("submit_gallery").addEventListener("click",function(){renderGalleryPage()});
    document.getElementById("submit_queryPet").addEventListener("click",function(){renderQueryPetPage()});
    document.getElementById("submit_inputPet").addEventListener("click",function(){renderInputPetPage()});
    document.getElementById("submit_statistic").addEventListener("click",function(){renderStatisticPage()});
    document.getElementById("submit_queryCats").addEventListener("click",function(){renderQueryCatsPage()});
    document.getElementById("submit_queryDogs").addEventListener("click",function(){renderQueryDogsPage()});

    //load default div4 page
    renderGalleryPage();
}

window.addEventListener("load", start, false);
