// Change dice 1 to a random dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imgSrcPath1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", imgSrcPath1);

// Change dice 2 to a random dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgSrcPath2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imgSrcPath2);

// Change the title to display a winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerText = "Draw!";
}
