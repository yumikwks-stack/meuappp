let count = 0;
const button = document.getElementById('clickMe');
const counter = document.getElementById('counter');

button.addEventListener('click', () => {
    count++;
    counter.textContent = `Cliques: ${count}`;
    
    // Simple vibration if supported
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
});