let result = document.getElementById('result');
let submit = document.getElementById('submit');

function binnery(evant) {
    evant.preventDefault();
    let num = document.getElementById('number').value;
    if (num === '') {
        alert('Please enter a number');
    } else if (num < 0) {
        alert('Please enter a valid number')
    } else {
        result.style.visibility = 'visible';
    }

    let binnery = Number(num).toString(2);
    result.innerText = binnery;
}
submit.addEventListener('click', binnery);