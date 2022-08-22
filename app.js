const timer = document.querySelector('.header__timer-extra'),
    plusBtn = document.querySelectorAll('.plus'),
    minusBtn = document.querySelectorAll('.minus'),
    amounts = document.querySelectorAll('.main__product-num'),
    price = document.querySelectorAll('.main__product-price'),
    caloriya = document.querySelectorAll('.calories');

function Uptimer() {
    if (timer.innerHTML < 50) {
        timer.innerHTML++
        setTimeout(Uptimer, 50)
    }
    else if (timer.innerHTML < 100) {
        timer.innerHTML++
        setTimeout(Uptimer, 90)
    }
}
Uptimer()
for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i]
}
for (let a = 0; a < amounts.length; a++) {
    amounts[a]
}
for (let f = 0; f < minusBtn.length; f++) {
    minusBtn[f]
}
for (let l = 0; l < price.length; l++) {
    price[l]
}
for (let k = 0; k < caloriya.length; k++) {
    caloriya[k]
}

plusBtn[0].addEventListener('click', function () {
    amounts[0].innerHTML++
    let sum = 10000 * amounts[0].innerHTML;
    price[0].innerHTML = sum + '  sum';
    let calor = 100 * amounts[0].innerHTML
    caloriya[0].innerHTML = calor
})

minusBtn[0].addEventListener('click', function () {
    if (amounts[0].innerHTML === 0) {
        amounts[0].innerHTML = '0'
    }
    else if (amounts[0].innerHTML != 0) {
        amounts[0].innerHTML--
    }
    let sum = 10000 * amounts[0].innerHTML;
    price[0].innerHTML = sum + '  sum'
    let calor = 100 * amounts[0].innerHTML
    caloriya[0].innerHTML = calor
})



plusBtn[1].addEventListener('click', function () {
    amounts[1].innerHTML++
    let sum = 20500 * amounts[1].innerHTML;
    price[1].innerHTML = sum + '  sum'
    let calor = 150 * amounts[1].innerHTML
    caloriya[1].innerHTML = calor
})

minusBtn[1].addEventListener('click', function () {
    if (amounts[1].innerHTML === 0) {
        amounts[1].innerHTML = '0'
    }
    else if (amounts[1].innerHTML != 0) {
        amounts[1].innerHTML--
    }
    let sum = 20500 * amounts[1].innerHTML;
    price[1].innerHTML = sum + '  sum'
    let calor = 150 * amounts[1].innerHTML
    caloriya[1].innerHTML = calor
})

plusBtn[2].addEventListener('click', function () {
    amounts[2].innerHTML++
    let sum = 31900 * amounts[2].innerHTML;
    price[2].innerHTML = sum + '  sum'
    let calor = 200 * amounts[2].innerHTML
    caloriya[2].innerHTML = calor
})

minusBtn[2].addEventListener('click', function () {
    if (amounts[2].innerHTML === 0) {
        amounts[2].innerHTML = '0'
    }
    else if (amounts[2].innerHTML != 0) {
        amounts[2].innerHTML--
    }
    let sum = 31900 * amounts[2].innerHTML;
    price[2].innerHTML = sum + '  sum'
    let calor = 200 * amounts[2].innerHTML
    caloriya[2].innerHTML = calor
})


const mainImg = document.querySelectorAll('.main__product-info'),
      view = document.querySelector('.view'),
      closeBtn = document.querySelector('.view__close'),
      burgerImg = document.querySelector('.burgerImg');

for (let i = 0; i < mainImg.length; i++) {
    const lastImg = mainImg[i];
    
    lastImg.addEventListener('dblclick',function () {
        view.classList.toggle('active')
        let parent = lastImg.querySelector('img');
        let att = parent.getAttribute('src');
        burgerImg.setAttribute('src', att)
    })
}
closeBtn.addEventListener('click',function () {
    view.classList.toggle('active')
})