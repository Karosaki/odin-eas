// body
const abContainer = document.querySelector('.above-container');

// variable for the container
const container = document.querySelector('.container');

// create the button for resetting the game
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Click me to reset the board!'
// Add the button to the page
abContainer.appendChild(resetBtn);

// Create the function for the reset button to work
resetBtn.addEventListener('click', function(){
    squares.forEach(removeActivatedSquare);
})

// Function for creating the grid of squares
function createDivGrid(noOfSquares){
    
    // ensure that the number is even
    if(noOfSquares % 2 === 0){

        for(let i = 0; i < (noOfSquares * noOfSquares); i++){
            let divSquare = document.createElement('div');
            divSquare.className = 'square';
            container.appendChild(divSquare);
        }
    }

    // throw an error
    else{
        throw new Error('Argument must be an even number');
    }
}

// Create the grid by calling the function
createDivGrid(16);

// get nodelist of all the squares created
let squares = document.querySelectorAll('.square');

// iterate through all the squares, listen for mouseoever event and add activated class
function testFunction(square){
    square.addEventListener('mouseover', function(){
        square.classList.add('activated');
    })
}
squares.forEach(testFunction)


// function to remove activated from the squares
function removeActivatedSquare(square){
    square.classList.remove('activated');
}