let playerScore = 0
let computerScore = 0

function playGame(userChoice){
    const choices = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock']
    const computerChoice = choices[Math.floor(Math.random() * 5)]

    let result = ''

    const rulesWin = {
        Piedra: ['Tijera', 'Lagarto'],
        Papel: ['Piedra', 'Spock'],
        Tijera: ['Papel', 'Lagarto'],
        Lagarto:['Spock', 'Papel'],
        Spock:['Tijera', 'Piedra']
    }

    if(userChoice == computerChoice){
        result = `Empate. Ambos jugadores elijieron ${userChoice}`

    } else if(rulesWin[userChoice].includes(computerChoice)
    ){
        result = `Ganaste. ${userChoice} gana a ${computerChoice}`
        playerScore++
    }else {
        result = `Perdiste. ${computerChoice} gana a ${userChoice}`
        computerScore++
    }

    document.getElementById('result').textContent = result
    document.getElementById('score').textContent = `Jugador: ${playerScore} | Computadora: ${computerScore}`
    
    if(playerScore === 3 || computerScore === 3){
        endGame()
    }
}

function endGame() {
    const finalResult = playerScore === 3 ? '¡Felicidades, has ganado!' : 'Lo siento, ha ganado el ordenador';
        document.getElementById('result').textContent = finalResult;

    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}