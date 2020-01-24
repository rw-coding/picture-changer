var picture = document.getElementById("changingImage");
var firstButton = document.getElementById("buttonOne");
var secondButton = document.getElementById("buttonTwo");
var thirdButton = document.getElementById("buttonThree");
var fourthButton = document.getElementById("buttonFour");

function changeCola() {
    if (firstButton.style.backgroundColor = "darkred") {
        picture.style.backgroundImage = 'url("../images/Cola.png")';
        firstButton.style.backgroundColor = "firebrick";
        secondButton.style.backgroundColor = "darkred";
        thirdButton.style.backgroundColor = "darkred";
        fourthButton.style.backgroundColor = "darkred";
    };
}
function changePepsi() {
    if (secondButton.style.backgroundColor = "darkred") {
        picture.style.backgroundImage = 'url("../images/Pepsi.png")';
        firstButton.style.backgroundColor = "darkred";
        secondButton.style.backgroundColor = "firebrick";
        thirdButton.style.backgroundColor = "darkred";
        fourthButton.style.backgroundColor = "darkred";
    };
}
function changeMountainDew() {
    if (thirdButton.style.backgroundColor = "darkred") {
        picture.style.backgroundImage = 'url("../images/Dew.png")';
        firstButton.style.backgroundColor = "darkred";
        secondButton.style.backgroundColor = "darkred";
        thirdButton.style.backgroundColor = "firebrick";
        fourthButton.style.backgroundColor = "darkred";
    };
}
function changeDrPepper() {
    if (fourthButton.style.backgroundColor = "darkred") {
        picture.style.backgroundImage = 'url("../images/DrPepper.png")';
        firstButton.style.backgroundColor = "darkred";
        secondButton.style.backgroundColor = "darkred";
        thirdButton.style.backgroundColor = "darkred";
        fourthButton.style.backgroundColor = "firebrick";
    };
}