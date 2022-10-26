const rock = document.querySelector('.icons .rock')
const paper = document.querySelector('.icons .paper')
const scisors = document.querySelector('.icons .scisors')

const playerIcons = document.querySelectorAll('.player .icon')
const computerIcons = document.querySelectorAll('.computer .icon')

const playerScore = document.querySelector('.player .score')
const computerScore = document.querySelector('.computer .score')

const result = document.querySelector('.result')

const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")
const modalBtn = document.querySelector(".modal button")
const modalText = document.querySelector(".modal p")

const overlay_modal = [overlay, modal]

let playerChoice = 0;
let computerChoice = 0;

function showPlayerIcon(){
    playerIcons.forEach(icon=>{
        icon.classList.add('hidden')
        playerIcons[playerChoice].classList.remove('hidden')
    })
}

function showComputericon(){
    computerIcons.forEach(icon=>{
        icon.classList.add('hidden')
        computerIcons[computerChoice].classList.remove('hidden')
    })
}

function endGame() {
    return playerScore.textContent == 5 || computerScore.textContent == 5
}

modalBtn.addEventListener('click', ()=>{
    document.location.reload(true)
})

rock.addEventListener('click', ()=>{
    playerChoice = 0
    showPlayerIcon()
    computerChoice = Math.floor(Math.random() * 3)
    showComputericon()
    switch(computerChoice){
        case 0:
            result.textContent = "It's a tie"
            break;
        case 1:
            result.textContent = "You lost"
            computerScore.textContent = parseInt(computerScore.textContent) + 1
            break;
        case 2:
            result.textContent = "You won"
            playerScore.textContent = parseInt(playerScore.textContent) + 1
            break;
    }
    if (endGame()) {
        overlay_modal.forEach(element =>{
            element.classList.remove('hidden')
        })
        playerScore.textContent == 5 ? modalText.textContent = "You won the game!" : modalText.textContent = "You lost the game!"
    }
})
paper.addEventListener('click', ()=>{
    playerChoice = 1
    showPlayerIcon()
    computerChoice = Math.floor(Math.random() * 3)
    showComputericon()
    switch(computerChoice){
        case 0:
            result.textContent = "You won"
            playerScore.textContent = parseInt(playerScore.textContent) + 1
            break;
        case 1:
            result.textContent = "It's a tie"
            break;
        case 2:
            result.textContent = "You lost"
            computerScore.textContent = parseInt(computerScore.textContent) + 1
            break;   
    }
    if (endGame()) {
        overlay_modal.forEach(element =>{
            element.classList.remove('hidden')
        })
        playerScore.textContent == 5 ? modalText.textContent = "You won the game!" : modalText.textContent = "You lost the game!"
    }
})
scisors.addEventListener('click', ()=>{
    playerChoice = 2
    showPlayerIcon()
    computerChoice = Math.floor(Math.random() * 3)
    showComputericon()
    switch(computerChoice){
        case 0:
            result.textContent = "You lost"
            computerScore.textContent = parseInt(computerScore.textContent) + 1
            break;
        case 1:
            result.textContent = "You won"
            playerScore.textContent = parseInt(playerScore.textContent) + 1
            break;
        case 2:
            result.textContent = "It's a tie"
            break;
    }
    if (endGame()) {
        overlay_modal.forEach(element =>{
            element.classList.remove('hidden')
        })
        playerScore.textContent == 5 ? modalText.textContent = "You won the game!" : modalText.textContent = "You lost the game!"
    }
})