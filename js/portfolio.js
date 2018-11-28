let tab1 = [];
tab1 = document.querySelectorAll('.web');
let tab2 = [];
tab2 = document.querySelectorAll('.design');

function design() {
    for (let i = 0; i < tab1.length; i++) {
        tab1[i].style.display = "none";
        tab2[i].style.display = "block";
    }
}
document.querySelector(".btndesign").addEventListener('click', design);

function web() {
    for (let i = 0; i < tab2.length; i++) {
        tab2[i].style.display = "none";
        tab1[i].style.display = "block";
    }
}
document.querySelector(".btnweb").addEventListener('click', web);

function all() {
    console.log('salut')
    for (let i = 0; i < tab1.length && i < tab2.length; i++) {
        tab1[i].style.display = "block";
        tab2[i].style.display = "block";
    }
}
document.querySelector(".btnall").addEventListener('click', all);


