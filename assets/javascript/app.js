var startScreen;
var gameHTML;
var counter = 30;
var loveFactArray = ["I love that you said yes to Mello Part II for your birthday/our first date. Thanks for taking a chance on me!", "I love your stoney baloney ass. Remember those pot lotion massages in Denver?", "I love that my dog loves you. But concerned he might love you more lol......", "I love your taste in music! Music is how we met and is something we continue to bond over and enjoy together everyday.", "I love that I can meet you at the trap, the mall, where ever! It's always going down. LOL I love that I can go anywhere with you.", "Most importantly, you're my best friend, my rock, my everything. You've stuck by me through the best and worst of times and I never want to leave your side and I want to bring as much happiness as possible for the rest of our lives."];
var musicArray = [new Audio("assets/music/Marshmello_-_Ritual_feat_Wrabel_Lyric_Video[Mp3Converter.net].mp3"), new Audio("assets/music/Potluck f_Kottonmouth Kings  - Stoner Bitch.mp3"), new Audio("assets/music/01 Who Let The Dogs Out.mp3"), new Audio("assets/music/07 Gramatik - Obviously.mp3"), new Audio("assets/music/Yung Joc - It's Goin Down (GoodSex Remix) [EXTENDED MIX].wav"), new Audio("assets/music/Dada Life - Feed The Dada (Radio Edit).mp3")];
var imageArray = ["<img src='assets/images/firstdate.png'>", "<img src='assets/images/stoneybaloney.jpg'>", "<img src='assets/images/doggo.png'>", "<img src='assets/images/scamp2017.jpg'>", "<img src='assets/images/pumpkin.jpg'>", "<img src='assets/images/dadabae.jpg'>"];
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
    if (questionCounter < 5) {
        questionCounter++;
        gameStart();
        counter = 30;
        countdown();
    }
    else {
        finalScreen();
    }
};
var subtronics = new Audio("assets/music/Subtronics - Damage Report.mp3");
var mellosuit = "<img id='meme' src='assets/images/mellosuit.jpg'";
var mozz = "<img id='meme' src='assets/images/riddim.jpg'";
function finalScreen() {
    gameHTML = "<p id='texties' class='text-center'>I LOVE YOU BABES! HAPPY 2 YEAR ANNIVERSARY AND HERE'S TO MANY MORE!</p>" +
        "<p id='sexties' class='text-center'>Mama always told me. Get a woman who's mello in the streets and RIDDIM in the sheets.</p>" + "<div id='mello'>" + mellosuit + "/div>" + "<div id='mozz'>" + mozz + "</div>";
    $(".gameContent").html(gameHTML);
    subtronics.play();
};
function timeUpLoss() {
    setTimeout(wait, 2000);
};