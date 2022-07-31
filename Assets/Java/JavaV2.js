function myfunction() {


    //scoreboard
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    //Pull button by ID
    const btn1 = document.getElementById("btn1");
    console.log(btn1);

    const btn2 = document.getElementById("btn2");
    console.log(btn2);

    const btn3 = document.getElementById("btn3");
    console.log(btn3);

    //Rock Button Click Event
    btn1.addEventListener("click", function (e) {
        // calculates score based on result
        const drawScoreBoard = document.querySelector('.d-count');
        const playerScoreBoard = document.querySelector('.w-count');
        const computerScoreBoard = document.querySelector('.l-count');

        //how the computer calculates its choice
        var choices = ["Rock", "Paper", "Scissors"];
        var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
        document.getElementById("computer").innerHTML = Computerchoice;
        
        // if statements to determine results
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


        document.getElementById("result").innerHTML = result;
    });


    //Paper Button Click Event
    btn2.addEventListener("click", function (e) {
        
        // calculates score based on result
        const drawScoreBoard = document.querySelector('.d-count');
        const playerScoreBoard = document.querySelector('.w-count');
        const computerScoreBoard = document.querySelector('.l-count');

        //how the computer calculates its choice
        var choices = ["Rock", "Paper", "Scissors"];
        var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
        document.getElementById("computer").innerHTML = Computerchoice;

        // if statements to determine results
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
        else {
            result = "It's a Draw!";
            drawScore++;
            drawScoreBoard.textContent = drawScore;
        }






        document.getElementById("result").innerHTML = result;
    });


    //Scissors Button Click Event
    btn3.addEventListener("click", function (e) {
        
        // calculates score based on result
        const drawScoreBoard = document.querySelector('.d-count');
        const playerScoreBoard = document.querySelector('.w-count');
        const computerScoreBoard = document.querySelector('.l-count');
        
        //how the computer calculates its choice
        var choices = ["Rock", "Paper", "Scissors"];
        var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
        document.getElementById("computer").innerHTML = Computerchoice;
    
        // if statements to determine results
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
myfunction()