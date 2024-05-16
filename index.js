var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceimage1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceimage1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceimage2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceimage2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
    document.querySelector("h2").innerHTML = "Dice Game";
} 
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "palyer 2 wins!";
    document.querySelector("h2").innerHTML = "Dice Game";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector("h2").innerHTML = "Dice Game";
}

var refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);

