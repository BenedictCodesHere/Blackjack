let choices = ["hit", "stay"]
let playerScore = 0;
let dealerScore = 0;
let hitCard = randomRange(2, 11);
let playerTotal = 0;
let dealerTotal = 0;
let playersFirstDeal = randomRange(4, 21);
let beginGame = function startGame() {
  alert(`Click "ok" to play Blackjack`);
}

function resetToZero () {
  return (playerTotal = 0,
  dealerTotal = 0);
}
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }



  
function playerChoosesHit() {
  hitCard = randomRange(2, 11);
  playerTotal += hitCard;
  alert(`You have: ${playerTotal}.
  Dealer has ${dealerTotal}.`);

}





function playerChoosesStay () {
     
  alert(`Dealer has ${dealerTotal}`)
  while (dealerTotal < 17 && dealerTotal !== 0) {
    alert(`Dealer has ${dealerTotal}. 
    Dealer hits.`);
   hitCard = randomRange(2, 11);
      dealerTotal += hitCard;
       } if (dealerTotal > 21) {
      alert(`Dealer has ${dealerTotal}. 
      Dealer is bust`);
      playerScore++;
      alert(`Dealer Wins: ${dealerScore}
      Your wins: ${playerScore}`);
      resetToZero();
      
  } else if (17 <= dealerTotal <= 21) {
      alert(`Dealer stands at ${dealerTotal}.
      You have ${playerTotal}`)
      if (playerTotal > dealerTotal) {
          alert(`Player wins`)
          playerScore++;
          alert(`Your wins: ${playerScore}.
          Dealer wins: ${dealerScore}`);
      } else if (dealerTotal >= playerTotal) {
        alert(`Dealer wins`)
          dealerScore++;
          alert(`Your wins: ${playerScore}.
          Dealer wins: ${dealerScore}`);
          resetToZero();
      }
      resetToZero();
  }

}



  for (let i = (playerScore + dealerScore); i < 10; i = i){
    if (playerTotal == 0 && dealerTotal == 0) {
  beginGame();
  playersFirstDeal = randomRange(4, 21);
  playerTotal = playersFirstDeal;
  if (playersFirstDeal === 21) {
    alert(`You win off the first deal! Blackjack!`)
    playerScore++;
    alert(`Your wins: ${playerScore}.
    Dealer wins: ${dealerScore}`);
    resetToZero();
  } else {

    dealerTotal = hitCard;

    while (playerTotal < 21 && playerTotal !== 0) {
    let playerChoice = prompt(`You have: ${playerTotal}.
    Dealer has ${dealerTotal}. Hit or stay?`);
    if (playerChoice === choices[0]) {
    playerChoosesHit();
    } else if (playerChoice === choices[1]) {
    playerChoosesStay();
    }
   else {
    alert(`Type "hit" or "stay"`);
    prompt(`You have: ${playerTotal}. Hit or stay?`);
    }
  
    }

  if (playerTotal > 21 && playerTotal !== 0) {
  alert(`You have ${playerTotal}. 
  You are bust.`)
  dealerScore++;
  alert(`Dealer Wins: ${dealerScore}
  Your wins: ${playerScore}`);
  resetToZero();
  }

  if (playerTotal == 21) {
  alert(`You have ${playerTotal}. Stay now. Good boy.`)
  playerChoosesStay();
  }

     }
  }
}

  
  