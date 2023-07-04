const apiUrl = window.location.pathname.replace('staff', 'api');
const orginalHTML = document.querySelector('table').innerHTML;

function renderProductsTable(products) {
    let html = orginalHTML;
    products.forEach(product => {
        html += `<tr>
      <td>${product.id}</td>
      <td>${product.title}</td>
      <td>${product.price}</td>
      <td>${product.category}</td>
      <td>${product.saleprice}</td>
      <td>${product.quantity}</td>
      <td>${product.topseller}</td>
    </tr>`;
    });
    document.querySelector('table').innerHTML = html;
}

function getProductsList(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderProductsTable(data);
        })
        .catch(error => {
            console.error(error);
        });
}

function searchProducts() {
    const searchQuery = document.querySelector('#search').value;
    const searchType = document.querySelector('#type').value;
    if (searchQuery) {
        const searchUrl = `${apiUrl}?search=${searchQuery}&type=${searchType}`;
        getProductsList(searchUrl)
    } else {
        getProductsList(apiUrl);
    }
}

document.querySelector('#search').addEventListener('input', searchProducts);

getProductsList(apiUrl);