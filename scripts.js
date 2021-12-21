// variables
const container = document.querySelector('.container');
// button for the user to select the size (1 - 7)
const sizeBtn = document.querySelector('.size-button');

// modifiable height and width value
let size = 0;

// function to create a certain amount of items (and add them to the container)
function createItemsDefault(noOfItems){
    
    for(let i = 0; i < noOfItems; i++){
        let item = document.createElement('div');
        item.className = 'item';
        container.appendChild(item);
    }

}

// adjustable width/height create function

function createItemsUser(squareSize, noOfSquares){
    for(let i = 0; i < noOfSquares; i++){
        let item = document.createElement('div');
        item.className = 'item';

        // change the height and width accordingly
        item.style.height = `${squareSize}px`
        item.style.width = `${squareSize}px`
        container.appendChild(item);
    }
}

// Default: Start the creation with 256 (16 x 16) squares of 32px h/w
createItemsDefault(256);
addHover();

// functionality for the button, asks the user to select a size from 1-7, stores that result
sizeBtn.addEventListener('click', function(){
    size = parseInt(getSize());
    console.log(size);

    // remove the entire current board
    let removeableSquares = document.querySelectorAll('.item');
    removeableSquares.forEach(squares => {
        squares.remove();
    });

    // create the new board
    let squareSize = 2 ** size;
    let noOfSquares = (512 / squareSize) ** 2;

    createItemsUser(squareSize, noOfSquares);
    addHover();
});

function getSize(){
    let userSize = window.prompt('Please select your chosen size from 1 - 7');

    while(userSize > 7 || userSize < 1){
        alert('Your chosen number is outside the requried range, please try again');
        userSize = window.prompt('Please select your chosen size from 1 - 7');
    }

    return userSize;
}

// add the actual hover effect
// event listener for when the user mouses over a div then adds it to the activated class which has a black background

function addHover() {
    let hoverSquares = document.querySelectorAll('.item');

    hoverSquares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.classList.add('activated');
        });
    });
}