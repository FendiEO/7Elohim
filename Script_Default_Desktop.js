function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menu-icon');
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Pastikan dokumen HTML telah dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", function() {
    function updateDigitalClock() {
        const digitalClock = document.getElementById('jam');
        if (!digitalClock) return; // Periksa apakah elemen ada
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update the clock immediately and every second
    updateDigitalClock();
    setInterval(updateDigitalClock, 1000);
});