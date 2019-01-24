$(document).ready(function () {
    // need onclick for start
    $("#start").on("click", function () {

    });

    //game questions and answers
    var questions = [{

        question: "Who was Ross sister?",
        choices: ["Rachel", "Monica", "Phoebe"],
        correctAnswer: "Monica",
        //img ?
    },
    {
        question: "In what year did Friends air?",
        choices: ["1994", "1990", "2000"],
        correctAnswer: "1994",
        //img ?
    },
    {
        question: "What band sang the opening credit?",
        choices: ["Third Eye Blind", "The Rembrandts", "Semisonic"],
        correctAnswer: "The Rembrandts",
        //img ?
    },
    {
        question: "What is the only item that Rachel did not bring home from Pottery Barn?",
        choices: ["Coffee table", "Bird Cage", "A lamp"],
        correctAnswer: "A lamp",
        //img ?
    },
    {
        question: "What did Joey name his chair?",
        choices: ["Rosita", "Freddie", "Rosie"],
        correctAnswer: "Rosita",
        //img ?
    },
    {
        question: "Who does Joey dress up as at the Halloween party?",
        choices: ["Monica", "Ross", "Chandler"],
        correctAnswer: "Chandler",
        //img ?
    },
    {
        question: "Where were Ross and Emily supposed to go for their honeymoon?",
        choices: ["Paris", "Rome", "Athens"],
        correctAnswer: "Athens",
        //img ?
    }];
    console.log(questions);

    //variables of the game
    var game = {
        correct: 0,
        incorrect: 0,
        unAnswered: 0,
    }
    console.log(game),

    //Need onclick for answer options
    $(".answer").on("click", function () {
    });

    //hover for answer options
    $(".answer").hover(function () {
        $(this).css({ opacity: .3 });
    },
        function () {
            $(this).css({ opacity: 1 });
        });

    //need onclick for start over
    $(".answer").on("click", function () {
    });

    // game function
        // countdown

    // start game function
        // timer 
        // questions and answers
        //answered question moves into win / lost functions
        //repeat all above with new questions 

    //function for results - total wins & losses & option to start over 

    //reset function
});