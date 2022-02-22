function select(el) {
    let select = el.classList.contains('c_select_td');
    if (select) {
        el.classList.remove('c_select_td');
        el.classList.add('c_no_select_td');
    } else {
        el.classList.remove('c_no_select_td');
        el.classList.add('c_select_td');
    }
}