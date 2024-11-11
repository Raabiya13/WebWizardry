const p1 ={
    score:0,
    Button:document.querySelector("#p1button"),
    Display:document.querySelector("#p1Display")
}

const p2 ={
    score:0,
    Button:document.querySelector("#p2button"),
    Display:document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");


let winningScore =3;
let isGameOver = false;

function updateScores(player,opponent){
    if( !isGameOver){
        player.score += 1;
        if (player.score === winningScore){
            isGameOver =true;
            player.Display.classList.add('has-text-success');
            opponent.Display.classList.add('has-text-danger');
            player.Button.disabled =true;
            opponent.Button.disabled =true;

        }
        player.Display.textContent =player.score;
    }


}





p1.Button.addEventListener('click', function(){
    updateScores(p1,p2)
 });
p2.Button.addEventListener('click', function(){
    updateScores(p2,p1)
 });

 winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
 })

 resetButton.addEventListener('click', reset)

 function reset(){
    isGameOver = false;
    for (let p of[p1,p2] ){
        p.score = 0;
        p.Display.textContent = 0;
        p.Display.classList.remove('has-text-success','has-text-danger');
        p.Button.disabled =false;

    }
    
 } 
