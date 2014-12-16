/**
 * Created by Yan on 12/11/2014.
 */

function submitInputForm(){
    $('form#inputPet').submit(function (e){
        e.preventDefault();

        var formData = new FormData($(this)[0]);
        $.post('/inputData', formData, function(result){
            console.log('finish input data');
        })


    });
}


