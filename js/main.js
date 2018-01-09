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


var cardsInPlay = [];
var cardElements ={};
const CARD_BACK_SRC = "images/back.png"

// flip cards back over if they don't match
function noMatch() {
	console.log("no match this time");
		cardsInPlay.forEach(function(card){
			card.setAttribute('src', CARD_BACK_SRC);
			card.addEventListener('click', flipCard);
		});
		cardsInPlay = [];
}

function checkForMatch() {
	console.log(cardsInPlay)
	if (cardsInPlay[0].cardData.rank === cardsInPlay[1].cardData.rank) {
		console.log('we have a match');
		cardsInPlay = [];
	} else {
		noMatch();
	}
}

// upon clicking card
function flipCard() {
	cardsInPlay.push(this);
	this.setAttribute('src', this.cardData.cardImage);
	this.removeEventListener('click', flipCard);
	// check to see if two cards have been picked
	var equalCards = cardsInPlay.length % 2;
	if (equalCards === 0) {
		checkForMatch();
	};
}

function createBoard(){
	for (var i=0; i<cards.length; i++){
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', CARD_BACK_SRC);
		cardElement.cardData = cards[ i ];
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		cardElements[ 'card' + i ] = cardElement;
	}
}



createBoard();

