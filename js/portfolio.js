let portfolio = [];

for (let i = 0; i < portfolio.length; i++) {
    document.querySelector('.btnall').addEventListener('click', function () {

        portfolio[i].style.display = 'block';

    })
    document.querySelector('.btndesign').addEventListener('click', function () {

        if (portfolio[i].classList.contains('web')) {
            portfolio[i].style.display = "none"
        } else {
            portfolio[i].style.display = "block"
        }

    })
    document.querySelector('.btnweb').addEventListener('click', function () {

        if (portfolio[i].classList.contains('web')) {
            portfolio[i].style.display = "block"
        } else {
            portfolio[i].style.display = "none"
        }
    })
}