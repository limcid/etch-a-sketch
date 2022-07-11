const container = document.querySelector('#container');

for (let i = 0; i < (16*16); i++) {
    const grid_div = document.createElement('div');
    grid_div.classList.add('grid_element');
    // grid_div.textContent = i % 16;
    container.appendChild(grid_div);
}