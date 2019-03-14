$(document).ready(function(){

    // start the game when user clicks on Start button
    $("#start-button").on("click", gameState.startTimer);
  
  });
  
  // information about the state of game play
  var gameState = {
  
    // set the time at 60 seconds, and count down by 1 second
    timeRemaining : 60,
  
    // start the timer, hide the start page, show the questions
    startTimer: function() {
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      setInterval(gameState.countdown, 1000);
      $("#start-page").hide();
      trivia.displayQuestions();
    },
  
    // decrement the timer and update the UI; stop the timer at 0
    countdown: function() {
      gameState.timeRemaining--;
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      if (gameState.timeRemaining === 0) {
        gameState.stopTimer();
        $("#timer").empty();
      }
    },
  
    // stop the timer and check the answers
    stopTimer: function() {
      clearInterval();
      trivia.checkAnswers();
    },
  
    // hide the quetions and display the end page with results
    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
      $("#end-page").show();
      $("#questions-box").empty();
      $("#timer").empty();
      $("#timer").hide();
      $("#correct-answers").text("Correct Answers: " + numCorrect);
      $("#incorrect-answers").text("Incorrect Answers: " + numIncorrect);
      $("#unanswered").text("Skipped Questions: " + numUnanswered);
    }
  }
  
  // functions to handle the building questions page and scoring
  var trivia = {
  
    // pull questions from the array of questions, loop through them, and append to UI
    displayQuestions: function() {
      var divContainer = $("#questions-box");
      var answerGroup = $(".form-check");
              
      for (var i = 0; i < quiz.length; i++) {
  
        divContainer.append('<div id="question">' + quiz[i].question + '</div>');
  
        var answer1 = quiz[i].answers[0];
        var answer2 = quiz[i].answers[1];
        var answer3 = quiz[i].answers[2];
        var answer4 = quiz[i].answers[3];
  
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
    }
  
      // add a Done button to the end of the page and register its click handler
      var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
      divContainer.append(doneButton);
      $("#done-button").on("click", gameState.stopTimer);
    },
  
    // test if the user answers are correct, incorrect, or if there are unanswered questions
    checkAnswers: function() {
      var correctAnswer;
      var userAnswer;
      var numCorrect = 0;
      var numIncorrect = 0;
      var numUnanswered = 0;
  
      // loop through to compare the text of the label with the user answers
      // increment score counts appropriately
      for (var i = 0; i < quiz.length; i++) {
        correctAnswer = quiz[i].correct;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();
  
        if (userAnswer === correctAnswer) {
          numCorrect++;
        } else if (userAnswer === "") {
          numUnanswered++;
        } else if (userAnswer !== correctAnswer) {
          {
            numIncorrect++;
          }
        }
      }
  
      // show the end page with the score tally
      gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
    },
  }
  
  // array of objects with the questions, possible answers, and the correct answer
  var quiz = [{
    question: "Who lives in a pineapple under the sea?",
    answers:
        [
        "SPONGEBOB SQUAREPANTS!",
        "Spongebob Squarepants...",
        "Some sponge thing.",
        "... Technically all of the above",
        ],
    correctAnswer: "...Technically all of the above"
    },
    {    
    question: "What is the largest species of fish?",
    answers:
        [
        "Basking Shark",
        "Giant Oceanic Manta Ray",
        "Blue Whale",
        "Whale Shark",
        ],
    correctAnswer: "Whale Shark"
    },
    {
    question: "How much of the Earth is water?",
    answers:    
        [
        "57%",
        "93%",
        "72%",
        "Water is a myth, 0%",
        ],
    correctAnswer: "72%"
    },
    {
    question: "Which of these bodies of water is the saltiest?",
    answers:
        [
        "The Dead Sea",
        "Gaet'ale Pond",
        "Lake Tears of a Webdesigner",
        "Red Sea"
        ],
    correctAnswer: "Gaet'ale Pond"
    },
    {
    question: "What is the name of Aquaman's Octopus sidekick?",
    answers:
        [
        "OctoLegs",
        "Marco",
        "Polo",
        "Topo"
        ],
    correctAnswer: "Topo"
    },
    {
    question: "How much of the water in the world is fresh water?",
    answers:
        [
        "All of it, I have an infinite supply from my tap.",
        "2.5%",
        "5%",
        "10%"
        ],
    correctAnswer: "--PLACEHOLDER ANSWER 1--"
    },
    {
    question: "Coral is scientifically classified as...",
    answers:
        [
        "Rocks",
        "Polyps",
        "Fish",
        "Some pink stuff"
        ],
    correctAnswer: "Polyps"
    },
    {
    question: "The Challenger Deep is considered the deepest part of the ocean. How deep is it?",
    answers:
        [
        "The length of an Eric",
        "1 million feet",
        "36 thousand feet",
        "29 thousand feet"
        ],
    correctAnswer: "36 thousand feet"
    },
    {
    question: "Spongebob is described as...",
    answers:
        [
        "Absorbant, porous, and yellow",
        "Obnoxious, Annoying, and Loud",
        "Yellow, Sponge-like, Squarish",
        "Best friends with Ajax"
        ], 
    correctAnswer: "Absorbant, porous, and yellow"
    },
    {
    question: "Patrick Star from Spongebob has a father. What is his name?",
    answers:
        [
        "Heart",
        "Hart",
        "Patrick",
        "Herb"
        ],
    correctAnswer: "Herb"
    }
];