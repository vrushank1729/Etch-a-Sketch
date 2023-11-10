document.addEventListener("DOMContentLoaded", function () {
    const sketch_box = document.querySelector('.sketch-box');

    function resizeGrid(gridSize) {
      for (let i = 0; i < gridSize*gridSize; i++) {
        var grid_square = document.createElement('div');
        grid_square.classList.add('grid-square')
        grid_square.style.cssText = `
          background: pink;
          width: ${480/gridSize}px;
          height: ${480/gridSize}px;
          `
        sketch_box.appendChild(grid_square);
      }
    }

    function hoverSketchON() {
      const grid_squares = document.querySelectorAll('.grid-square')
      grid_squares.forEach((square) => {
          square.addEventListener('mouseover', () => {
              square.style.background = 'black'
          })
      })
    }

    function getValidGridSize() {
      let gridSize;
      do {
        const userInput = prompt("Enter the grid size (a positive integer <= 100):");
        gridSize = parseInt(userInput);
    
        // Check if the input is a positive integer and less than 100
        if (!Number.isInteger(gridSize) || gridSize <= 0 || gridSize > 100) {
          alert("Please enter a valid positive integer less than 100.");
        }
      } while (!Number.isInteger(gridSize) || gridSize <= 0 || gridSize > 100);
    
      return gridSize;
    }

    resizeGrid(16)
    hoverSketchON()

    const resize_btn = document.querySelector('.resize-btn')
    resize_btn.addEventListener('click', () => {
      var grid_size = getValidGridSize()
      sketch_box.innerHTML = ''
      resizeGrid(grid_size)
      hoverSketchON()
    })

    

  })