console.log("Up and running!");

var cards = ["queen","king","queen","king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3]; 

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else {
		alert("Sorry, try again...");
	}

}
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);