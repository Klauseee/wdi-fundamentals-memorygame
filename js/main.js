var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	},

];

var cardElement;
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("we have a match!");
	} else {
			alert("no match this time");
			// noMatch();
	}
}

// upon clicking card
function flipCard() {
	var cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src', cards[cardID].cardImage);
	this.removeEventListener('click', flipCard);
	// check to see if two cards have been picked
	var equalCards = cardsInPlay.length % 2;
	if (equalCards === 0) {
		checkForMatch();
	};
}


function createBoard(){
	for (i=0; i<cards.length; i++){
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		var button = document.getElementById('reset');
		button.addEventListener('click', reset);
	}
}


createBoard();
reset();

