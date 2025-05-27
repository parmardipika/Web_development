// script.js

// Function to generate a random HEX color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to create the palette
  function createPalette() {
    const palette = document.getElementById('palette');
    palette.innerHTML = ''; // Clear previous swatches
  
    for (let i = 0; i < 5; i++) {
      const color = getRandomColor();
      const swatch = document.createElement('div');
      swatch.classList.add('swatch');
      swatch.style.backgroundColor = color;
      swatch.dataset.locked = 'false';
  
      // Color code display
      const colorCode = document.createElement('span');
      colorCode.classList.add('color-code');
      colorCode.innerText = color;
      colorCode.addEventListener('click', () => copyToClipboard(color));
  
      // Lock button
      const lockButton = document.createElement('button');
      lockButton.classList.add('lock-btn');
      lockButton.addEventListener('click', () => toggleLock(swatch));
  
      swatch.appendChild(colorCode);
      swatch.appendChild(lockButton);
      palette.appendChild(swatch);
    }
  }
  
  // Function to toggle lock state
  function toggleLock(swatch) {
    const isLocked = swatch.dataset.locked === 'true';
    swatch.dataset.locked = isLocked ? 'false' : 'true';
    swatch.classList.toggle('locked');
  }
  
  // Function to regenerate colors
  function regenerateColors() {
    const swatches = document.querySelectorAll('.swatch');
    swatches.forEach(swatch => {
      if (swatch.dataset.locked === 'false') {
        const newColor = getRandomColor();
        swatch.style.backgroundColor = newColor;
        swatch.querySelector('.color-code').innerText = newColor;
      }
    });
  }
  
  // Function to copy color code to clipboard
  function copyToClipboard(color) {
    navigator.clipboard.writeText(color).then(() => {
      alert(`Copied ${color} to clipboard!`);
    });
  }
  
  // Initialize the palette and event listeners
  document.getElementById('regenerate-btn').addEventListener('click', regenerateColors);
  createPalette();
  