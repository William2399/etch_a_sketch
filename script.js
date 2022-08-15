
let columns = 20;
let rows = 20;

let container = document.querySelector('.container');
let clear = document.querySelector('.button');

let grid = document.createElement('div');

let mouseDown = false;
document.body.onmousedown = function() {
  mouseDown = true;
};

document.body.onmouseup = function() {
    mouseDown = false;
};

grid.className = 'grid';
for (let i = 0; i < columns; i++) {
    let column = document.createElement('div'); 
    column.className = 'column';
    for (let j = 0; j < rows; j++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.addEventListener('mousedown', function onClick(event){
            row.style.backgroundColor = "black";
                })
        row.addEventListener('mouseover', onMouseDown);
        function onMouseDown(event){
            if (mouseDown) {
            row.style.backgroundColor = "black";
            row.style.color = "black"; }
        }
        column.appendChild(row); 
    grid.appendChild(column); 
}
}

container.appendChild(grid);

clear.addEventListener('click', function onClick(event){
    location.reload()
})


