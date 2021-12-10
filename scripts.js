function createDivGrid(noOfSquares){
    
    // ensure that the number is even
    if(noOfSquares % 2 === 0){
        const container = document.querySelector('.container');

        for(let i = 0; i < (noOfSquares * noOfSquares); i++){
            let divSquare = document.createElement('div');
            divSquare.className = 'square';
            container.appendChild(divSquare);
        }

        console.log(container);
    }

    // throw an error
    else{
        throw new Error('Argument must be an even number');
    }
}

createDivGrid(16);