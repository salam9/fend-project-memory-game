/*
 * Create a list that holds all of your cards
 */

let cards = document.querySelectorAll('.deck .card');
const cardsArray = [...cards];
document.querySelector('.deck').innerHTML = '';
let fragment = document.createDocumentFragment() ;

for (card of shuffle(cardsArray)){
  fragment.appendChild(card) ;
}

document.querySelector('.deck').appendChild(fragment);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
var openedCards = new Array();
const dock= document.querySelector('.deck');
let movesCounter = 0;

window.onload = dock.addEventListener('click', function(){ 
        if(event.target.classList.contains('card')){
            clickedCard=event.target;
        }

        if(!openedCards.includes(clickedCard)){
            flipCard(clickedCard);
            openedCards.push(clickedCard);
            console.log("openedCards Array Length "+openedCards.length);
        }
        
        if (openedCards.length%2==0){
            console.log("now comparison openedCards Length "+openedCards.length)
            comparison(openedCards);
            if(openedCards.length==16){
                win();
            }
            
        }
        countMoves();
})

function flipCard(card) {
        card.classList.toggle('open');
        card.classList.toggle('show');
}
function comparison(Cards){
    
    if (Cards[Cards.length-1].childNodes[1].classList.value==Cards[Cards.length-2].childNodes[1].classList.value){
        setTimeout(function () {
        match(Cards[Cards.length-1]);
        match(Cards[Cards.length-2]);
        console.log("match");
        }, 500);
    }
    else{
        setTimeout(function () {
        flipCard(Cards[Cards.length-1]);
        flipCard(Cards[Cards.length-2]);
        Cards.pop();
        Cards.pop();
        console.log("not match");
        }, 500);
    }
}
function match(card){
    card.classList.add('match');
}

function countMoves() {
    movesCounter++;
}
function win(){
    if(event.target.classList.contains('card')){
        alert("cogra you win");
    }
    
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
