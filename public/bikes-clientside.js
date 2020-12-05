function searchByOrder() {
    console.log("Searching by order...");
     var order = $("#order").val();
     console.log("Order: " + order);
     $.get("/search", {order:order}, function(data){
         console.log("Back from the server with:");
         console.log(data);

         for (var i=0; i< data.list.length; i++) {
             var bike = data.list[i];

             $("#ulBikes").append("<li>" + bike.order + bike.chapter + ":" +bike.verse+"</li>");
         }


     });
}

function searchByType() {
    console.log("Searching by type...");
}