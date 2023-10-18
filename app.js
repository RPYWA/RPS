var RPS = document.querySelectorAll(".RPS");
var ResetButton = document.querySelector(".reset");
var PlayerScore = document.querySelector(".div2");
var ComputerScore = document.querySelector(".div3");
var results = document.querySelector(".div4");
var score1=0;
var score2=0;

function Computerchoice(){
    let computerchoice= Math.random()

    if(computerchoice < 0.34){
        return "rock"
        console.log("rock")
    }

    else if(computerchoice < 0.63){
        return "paper"
        console.log("paper")
    }

    else{
        return "scissors"
        console.log("scissors")
    }
}

function playerselection(e){
    let playerSelection = e.target.dataset.id;
    let computerChoice = Computerchoice();

    if(playerSelection === computerChoice){
        results.innerHTML ="It's a Tie!"
        win()
    }

    if ( 
           (playerSelection === "rock" && computerChoice === "paper") ||
           (playerSelection === "scissors" && computerChoice === "rock") ||
           (playerSelection === "paper" && computerChoice === "scissors")
           ){
        results.innerHTML = `you chose ${playerSelection} and the computer chose ${computerChoice} You Win!`
        score1++
        PlayerScore.innerHTML=score1
        win()
    

 } else if(playerSelection === "paper" && computerChoice === "rock" ||
     playerSelection === "scissors" && computerChoice === "paper"  ||
     playerSelection === "rock" && computerChoice === "scissors"
    ){
      results.innerHTML = `you chose ${playerSelection} and computer chose ${computerChoice} Computer Wins!`
      score2++;
      ComputerScore.innerHTML=score2;
      win();
    }
}

function disable(){
    RPS.forEach(item =>{
        item.disabled = true
    })
}

function enable(){
    RPS.forEach(item =>{
        item.disabled = false
    })
}

function win(){
    if(score1 === 3){
        results.innerHTML = "Player Wins!"
        disable()
    }

    else if(score2 === 3){
        results.innerHTML = "Computer Wins"
       disable() 
    }
}

function resetScore(e){
    enable()
    PlayerScore.innerHTML="0"
    ComputerScore.innerHTML="0"
    score1=0
    score2=0
    results.innerHTML=""
    playerselection(e)
}

RPS.forEach(item=>{
    item.addEventListener("click", (e) => {
        playerselection(e)
    })
})

ResetButton.addEventListener("click", resetScore)

Computerchoice();
console.log(Computerchoice())
