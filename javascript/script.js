
let dealerSum = 0;
let yourSum = 0;

const aceCard = ''
// let dealerAceCount = 0;
// let yourAceCount = 0;

const canHit = true;

window.onload = function() {
    getDeck();
}

let deckId = ''

function getDeck() {

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          deckId = data.deck_id
          console.log(data)
        
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

document.querySelector('#start').addEventListener('click', startGame)

function startGame() {
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          
          dealerSum = Number(cardValue(data.cards[0].value)) + Number(cardValue(data.cards[1].value))
          yourSum = Number(cardValue(data.cards[2].value)) + Number(cardValue(data.cards[3].value))
          
          document.querySelector('#botCards').src = data.cards[0].image
          document.querySelector('#botCardsTwo').src = data.cards[1].image
          document.querySelector('#playerCards').src = data.cards[2].image
          document.querySelector('#playerCardsTwo').src = data.cards[3].image
          
          console.log(dealerSum);
          console.log(yourSum);

        })
        
        .catch(err => {
            console.log(`error ${err}`)
        });
        function cardValue(val){
          if (val === "ACE") {
            return 11
          } else if (val === "KING" || val === "QUEEN" || val === "JACK") {
            return 10
          } else {
            return parseInt(val)
          }
        }
        
        document.querySelector('#hit').addEventListener('click', hitCard) 

        function hitCard() {
            let draw = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
            const newCard = document.createElement('img')
            fetch(draw)
              .then(res => res.json()) // parse response as JSON
              .then(data => {
                console.log(data)
                let newCard = document.createElement('img')
        
                newCard.src = data.cards[0].image
                newCard.value = data.cards[0].value

                document.querySelector('#yourCards').append(newCard)

                yourSum = Number(cardValue(yourSum)) + Number(cardValue(newCard.value))

                console.log(yourSum)
                
              })
              .catch(err => {
                  console.log(`error ${err}`)
              });
        
        }
        document.querySelector('#stay').addEventListener('click', stay)

        function stay() {
            let draw = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
            const newCard = document.createElement('img')
            fetch(draw)
              .then(res => res.json()) // parse response as JSON
              .then(data => {
                console.log(data)
                let newCard = document.createElement('img')
        
                newCard.src = data.cards[0].image
                newCard.value = data.cards[0].value

                document.querySelector('#dealerCards').append(newCard)

                dealerSum = Number(cardValue(dealerSum)) + Number(cardValue(newCard.value))

                console.log(dealerSum)

              })
              .catch(err => {
                  console.log(`error ${err}`)
              });
        }

}




// function cardValue(val) {
//   if (val === "ACE") {
//     return 11
//   } else if ((val === "ACE") && (dealerSum > 21) || (yourSum > 21) ) {
//     return 1
//   } else if (val === "KING" || val === "QUEEN" || val === "JACK") {
//     return 10
//   } else {
//     return parseInt(val)
//   }
// }







// function cardValue(val){
//   if (val === "ACE") {
//     return 11
//   } else if(val === "KING" || val === "QUEEN" || val === "JACK") {
//     return 10
//   } else {
//     return parseInt(val)
//   }
// }





// document.querySelector('#hit').addEventListener('click', hitCard)

// function hitCard() {
//     let draw = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
//     const newCard = document.createElement('img')
//     fetch(draw)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         let newCard = document.createElement('img')

//         newCard.src = data.cards[0].image

//         document.querySelector('#yourCards').append(newCard)
        
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });

// }



// function cardValue(val){
//     if(val === "KING") {
//       return 10
//     } else {
//       return val
//     }
//   }






// Get the deck
// let deckId = ''

// fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         deckId = data.deck_id
        
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });


// document.querySelector('#hit').addEventListener('click', getFetch)

// function getFetch(){
  
//   const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         let val1 = Number(cardValue( data.cards[0].value ))
//         let val2 = Number(cardValue( data.cards[1].value ))
//         document.querySelector('#botCards').src = data.cards[0].image
//         document.querySelector('#playerCards').src = data.cards[1].image
//         if(val1 > val2){
//           document.querySelector('#results').innerText = 'Player 1 WON!'
//         }else if(val1 < val2){
//           document.querySelector('#results').innerText = 'Player 2 WON!'
//         }else{
//           document.querySelector('#results').innerText = 'WAR!'
//         }
        
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// function cardValue(val){
//   if(val === "ACE"){
//     return 14
//   }else if (val === "KING"){
//     return 13
//   }else if(val === "QUEEN"){
//     return 12
//   }else if(val === "JACK"){
//     return 11
//   }else{
//     return val
//   }
// }