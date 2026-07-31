const buttons = document.querySelectorAll('.toggleButton');  

buttons.forEach(button => {  
    button.addEventListener('click', function () {  
        const list = this.closest('.contact-container-text__text-element').querySelector('.myList');  
        const icon = this.querySelector('.material-symbols-outlined');  

        // Проверяем, открыт ли текущий список  
        const isVisible = list.style.display === 'block';  

        // Скрываем все списки и меняем иконки на плюс  
        buttons.forEach(btn => {  
            const otherList = btn.closest('.contact-container-text__text-element').querySelector('.myList');  
            const otherIcon = btn.querySelector('.material-symbols-outlined');  
            if (otherList !== list) { // Только скрывать другие списки  
                otherList.style.display = 'none'; // Скрываем другие списки  
                otherIcon.textContent = 'add_circle'; // Меняем иконку на плюс  
            }  
        });  

        // Если текущий список не видимый, показываем его  
        if (!isVisible) {  
            list.style.display = 'block'; // Показываем текущий список  
            icon.textContent = 'remove_circle'; // Меняем иконку на минус  
        } else {  
            list.style.display = 'none'; // Скрываем текущий список  
            icon.textContent = 'add_circle'; // Меняем иконку обратно на плюс  
        }  
    });  
}); 