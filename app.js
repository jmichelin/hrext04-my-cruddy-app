$(document).ready(function() {


  $(".add-text-btn").on("click", function(){
    let inputValue = $(".user-input").val();
    localStorage.setItem("testStorage", inputValue);
    // alert( inputValue );

    // insert this value into local storage

  });



});