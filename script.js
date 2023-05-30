let grid = document.querySelector(".grid");
let sizeBtn = document.getElementById("sizeBtn");
let colorBtn = document.getElementById("colorBtn");
let clearBtn = document.querySelector("#clearBtn");
let darkenBtn = document.getElementById("darkenBtn");
let nr = 0;
let random = false;
let blackShades = ["#F8F8F8", "#E0E0E0", "#D3D3D3", "#BEBEBE", "#A8A8A8", "#888888", "#787878", "#585858", "#303030", "#000000"];
let darken = false;

function createGrid() {
    for (let i = 0; i < nr; i++) {
    let column = document.createElement('div');
    column.className = 'column';

    for (let j = 0; j < nr; j++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.style.width = (500 / nr) + "px";
        row.dataset.counter = 0;

        column.appendChild(row);
        row.addEventListener('mouseover', function() {
                let counter = row.dataset.counter;
                if(darken == true) {
                    darkened(row,counter);
                    if(counter<10) {
                        counter++;
                        row.dataset.counter = counter;
                    }
                } else {
                color(row);
                }
        });
    }
    grid.appendChild(column);
    }
}

function color(item) {
    if(random == false) {
      item.style.backgroundColor = "black";
    } else {
        item.style.backgroundColor = randomColor();
    }
}

function darkened(item,index) {
    item.style.backgroundColor = blackShades[index];

}

sizeBtn.addEventListener('click', function() {
    removeGrid();
    nr = prompt("How many square divs?");
    if(nr>100) {
        nr = 100;
    }
    createGrid();
});

function removeGrid() {
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }
}

function randomColor() {
    return '#' + parseInt(Math.random() * 0xffffff).toString(16);
}

colorBtn.addEventListener('click', function() {
    if (random == false) {
        random = true;
        darken = false;
        colorBtn.textContent = "Black squares";
    } else {
        darken = false;
        random = false;
        colorBtn.textContent = "Colored squares";
    }
});

function clear() {

    let squareGrid = document.getElementsByClassName("row");
    for(let i=0; i<squareGrid.length; i++) {
        squareGrid[i].style.backgroundColor = "white";
    }
   
}

clearBtn.addEventListener('click', function(){
    clear();
});

darkenBtn.addEventListener('click', function() {
    if(darken == false) {
        darken = true;
    } else {
        darken = false;
    }
});