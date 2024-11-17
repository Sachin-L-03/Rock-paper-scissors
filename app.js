let userScore=0;
let compScore=0;

let choices = document.querySelectorAll(".choice");
const msgs = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const reset = document.querySelector(".reset");
const displayer = document.querySelector(".showresult");
const userimg = document.querySelector("#user");
const compimg = document.querySelector("#comp");


const genCompChoice = () => {
    let options =["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};

const drawgame = () => {
    msgs.innerText = "Game was a draw";
    msgs.style.backgroundColor = "black";
    msgs.style.color = "white";
};

const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userScore++;
        userscorepara.innerText = userScore;
        msgs.innerText = `You win! your ${userchoice} beats ${compchoice}`;
        msgs.style.backgroundColor = "green";
        msgs.style.color = "white";
    }else{
        compScore++;
        compscorepara.innerText = compScore;
        msgs.innerText = `You lose! computer choice ${compchoice} beats your ${userchoice}`;
        msgs.style.backgroundColor = "red";
        msgs.style.color = "white";
    }
}

const showresult = (userchoice,compchoice) => {
    if (userchoice === "rock"){
        userimg.setAttribute('src','Rock.png')
    }
    if(userchoice === "paper"){
        userimg.setAttribute('src','Paper.png')
    }
    if(userchoice === "scissors"){
        userimg.setAttribute('src','Scissors.png')
    }
    if (compchoice === "rock"){
        compimg.setAttribute('src','Rock.png')
    }
    if(compchoice === "paper"){
        compimg.setAttribute('src','Paper.png')
    }
    if(compchoice === "scissors"){
        compimg.setAttribute('src','Scissors.png')
    }

    displayer.classList.remove("hide");
    
}

const playGame = (userchoice) => {
    const compchoice = genCompChoice();
    showresult(userchoice,compchoice);

    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }

        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});

reset.addEventListener("click" , () => {
    userScore = 0;
    compScore = 0;
    userscorepara.innerText = userScore;
    compscorepara.innerText = compScore;

    msgs.innerText = "Choose your move";
    msgs.style.backgroundColor = "greenyellow";
    msgs.style.color = "black";

    displayer.classList.add("hide");
});