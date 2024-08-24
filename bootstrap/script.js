document.addEventListener('DOMContentLoaded', function() {
    const cityCards = document.querySelectorAll('.city-card');
    const cityMap = document.getElementById('cityMap');

    cityCards.forEach(card => {
        card.addEventListener('click', function() {
            const mapSrc = this.getAttribute('data-map');
            cityMap.src = mapSrc;

            // Remove 'active' class from all cards and add to clicked card
            cityCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
});