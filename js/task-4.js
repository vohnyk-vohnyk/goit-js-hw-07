
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Заборона відправлення форми

    // Збір значень полів форми
    const formData = {};
    const formElements = this.elements;
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.type !== 'submit') { // Виключаємо кнопку відправлення
            formData[element.name] = element.value.trim(); // Обрізаємо пробіли
        }
    }

    // Перевірка на заповненість всіх полів
    let allFieldsFilled = true;
    for (const key in formData) {
        if (formData[key] === '') {
            allFieldsFilled = false;
            break;
        }
    }

    if (!allFieldsFilled) {
        alert('Усі поля форми повинні бути заповнені');
    } else {
        console.log(formData); // Виведення даних форми у консоль
        this.reset(); // Очищення форми
    }
});