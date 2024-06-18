function updateClock() {
    const clockElement = document.getElementById('relogio');
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const currentTime = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = currentTime;
}

// Atualiza o relógio imediatamente ao carregar a página
updateClock();

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
