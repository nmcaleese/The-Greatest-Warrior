/*----- constants -----*/
//set constants for different cards [note: card names may be used for random index if they're replaced with the score they hold]
const CARDS = {
  card0: { name: "Celt  Warrior", score: 0 },
  card1: { name: "Gladiator", score: 1 },
  card2: { name: "English Knight", score: 2 },
  card3: { name: "Viking", score: 3 },
  card4: { name: "Moari Warrior", score: 4 },
  card5: { name: "Zande Warrior", score: 5 },
  card6: { name: "Persian Immortal", score: 6 },
  card7: { name: "Ninja", score: 7 },
  card8: { name: "Apache", score: 8 },
  card9: { name: "Shaolin Monk", score: 9 },
  card10: { name: "Samurai", score: 10 },
  card11: { name: "Spartan", score: 11 },
};

/*----- app's state (variables) -----*/
let player1,
  player2,
  p1CurrentCard,
  p2CurrentCard,
  p1CurrentScore,
  p2CurrentScore,
  cardsOnField;

/*----- cached element references -----*/

//establish score element
const p1CampEl = document.getElementById("player-1-camp");


//establish score element
const p1ScoreEl = document.getElementById("player-1-score");
const p2ScoreEl = document.getElementById("player-2-score");

//establish card element
const p1CardEl = document.getElementById("player-1-card");
const p2CardEl = document.getElementById("player-2-card");

//establish Determine winner element
const bannerEl = document.getElementById("banner");

/*----- event listeners -----*/
p1CampEl.addEventListener("click", playHand);

bannerEl.addEventListener("click", determineWinner);

/*----- functions -----*/

function initGame() {
  player1 = {
    name: "The Red Warriors",
    p1CurrentScore: [
      CARDS.card0, CARDS.card1, CARDS.card2, CARDS.card3, CARDS.card4, CARDS.card5, CARDS.card6, CARDS.card7, CARDS.card8, CARDS.card9, CARDS.card10, CARDS.card11,
    ],
    p1CurrentCard: [],
  };

  player2 = {
    name: "The Blue Warriors",
    p2CurrentScore: [
      CARDS.card0, CARDS.card1, CARDS.card2, CARDS.card3, CARDS.card4, CARDS.card5, CARDS.card6, CARDS.card7, CARDS.card8, CARDS.card9, CARDS.card10, CARDS.card11,
    ],
    p2CurrentCard: [],
  };
  cardsOnField = [];
}

function playHand() {
  if (player1.p1CurrentScore.length === 0) {
    bannerEl.innerText = "All of your Warriors have been slaughtered";
  } else if (player2.p2CurrentScore.length === 0) {
    bannerEl.innerText = "You have slaughtered the enemies forces!";
  } else {
    // get a random number[Math.floor(Math.random)] bounded by the length of player1's array and assign it "x"
    let x = Math.floor(Math.random() * player1.p1CurrentScore.length);
    // using "x" as the index number, REMOVE a card object from p1CurrentScore array, and assign it to the variable p1CurrentCard
    p1CurrentCard = player1.p1CurrentScore.splice(x, 1);
    cardsOnField.push(p1CurrentCard[0]);
    p1CardEl.innerText = p1CurrentCard[0].name
    // get a random number bounded by the length of player2's array and assign it "y"
    let y = Math.floor(Math.random() * player2.p2CurrentScore.length);
    // using "y" as the index number, REMOVE a card object from p2CurrentScore array, and assicn it to the variable p2CurrentCard
    p2CurrentCard = player2.p2CurrentScore.splice(y, 1);
    cardsOnField.push(p2CurrentCard[0]);
    p2CardEl.innerText = p2CurrentCard[0].name
    bannerEl.innerText = `Fight!`
    console.log(cardsOnField)
  }
}

function determineWinner() {
  // Access p1CurrentCard.score and compare it to p2CurrentCard.score
  if (p1CurrentCard[0].score > p2CurrentCard[0].score) {
    // if p1CurrentCard.score > p2CurrentCard.score {add cardsOnField to p1Current.score}
    bannerEl.innerText = `Your warrior won`;   
    player1.p1CurrentScore.push(cardsOnField[0], cardsOnField[1]);
  } else if (p2CurrentCard[0].score > p1CurrentCard[0].score){
    bannerEl.innerText = `Your warrior was defeated`
    player2.p2CurrentScore.push(cardsOnField[0], cardsOnField[1]);
  } else {
    console.log(cardsOnField)
    // console.log(player1.p1CurrentScore)
    // console.log(player2.p2CurrentScore)  
    bannerEl.innerText = `Your warriors killed each other`
    }
  cardsOnField = [];
  render()
}

function render() {
  p1ScoreEl.innerText = `You have ${player1.p1CurrentScore.length} warriors left in your camp`;
  p2ScoreEl.innerText = `You have ${player2.p2CurrentScore.length} warriors left in your camp`;
}

initGame();

//Ice-box:

//turn off "camp" button once a warrior is on the field

// IN CASE OF TIE else { run getRandoms and determineWinner again}
// Tie will only work if the "grabbing" of the cards out of the array is based on the number of cards, rather than just a specific item in the array

// Establish camp element with tent animation that reflects the player's score
// add: const p2CampEl = document.getElementById("#player-2-camp")
