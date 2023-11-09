document.addEventListener("DOMContentLoaded", function () {
    const sketch_box = document.querySelector('.sketch-box');
  
    for (let i = 0; i < 256; i++) {
      var grid_square = document.createElement('div');
      grid_square.classList.add('grid-square');
      sketch_box.appendChild(grid_square);
    }

    const grid_squares = document.querySelectorAll('.grid-square')
    grid_squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.background = 'white'
        })
    })

  })