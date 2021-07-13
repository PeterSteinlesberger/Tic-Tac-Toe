let fields = [];
let currentImg = 'cross'

function fillField(id) {
    if(currentImg == 'cross') {
        currentImg = 'circle';
    } else {
        currentImg = 'cross';
    }
fields[id] = currentImg;
    draw();
    checkForWin();
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle'+ i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross'+ i).classList.remove('d-none');
        }
    }
}

