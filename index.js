let cards;

var playground = document.getElementById('playground');

var playgroundMatrix = [
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null]
];

function keyBoardHandler() {
    document.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowUp') {
            cardMoveUp();
        } else if (e.key == 'ArrowLeft') {
            cardMoveLeft();
        } else if (e.key == 'ArrowRight') {
            cardMoveRight();
        } else if (e.key == 'ArrowDown') {
            cardMoveDown();
        }
    })
}

function cardMoveUp() {

}

function cardMoveLeft() {

}

function cardMoveRight() {

}

function cardMoveDown() {

}

function getRandomPosition(selected) {
    minValue;
    maxValue;


    return Math.round(Math.random() * (16 - 0) + 0);
}

function init() {
    cards = [4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072]
    var firstValuePosition = Math.round(Math.random() * (16 - 0) + 0);
    console.log(firstValuePosition);



    var index = 0;
    for (var i = 0; i < playgroundMatrix.length; i++) {
        for (var j = 0; j < playgroundMatrix[i].length; j++) {
            var value = playgroundMatrix[i][j];
            // делайте что-то с каждым элементом
            console.log(index + ' ' + value)
            //abc[i][j] = value + index; // добавление общего индекса

            if (index == firstValuePosition) {
                playgroundMatrix[i][j] = 4;
            }

            index++;
        }
    }
    console.log(playgroundMatrix);

    for (let i = 0; i < 16; i++) {
        const cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'card-'+ (i + 1));
        cardDiv.className += ' card';
        cardDiv.textContent = cards[i];
        cardDiv.addEventListener('mousemove', event => {

        })
        playground.appendChild(cardDiv);
    }
}

init();
keyBoardHandler();