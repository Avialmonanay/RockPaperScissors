function myfunction() {



    const btn1 = document.getElementById("btn1");
    console.log(btn1);

    const btn2 = document.getElementById("btn2");
    console.log(btn2);

    const btn3 = document.getElementById("btn3");
    console.log(btn3);

    
}






//Rock Button Click Event

btn1.addEventListener("click", function (e) {
    var choices = ["Rock", "Paper", "Scissors"];
    var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("computer").innerHTML = Computerchoice;
    
    
    if (Computerchoice == "Rock") {
        result = "It's a Draw!"
    }
    else if (Computerchoice == "Scissors") {
        result = "You Win!"
    }
    else {
        result = "You Lost!"
    }

    if (result == "win") {
        console.log ("Additional win if")
    }
    else if (result == "loss"){
        console.log("additional Loss if")
    }
    else if (result == "draw"){
        console.log("Additional Draw If")
    }

    document.getElementById("result").innerHTML = result;
});


//Paper Button Click Event
btn2.addEventListener("click", function (e) {
    console.log("Paper has been selected");
    var choices = ["Rock", "Paper", "Scissors"];
    var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("computer").innerHTML = Computerchoice;

    if (Computerchoice == "Rock") {
        result = "win"
        console.log("You Win!")
    }
    else if (Computerchoice == "Scissors") {
        result = "loss"
        console.log("You Loose!")
    }
    else{
        result = "draw"
        console.log("Draw!")
    }






    document.getElementById("result").innerHTML = result;
});


//Scissors Button Click Event
btn3.addEventListener("click", function (e) {
    console.log("Scissors has been selected");
    var choices = ["Rock", "Paper", "Scissors"];
    var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("computer").innerHTML = Computerchoice;

    if (Computerchoice == "Rock") {
        result = "loss"
        console.log("You Lost!")
    }
    else if (Computerchoice == "Scissors") {
        result = "draw"
        console.log("Draw!")
    }
    else {
        result = "win"
        console.log("You Win!")
    }



    document.getElementById("result").innerHTML = result;
});




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