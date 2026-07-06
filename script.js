// Cursor Script
const cur = document.getElementById('cur');
const orbit = document.getElementById('cur-orbit');
document.addEventListener('mousemove', (e) => {
  cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px';
  orbit.style.left = e.clientX + 'px'; orbit.style.top = e.clientY + 'px';
});

// Loader Script
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  let count = 0;
  const counterInterval = setInterval(() => {
    count += 4;
    if(count <= 100) { document.getElementById('loaderNum').textContent = count; } 
    else { clearInterval(counterInterval); loader.style.opacity = '0'; setTimeout(() => loader.style.display = 'none', 600); }
  }, 40);
});
