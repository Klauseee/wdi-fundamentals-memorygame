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
var completedCards = [];
var randomNumbers = [];	
var gameBoard = document.getElementById('game-board');
const resetButton = document.getElementById('reset');
const shuffleButton = document.getElementById('shuffle');
const CARD_BACK_SRC = "images/back.png";


function randomise (array) {
	var i = 0,
	    j = 0,
	    temp;

	for (i = array.length - 1; i > 0; i -= 1) {
	    j = Math.floor(Math.random() * (i + 1))
	    temp = array[i]
	    array[i] = array[j]
	    array[j] = temp
 	}
}

// randomise cards 
function shuffle(){
	while (gameBoard.firstChild) {
		gameBoard.removeChild(gameBoard.firstChild);
	};
	
	randomise(randomNumbers);
	
	for (i=0; i<cards.length; i++){
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', CARD_BACK_SRC);
		cardElement.cardData = cards[randomNumbers[i]];
		gameBoard.appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);

	}

}

// return game to inital state
function reset() {
	completedCards.forEach(function(card){
		card.setAttribute('src', CARD_BACK_SRC);
		card.addEventListener('click', flipCard);
	});
	completedCards = [];
	cardsInPlay =[];	
}

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
	completedCards.push(this);
	this.setAttribute('src', this.cardData.cardImage);
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
		cardElement.setAttribute('src', CARD_BACK_SRC);
		cardElement.cardData = cards[i];
		cardElement.addEventListener('click', flipCard);
		gameBoard.appendChild(cardElement);
		resetButton.addEventListener('click', reset);
		shuffleButton.addEventListener('click', shuffle);
		randomNumbers.push(i);
	}
}

createBoard();

