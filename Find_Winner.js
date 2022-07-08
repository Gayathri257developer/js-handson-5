// 6. Find the Winner 

// You are given a string S consisting of two letters A and D ,where each character represent the winner of N games played between Aditya and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which player wins the maximum number of games or there is a draw between them.

var Game_Winner = (S) =>{
    let countA = 0;
    let countD = 0;
    for(let i=0; i< S.length; i++){
        if(S[i] === 'A'){
            countA++;
        }
        else{
            countD++;
        }
    }
    if(countA > countD){
        return 'Aditya';
    }
    else if(countD > countA){
        return 'Danish';
    }
    else{
        return 'Draw';
    }
}