/**
 * Created by Yan on 12/11/2014.
 */

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


