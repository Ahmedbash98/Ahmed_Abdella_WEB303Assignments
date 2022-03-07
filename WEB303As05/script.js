/*

    Ahmed Abdella 0777010
    Assignment 05
    
*/

$(document).ready(function () {
   class ContentItem{
        constructor(id,name,description,categoryGenre){
            this.movieId = id;
            this.movieName = name;
            this.movieDescription = description;
            this.movieGenre = categoryGenre;
        }


        updateContentItem (id,name,description,categoryGenre){
            if ((id === this.movieId) || (name,description,categoryGenre != null)  )
            this.movieId = id;
            this.movieName = name;
            this.movieDescription = description;
            this.movieGenre = categoryGenre;
    }
        
           
           
        toString(){
           
           return  `<div id="content-item-${this.movieId}" class="content-item-wrapper">
						<h2>${this.movieName}</h2>
						<p><strong>Description :</strong> ${this.movieDescription}</p>
						<div><strong>Genre :</strong> ${this.movieGenre}</div>
					</div>`
       }
       
    }


   
       
       
       
       
     let movie1 = new ContentItem( "1" , "Commando",
     "A retired special agent named John Matrix led an elite unit and has left the armed forces to live in a secluded mountain home with his daughter Jenny. But now he is forced out of retirement when his daughter is kidnapped by a band of thugs intent on revenge!",
     "Action");
     let movie2 = new ContentItem( "2" , "Rush Hour",
     "A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consul's kidnapped daughter, while trying to arrest a dangerous crime lord along the way.",
     "Comedy, Acrtion, Crime");
     let movie3 = new ContentItem( "3" , "Inception",
     "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
     "Action");
     let movie4 = new ContentItem( "4" , "Star Wars",
     "The story of the original trilogy focuses on Luke Skywalker's quest to become a Jedi, his struggle with the evil Imperial agent Darth Vader, and the struggle of the Rebel Alliance to free the galaxy from the clutches of the Galactic Empire.",
     "Science fiction");
     let movie5 = new ContentItem( "5" , "Need for Speed",
     "It tells the story of street racer Tobey Marshall, who sets off to race cross-country as a way of avenging his friend's death at the hands of a rival racer, Dino Brewster. Need for Speed was released by Touchstone Pictures on March 14, 2014, in 3D, IMAX 3D, and conventional theaters.",
     "Action, Sport");
    let movie1String = ` ${movie1}`;
    let movie2String = ` ${movie2}`;
    let movie3String = ` ${movie3}`;
    let movie4String = ` ${movie4}`;
    let movie5String = ` ${movie5}`;
    
    console.log(movie2);
    console.log(movie2String);

    
    $('div#content-item-list').append(movie1String)
    $('div#content-item-list').append(movie2String)
    $('div#content-item-list').append(movie3String)
    $('div#content-item-list').append(movie4String)
    $('div#content-item-list').append(movie5String)


    $(".content-item-wrapper").css("margin", "10px")
    $(".content-item-wrapper").css("border","solid 1px black" )
    $(".content-item-wrapper").css("width","430px" )
    $(".content-item-wrapper").css("padding","5px" )
    
       
       
   
});








