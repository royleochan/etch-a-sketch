const container = document.getElementById('container');

function createGrid(x) {
    var size = 960/x;
    for (var rows = 0; rows < x; rows++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.height = `${size}px`;
        container.appendChild(row);

        for (var columns = 0; columns < x; columns++) {
            const square = document.createElement('div');
            square.setAttribute('id','innerSquare');
            square.classList.add('square');
            square.style.height = `${size}px`;
            square.style.width = `${size}px`;
            square.addEventListener('mouseenter',sketch(square));
            row.appendChild(square);
        };
    };
};

function resetGrid() {
    var remove = document.getElementsByClassName('row');
    while (remove.length > 0) {
        remove[0].parentNode.removeChild(remove[0]);
    }
}

function newGrid() {
    var x = document.getElementById('gridSize').value;
    return createGrid(x);
}

function sketch (target) {
    return () => {
        target.style.backgroundColor = "black";
    }
}

createGrid(16);
