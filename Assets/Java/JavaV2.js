function myfunction() {

    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    const btn1 = document.getElementById("btn1");
    console.log(btn1);

    const btn2 = document.getElementById("btn2");
    console.log(btn2);

    const btn3 = document.getElementById("btn3");
    console.log(btn3);

    
    btn1.addEventListener("click", function (e) {
        const drawScoreBoard = document.querySelector('.d-count');
        const playerScoreBoard = document.querySelector('.w-count');
        const computerScoreBoard = document.querySelector('.l-count');
        var choices = ["Rock", "Paper", "Scissors"];
        var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
        document.getElementById("computer").innerHTML = Computerchoice;
        
        
        if (Computerchoice == "Rock") {
            result = "It's a Draw!"
            drawScore++;
                drawScoreBoard.textContent = drawScore;
        }
        else if (Computerchoice == "Scissors") {
            result = "You Win!"
            playerScore++;
                playerScoreBoard.textContent = playerScore;
        }
        else {
            result = "You Lost!"
            computerScore++;
                computerScoreBoard.textContent = computerScore;
        }
    
        if (result == "You Win!") {
            console.log ("Additional win if")
        }
        else if (result == "You Lost!"){
            console.log("additional Loss if")
        }
        else if (result == "It's a Draw!"){
            console.log("Additional Draw If")
        }
    
        document.getElementById("result").innerHTML = result;
    });
    
    
    //Paper Button Click Event
    btn2.addEventListener("click", function (e) {
        const drawScoreBoard = document.querySelector('.d-count');
        const playerScoreBoard = document.querySelector('.w-count');
        const computerScoreBoard = document.querySelector('.l-count');
        var choices = ["Rock", "Paper", "Scissors"];
        var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
        document.getElementById("computer").innerHTML = Computerchoice;
    
        if (Computerchoice == "Rock") {
            result = "You Win!";
            playerScore++;
                playerScoreBoard.textContent = playerScore;
        }
        else if (Computerchoice == "Scissors") {
            result = "You Lost!";
            computerScore++;
                computerScoreBoard.textContent = computerScore;
        }
        else{
            result = "It's a Draw!";
            drawScore++;
                drawScoreBoard.textContent = drawScore;
        }
    
    
    
    
    
    
        document.getElementById("result").innerHTML = result;
    });
    
    
    //Scissors Button Click Event
    btn3.addEventListener("click", function (e) {
        const drawScoreBoard = document.querySelector('.d-count');
        const playerScoreBoard = document.querySelector('.w-count');
        const computerScoreBoard = document.querySelector('.l-count');
        var choices = ["Rock", "Paper", "Scissors"];
        var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
        document.getElementById("computer").innerHTML = Computerchoice;
    
        if (Computerchoice == "Rock") {
            result = "You Lost!"
            computerScore++;
                computerScoreBoard.textContent = computerScore;
            
        }
        else if (Computerchoice == "Scissors") {
            result = "It's a Draw!"
            drawScore++;
                drawScoreBoard.textContent = drawScore;
            
            
        }
        else {
            result = "You Win!"
            playerScore++;
                playerScoreBoard.textContent = playerScore;
            
        }
    
    
    
        document.getElementById("result").innerHTML = result;
    });




}






// //Rock Button Click Event

// btn1.addEventListener("click", function (e) {
//     var choices = ["Rock", "Paper", "Scissors"];
//     var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
//     document.getElementById("computer").innerHTML = Computerchoice;
    
    
//     if (Computerchoice == "Rock") {
//         result = "It's a Draw!"
//     }
//     else if (Computerchoice == "Scissors") {
//         result = "You Win!"
//     }
//     else {
//         result = "You Lost!"
//     }

//     if (result == "win") {
//         console.log ("Additional win if")
//     }
//     else if (result == "loss"){
//         console.log("additional Loss if")
//     }
//     else if (result == "It's a Draw!"){
//         console.log("Additional Draw If")
//     }

//     document.getElementById("result").innerHTML = result;
// });


// //Paper Button Click Event
// btn2.addEventListener("click", function (e) {
//     console.log("Paper has been selected");
//     var choices = ["Rock", "Paper", "Scissors"];
//     var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
//     document.getElementById("computer").innerHTML = Computerchoice;

//     if (Computerchoice == "Rock") {
//         result = "You Win!"
//         console.log("You Win!")
//     }
//     else if (Computerchoice == "Scissors") {
//         result = "You Lost!"
//         console.log("You Loose!")
//     }
//     else{
//         result = "It's a Draw!"
//         console.log("Draw!")
//     }






//     document.getElementById("result").innerHTML = result;
// });


// //Scissors Button Click Event
// btn3.addEventListener("click", function (e) {
//     console.log("Scissors has been selected");
//     var choices = ["Rock", "Paper", "Scissors"];
//     var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
//     document.getElementById("computer").innerHTML = Computerchoice;

//     if (Computerchoice == "Rock") {
//         result = "You Lost!"
        
//     }
//     else if (Computerchoice == "Scissors") {
//         result = "It's a Draw!"
        
//     }
//     else {
//         result = "You Win!"
        
//     }



//     document.getElementById("result").innerHTML = result;
// });




// function check(Computerchoice,Playerchoice) {
//     var result;

//     if (Computerchoice=="Rock" && Playerchoice=="Scissors"){
//         result= "You Lost!"
//     }
//     else if (Computerchoice=="Rock" && Playerchoice=="Paper"){
//         result= "You Win!"
//     }
//     else if (Computerchoice=="Rock" && Playerchoice=="Rock"){
//         result= "It's a Draw!"
//     }
//     else if (Computerchoice=="Scissors" && Playerchoice=="Scissors"){
//         result= "It's a Draw!"
//     }
//     else if (Computerchoice=="Scissors" && Playerchoice=="Paper"){
//         result= "You Win!"
//     }
//     else if (Computerchoice=="Scissors" && Playerchoice=="Rock"){
//         result= "You Win"
//     }
//     else if (Computerchoice=="Paper" && Playerchoice=="Rock"){
//         result= "You Lost!"
//     }
//     else if (Computerchoice=="Paper" && Playerchoice=="Scissors"){
//         result= "You Lost"
//     }
//     else if (Computerchoice=="Paper" && Playerchoice=="Paper"){
//         result= "It's a Draw!"
//     }


myfunction()