function changePrice() {
    let bar = Math.random() * (100 - 10) + 10;

    let people = Math.random() * (10 - 1) + 1;
    let bar_people = $('.bar_people');
    bar_people.css('width', bar + '%');
    bar_people.removeClass('bg-success');
    bar_people.removeClass('bg-warning');
    bar_people.removeClass('bg-danger');
    bar_people.addClass(bar > 9 && bar < 50 ? 'bg-success' : bar > 50 && bar < 70 ? 'bg-warning' : 'bg-danger');
    bar_people.html(Math.floor(people));

    bar = Math.random() * (100 - 10) + 10;
    let price = Math.random() * (10000 - 1000) + 1000;
    let bar_price = $('.bar_price');
    bar_price.css('width', bar + '%');
    bar_price.removeClass('bg-success');
    bar_price.removeClass('bg-warning');
    bar_price.removeClass('bg-danger');
    bar_price.addClass(bar > 9 && bar < 50 ? 'bg-success' : bar > 50 && bar < 70 ? 'bg-warning' : 'bg-danger');
    bar_price.html(Math.floor(price) + ' руб.');
}

let price_form = $('.price_form');
price_form.keyup(() => {
    changePrice();
});
price_form.change(() => {
    changePrice();
});

setInterval(() => {
    changePrice();
}, 7000)