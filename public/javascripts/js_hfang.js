/**
 * Created by Yan on 12/11/2014.
 */

var num = 5;
var topzzz = 5;
firstMotion();
function motion() {
    // change picture for a period of time
    setInterval(function() {
            firstMotion();
        } 3000);
};


var firstMotion = function(){
    var random_array = [];
        /*

         the logic here is complex for now..
         I was trying to remove duplication
         and I'm still working on it
         */
        $('#div2').empty();
        for (i = 0; i < num; i ++) {
            var rand_num = Math.floor(Math.random() * topzzz + 1);
            var isDuplicate = true;
            while (isDuplicate) {
                isDuplicate = false;
                for (j = 0; j < random_array.length; j ++) {
                    if (random_array[j] == rand_num) {
                        isDuplicate = true;
                    }
                }
                if (isDuplicate) {
                    rand_num = Math.floor(Math.random() * topzzz + 1);
                }
            }
            random_array[i] = rand_num;
            var xmlHttp = null;
            xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", "/getimg/" + random_array[i], false );
            xmlHttp.send( null );
            //console.log(xmlHttp.responseText);
            //console.log(random_array[i]);
            $('#div2').prepend(xmlHttp.responseText);

        }
        $('.galleryimage').hide();
        $('.galleryimage').fadeIn("slow");




    
}

//window.addEventListener("DOMContentLoaded", motion, false);

