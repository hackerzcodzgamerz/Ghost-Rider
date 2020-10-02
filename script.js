score = 0;
cross = true;

jump = new Audio('jump.mp3');
audio = new Audio('starting.mp3');
audio.loop = true;
audio.play();
audiogo = new Audio('gameover.mp3');

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {

        jump.play
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
        // dino = document.querySelector('.dino');
        // dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('right'));
        // dino.style.left = (dinoX - 112) + "px";
        // dino.classList.add('dino1');
        // setTimeout(() => {
        //     dino.classList.remove('dino1')
        // }, 10);
    }
}

setInterval(() => {
    dino1 = document.querySelector('.dino1');
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    obstacle1 = document.querySelector('.obstacle1');


    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    d1x = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    d1y = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));


    o1x = parseInt(window.getComputedStyle(obstacle1, null).getPropertyValue('left'));
    o1y = parseInt(window.getComputedStyle(obstacle1, null).getPropertyValue('top'));
    offsetA = Math.abs(d1x - o1x);
    offsetB = Math.abs(d1y - o1y);
    if (offsetA < 73 && offsetB < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni1')
        
        audiogo.play();
        audio.pause();
    }

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        audio.pause();



    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            if (aniDur == 3.2) {
                aniDur.stop();
            }
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);
    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}