function getProducts(type, categoryId) {
    fetch(`/api/products/${type}?limit=6`)
        .then(response => response.json()).then(data => {
            let htmls = document.querySelector(`#${categoryId} .list-item`).innerHTML
            data.forEach(item => {
                htmls += `<div class="item">
                        <img src="./img/test.jpg" alt="">
                        <div class="title">
                            ${item.title}
                        </div>
                        <div class="price">
                            $${item.price}
                        </div>
                        <button class="option" id="${item.id}" onclick='addToCart(this)'><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>`
            })
            document.querySelector(`#${categoryId} .list-item`).innerHTML = htmls
        })
}

getProducts('sales', 'category-sales');
getProducts('topseller', 'category-topseller');
getProducts('fruits', 'category-fruits');
getProducts('juices', 'category-juices');

function addToCart(e) {
    fetch('/cart/add/' + e.id, {
        method: "POST"
    }).then(() => {
        renderTotalCart(true)
        e.innerHTML = '<i class="fa-solid fa-check" style="color: #3ed063;"></i>'
    });

}
