let container;
let grid;
let grids = 0; // # of columns
let columns = ''; // holds 'auto' for style of grids
let targetGrid;
let element;
let lines = true;
container = document.querySelector('.grid-container');

function createGrid(a) { // creates each grid
    wipeGrid();
    a = prompt('What size will the grid be? (enter a value)','');
    grids = a;
    drawGrid(grids);
    addAuto(grids);
    finishGrid();
}

window.onmouseover=function(e) {
    target = e.target.className;
    targetGrid = document.querySelector(`.${target}`)
    
};

document.addEventListener("mouseover", function(a){
    if (target !== 'grid-container' && target !== '.' && target !== '') {
        targetGrid.style.backgroundColor = 'black';
    }
});

function drawGrid() {
    for (i = 0; i < grids*grids; i++) {
        grid = document.createElement('div');
        grid.classList.add(`grid${i+1}`);
        container.appendChild(grid);
    }
}

function finishGrid() {
    container.style.backgroundColor = 'black';
    container.style.gridTemplateColumns =`${columns}`;
}

function addAuto() {
    for (i = 0; i < grids; i++) { // adds 'auto' to columns
    columns += ' auto';
    }
}

function wipeGrid() {
    element = document.getElementById("grid-container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    container.style.backgroundColor = 'white';
    columns = '';
}

function toggleLines() {
    if (lines == true) {
        container.style.gridGap = '0px';
        lines = false;
    } else {
        container.style.gridGap = '1px';
        lines = true;
    }
}