/**
 * Created by Yan on 12/11/2014.
 */


function showSuccessMessage(){
    //get request
}

function submitInputButtonHandler(){
    $('form#inputPet').submit(function (e){

        var formData = new FormData($(this)[0]);

        $.ajax({
            type: "POST",
            url: '/inputData',
            data: formData,
            contentType: false,
            success: function(result){
                showSuccessMessage();
            },
            error :function(err){
                console.log('error');

            }
        });

        e.preventDefault();



    });

}


