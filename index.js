let player = {
    name :" TejveerSinghNaruka " ,
    chips: 123 

}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let sumEl = document.getElementById('sum-el')
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById('card-el')

let playerEl = document.getElementById("palyer-el")
playerEl.textContent = player.name + ":$" + player.chips ; 

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) +1 ;
     if(randomNumber > 10){
         return 10 ;
     }else if (randomNumber === 1) {
         return 11 ;
     }else{
         
         return randomNumber ;
     }

}

function startGame() {
    isAlive = true ;
    let firstCard = getRandomCard();
  let secondCard = getRandomCard();
   cards = [firstCard, secondCard];
   sum = firstCard + secondCard;

    rendergame();
      
}

function rendergame() {
    cardEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum:" + sum;
    if (sum <= 20) {
        message = "Do you want to pick a new card "
    } else if (sum === 21) {
        message = "whoo! you've got blackjack"
        hasBlackJack = true;
    } else {
        message = "you're out of the game !"
        isAlive = false
    }
    messageEl.textContent = message;
   

}



function mycard() {
    if( isAlive === true && hasBlackJack === false  ){
        let card = getRandomCard() ;
        sum += card;
       cards.push(card);
         rendergame(); 
    } ;
   
}








