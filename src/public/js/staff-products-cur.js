const imgInput = document.querySelector('#imgInput')
if (imgInput) {
    imgInput.addEventListener('change', () => {
        const [file] = imgInput.files
        document.querySelector('#nameImg').value = file.name.split('.')[0];
        if (file) {
            document.querySelector('#yourImage').src = URL.createObjectURL(file)
        }
    })
}

function clearInput() {
    document.querySelectorAll('input').forEach(item => {
        item.value = ''
    })
    document.querySelector('#yourImage').src = ''
    document.querySelector('input[type=submit]').value = 'Submit'
}

let form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const url = window.location.pathname.replace('staff', 'api');
    const options = {
        method: 'POST',
        body: formData
    }
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.status .success').innerText = data.status
            clearInput()
        })
        .catch(error => {
            console.error(error)
        });
});