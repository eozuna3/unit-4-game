$(document).ready(function () {


  /*----------------------------Variables--------------------------------------------*/
  // Creating variables for use in javascript
  var losses = 0;
  var wins = 0;
  var selectedNumber = 0;
  var totalScore = 0;
  var gemValueArray = [];


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
  function randomNumber() {
    var random = Math.floor(Math.random() * (120 - 19) + 19);
    return random;
  }

  //Function to select hidden values of crystals
  function selectCrystalValues() {
    var value = Math.floor(Math.random() * (12 - 1) + 1);
    return value;
  }

  //Function to random and different numbers for each gem button
  function createGemValues(){
    for (let index = 0; index < 4; index++) {
      gemValueArray.push(selectCrystalValues());
      for (let index2 = 0; index2 < gemValueArray.length - 1; index2++) {
        if (gemValueArray[index] === gemValueArray[index2]) {
          var temp = selectCrystalValues();
          while (temp === gemValueArray[index]) {
            temp = selectCrystalValues();
          } 
          gemValueArray[index] = temp;
        }
      }
    }
  }

  //Start new game
  function newGame() {
    selectedNumber = randomNumber();
    totalScore = 0;
    gemValueArray=[];

    createGemValues();
    button1.val(gemValueArray[0]);
    button2.val(gemValueArray[1]);
    button3.val(gemValueArray[2]);
    button4.val(gemValueArray[3]);

    button1.prop("disabled", false);
    button2.prop("disabled", false);
    button3.prop("disabled", false);
    button4.prop("disabled", false);

    totalScoreText.text(totalScore);
    selectedNumberText.text(selectedNumber);
    announcementText.text("");
  }

  //Function to update page when player wins
  function gameWin() {
    wins++;
    winsText.text(wins);
    announcementText.text("You Win!!!");
    
    button1.prop("disabled", true);
    button2.prop("disabled", true);
    button3.prop("disabled", true);
    button4.prop("disabled", true);
  }

  //Function to update game when player loses
  function gameLoss() {
    losses++;
    lossesText.text(losses);
    announcementText.text("You Lose. :(");
    
    button1.prop("disabled", true);
    button2.prop("disabled", true);
    button3.prop("disabled", true);
    button4.prop("disabled", true);
  }

  //Onclick and Onkeyup functions--------------------------------------------------------
  button1.on("click", function () {
    totalScore = totalScore + parseInt(button1.val());
    totalScoreText.text(totalScore);

    if (totalScore === selectedNumber) {
      gameWin();
    } else if (totalScore > selectedNumber) {
      gameLoss();
    }
  });

  button2.on("click", function () {
    totalScore = totalScore + parseInt(button2.val());
    totalScoreText.text(totalScore);

    if (totalScore === selectedNumber) {
      gameWin();
    } else if (totalScore > selectedNumber) {
      gameLoss();
    }
  });

  button3.on("click", function () {
    totalScore = totalScore + parseInt(button3.val());
    totalScoreText.text(totalScore);

    if (totalScore === selectedNumber) {
      gameWin();
    } else if (totalScore > selectedNumber) {
      gameLoss();
    }
  });

  button4.on("click", function () {
    totalScore = totalScore + parseInt(button4.val());
    totalScoreText.text(totalScore);

    if (totalScore === selectedNumber) {
      gameWin();
    } else if (totalScore > selectedNumber) {
      gameLoss();
    }
  });

  $(document).keyup(function (event) {
    if (event.keyCode == 32 || event.which == 32) {
      newGame();
    }
  });

  newGame();
});