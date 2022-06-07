/*----- constants -----*/
const CARDS = {
  card0: { name: "Celt  Warrior", score: 0, image: "url('https://i.imgur.com/hSPyWt0.jpg?2')" },
  card1: { name: "Gladiator", score: 1, image: "url('https://i.imgur.com/5HeHBme.png?1')" },
  card2: { name: "Knight", score: 2, image: "url('https://i.imgur.com/eY0Z0GU.jpg')"},
  card3: { name: "Viking", score: 3, image: "url('https://i.imgur.com/edSSlUo.jpg')" },
  card4: { name: "Zulu Warrior", score: 4, image: "url('https://i.imgur.com/aq0B8qu.jpg?1')"},
  card5: { name: "Persian Immortal", score: 5, image: "url('https://i.imgur.com/AQ3XXiO.png?1')"},
  card6: { name: "Apache", score: 6, image: "url('https://i.imgur.com/NEjig64.jpg?1')" },
  card7: { name: "Ninja", score: 7, image: "url('https://i.imgur.com/DZvRF4y.jpg')" },
  card8: { name: "Centurian", score: 8, image: "url('https://i.imgur.com/6K36uwf.png?1')" },
  card9: { name: "Shaolin Monk", score: 9, image: "url('https://i.imgur.com/mWSlydo.png?1')" },
  card10: { name: "Samurai", score: 10, image: "url('https://i.imgur.com/7sMQemI.jpg')" },
  card11: { name: "Spartan", score: 11, image: "url('https://i.imgur.com/0grqUQc.png')" },
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

const p1CampEl = document.getElementById("player-1-camp");

const p1ScoreEl = document.getElementById("player-1-score");
const p2ScoreEl = document.getElementById("player-2-score");

const p1CardEl = document.getElementById("player-1-card");
const p2CardEl = document.getElementById("player-2-card");

const bannerEl = document.getElementById("banner");

/*----- event listeners -----*/
p1CampEl.addEventListener("click", playHand);

bannerEl.addEventListener("click", determineWinner);

/*----- functions -----*/

function initGame() {
  player1 = {
    name: "The Red Warriors",
    p1CurrentScore: [
      CARDS.card0,
      CARDS.card1,
      CARDS.card2,
      CARDS.card3,
      CARDS.card4,
      CARDS.card5,
      CARDS.card6,
      CARDS.card7,
      CARDS.card8,
      CARDS.card9,
      CARDS.card10,
      CARDS.card11,
    ],
    p1CurrentCard: [],
  };

  player2 = {
    name: "The Blue Warriors",
    p2CurrentScore: [
      CARDS.card0,
      CARDS.card1,
      CARDS.card2,
      CARDS.card3,
      CARDS.card4,
      CARDS.card5,
      CARDS.card6,
      CARDS.card7,
      CARDS.card8,
      CARDS.card9,
      CARDS.card10,
      CARDS.card11,
    ],
    p2CurrentCard: [],
  };
  cardsOnField = [];
}

function randomCard() {
  let x = Math.floor(Math.random() * player1.p1CurrentScore.length);
  p1CurrentCard = player1.p1CurrentScore.splice(x, 1);
  let y = Math.floor(Math.random() * player2.p2CurrentScore.length);
    p2CurrentCard = player2.p2CurrentScore.splice(y, 1);
}

function playHand() {
  randomCard()
  if (player1.p1CurrentScore.length === 0) {
    bannerEl.innerText = "All of your Warriors have been slaughtered";
  } else if (player2.p2CurrentScore.length === 0) {
    bannerEl.innerText = "You have slaughtered the enemies forces!";
  } else {
    cardsOnField.push(p1CurrentCard[0]);
    cardsOnField.push(p2CurrentCard[0]);
    p1CardEl.innerText = p1CurrentCard[0].name;
    p2CardEl.innerText = p2CurrentCard[0].name;
    
    bannerEl.innerText = `Fight!`;
    changeCards()
  }
}

function determineWinner() {
  if (p1CurrentCard[0].score > p2CurrentCard[0].score) {
    bannerEl.innerText = `Your warrior won`;
    player1.p1CurrentScore.push(cardsOnField[0], cardsOnField[1]);
  } else if (p2CurrentCard[0].score > p1CurrentCard[0].score) {
    bannerEl.innerText = `Your warrior was defeated`;
    player2.p2CurrentScore.push(cardsOnField[0], cardsOnField[1]);
  } else {
    bannerEl.innerText = `Your warriors killed each other`;
  }
  cardsOnField = [];
  render();
}

function render() {
  p1ScoreEl.innerText = `You have ${player1.p1CurrentScore.length} warriors left in your camp`;
  p2ScoreEl.innerText = `You have ${player2.p2CurrentScore.length} warriors left in your camp`;

  bannerEl.innerText = `prepare to fight`;
}

function changeCards() {
  p1CardEl.style.backgroundImage = cardsOnField[0].image
  p2CardEl.style.backgroundImage = cardsOnField[1].image
}

initGame();


//turn off "camp" button once a warrior is on the field

// IN CASE OF TIE else { run getRandoms and determineWinner again}
// Tie will only work if the "grabbing" of the cards out of the array is based on the number of cards, rather than just a specific item in the array

// Establish camp element with tent animation that reflects the player's score
// add: const p2CampEl = document.getElementById("#player-2-camp")
