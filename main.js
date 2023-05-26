const apiUrl = 'http://206.189.148.20:8080/api/get';

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    const appElement = document.querySelector('.app');

    data.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const productImage = document.createElement('div');
        productImage.className = 'product-image';
        const image = document.createElement('img');
        image.src = product.image;
        image.alt = '';
        productImage.appendChild(image);

        const productBody = document.createElement('div');
        productBody.className = 'product-body';

        const productName = document.createElement('div')
        productName.className = 'product-name'

        const productDescription = document.createElement('div');
        productDescription.className = 'product-description';
        productDescription.textContent = product.description;

        const productPrice = document.createElement('div');
        productPrice.className = 'product-price';
        productPrice.textContent = `$${product.price}`;

        const addToCart = document.createElement('div');
        addToCart.className = 'add-to-card';
        addToCart.textContent = 'Add to Cart';

        productBody.appendChild(productName);
        productBody.appendChild(productDescription);
        productBody.appendChild(productPrice);
        productCard.appendChild(productImage);
        productCard.appendChild(productBody);
        productCard.appendChild(addToCart);

        appElement.appendChild(productCard);
    });
})
.catch(error => {
    console.error('Error fetching product data', error);
});