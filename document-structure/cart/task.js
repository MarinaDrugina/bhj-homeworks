const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');
const cart = document.querySelector('.cart');

cart.style.display = 'none';

product.forEach(productItem => {
    const productQuantityControl = productItem.querySelector('.product__quantity-controls');
    let minQuantity = +productQuantityControl.children[1].textContent;

    productQuantityControl.firstElementChild.addEventListener('click', (event) => {
        if(minQuantity > 1) {
            minQuantity -= 1;
            productQuantityControl.children[1].textContent = minQuantity;
        }
    });

    productQuantityControl.lastElementChild.addEventListener('click', (event) => {
        minQuantity += 1;
        productQuantityControl.children[1].textContent = minQuantity;
    });

    const productAddButton = productItem.querySelector('.product__add');

    productAddButton.addEventListener('click', (event) => {  
        cart.style.display = 'block';

        let arr = Array.from(cartProducts.children);
        let index = arr.findIndex(cartItem => cartItem.dataset.id === productItem.dataset.id);

        if(index === -1) {
            cartProducts.insertAdjacentHTML('beforeend', 
                `<div class="cart__product" data-id=${productItem.dataset.id}>
                    <img class="cart__product-image" src=${productItem.children[1].getAttribute('src')}>
                    <div class="cart__product-count">${minQuantity}</div>
                    <a href="#" class="cart__product-remove">&times;</a>
                </div>`
            );

            cartProducts.lastElementChild.lastElementChild.addEventListener('click', (event) => {
                event.preventDefault();
                event.currentTarget.parentNode.remove();
                });
                
        } else {
            let cartQuantity = +cartProducts.children[index].children[1].textContent;
            cartQuantity += minQuantity;
            cartProducts.children[index].children[1].textContent = cartQuantity;
        }   
    });
});