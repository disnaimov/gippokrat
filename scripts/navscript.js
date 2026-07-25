var menu = document.getElementById("menu");
menu.onclick = function myFunction() {
    var x = document.getElementById("mobile-links");
    var mainContent = document.getElementById("main-content"); // Получаем элемент main

    if (x.className === "mobile-container-links") {
        x.className += " responsive"; // Добавляем класс responsive
        mainContent.classList.add("main-padding"); // Добавляем класс отступа для main
    } else {
        x.className = "mobile-container-links"; // Убираем класс responsive
        mainContent.classList.remove("main-padding"); // Убираем класс отступа для main
    }
}