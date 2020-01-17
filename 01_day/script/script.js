document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.search'),
        basketIcon = document.getElementById('cart'),
        wishlist = document.getElementById('wishlist'),
        card = document.querySelector('.goods-wrapper'),
        userBasket = document.querySelector('.cart');

        const showBasket = (e) => {
            e.preventDefault();
            userBasket.style.display = 'flex';
        };

        document.addEventListener('keydown', (e) => { 
            console.log(e.keyCode);
            if(e.keyCode === 27){
                userBasket.style.display = '';
            }
        });

        const hideBasket = (e) => {
            const target = e.target;
            if(target === userBasket || target.classList.contains('cart-close')){
                userBasket.style.display = '';
            }
        };

        userBasket.addEventListener('click', hideBasket);
        basketIcon.addEventListener('click', showBasket);

        const createProductItem = (id, img, name, price) => {
            const productItem = document.createElement('div');
            productItem.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
            const cardContent = `<div class="card">
                                        <div class="card-img-wrapper">
                                            <img class="card-img-top" src="${img}" alt="">
                                            <button class="card-add-wishlist"
                                            data-goods-id="${id}"></button>
                                        </div>
                                        <div class="card-body justify-content-between">
                                            <a href="#" class="card-title">${name}</a>
                                            <div class="card-price">${price} ₴</div>
                                            <div>
                                                <button class="card-add-cart"
                                                data-goods-id="${id}">Добавить в корзину</button>
                                            </div>
                                        </div>
                                    </div>`;
            productItem.innerHTML = cardContent;
            card.append(productItem);
        };
        //понимаю что сделал не так как в видеоуроке, но работает же... интересно на 100% так же, или нет

        createProductItem('01', './img/temp/archer.jpg', 'Arrows', '250');
        createProductItem('02', './img/temp/flamingo.jpg', 'Flamingo', '850');
        createProductItem('03', './img/temp/socks.jpg', 'Socks', '2250');
        
});