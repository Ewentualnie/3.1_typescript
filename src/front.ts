const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const plusDiv = document.getElementById('plus_div')
const minusDiv = document.getElementById('minus_div')

const apiURL = 'http://localhost:8080/'

enum Buttons {
    PLUS,
    MINUS
}

if (plusDiv != null && minusDiv != null) {
    if (plusButton != null) {
        plusButton.onclick = () => button(Buttons.PLUS, plusDiv);
    }
    if (minusButton != null) {
        minusButton.onclick = () => button(Buttons.MINUS, minusDiv);
    }
}

function button(value: Buttons, div: HTMLElement) {
    fetch(apiURL + "button", {
        method: 'POST',
        body: JSON.stringify({ button: value }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then((val) => div.innerText = ": " + val.button + " times");
}