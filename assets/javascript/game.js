$( document ).ready(function() {


/*----------------------------Variables--------------------------------------------*/
// Creating variables for use in javascript
var completedgame = false;
var losses = 0;
var wins = 0;
var selectedNumber = 0;
var totalScore = 0;
var test;


// Create variables that hold references to specific tags in the HTML where we want to display and change items.
var announcementText = $("#announcement")
var lossesText = $("#losses");
var winsText = $("#wins");
var totalScoreText = $("#totalScore");
var selectedNumberText = $("#selectedNumber");
var button1 = $("#gemButton1");
var button2 = $("#gemButton2");
var button3 = $("#gemButton3");
var button4 = $("#gemButton4");

//Functions used in the game

//Function to select the random number to add up to 
function randomNumber(){
  var random = Math.floor(Math.random() * (120-19) + 19);
  return random;
}

//Function to select hidden values of crystals
function selectCrystalValues(){
  var value = Math.floor(Math.random() * (12-1) + 1);
  return value;
}

//Start new game
function newGame(){
  completedgame = true;
  selectedNumber = randomNumber();
  totalScore = 0;
  
  button1.val(selectCrystalValues());
  console.log(button1.val());
  button2.val(selectCrystalValues());
  console.log(button2.val());
  button3.val(selectCrystalValues());
  console.log(button3.val());
  button4.val(selectCrystalValues());
  console.log(button4.val());

  totalScoreText.text(totalScore);
  selectedNumberText.text(selectedNumber);
  announcementText.text("");
}

//Onclick functions
button1.on("click", function(){
   console.log(parseInt(button1.val()));
   console.log(typeof(parseInt(button1.val())));
   totalScore = totalScore + parseInt(button1.val());
   totalScoreText.text(totalScore);

   if(totalScore === selectedNumber){
      wins++;
      winsText.text(wins);
      announcementText = "You Win!!!"
      completedgame = true;
      alert("Please press space bar to start a new game.");
   }else if(totalScore > selectedNumber){
     losses++;
     lossesText.text(losses);
     announcementText = "You Lose. :("
     alert("Please press space bar to start a new game.");
   }
});

button2.on("click", function(){
  console.log(parseInt(button2.val()));
  console.log(typeof(parseInt(button2.val())));
  totalScore = totalScore + parseInt(button2.val());
  totalScoreText.text(totalScore);

  if(totalScore === selectedNumber){
     wins++;
     winsText.text(wins);
     newGame();
  }else if(totalScore > selectedNumber){
    losses++;
    lossesText.text(losses);
    newGame();
  }
});

button3.on("click", function(){
  console.log(parseInt(button3.val()));
  console.log(typeof(parseInt(button3.val())));
  totalScore = totalScore + parseInt(button3.val());
  totalScoreText.text(totalScore);

  if(totalScore === selectedNumber){
     wins++;
     winsText.text(wins);
     newGame();
  }else if(totalScore > selectedNumber){
    losses++;
    lossesText.text(losses);
    newGame();
  }
});

button4.on("click", function(){
  console.log(parseInt(button4.val()));
  console.log(typeof(parseInt(button4.val())));
  totalScore = totalScore + parseInt(button4.val());
  totalScoreText.text(totalScore);

  if(totalScore === selectedNumber){
     wins++;
     winsText.text(wins);
     newGame();
  }else if(totalScore > selectedNumber){
    losses++;
    lossesText.text(losses);
    newGame();
  }
});



newGame();
});