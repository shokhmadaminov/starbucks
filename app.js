const h2 = document.querySelector('.h2')
const rose = document.querySelector('.rose')
const green = document.querySelector('.green')
const violet = document.querySelector('.violet')
const btn = document.querySelector('.btn')

function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

rose.onclick = function(){
    h2.style.color = '#eb7495'
    btn.style.background = '#eb7495'
}
green.onclick = function(){
    h2.style.color = '#017143'
    btn.style.background = '#017143'
}
violet.onclick = function(){
    h2.style.color = '#d752b1'
    btn.style.background = '#d752b1'
}

