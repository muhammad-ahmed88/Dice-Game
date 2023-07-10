
// var player = document.querySelectorAll(".player-name")[0];
// var diceImg = document.querySelectorAll('.dice1')[0];
// var winCount = document.querySelectorAll(".count")[0];
// var gameAttampt = document.querySelector(".attamp");
// var msg = document.querySelectorAll(".msg")[0];
// var rslt = document.querySelector(".result");

// var data = 0;
// gameAttampt.innerHTML = data;

// var count = 0;
// winCount.innerHTML = count;




// function userName(){
//     var playerName = prompt("enter your  name");
//     player.innerHTML = playerName ;


// }



// function dicePlay(click){
    
//     var diceRoll = Math.ceil(Math.random()* 6);
//     diceImg.src = "Dice/dice" + diceRoll +".png";
    
//     gameAttampt.innerHTML = data;
//     data = data +1;
    
    
//     if((diceRoll===1 && click===1) || (diceRoll===2 && click===2) || (diceRoll===3 && click===3)
//     || (diceRoll===4 && click===4) || (diceRoll===5 && click===5) || (diceRoll===6 && click===6)){
//         msg.innerHTML= 'you win';
//         count = count +1;
//         winCount.innerHTML = count;
//     }
    
//     else {
//         msg.innerHTML = 'you loss';
//     }  
    
//     var result = count/data*100;
//     rslt.innerHTML =  result;
// }

// function ratio(){

    // console.log(result);


// }



































// var player = document.querySelectorAll(".player-name")[0];
var diceImg = document.querySelectorAll('.dice1')[0];
var winCount = document.querySelectorAll(".count")[0];
var gameAttampt = document.querySelectorAll(".attamp")[0];
var result = document.querySelectorAll(".result")[0];
var data1 = 0;
gameAttampt.innerHTML = data1;

var data2 = 0;
winCount.innerHTML = data2;

function dicePlay(click){
    var diceRoll = Math.ceil(Math.random()*6);
    diceImg.src = "./Dice/dice" + diceRoll + ".png";
    var msg = document.querySelector(".msg");
    var data = 0;
    data1 = data1+1;
    gameAttampt.innerHTML = data1;
    
    if((diceRoll===1 && click===1) || (diceRoll===2 && click===2) || (diceRoll===3 && click===3)
    || (diceRoll===4 && click===4) || (diceRoll===5 && click===5) || (diceRoll===6 && click===6)){
        
        
        
        msg.innerHTML= 'You Wone! -:)';
        data2 = data2+1;
        winCount.innerHTML = data2;
    }
    
    else{
        
        msg.innerHTML = 'You Loss (:-';
    }
    
    
}

function ratio(){
    var ratioCalc = data2/data1*100;
    result.innerHTML = "Your Wining Ratio is "+ Math.ceil(ratioCalc) + "%";
    
}