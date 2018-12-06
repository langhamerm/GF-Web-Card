var startScreen;
var gameHTML;
var counter = 30;
var loveFactArray = ["I love that you said yes to Mello Part II for your birthday/our first date. Thanks for taking a chance on me!", "I love your stoney baloney ass",];
var musicArray = [new Audio("assets/music/Marshmello_-_Ritual_feat_Wrabel_Lyric_Video[Mp3Converter.net].mp3"), new Audio("assets/music/Potluck f_Kottonmouth Kings  - Stoner Bitch.mp3"),];
var imageArray = ["<img src='assets/images/firstdate.png'", "<img src='assets/images/stoneybaloney.jpg'",];
var questionCounter = 0;
var Timer;
$(document).ready(function () {
    function screenStart() {
        startScreen = "<p class='text-center main-button-container'><a class='btn start-button' href='#' role='button'><img src='assets/images/HART.jpg'>Click heart to start!</a></p>";
        $(".gameContent").html(startScreen);
    }
    screenStart();
});
$("body").on("click", ".start-button", function (event) {
    gameStart();

    countdown();


});
function gameStart() {
    gameHTML = "<p id='texties' class='text-center</p><p id='texties' class='text-center'>" + loveFactArray[questionCounter] + "</p>" + "<div>" + imageArray[questionCounter] + "</div>";
    $(".gameContent").html(gameHTML);
    musicArray[questionCounter].play();

};
function countdown() {
    Timer = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(Timer);
            timeUpLoss();
            musicArray[questionCounter].pause();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
};
function wait() {
    if (questionCounter < 7) {
        questionCounter++;
        gameStart();
        counter = 30;
        countdown();
    }
    else {
        finalScreen();
    }
};
function finalScreen() {
    gameHTML = "<p id='texties' class='text-center'>I LOVE YOU SO MUCH BABES HAPPY BIRTHDAY AND HERE'S TO MANY MORE!</p>";
    $(".gameContent").html(gameHTML);
};
function timeUpLoss() {
	setTimeout(wait, 2000);
};