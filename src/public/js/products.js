const searchType = window.location.pathname.slice(1);
const apiUrl = '/api/products/' + searchType;
const categoryId = "category-" + searchType;
const orginalHTML = '';
// const orginalHTML = document.querySelector(`#${categoryId} .list-item`).innerHTML;
function renderProductsTable(products, status) {
    document.querySelector(`#${categoryId} .list-item`).innerHTML = ''
    let htmls = orginalHTML;
    if (products.length != 0) {
        products.forEach(item => {
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
    }
    else {
        htmls = `<div class="empty-item">
            Item Not Found
        </div>`
    }

    document.querySelector(`#${categoryId} .list-item`).innerHTML = htmls

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

function searchProducts() {
    const searchQuery = document.querySelector('#search').value;
    if (searchQuery) {
        const searchUrl = `${apiUrl}?search=${searchQuery}`;
        getProductsList(searchUrl)
    } else {
        getProductsList(apiUrl);
    }
}

document.querySelector('#search').addEventListener('input', searchProducts);

getProductsList(apiUrl, false);

function renderTotalCart() {
    fetch('/cart/get').then(response => response.json()).then(data => {
        document.querySelector('#totalCart').innerHTML = data.totalProducts.totalProducts
    })
}

function addToCart(e) {
    fetch('/cart/add/' + e.id, {
        method: "POST"
    }).then(() => {
        e.innerHTML = '<i class="fa-solid fa-check" style="color: #3ed063;"></i>'
        renderTotalCart()
    });
}


