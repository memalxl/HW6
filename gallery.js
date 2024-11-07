// Функция для отображения увеличенного изображения
function showImage(src) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = src;
    modal.style.display = "flex";
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
