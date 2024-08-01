let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");


choices.forEach((choice) => {    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const rndIdx = Math.floor(Math.random() * 3);
    return options[rndIdx];
}

const drawGame = () => {
    msg.innerText = "Game Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        
        msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    }
    else{
        
        msg.innerText = `You Lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
            
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


