//intro
const intro = document.getElementById('p-intro');

//container della griglia
const gridContainer = document.getElementById('grid-container');

gridContainer.classList.add('none');

//bottone per mostrare la griglia
const playButton = document.getElementById('playgame');

// creazione celle
for (let i = 1; i <= 100; i++) {

    const myCell = document.createElement('div');

    myCell.classList.add('cell');

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

playButton.addEventListener('click',

    function () {

        gridContainer.classList.add('flex');

        intro.classList.add('none');

    }

);

