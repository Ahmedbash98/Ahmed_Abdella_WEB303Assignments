//WEB303 Assignment 3
// Ahmed Abdella
//0777010


// $(function(){
//     jQuery.get()
// });

let getJsonObject = $.getJSON("team.json",function (data) {
    // jQuery.each
    $.each(data.team, function (key, val) {
        console.log("data key: ", key, " and data value: ", val);

        $('#team').append(`<div>
            <h2 class="name">${val.name}</h2>
            <h5 class="position">${val.position}<h5>
            <p class="bio">${val.bio}"></p>
        </div>`);
    });
});

console.log("The getjson object: ", getJsonObject);


//jQuery.get()
$.get("team.json", function (data) {
 console.log("The data returned is: ", data);
 $("div#team").html(data);
}, "html").fail(function () {
    console.log("Something went terribly wrong :(");
    });