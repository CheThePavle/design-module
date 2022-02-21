function reset(element, min, max, after = '') {
    let bar = Math.random() * (100 - 1) + 1;
    let val = Math.floor(Math.random() * (max - min) + min);

    element.style.width = bar + '%';
    element.classList.remove('bg-success');
    element.classList.remove('bg-orange');
    element.classList.remove('bg-danger');
    element.classList.add(bar > 9 && bar < 50 ? 'bg-success' : bar > 50 && bar < 70 ? 'bg-orange' : 'bg-danger');
    element.innerText = Math.floor(val) + after;
}

function changePrice() {
    let bar_people = document.getElementById('bar_people');
    reset(bar_people, 1, 10);

    let bar_price = document.getElementById('bar_price');
    reset(bar_price,1000, 10000, ' руб.');
}

setInterval(() => {
    changePrice();
}, 7000)