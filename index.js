function formatMoney(value) {
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return '$ ' + value;
}

function formatSplit(value) {
    if (value == 1) {
        return value + ' person';
    }

    return value + ' people';
}

function update() {
    let bill = Number(document.getElementById('your-bill').value);
    let tip_percent = document.getElementById('tip-input').value;
    let split = document.getElementById('split-input').value;

    let tip_value = bill * (tip_percent / 100);
    let bill_total = bill + tip_value;
    let bill_each = bill_total / split;

    document.getElementById('tip-percent').innerHTML = tip_percent + ' %';
    document.getElementById('tip-value').innerHTML = formatMoney(tip_value);
    document.getElementById('total-with-tip').innerHTML = formatMoney(bill_total);
    document.getElementById('split-value').innerHTML = formatSplit(split);
    document.getElementById('bill-each').innerHTML = formatMoney(bill_each);
}