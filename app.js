$(document).ready(function() {


  $(".add-text-btn").on("click", function(){
    let inputValue = $(".user-input").val();
    localStorage.setItem("testStorage", inputValue);
    //alert( "value from local storage " + localStorage.getItem("testStorage") );

    $(".display").text(localStorage.getItem("testStorage"));
    console.log(localStorage);
  });

   $(".user-input").on("keyup", function(){
     let inputValue = $(".user-input").val();
     localStorage.setItem("testStorage", inputValue);
     $(".display").text(localStorage.getItem("testStorage"));
   });

   $(".del-text-btn").on("click", function() {
     localStorage.removeItem("testStorage");
     alert('item deleted? check the console');
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});