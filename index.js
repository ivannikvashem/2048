let cards;

var playground = document.getElementById('playground');

var abc = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const getMousePosition = (event) => {
    const pos = event.currentTarget.getBoundingClientRect();
    return {
        x: event.clientX - pos.left,
        y: event.clientY - pos.top
    };
}

function onCardMove() {
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

function init() {
    cards = [4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072]

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
onCardMove();