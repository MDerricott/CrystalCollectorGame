function makeScore() {
    var score = Math.floor(Math.random() * 101) + 20;
    gameScore = Number(score);

}

function makeCrystalValue() {
    for (var i = 0; i < 4; i++) {
        var value = Math.floor(Math.random() * 12) + 1;
        crystalValueString.push(value);
    }

    $(".crystal-one").attr("value", crystalValueString[0]);
    $(".crystal-two").attr("value", crystalValueString[1]);
    $(".crystal-three").attr("value", crystalValueString[2]);
    $(".crystal-four").attr("value", crystalValueString[3]);

}

function theGame(target, user) {
    if (target === user) {
        gameScore = 0;
        youScore = 0;
        $(".your-score").text("");
        crystalValueString = [];
        $(".result").text("You Win!");
        wins++;
        $(".win").text("wins " + wins);
        makeScore();
        makeCrystalValue();
        console.log("win new game");
        console.log("win new target" + gameScore);

    }
    else if (target < user) {
        
        $(".result").text("You Lose!")
        losses++;
        $(".lost").text("losses " + losses);
        gameScore = 0;
        youScore = 0;
        crystalValueString = [];
        $(".your-score").text("");
        makeScore();
        makeCrystalValue();
        console.log("lost new game");
        console.log("lost new target" + gameScore);

    }
    $(".game-score").text(gameScore);
}


var crystalValueString = [];
var gameScore = "";
var youScore = 0;
var wins = 0;
var losses = 0;





$(document).ready(function () {
    makeCrystalValue();
    makeScore();
    $(".game-score").text(gameScore);
    $(".win").text("wins " + wins);
    $(".lost").text("losses " + losses);

    $(".crystal-one").on("click", function () {
        $(".result").empty();
        var fromOne = $(this).attr("value");
        youScore += Number(fromOne);
        console.log(youScore);
        $(".your-score").text(youScore);
        theGame(gameScore, youScore);


    });

    $(".crystal-two").on("click", function () {
        $(".result").empty();
        var fromTwo = $(this).attr("value");
        youScore += Number(fromTwo);
        console.log(youScore);
        $(".your-score").text(youScore);
        theGame(gameScore, youScore);

    });

    $(".crystal-three").on("click", function () {
        $(".result").empty();
        var fromThree = $(this).attr("value");
        youScore += Number(fromThree);
        console.log(youScore);
        $(".your-score").text(youScore);
        theGame(gameScore, youScore);

    });

    $(".crystal-four").on("click", function () {
        $(".result").empty();
        var fromFour = $(this).attr("value");
        youScore += Number(fromFour);
        console.log(youScore);
        $(".your-score").text(youScore);
        theGame(gameScore, youScore);
    });



});

