let lis = document.querySelectorAll('.kv-bg .main_top .main_top_left .adBtn ul li');
let a = document.querySelector('.kv-bg .main_top .main_top_left a');

function fun() {
    let num = this.getAttribute('index');
    a.style.backgroundPositionX = -num * 604 + 'px';
}
for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].addEventListener('mouseover', fun)
}

