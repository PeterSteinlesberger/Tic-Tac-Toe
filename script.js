let fields = [];
let currentImg = 'cross'
let gameOver = false;
let AUDIO_FILE = '';

function fillField(id) {
    if (!fields[id] && !gameOver) {
        if (currentImg == 'cross') {
            currentImg = 'circle';
            document.getElementById('player1').classList.add('player-inactive');
            document.getElementById('player2').classList.remove('player-inactive');
        } else {
            currentImg = 'cross';
            document.getElementById('player2').classList.add('player-inactive');
            document.getElementById('player1').classList.remove('player-inactive');
        }
        fields[id] = currentImg;
        draw();
        checkForWin();
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line0').style.transform = 'scaleX(1.05)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line1').style.transform = 'scaleX(1.05)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line2').style.transform = 'scaleX(1.05)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line3').style.transform = 'rotate(90deg) scaleX(1.05)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1.05)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line5').style.transform = ' rotate(90deg) scaleX(1.05)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line6').style.transform = 'rotate(45deg) scaleX(1.4)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line7').style.transform = 'rotate(-45deg) scaleX(1.4)';
    }

    if (winner) {
        gameOver = true;

        setTimeout(function () {
            document.getElementById('restartBtn').classList.remove('d-none');
        }, 4000);
    }
}

function newGame() {
    gameOver = false;
    fields = [];
    document.getElementById('restartBtn').classList.add('d-none');
    for (let i = 0; i < 8; i++) {
        document.getElementById('line' + i).classList.add('d-none');
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('cross' + i).classList.add('d-none');
        document.getElementById('circle' + i).classList.add('d-none');
    }
}