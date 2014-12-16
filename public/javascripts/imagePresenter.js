/**
 * Created by Yan on 12/11/2014.
 */

var num = 5;


var motion = function(){
    setInterval(firstMotion, 3000);
}

var firstMotion = function(){
    //empty div2
    $('#div2').empty();

    var imgPathPair = getContent('queryImagePath');
    var imgPathData = JSON.parse(imgPathPair);
    var paths = [];
    var duplicatedNum = [];
    for(var i in imgPathData){
        paths.push(imgPathData[i].pet_pictureURL);
    }

    //add pictures to div2
    for(var i = 0; i < num; i++){
        //generate random number
        var rand_num = Math.floor(Math.random() * paths.length);
        var count = 3;

        //if the same number is generated three times, add that picture
        while(count > 0){
            if(!duplicatedNum.indexOf(rand_num) > -1){
                duplicatedNum.push(rand_num);

                break;
            }
            count--;
        }

        var elem = document.createElement('img');
        elem.className = 'galleryimage';
        elem.src = 'public/images/' + paths[rand_num];

        $('#div2').prepend(elem);

    }


    $('.galleryimage').hide();
    $('.galleryimage').fadeIn("slow");

}

window.addEventListener("load", firstMotion, false);
window.addEventListener("load", motion, false);

