// toogle menu staff
document.querySelectorAll('.title').forEach(title => {
    title.addEventListener('click', function () {
        document.querySelectorAll('.content').forEach(content => {
            if (content !== title.nextElementSibling) {
                content.classList.remove('open');
            }
        });
        this.nextElementSibling.classList.toggle('open');

        if (this.nextElementSibling.classList.contains('open')) {
            localStorage.setItem('staffMenuOpenPrevous', this.innerText);
        }
        else {
            localStorage.removeItem('staffMenuOpenPrevous');
        }
    });
});

//storage prevous menu open
document.querySelectorAll('.title').forEach(title => {
    if (title.innerText == localStorage.getItem('staffMenuOpenPrevous')) {
        title.nextElementSibling.classList.toggle('open', true);
    }
})
//