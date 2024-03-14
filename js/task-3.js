const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
    let name = this.value.trim(); // Очищаємо введений текст від пробілів по краях

    if (name === '') {
        nameOutput.textContent = 'Anonymous'; // Якщо інпут порожній, то використовуємо "Anonymous"
    } else {
        nameOutput.textContent = name; // Використовуємо введене ім'я
    }
});