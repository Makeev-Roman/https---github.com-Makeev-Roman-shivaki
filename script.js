// Получаем ссылки на элементы
var formModal = document.getElementById("formModal");
var openFormDivs = document.querySelectorAll(".openFormDiv");
var closeFormBtn = document.getElementById("closeFormBtn");

// Добавляем обработчик события клика на блоки div с классом openFormDiv
openFormDivs.forEach(function(div) {
    div.onclick = function() {
        formModal.style.display = "block";
    }
});

// Закрываем форму при клике на крестик
closeFormBtn.onclick = function() {
    formModal.style.display = "none";
}

// Закрываем форму при клике вне окна
window.onclick = function(event) {
    if (event.target == formModal) {
        formModal.style.display = "none";
    }
}

