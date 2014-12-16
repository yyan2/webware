/**
 * Created by Yan on 12/11/2014.
 */


function showSuccessMessage(){
    //get request
    $('#div4').html(getContent('renderJade/div4_inputResult'));
}

function submitInputButtonHandler(){
    $('form#inputPet').submit(function (e){

        var formData = new FormData($(this)[0]);

        $.ajax({
            type: "POST",
            url: '/inputData',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
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



