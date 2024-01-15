var arr = [];
var user = [];
var level = 0;
var check = false;
var btnclick = false;
function update(){
    r = Math.random()*4;
    r = Math.floor(r);
    return r;
}

function btnpressed(c){
    if(c === 0){
        $('.green').addClass('pressed');
        var audio = new Audio('./sounds/green.mp3');
        audio.play();
        setTimeout(() => {
            $('.btn').removeClass('pressed');
        }, 100);
    }
    else if(c === 1){
        $('.red').addClass('pressed');
        var audio = new Audio('./sounds/red.mp3');
        audio.play();
        setTimeout(() => {
            $('.btn').removeClass('pressed');
        }, 100);
    }
    else if(c === 2){
        $('.yellow').addClass('pressed');
        var audio = new Audio('./sounds/yellow.mp3');
        audio.play();
        setTimeout(() => {
            $('.btn').removeClass('pressed');
        }, 100);
    }
    else if(c === 3){
        $('.blue').addClass('pressed');
        var audio = new Audio('./sounds/blue.mp3');
        audio.play();
        setTimeout(() => {
            $('.btn').removeClass('pressed');
        }, 100);
    }
}

function gameFunc(){
    $('h1').text('Level ' + level);
    user = [];
    level++;
    var a = update();
    arr.push(a);
    btnpressed(a);
}

$('.green').click(function(){
    user.push(0);
    var audio1 = new Audio('./sounds/green.mp3');
    audio1.play();
    $('.green').addClass('pressed');
    setTimeout(() => {
        $('.btn').removeClass('pressed');
    }, 100);
    checkAnswer(user.length-1);
});

$('.red').click(function(){
    user.push(1);
    var audio1 = new Audio('./sounds/red.mp3');
    audio1.play();
    $('.red').addClass('pressed');
    setTimeout(() => {
        $('.btn').removeClass('pressed');
    }, 100);
    checkAnswer(user.length-1);
});

$('.yellow').click(function(){
    user.push(2);
    var audio1 = new Audio('./sounds/yellow.mp3');
    audio1.play();
    $('.yellow').addClass('pressed');
    setTimeout(() => {
        $('.btn').removeClass('pressed');
    }, 100);
    checkAnswer(user.length-1);
});

$('.blue').click(function(){
    user.push(3);
    var audio1 = new Audio('./sounds/blue.mp3');
    audio1.play();
    $('.blue').addClass('pressed');
    setTimeout(() => {
        $('.btn').removeClass('pressed');
    }, 100);
    checkAnswer(user.length-1);
});

function checkAnswer(moves){
    if(user[moves] === arr[moves]){
        if(user.length === arr.length){
            setTimeout(function(){
                gameFunc();
            },1000);
        }
    }
    else{
        $('h1').text('Game Over');
        $('h1').after('<h1 id="spec">Press any key to restart</h1>');
        var audio2 = new Audio('./sounds/wrong.mp3');
        audio2.play();
        $('body').addClass('game-over');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 100);
        $(document).keydown(function(){
            $('#spec').remove();
            startOver();
        });
    }
}

function startOver(){
    arr = [];
    user = [];
    level = 1;
    gameFunc();
}

$(document).keydown(function(){
    if(level === 0){
        level++;
        gameFunc();
    }
});