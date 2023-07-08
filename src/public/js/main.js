function renderTotalCart(isRedirectToLogin) {
    fetch('/cart/get')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                if (isRedirectToLogin) {
                    window.location.pathname = "/login"
                }
                else {
                    return null
                }
            }
            return response.json();
        })
        .then(data => {
            try {
                document.querySelector('#totalCart').innerHTML = data.totalProducts.totalProducts;
            } catch (e) {
                document.querySelector('#totalCart').innerHTML = 0;
            }
        })
}
renderTotalCart(false);