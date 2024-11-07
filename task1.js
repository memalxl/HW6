document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Очистка старых ошибок
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    
    let valid = true;

    // Валидация имени
    let name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('nameError').textContent = 'Имя не может быть пустым';
        valid = false;
    }

    // Валидация email
    let email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Email должен содержать символы "@" и "."';
        valid = false;
    }

    // Валидация пароля
    let password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Пароль должен содержать минимум 8 символов';
        valid = false;
    }

    if (valid) {
        alert('Форма успешно отправлена!');
    }
});
