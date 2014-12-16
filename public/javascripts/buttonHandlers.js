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


function queryButtonHandler(){
    console.log('into handler');
    var count = 0;
    var setQuery = [];
    $('form#queryPetForm').submit(function(e){
        e.preventDefault();
        var dataVal = $('#queryPetForm').serializeArray();
        dataVal.forEach(function(element){
            if(element.value != 'any' && element.value != 'either'){
                setQuery.push(element);
            }
        });
        console.log(JSON.stringify(setQuery));
        //console.log(JSON.stringify($('#queryPetForm').serializeArray()));
        console.log(setQuery);
        //console.log($('#queryPetForm').serializeArray());
        $.post('/query', setQuery, function(result){
            $('#div4').html(result);
        })


        //post request
    });
}


