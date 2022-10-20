/*----- constants -----*/

const CARDS = {
  card0: {
    name: "Celt  Warrior",
    score: 0,
    image: "url('https://i.imgur.com/hSPyWt0.jpg?2')",
  },
  card1: {
    name: "Gladiator",
    score: 1,
    image: "url('https://i.imgur.com/5HeHBme.png?1')",
  },
  card2: {
    name: "Knight",
    score: 2,
    image: "url('https://i.imgur.com/eY0Z0GU.jpg')",
  },
  card3: {
    name: "Viking",
    score: 3,
    image: "url('https://i.imgur.com/edSSlUo.jpg')",
  },
  card4: {
    name: "Zulu Warrior",
    score: 4,
    image: "url('https://i.imgur.com/aq0B8qu.jpg?1')",
  },
  card5: {
    name: "Persian Immortal",
    score: 5,
    image: "url('https://i.imgur.com/AQ3XXiO.png?1')",
  },
  card6: {
    name: "Apache",
    score: 6,
    image: "url('https://i.imgur.com/NEjig64.jpg?1')",
  },
  card7: {
    name: "Ninja",
    score: 7,
    image: "url('https://i.imgur.com/DZvRF4y.jpg')",
  },
  card8: {
    name: "Centurian",
    score: 8,
    image: "url('https://i.imgur.com/6K36uwf.png?1')",
  },
  card9: {
    name: "Shaolin Monk",
    score: 9,
    image: "url('https://i.imgur.com/mWSlydo.png?1')",
  },
  card10: {
    name: "Samurai",
    score: 10,
    image: "url('https://i.imgur.com/7sMQemI.jpg')",
  },
  card11: {
    name: "Spartan",
    score: 11,
    image: "url('https://i.imgur.com/0grqUQc.png')",
  },
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


const p1PlayButtonEl = document.getElementById("send-warrior");

const player1HandEl = document.querySelectorAll("#player-1-hand > .card");

const player2HandEl = document.querySelectorAll("#player-2-hand > .card");

const anyCardEl = document.getElementById("player-1-hand");

const p1ScoreEl = document.getElementById("p1-score");

const p2ScoreEl = document.getElementById("p2-score");

const p1CardEl = document.getElementById("player-1-card");

const p2CardEl = document.getElementById("player-2-card");

const bannerEl = document.getElementById("banner");

const resetButtonEl = document.getElementById("reset");



/*----- event listeners -----*/

p1PlayButtonEl.addEventListener("click", flipCard);

anyCardEl.addEventListener("click", flipCard);

p1CardEl.addEventListener("click", playHand);

resetButtonEl.addEventListener("click", initGame);



/*----- functions -----*/

function initGame() {
  player1 = {
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
  p1CardEl.style.backgroundImage = "";
  p1CardEl.innerText = "";
  p2CardEl.style.backgroundImage = "";
  p2CardEl.innerText = "";
  bannerEl.innerText = "";
  render();
}

function randomCard() {
  let x = Math.floor(Math.random() * player1.p1CurrentScore.length);
  p1CurrentCard = player1.p1CurrentScore.splice(x, 1);
  let y = Math.floor(Math.random() * player2.p2CurrentScore.length);
  p2CurrentCard = player2.p2CurrentScore.splice(y, 1);
}

function flipCard() {
  if (cardsOnField.length === 0) {
    randomCard();
    cardsOnField.push(p1CurrentCard[0]);
    cardsOnField.push(p2CurrentCard[0]);
    p1CardEl.style.backgroundImage = cardsOnField[0].image;
    p1CardEl.innerText = p1CurrentCard[0].name;
    p2CardEl.style.backgroundImage = "url('https://i.imgur.com/TkbFSAw.jpg?2')";
    p2CardEl.innerText = "";
    render();
  }
}

function playHand() {
  revealCard();
  if (p1CurrentCard[0].score > p2CurrentCard[0].score) {
    player1Victory();
  } else if (p2CurrentCard[0].score > p1CurrentCard[0].score) {
    player2Victory();
  } else {
    tie();
  }
  determineWinner();
  setTimeout(function () {
    endRound();
    cardsOnField = []
  }, 1500);
}

function render() {
  p1ScoreEl.innerText = player1.p1CurrentScore.length;
  p2ScoreEl.innerText = player2.p2CurrentScore.length;
  p1UpdateHand();
  p2UpdateHand();
}

function determineWinner() {
  if (player1.p1CurrentScore.length === 0) {
    bannerEl.innerText = "All Of Your Warriors Have Been Slaughtered";
  } else if (player2.p2CurrentScore.length === 0) {
    bannerEl.innerText = "You Have Slaughtered The Enemies Forces!";
  }
    setTimeout(function () {
      initGame();
    }, 5000);
}

function revealCard() {
  p2CardEl.innerText = p2CurrentCard[0].name;
  p2CardEl.style.backgroundImage = cardsOnField[1].image;
}

function endRound() {
  p1CardEl.style.backgroundImage = "";
  p2CardEl.style.backgroundImage = "";
  p1CardEl.innerText = "";
  p2CardEl.innerText = "";
  bannerEl.innerText = "";
}

function player1Victory() {
  bannerEl.innerText = `Your Warrior Won`;
  setTimeout(function () {
    p2CardEl.style.backgroundImage = "url('https://i.imgur.com/vhdEbpT.jpg')";
    p2CardEl.innerText = "";
    render();
  }, 500);
  player1.p1CurrentScore.push(cardsOnField[0], cardsOnField[1]);
}

function player2Victory() {
  bannerEl.innerText = `Your Warrior Was Defeated`;
  setTimeout(function () {
    p1CardEl.style.backgroundImage = "url('https://i.imgur.com/vhdEbpT.jpg')";
    p1CardEl.innerText = "";
    render();
  }, 500);
  player2.p2CurrentScore.push(cardsOnField[0], cardsOnField[1]);
}

function tie() {
  bannerEl.innerText = `Your Warriors Killed Each Other`;
  setTimeout(function () {
    p1CardEl.style.backgroundImage = "url('https://i.imgur.com/vhdEbpT.jpg')";
    p1CardEl.innerText = "";
    p2CardEl.style.backgroundImage = "url('https://i.imgur.com/vhdEbpT.jpg')";
    p2CardEl.innerText = "";
    render();
  }, 500);
}

function p1UpdateHand() {
  player1HandEl.forEach(function (card, idx) {
    if (idx + 1 <= player1.p1CurrentScore.length) {
      card.style.backgroundImage = "url('https://i.imgur.com/TkbFSAw.jpg?1')";
      card.style.border = "1px solid rgb(153 24 35)";
    } else {
      card.style.backgroundImage = "none";
      card.style.border = "none";
    }
  });
}

function p2UpdateHand() {
  player2HandEl.forEach(function (card, idx) {
    if (idx + 1 <= player2.p2CurrentScore.length) {
      card.style.backgroundImage = "url('https://i.imgur.com/TkbFSAw.jpg?1')";
      card.style.border = "1px solid rgb(153 24 35)";
    } else {
      card.style.backgroundImage = "none";
      card.style.border = "none";
    }
  });
}
initGame();
