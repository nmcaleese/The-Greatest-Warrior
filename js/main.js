/*----- constants -----*/
// const PLAYER1 = 'The Red Warriors';
// const PLAYER2 = 'The Blue Warriors';

//set constants for different cards [note: card names may be used for random index if they're replaced with the score they hold]
const CARDS = {
    card0: {name: 'Celt  Warrior', score: 0},
    card1: {name: 'Gladiator', score: 1},
    card2: {name: 'English Knight', score: 2},
    card3: {name: 'Viking', score: 3},
    card4: {name: 'Moari Warrior', score: 4},
    card5: {name: 'Zande Warrior', score: 5},
    card6: {name: 'Persian Immortal', score: 6},
    card7: {name: 'Ninja', score: 7},
    card8: {name: 'Apache', score: 8},
    card9: {name: 'Shaolin Monk', score: 9},
    card10: {name: 'Samurai', score: 10},
    card11: {name: 'Spartan', score: 11},
}


/*----- app's state (variables) -----*/
let player1, player2, p1CurrentCard, p2CurrentCard, p1CurrentScore, p2CurrentScore, cardsOnField, roundWinner, overallWinner;



/*----- cached element references -----*/




/*----- event listeners -----*/




/*----- functions -----*/

function initGame() {
    player1 = {
        name: 'The Red Warriors', 
        p1CurrentScore: [CARDS.card0, CARDS.card1, CARDS.card2, CARDS.card3, CARDS.card4, CARDS.card5, CARDS.card6, CARDS.card7, CARDS.card8, CARDS.card9, CARDS.card10, CARDS.card11],
        p1CurrentCard: [],
    }

    player2 = {
        name: 'The Blue Warriors', 
        p2CurrentScore: [CARDS.card0, CARDS.card1, CARDS.card2, CARDS.card3, CARDS.card4, CARDS.card5, CARDS.card6, CARDS.card7, CARDS.card8, CARDS.card9, CARDS.card10, CARDS.card11],
        p2CurrentCard: [],
    }
    cardsOnField = []
}


// get a random number[Math.floor(Math.random)] bounded by the length of player1's array and assign it "x"
function getP1Random(){
       let x = Math.floor(Math.random() * player1.p1CurrentScore.length)
        return x;
}
// get a random number bounded by the length of player2's array and assign it "y" 

function getP2Random() {
        let y = Math.floor(Math.random() * player2.p2CurrentScore.length);
        return y};










function playHand() {
    // using "x" as the index number, REMOVE a card object from p1CurrentScore array, and assign it to the variable p1CurrentCard
    p1CurrentCard = player1.p1CurrentScore.splice(x, 1);
    console.log(p1CurrentCard);
    cardsOnField.push(p1CurrentCard)
    console.log(cardsOnField)


    // using "y" as the index number, REMOVE a card object from p2CurrentScore array, and assicn it to the variable p2CurrentCard
    p2CurrentCard = player2.p2CurrentScore.splice(y, 1);
    console.log(p2CurrentCard);
    cardsOnField.push(p2CurrentCard)
    console.log(cardsOnField)

}









function determineWinner() {
// add both cards to the variable cardsOnField
// Access p1CurrentCard.score (=CARDS.card#.score) and compare it to p2CurrentCard.score
// if p1CurrentCard.score > p2CurrentCard.score {add cardsOnField to p1Current.score}
// else if p1CurrentCard.score < p2CurrentCard.score {add cardsOnField to p2Current.score}
// else { run getRandoms and determineWinner again}
}

function reder() {
    //update the DOM to reflect the new Score
}

initGame()