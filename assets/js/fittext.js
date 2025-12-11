// function fitText() {
//   const container = document.querySelector('.hero-text');
//   const text = document.querySelector('.hero-title');

//   if (!container || !text) return;

//   // Reset font size to measure natural width
//   text.style.fontSize = '10px'; 
  
//   const containerWidth = container.clientWidth;
//   const textWidth = text.scrollWidth;
  
//   // Calculate ratio
//   // 10px is the base size we set above
//   const newSize = (containerWidth / textWidth) * 10;
  
//   text.style.fontSize = `${newSize}px`;
// }

// // Run on load
// window.addEventListener('load', fitText);

// // Run on resize
// window.addEventListener('resize', fitText);