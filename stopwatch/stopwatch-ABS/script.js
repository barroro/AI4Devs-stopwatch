let startTime, updatedTime, paused = true;
let interval, elapsedTime = 0;

const timeDisplay = document.getElementById('timeDisplay');
const millisecondsDisplay = document.getElementById('milliseconds');
const startBtn = document.getElementById('startBtn');
const clearBtn = document.getElementById('clearBtn');

// Evento para manejar el botón de Start, Pause y Continue
startBtn.addEventListener('click', () => {
    if (paused) {
        // Si estaba pausado, comenzamos el cronómetro
        paused = false;
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTime, 10);
        
        // Cambiar el texto a "Pause" y cambiar el color del botón
        startBtn.textContent = 'Pause';
        startBtn.classList.remove('bg-cyan-700', 'hover:bg-cyan-600');
        startBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-500');
    } else {
        // Si no estaba pausado, pausamos el cronómetro
        paused = true;
        clearInterval(interval);
        
        // Cambiar el texto a "Continue" y volver a cambiar el color
        startBtn.textContent = 'Continue';
        startBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-500');
        startBtn.classList.add('bg-cyan-700', 'hover:bg-cyan-600');
    }
});

// Evento para el botón de Clear
clearBtn.addEventListener('click', () => {
    paused = true;
    clearInterval(interval);
    elapsedTime = 0;
    
    // Restablecer el texto y el color del botón a su estado inicial
    startBtn.textContent = 'Start';
    startBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-500');
    startBtn.classList.add('bg-cyan-700', 'hover:bg-cyan-600');
    
    // Reiniciar el valor del tiempo mostrado
    timeDisplay.value = '00:00:00';
    millisecondsDisplay.textContent = '000';
});

function updateTime() {
    updatedTime = Date.now() - startTime;
    elapsedTime = updatedTime;

    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000));

    timeDisplay.value = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    millisecondsDisplay.textContent = padMilliseconds(milliseconds);
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function padMilliseconds(unit) {
    return unit < 100 ? unit < 10 ? '00' + unit : '0' + unit : unit;
}
