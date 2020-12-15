function searchByOrder() {
    console.log("Searching by orders...");
     var orders = $("#orders").val();
     console.log("Order: " + orders);
     $.get("/search", {orders:orders}, function(data){
         console.log("Back from the server with:");
         console.log(data);

         for (var i=0; i< data.list.length; i++) {
             var bike = data.list[i];

             $("#ulBikes").append("<li>"+ "Bike order month#: "+ bike.chapter+ ", Bike order day#: "+ bike.verse + ", Bike name: "+ bike.orders + ", Bike type: "+ bike.orders+ ", Comments: "+ bike.content+"</li>");
         }


     });
}

function searchByType() {
    console.log("Searching by type...");
}