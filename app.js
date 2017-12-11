console.log("JS is working");

$(document).ready(function() {
  console.log("document is ready");

  $('.button').on('click', function(e) {
    let url= "https://api.rescuegroups.org/http/v2.json"

  }); //end button click function

  $.ajax({
    method: "POST",
    url: "https://api.rescuegroups.org/http/v2.json",
    dataType: "json",
    data: {

    }
    success: searchAnimals
  }); //end ajax object

  function searchAnimals(sA) {
    debugger;
  }; //end searchAnimals function

}); //end document.on ready function
