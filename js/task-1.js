
    // Отримуємо елемент ul#categories
    const categoriesList = document.getElementById('categories');

    // Отримуємо всі елементи li.item у списку
    const categoryItems = categoriesList.querySelectorAll('li.item');

    // Виводимо кількість категорій
    console.log('Кількість категорій:', categoryItems.length);

    // Для кожного елемента li.item у списку ul#categories
    categoryItems.forEach(item => {
    // Отримуємо текст заголовка елемента (тегу <h2>)
    const categoryTitle = item.querySelector('h2').textContent;
    // Отримуємо кількість елементів у категорії (усіх <li>, вкладених у нього)
    const categoryItemsCount = item.querySelectorAll('ul > li').length;
    // Виводимо дані за кожною категорією
    console.log(`${categoryTitle} - ${categoryItemsCount} елементів`);
});
