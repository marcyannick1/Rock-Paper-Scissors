let icons = document.querySelectorAll('.icons .icon')

let playerIcons = document.querySelectorAll('.player .icon')
let computerIcons = document.querySelectorAll('.computer .icon')

let playerChoice = 0;
let computerChoice = 0;

let playerScore = document.querySelector('.player .score')
let computerScore = document.querySelector('.computer .score')

let result = document.querySelector('.result')

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

icons.forEach(icon=>{
    if(icon.classList.contains('rock')){
        icon.addEventListener('click',()=>{
            playerChoice = 0
            showPlayerIcon()
            computerChoice = Math.floor(Math.random() * 3)
            showComputericon()
            switch(computerChoice){
                case 0:
                    result.innerHTML = "It's a tie"
                    break;
                case 1:
                    result.innerHTML = "You lost"
                    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
                    break;
                case 2:
                    result.innerHTML = "You won"
                    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1
                    break;
            }
        })
    }else if(icon.classList.contains('paper')){
        icon.addEventListener('click',()=>{
            playerChoice = 1   
            showPlayerIcon()
            computerChoice = Math.floor(Math.random() * 3)
            showComputericon()
            switch(computerChoice){
                case 0:
                    result.innerHTML = "You won"
                    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1
                    break;
                case 1:
                    result.innerHTML = "It's a tie"
                    break;
                case 2:
                    result.innerHTML = "You lost"
                    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
                    break;   
            }
        })
    }else{
        icon.addEventListener('click',()=>{
            playerChoice = 2
            showPlayerIcon()
            computerChoice = Math.floor(Math.random() * 3)
            showComputericon()
            switch(computerChoice){
                case 0:
                    result.innerHTML = "You lost"
                    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
                    break;
                case 1:
                    result.innerHTML = "You won"
                    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1
                    break;
                case 2:
                    result.innerHTML = "It's a tie"
                    break;
            }
        })
    }
})
