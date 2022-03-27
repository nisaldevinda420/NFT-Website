var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totScore = document.getElementById('totScore');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCnt = 0;
var duration = 6;
var finalmark=0;
var qaS = document.querySelectorAll('.qas');
var ansRow = document.querySelectorAll('.qas .ans-row input');


skip.addEventListener('click', function(){
    questionstep ();
    duration = 0
})

ansRow.forEach (function(ansRowsingle) {
    
    ansRowsingle.addEventListener('click', function(){
        setTimeout (function(){
            questionstep();
            duration = 0
        }, 100)
        var value = this.getAttribute("value");
        if (value == "valid") {
            scoreCnt += 2;

            score.innerHTML = scoreCnt;
            totScore.innerHTML = scoreCnt;
            // finalmark=finalmark+scoreCount;
        }
        else{
            scoreCnt -=1;
            score.innerHTML = scoreCnt;
            totScore.innerHTML = scoreCnt;
            // finalmark=finalmark-scoreCount;
        }    
    })

})

function changecolor (){
    // console.log(document.qbody)
    const bg = document.getElementById('q-box');
    // bg.style.backgroundColor ='green';  
    
    var scoreint=parseInt(scoreCnt);
    console.log(scoreint);
    console.log(typeof(scoreint));
    if (scoreint>=8){
        bg.style.backgroundColor ='#6cf365';  
    }
    else if(scoreint<8 && finalmark>=5){
        bg.style.backgroundColor="#e6f853";  
    }
    else{
        bg.style.backgroundColor="#f52481";  
    }

    
}

function questionstep() {
    count += 1;
    for (var i = 0; i < qaS.length; i++) {
        qaS[i].className = 'qas';
    }
 

    qaS[count].className = 'active';
    if (count == 10) {
        skip.style.display = 'none';
        clearInterval (durationTime);
        countdown.innerHTML = 0;
        changecolor()
    }


}


var durationTime = setInterval (function () {
    if (duration == 0) {
        duration = 6;
    }
    duration -= 1;
    countdown.innerHTML = duration;
    if (countdown.innerHTML == "0") {
        questionstep()
    }

}, 1000);
