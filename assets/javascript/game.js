$(document).ready(function() {


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

//Functions used in the game-----------------------------------------------

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

  button1.prop("disabled", false);
  button2.prop("disabled", false);
  button3.prop("disabled", false);
  button4.prop("disabled", false);

  totalScoreText.text(totalScore);
  selectedNumberText.text(selectedNumber);
  announcementText.text("");
}

//Function to update page when player wins
function gameWin(){
  wins++;
  winsText.text(wins);
  announcementText.text("You Win!!!");
  completedgame = true;
  button1.prop("disabled", true);
  button2.prop("disabled", true);
  button3.prop("disabled", true);
  button4.prop("disabled", true);
  alert("Please press space bar to start a new game.");
}

function gameLoss(){
  losses++;
  lossesText.text(losses);
  announcementText.text("You Lose. :(");
  button1.prop("disabled", true);
  button2.prop("disabled", true);
  button3.prop("disabled", true);
  button4.prop("disabled", true);
  alert("Please press space bar to start a new game.");
}

//Onclick and Onkeyup functions--------------------------------------------------------
button1.on("click", function(){
   totalScore = totalScore + parseInt(button1.val());
   totalScoreText.text(totalScore);

   if(totalScore === selectedNumber){
     gameWin();
   }else if(totalScore > selectedNumber){
    gameLoss();
   }
});

button2.on("click", function(){
  totalScore = totalScore + parseInt(button2.val());
  totalScoreText.text(totalScore);

  if(totalScore === selectedNumber){
     gameWin();
  }else if(totalScore > selectedNumber){
    gameLoss();
  }
});

button3.on("click", function(){
  totalScore = totalScore + parseInt(button3.val());
  totalScoreText.text(totalScore);

  if(totalScore === selectedNumber){
     gameWin();
  }else if(totalScore > selectedNumber){
    gameLoss();
  }
});

button4.on("click", function(){
  totalScore = totalScore + parseInt(button4.val());
  totalScoreText.text(totalScore);

  if(totalScore === selectedNumber){
     gameWin();
  }else if(totalScore > selectedNumber){
    gameLoss();
  }
});

$(document).keyup(function (event){
  if (event.keyCode == 32 || event.which == 32) {
    newGame();
  } 
});

newGame();
});