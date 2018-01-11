const cards = [
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


function randomise(array) {
	var i = 0;
	var j = 0;
	var temp;
	// 'clone' input array using .slice()
	var newArray = array.slice();

	for (i = newArray.length - 1; i > 0; i -= 1) {
	    j = Math.floor(Math.random() * (i + 1))
	    temp = newArray[i]
	    newArray[i] = newArray[j]
	    newArray[j] = temp
 	}
 	return newArray;
}

function hideCard(card){
	card.setAttribute('src', CARD_BACK_SRC);
	card.addEventListener('click', flipCard);
}

// randomise cards 
function shuffle(){
	const pack = Array.from(gameBoard.childNodes);
	const randomisedPack = randomise(pack);

	randomisedPack.forEach(card => {
		gameBoard.removeChild(card);
		gameBoard.appendChild(card);
		hideCard(card);
	})

}

// return game to inital state
function reset() {
	completedCards.forEach(hideCard);
	completedCards = [];
	cardsInPlay =[];	
}

// flip cards back over if they don't match
function noMatch() {
	console.log("no match this time");
		cardsInPlay.forEach(hideCard);
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
	resetButton.addEventListener('click', reset);
	shuffleButton.addEventListener('click', shuffle);
	for (i=0; i<cards.length; i++){
		cardElement = document.createElement('img');
		cardElement.cardData = cards[i];
		hideCard(cardElement);
		gameBoard.appendChild(cardElement);
		randomNumbers.push(i);
	}
}

createBoard();

