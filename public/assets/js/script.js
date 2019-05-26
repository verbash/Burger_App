$(document).ready(function() {

  $(".eat-form").on("click", function(event) {
    event.preventDefault();

    console.log(this.value);
    var id = this.value
  
    $.ajax({
      method: "PUT",
      url: "/burger-eat/" + id
      }).then(
        function() {
        // console.log("changed devoured to", devouredIt);

      // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".unEat-form").on("click", function(event) {
    event.preventDefault();

    console.log(this.value);
    var id = this.value
  
    $.ajax({
      method: "PUT",
      url: "/burger-uneat/" + id
      }).then(
        function() {
        // console.log("changed devoured to", devouredIt);

      // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});

// $(document).ready(function() {
    
//     $(".eat-form").on("submit", function(event) {
//       event.preventDefault();
  
//       var burger_id = $(this).children(".burger_id").val();
//       console.log(burger_id);
//       $.ajax({
//         method: "PUT",
//         url: "/burgers/" + burger_id
//       }).then(function(data) {
//         // reload page to display devoured burger in proper column
//         location.reload();
//       });
  
//     });
//   });