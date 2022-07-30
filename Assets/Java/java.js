var Player = "";

function setval(varval)
{
Player= varval;
}

console.log(Player)



function myfunction() {




    var choices =["Rock", "Paper", "Scissors"];
    var Computerchoice = choices[Math.floor(Math.random() * choices.length)];
    var Playerchoice=choices[Player];
    console.log(Playerchoice)

check(Computerchoice, Playerchoice);
}


function check(Computerchoice,Playerchoice) {
    var result;

    if (Computerchoice=="Rock" && Playerchoice=="Scissors"){
        result= "You Lost!"
    }
    else if (Computerchoice=="Rock" && Playerchoice=="Paper"){
        result= "You Win!"
    }
    else if (Computerchoice=="Rock" && Playerchoice=="Rock"){
        result= "It's a Draw!"
    }
    else if (Computerchoice=="Scissors" && Playerchoice=="Scissors"){
        result= "It's a Draw!"
    }
    else if (Computerchoice=="Scissors" && Playerchoice=="Paper"){
        result= "You Win!"
    }
    else if (Computerchoice=="Scissors" && Playerchoice=="Rock"){
        result= "You Win"
    }
    else if (Computerchoice=="Paper" && Playerchoice=="Rock"){
        result= "You Lost!"
    }
    else if (Computerchoice=="Paper" && Playerchoice=="Scissors"){
        result= "You Lost"
    }
    else if (Computerchoice=="Paper" && Playerchoice=="Paper"){
        result= "It's a Draw!"
    }

    alert(result)

}
myfunction()






