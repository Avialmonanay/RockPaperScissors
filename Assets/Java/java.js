function myfunction() {


    var Player = prompt("Choose Rock, Paper, or Scissors");

    var choices =["Rock", "Paper", "Scissors"];
    var Computerchoice = choices[Math.floor(Math.random() * choices.length)]

check(Computerchoice, Player);
}


function check(Computerchoice,Player) {
    var result;

    if (Computerchoice=="Rock" && Player=="Scissors"){
        result= "You Lost!"
    }
    else if (Computerchoice=="Rock" && Player=="Paper"){
        result= "You Win!"
    }
    else if (Computerchoice=="Rock" && Player=="Rock"){
        result= "It's a Draw!"
    }
    else if (Computerchoice=="Scissors" && Player=="Scissors"){
        result= "It's a Draw!"
    }
    else if (Computerchoice=="Scissors" && Player=="Paper"){
        result= "You Win!"
    }
    else if (Computerchoice=="Scissors" && Player=="Rock"){
        result= "You Lost"
    }
    else if (Computerchoice=="Paper" && Player=="Rock"){
        result= "You Win!"
    }
    else if (Computerchoice=="Paper" && Player=="Scissors"){
        result= "You Lost"
    }
    else if (Computerchoice=="Paper" && Player=="Paper"){
        result= "It's a Draw!"
    }

alert("Computer chose " + Computerchoice);
alert(result);
}
myfunction()




