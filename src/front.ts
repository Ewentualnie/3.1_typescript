let plus = document.getElementById('plus')
let minus = document.getElementById('minus')

const apiURL = 'http://localhost:8080/'

if (plus != null) {
    plus.onclick = (plus) => {
        const route = 'plus';
        const qs = {action: route};
        fetch(apiURL + route + '?' + new URLSearchParams(qs), {
            method: 'POST',
            body: JSON.stringify({test: 'plus some text'}),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((value) => console.log(value))
    }
}
if (minus != null) {
    minus.onclick = (minus) => {
        const route = 'minus';
        const qs = {action: route};
        fetch(apiURL + route + '?' + new URLSearchParams(qs), {
            method: 'POST',
            body: JSON.stringify({test: 'minus some text'}),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((value) => console.log(value))
    }
}