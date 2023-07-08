const apiUrl = '/cart/get';
const orginalHTML = '';

function renderProductsTable(products) {
    document.querySelector(`.table table tbody`).innerHTML = ''
    let htmls = orginalHTML;
    if (products.data.length != 0) {
        products.data.forEach(item => {
            htmls += `<tr>
            <td><img src="/img/test.jpg"></td>
            <td>${item.title}</td>
            <td>$${item.price}</td>
            <td><button id="${item.productId}-decrease-${item.quantity}" class="valueBtn decrease" onclick='setQuanity(this)'><</button>${item.quantity}<button id="${item.productId}-increase-${item.quantity}" class="valueBtn increase" onclick='setQuanity(this)'>></button></td>
            <td>$${item.price * item.quantity}</td>
            <td><button id="${item.productId}" onclick='remove(this)' class="removeBtn"><i class="fa-solid fa-trash"></i></button></td>
        </tr>`
        })
    }
    else {
        htmls = `<div class="empty-item">
            Item Not Found
        </div>`
    }

    document.querySelector(`.table table tbody`).innerHTML = htmls
    document.querySelector('#subPrice').innerHTML = products.totalPrice.totalPrice || 0
    document.querySelector('#totalPrice').innerHTML = products.totalPrice.totalPrice + 10
}

function getProductsList(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderProductsTable(data, true);
        })
        .catch(error => {
            console.error(error);
        });
}

getProductsList(apiUrl);

function renderTotalCart() {
    fetch('/cart/get').then(response => response.json()).then(data => {
        document.querySelector('#totalCart').innerHTML = data.totalProducts.totalProducts
    })
}

function remove(e) {
    fetch('/cart/remove/' + e.id, {
        method: "POST"
    }).then(() => {
        getProductsList(apiUrl);
        renderTotalCart()
    })
}

function setQuanity(e) {
    if (e.id.includes('increase')) {
        fetch(`/cart/set/${e.id.split('-')[0]}/${parseInt(e.id.split('-')[2]) + 1}`, {
            method: "POST"
        }).then(() => {
            getProductsList(apiUrl);
        })
    }
    else {
        if (parseInt(e.id.split('-')[2]) > 1) {
            fetch(`/cart/set/${e.id.split('-')[0]}/${parseInt(e.id.split('-')[2]) - 1}`, {
                method: "POST"
            }).then(() => {
                getProductsList(apiUrl);
            })
        }
    }
}