function renderTotalCart() {
    fetch('/cart/get').then(response => response.json()).then(data => {
        document.querySelector('#totalCart').innerHTML = data.totalProducts.totalProducts
    })
}
renderTotalCart()