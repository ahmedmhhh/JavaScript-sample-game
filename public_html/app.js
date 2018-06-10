/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

 var scores,roundscore,activePlayer;
 init();



document.querySelector('.btn-roll').addEventListener('click',function (){
    //random number 0 to 6
    var dice = Math.floor(Math.random()*6)+1;
    //diplay
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display= 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    //update
    if(dice!==1){
        //score
        roundscore = roundscore+dice;
        document.getElementById('current-'+activePlayer).textContent=roundscore;
    }else{
        //next player
      nextplayer();
        
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    scores[activePlayer]+=roundscore;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    
    //check win
    if(scores[activePlayer]>=100){
        document.querySelector('#name-'+activePlayer).textContent='Winner !';
        
     document.querySelector('.dice').style.display='none';
       
     document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    }else{
       //next player
      nextplayer(); 
    }
    
     
});

function nextplayer(){
     //next player
        if(activePlayer===0){
            activePlayer=1;
        }else{
            activePlayer=0;
        }
        roundscore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        
        document.querySelector('.player-1-panel').classList.toggle('active'); 
        
        document.querySelector('.dice').style.display = 'none';
        
}

document.querySelector('.btn-new').addEventListener('click',function(){
    init();
});

function init(){
    scores=[0,0];
    activePlayer = 0;
    roundscore = 0;
document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
    
document.getElementById('name-0').textContent='Player 1';
    
document.getElementById('name-1').textContent='Player 1';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
}


