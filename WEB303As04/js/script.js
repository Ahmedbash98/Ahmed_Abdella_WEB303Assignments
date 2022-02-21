/*
    Assignment #4
    {Ahmed Abdella 0777010}
*/

$(function () {
    navigator.geolocation.getCurrentPosition(success, () => {
         console.log("Please enable geolocation in order to see your coordinates");
        });
    
        function success(position) {
    
            console.log("Position object: ", position);
            console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);

            let latitude = position.coords.latitude
            let longitude = position.coords.longitude

            $("#locationhere").html("Latitude : " + latitude + "<br>Longitude : " + longitude);

            if (localStorage.getItem("locationobject")){

                let locationObject = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                    };

                // Put the object into storage
                localStorage.setItem('locationObject', JSON.stringify(locationObject));
                
                // Retrieve the object from storage
                let retrievedObject = localStorage.getItem('locationObject');
                
                let obj =  JSON.parse(retrievedObject);

                


                $('#content').append("<h2>Stored location</h2>","latitude: " , obj.latitude+ "<br>"+"longitude: " , obj.longitude);
                $('#content').append("<br><h3>welcome back</h3>");
                $("#content").append("<p>You have traveled that distance of "+calcDistanceBetweenPoints(latitude,longitude,)+ " meters since your last visit to this page</p>");

        }
        else{
         
          $('#content').append("<h2>welcome to the page</h2>");
          localStorage.setItem("locationobject", JSON.stringify(location));
        }
        
           
        }

       



        





    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


