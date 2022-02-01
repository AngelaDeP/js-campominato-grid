// Prendo il bottone play tramite id e aggiungo event Listener
document.getElementById('play').addEventListener('click', startGame);


// Gestione del gioco tramite funzione

function startGame() {

    let containerGrid = document.getElementById('grid');
    // In modo da resettare ad ogni click
    containerGrid.innerHTML = "";


    // Sezione per gestire i valori entranti dalla selezione
    const difficulty = document.getElementById('difficulty').value;

    let numberCells;
    let numberRowCells;

    switch (difficulty) {
        case "1":
            numberCells = 100;
            numberRowCells = 10;
            break;
        case "2":
            numberCells = 81;
            numberRowCells = 9;
            break;
        case "3":
            numberCells = 49;
            numberRowCells = 7;
            break;
    } 

    //Richiamo la funzione per il campo minato
    gameField(numberCells, numberCells);

    // Creo le varie funzioni che saranno necessarie per la grid

    function gameField (numberCells) {

        for (let i = 1; i <= numberCells; i++) {

            const cell = document.createElement('div');
            cell.classList.add('square');

            const dimensions = `calc(100% / ${numberRowCells})`;
            cell.style.width = dimensions;
            cell.style.height = dimensions;

            cell.innerText = i;

            containerGrid.appendChild(cell);

            cell.addEventListener('click', clickOnCell);
        }

    }
    
    function clickOnCell () {

        this.classList.add('clicked');

        this.removeEventListener('click', clickOnCell);

    }

}


