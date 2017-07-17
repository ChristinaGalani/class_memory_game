console.log("Up and running!");

var cards = [
	{
		rank:"queen",
		suit:"hearts",
		cardImage:"images/queen-of-hearts.png"
	},
	{
		rank:"queen",
		suit:"diamonds",
		cardImage:"images/queen-of-diamonds.png"
	},
	{
		rank:"king",
		suit:"hearts",
		cardImage:"images/king-of-hearts.png"
	},
	{
		rank:"king",
		suit:"diamonds",
		cardImage:"images/king-of-diamonds.png"
	}
];

var shuffle = function (array){
	var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

shuffle(cards);

var cardsInPlay = [];

var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else {
		alert("Sorry, try again...");		
	}
	location.reload();	
	
	console.log(cards);
};

var flipCard = function (){
	var cardId = this.getAttribute('data-id');
	var card = cards[cardId];
	console.log("User flipped " + card.rank);
	cardsInPlay.push(card.rank);
	console.log(card.cardImage);
	console.log(card.suit);
	this.setAttribute('src', card.cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
    }
};

var createBoard = function (){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();





