document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollBy({
        top: 500, // Количество пикселей для прокрутки вниз
        behavior: 'smooth' // Плавная прокрутка
    });
});