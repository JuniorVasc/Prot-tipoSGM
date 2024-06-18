$(document).ready(function() {
    $(".hamburger .hamburger__inner").click(function() {
        $(".wrapper").toggleClass("active");
    });

    $(".top_navbar .fas.fa-user").click(function() {
        $(".profile_dd").toggleClass("active");
    });

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.querySelector('.current_time').textContent = timeString;
    }

    updateClock(); // Atualiza a hora assim que a página carrega
    setInterval(updateClock, 1000); // Atualiza a hora a cada segundo
});