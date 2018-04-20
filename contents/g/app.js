"use strict";


function getBlogPosts(){
    $.get("https://jsonplaceholder.typicode.com/posts", (data) =>{
        //console.log(data);

        for(let i = 0; i < data.length; i++) {

            $("<h3></h3>").text("Subject: " + data[i].title).appendTo("#blogposts");
            $("<p></p>").text("Text: " + data[i].body).appendTo("#blogposts");

            let number = Math.floor(Math.random() * 100);
            $("<strong></strong>").text("Likes: " + (number)).appendTo("#blogposts");

            $("<button></button>").text("Comments").appendTo("#blogposts").click(function() {

            })
        }

    });

}

function getComments() {
    $.get("https://jsonplaceholder.typicode.com/comments", (data) => {
        //hitta hur man får det till rätt id
        for(let i = 0; i < data.length; i++) {
            $("<p></p>").text("Comments: " + data[i].body).appendTo("#blogposts");
        }
    });

}
getBlogPosts();
getComments();





/*


*/

/*
function getBlogPosts() {
    let $blogposts = $("#blogposts");
    $blogposts.empty();
    for (let objects of objects) {
        let $object = $(`<div class="object">
                <div>${object.title}</div>
                
                <div>${object.body}</div>
               
            </div>`);


        $object.appendTo($blogposts);
    }
}

$.getJSON( "https://jsonplaceholder.typicode.com/posts", function( data ) {
    let object = data;

    for (let objects of objects) {
        object.likes = Math.floor(Math.random() * 100);
    }

    getBlogPosts();

});

/*

for (let i in data.results) {
            $("<h3></h3>").text(data.results).appendTo("#blogposts");
        }


 */

/*


*/

/*
$.get("https://jsonplaceholder.typicode.com/posts", function(data) {

   console.log(data);
    let blogposts =
    for (let blogposts in data.results.title) {
        $("<h3></h3>").text("Bloggpost: " + data.results[i].title).appendTo("#blogposts");
    }
});


//$("<h3></h3>").text(data.results[i].title).appendTo("#blogposts");

*/