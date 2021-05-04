//Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyordugaar toglogchiig 1 gej temdeglie
var activePlayer = 1;

// Toglogchiintsugluulsan onoog hadgalah huvisagch
var score = [0, 0];

//Toglogchiin eeljind tsugluulsan onoo
var roundScore = 0;

// Shoon ali talaar buuh fuction 1-6 hooroond randam too orno.;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var docdom = document.querySelector(".dice");
docdom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  docdom.style.display = "block";
  docdom.src = "dice-" + diceNumber + ".png";
});
