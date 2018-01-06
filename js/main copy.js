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
var cardsInPlayPosition = []
// var reset = getElementById('reset');


// flip the cards back over if they don't match
function noMatch() {
	for (i=0; i<cardsInPlayPosition.length; i++){
		// document.querySelector(`img[data-id="${cardsInPlayPosition[i]}"]`).setAttribute('src', "images/back.png");
		$(`[data-id="${cardsInPlayPosition[i]}"]`).attr('src', 'images/back.png')
	}
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("we have a match!");
	} else {
			alert("no match this time");
			noMatch();
	}
}

function flipCard() {
	var cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID].rank);
	cardsInPlayPosition.push(this['data-id']);
	this.setAttribute('src', cards[cardID].cardImage);
	this.removeEventListener('click', flipCard);
	// check to see if two cards have been picked
	var equalCards = cardsInPlay.length % 2;
	if (equalCards === 0) {
		checkForMatch();
	};
}

/*function reset(){
	var removeCards = document.getElementsByTagName('img');
	removeCards.parentNode.removeChild(removeCards);
	createBoard();
}*/

function createBoard(){
	for (i=0; i<cards.length; i++){
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		// reset.addEventListener('click', reset);
	}
}


createBoard();

