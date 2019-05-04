// alert("Hi and welcome!  I am currently polishing the styling so the boxes are a little wonky, but the core functionality has not been affected.  Enjoy!");

var wins = 0;
var losses = 0;
var tally = 0;
var goal = Math.floor(Math.random() * 101);

$("#computer-number").append(`Target number: ${goal}`);

var crystals = ["assets/images/blue-crystal.jpg", "assets/images/green-crystal.jpg", "assets/images/white-crystal.jpeg", "assets/images/yellow-crystal.jpg"]



	for (var i = 0; i < crystals.length; i++) {
  	var newImage = $("<img>")
  	newImage.addClass("crystal-images")
 	  newImage.attr("src", crystals[i])
  	newImage.attr("data-value", Math.floor(Math.random() * 10 + 1))
  	newImage.css({"width": "150px", "height": "150px"})
  	$("#images").append(newImage)
	}




$(document).on("click", ".crystal-images", function(){
  var value = parseInt($(this).attr("data-value"))
  tally = tally + value

  $("#tally").html(tally);

    if (tally > goal) {
        setTimeout(function(){
          alert(`Game over, you lose.  Target score:  ${goal}.  Your score:  ${tally}.`);
        }, 1)
        setTimeout(function(){
          reset();
        }, 1000);
        losses++;
        $("#losses").html("Losses: " + losses);
    } else if (tally == goal){
        setTimeout(function(){
          alert(`Game over, you win!!  Target score:  ${goal}.  Your score:  ${tally}.`);
        },1);
        setTimeout(function(){
          reset();
        }, 1000)
        wins++;
        $("#wins").html("Wins: " + wins);
    }


})

var myNumber = 10;
myNumber ++;
$("#my-button").on('click', function(){

})

function reset() {
  // Resetting goal to random number
  goal = Math.floor(Math.random() * 101);
  // Putting new goal on page
  $("#computer-number").text(`Target number: ${goal}`);
  // Resetting tally to 0
  tally = 0;
  // Putting new tally on page
  $("#tally").html(tally);
  // Clear out old crystals from page
  $("#images").empty();
  // Looping through 4 crystals
  for (var i = 0; i < crystals.length; i++) {
    // Create new jQuery image
    var newImage = $("<img>")
    // Adding class "crystal-images" to image just created
      newImage.addClass("crystal-images")
      // Setting image created src to the image that we need
      newImage.attr("src", crystals[i])
      // Setting "data-value" attribute of image created to be a random number
      newImage.attr("data-value", Math.floor(Math.random() * 10 + 1))
      // Putting image created on the page
      $("#images").append(newImage)
  }

}
