//game questions and answers
var triviaQuestions = [{
    question: "Who was Ross sister?",
    answerList: ["Rachel", "Monica", "Phoebe"],
    answer: 1
}, {
    question: "In what year did Friends air?",
    answerList: ["1994", "1990", "2000"],
    answer: 0
}, {
    question: "What band sang the opening credit?",
    answerList: ["Third Eye Blind", "The Rembrandts", "Semisonic"],
    answer: 1
}, {
    question: "What is the only item that Rachel did not bring home from Pottery Barn?",
    answerList: ["Coffee table", "Bird Cage", "A lamp"],
    answer: 2
}, {
    question: "What did Joey name his chair?",
    answerList: ["Rosita", "Freddie", "Rosie"],
    answer: 0
}, {
    question: "Who does Joey dress up as at the Halloween party?",
    answerList: ["Monica", "Ross", "Chandler"],
    answer: 2
}, {
    question: "Where were Ross and Emily supposed to go for their honeymoon",
    answerList: ["Paris", "Rome", "Athens"],
    answer: 2
}];
console.log(triviaQuestions);

//pictures refering to the answers
// var jpgArray = ["question1", "question2", "question3", "question4", "question5", "question6", "question7"];

//game variables
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;

//game messages after questions answers and result page
var messages = {
    correct: "Awesome job!",
    incorrect: "WRONG!",
    endTime: "Times Up!",
    finished: "Now, lets check out how you did."
}

//start game buttom
$("#startBtn").on("click", function () {
    $(this).hide();
    newGame();
});

//start over button on results page
$("#startOverBtn").on("click", function () {
    $(this).hide();
    newGame();
});

function newGame() {
    $("#finalMessage").empty();
    $("#correctAnswers").empty();
    $("#incorrectAnswers").empty();
    $("#unanswered").empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

//gets questions and asnwers set up
function newQuestion() {
    $("#message").empty();
    $("#correctedAnswer").empty();
    // $("#jpg").empty();
    answered = true;

    $("#currentQuestion").html("Question #" + (currentQuestion + 1) + "/" + triviaQuestions.length);
    $(".question").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");
    for (var i = 0; i < 4; i++) {
        var choices = $("<div>");
        choices.text(triviaQuestions[currentQuestion].answerList[i]);
        choices.attr({ "data-index": i });
        choices.addClass("thisChoice");
        $(".answerList").append(choices);
    }
    countdown();
   
    $(".thisChoice").on("click", function () {
        userSelect = $(this).data("index");
        clearInterval(time);
        answerPage();
    });
}

//countdown - goes down from 15 sec
function countdown() {
    seconds = 15;
    $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
    answered = true;
    time = setInterval(showCountdown, 1000);
}

//display of the countdown
function showCountdown() {
    seconds--;
    $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        answerPage();
    }
}

// page sets up correct/incorrect/unanswered answers
function answerPage() {
    $("#currentQuestion").empty();
    $(".thisChoice").empty(); //Clears question page
    $(".question").empty();

    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;

    // $('#jpg').html('<img src = "assets/images'+ jpgArray[currentQuestion] +'.jpg" width = "400px">');

    //checks to see correct, incorrect, or unanswered
    if ((userSelect == rightAnswerIndex) && (answered == true)) {
        correctAnswer++;
        $("#message").html(messages.correct);
    } else if ((userSelect != rightAnswerIndex) && (answered == true)) {
        incorrectAnswer++;
        $("#message").html(messages.incorrect);
        $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
    } else {
        unanswered++;
        $("#message").html(messages.endTime);
        $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
        answered = true;
    }

    if (currentQuestion == (triviaQuestions.length - 1)) {
        setTimeout(resultPage, 5000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 3000);
    }
}

//result page
function resultPage() {
    $("#timeLeft").empty();
    $("#message").empty();
    $("#correctedAnswer").empty();
    // $("#jpg").empty();
    $("#finalMessage").html(messages.finished);
    $("#correctAnswers").html("Correct Answers: " + correctAnswer);
    $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswer);
    $("#unanswered").html("Unanswered: " + unanswered);
    $("#startOverBtn").addClass("reset");
    $("#startOverBtn").show();
    $("#startOverBtn").html("Start Over?");
}


