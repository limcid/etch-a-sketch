const containerWidth = 640;
var res;

function drawCanvas() {
    const container = document.querySelector('#container');
    for (let i = 0; i < (res * res); i++) {
        const grid_div = document.createElement('div');
        grid_div.classList.add('grid_element');
    
        grid_div.style.width = (containerWidth / res) + 'px';
        grid_div.style.height = grid_div.style.width;
        
        container.appendChild(grid_div);
    
        grid_div.onmouseover = function() {
            this.style.backgroundColor = 'green';
        }
    }
}

function changeGridRes() {
    const clear_divs = document.getElementsByClassName('grid_element');
        
    const element = document.getElementById("container");
 	while (element.firstChild) {
 		element.removeChild(element.lastChild);
  	}

    let gridRes = prompt("How many squares per side (16 - 100)?");
    res = parseInt(gridRes);

    if (res < 16 || res > 100) {
        alert("Please enter a value between 16 and 100. Using default value of 32.");
        res = 32;
    }

    drawCanvas();
}


changeGridRes();
