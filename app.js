//Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyordugaar toglogchiig 1 gej temdeglie
var activePlayer = 0;

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
//Shoog shideh event listner
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 hoorond sansanamsargui toog
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //web deer bgaa zuragiig haragddag bolgoh
  docdom.style.display = "block";
  //shoonii toog zurgand hargalzan gargah
  docdom.src = "dice-" + diceNumber + ".png";
  if (diceNumber !== 1) {
    // yalgaatai bol toglogchiin onoog nemeh
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    document.getElementById("current-" + activePlayer).textContent = 0;
    roundScore = 0;
    activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  }
});
//
// // Shoond buusan eeljit toglogchiin onoond nemj ugnu gehdee 1 busad toog l n     emene.

// //1 buuhad eeljin toglogchiig solino}
