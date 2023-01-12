// funzione ciclo
function myCicle (val1, val2, val3) {

    gridContainer.innerHTML = '';

    for (let i = val1; i <= val2; i++) {

        const myCell = document.createElement('div');
    
        myCell.classList.add(val3);
    
        const myElement = document.createElement('span');
    
        myElement.classList.add('none');
    
        myCell.append(myElement);
    
        myElement.append(i);
    
        gridContainer.append(myCell);
    
        myCell.addEventListener('click',
    
            function () {
    
                myCell.classList.toggle('cell-color');
    
                myElement.classList.toggle('none');
    
                console.log(i);
    
            }
    
        );
    
    };

};

//intro
const intro = document.getElementById('p-intro');

//container della griglia
const gridContainer = document.getElementById('grid-container');

gridContainer.classList.add('none');

//selezione difficoltà
const mySelect = document.getElementById('selection');

const easy = 'cell';  // usata come valore (val3) della funzione del ciclo

const medium = 'cell-medium'; // usata come valore (val3) della funzione del ciclo

const hard = 'cell-hard'; // usata come valore (val3) della funzione del ciclo

//bottone per mostrare la griglia
const playButton = document.getElementById('playgame');

// creazione celle
playButton.addEventListener('click',

    function () {

        gridContainer.classList.add('flex');

        intro.classList.add('none');

        let difficulty = mySelect.value; 

        if (difficulty == 'easy') {

            myCicle(1, 100, easy);

        } else if (difficulty == 'medium') {

            myCicle(1, 81, medium);

        } else {

            myCicle(1, 49, hard);

        };

    }

);