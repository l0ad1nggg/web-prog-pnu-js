let isCatalogOpen = false;

document.addEventListener('DOMContentLoaded', function() {
  const homeLink = document.getElementById('homeLink');
  const catalogLink = document.getElementById('catalogLink');

  homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      // При кліку на "Додому" оновлюємо категорії
      loadCategories();
  });

  catalogLink.addEventListener('click', function(event) {
      event.preventDefault();
      // При кліку на "Каталог" завантажуємо каталог
      loadCatalog();
  });

  // Починаємо з домашньої сторінки
  loadHomePage();
});

function loadHomePage() {
  // Очищаємо контейнер категорій
  const categoriesContainer = document.getElementById('categories');
  categoriesContainer.innerHTML = '';

  // Відображуємо порожній контейнер продуктів
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';
}

function loadCategories() {
  const categoriesContainer = document.getElementById('categories');
  categoriesContainer.innerHTML = '';

  fetch('./api/categories.json')
  .then(response => response.json())
  .then(data => {
      data.forEach(category => {
          const categoryLink = document.createElement('a');
          categoryLink.href = '#';
          categoryLink.textContent = category.name;
          categoriesContainer.appendChild(categoryLink);

          categoryLink.addEventListener('click', function(event) {
              event.preventDefault();
              isCatalogOpen = true;
              loadCategory(category.name);
          });
      });
  });
}

function loadCategory(categoryName) {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';

  fetch(`./api/categories/${categoryName}.json`)
      .then(response => response.json())
      .then(data => {
          data.forEach(product => {
              const productDiv = document.createElement('div');
              productDiv.classList.add('product');

              const productImg = document.createElement('img');
              productImg.src = product.image;
              productImg.alt = product.name;
              productDiv.appendChild(productImg);

              const productName = document.createElement('h3');
              productName.textContent = product.name;
              productDiv.appendChild(productName);

              const productDescription = document.createElement('p');
              productDescription.textContent = product.description;
              productDiv.appendChild(productDescription);

              const productPrice = document.createElement('p');
              productPrice.textContent = `Price: ${product.price}`;
              productDiv.appendChild(productPrice);

              productsContainer.appendChild(productDiv);
          });
      });
}

function loadCatalog() {
  isCatalogOpen = true;
  const categories = ['electronics', 'clothes', 'music'];
  loadCategory(categories);
}
