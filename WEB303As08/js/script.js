$(function () {
    let getJsonObject = $.getJSON("superman.json").done(function (data) {
        // jQuery.each
        $.each(data.characters, function (key, val) {

            $('#content').append(`
                    <tr>
                        <td >${val.fname}</td>
                        <td class= "item ${val.lname.toLowerCase()}">${val.lname}</td>
                        <td>${val.character}</td>
                        <td>${val.born}</td>
                        <td>${val.birthPlace}</td>
                    </tr>`);
        });
    });
    
    
    $('#search').keyup(function(){
        search_table($(this).val());
    });
    
    function search_table(value){
        $('#superman_table tr').each(function(){
            var found = 'false';
            $(this).each(function(){
               if($(this).children().first().text().toLowerCase().indexOf(value.toLowerCase())  >= 0) {
                   found = 'true';
               }
            });
            
            if(found == 'true'){
                $(this).css("background-color", "green");
                $(this).css("color", "white");
            }
            else
                {
                    $(this).css("background-color", "white");
                $(this).css("color", "black");
                }
        });
    };
    
    
    $(".btn").click(function(){
        var attr = $(this).attr("data-li");
        
        $(".item").hide();
        if(attr.firstChar() <= "m"){
            $("." + attr).show();
        }
        else if (attr.firstchar() > "m"){
            $("." + attr).show();
        }
        else{
            $('.item').hide();
        }
    });
    

});
