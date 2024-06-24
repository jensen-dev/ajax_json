https://docs.google.com/spreadsheets/d/1p1P8MED24w5ZgOcjuP0x91c58vNvON4FiKzB7oZFQQw/edit?usp=sharing
var output = document.querySelector('.output');
const base_url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '1p1P8MED24w5ZgOcjuP0x91c58vNvON4FiKzB7oZFQQw';
const query1 = `/gviz/tq?`;

var endpoint1 = `${base_url}${ssid}`;
output.textContent = endpoint1;

fetch(endpoint1, {
    mode: 'no-cors'
})
.then(res => res.text())
.then(data => {
    const temp = data.substr(47).slice(0, -2);
    const json = JSON.parse(temp);

    const rows = json.table.rows;
    rows.array.forEach(row => {
        const div = document.createElement('div');
        const temp1 = row.c;
        temp1.forEach((cell) => {
            console.log(cell);
            const box = document.createElement('div');
            box.textContent = cell.v;
            box.classList.add('box');
            div.append(box);
        })
        output.append(div);
    });
})
.catch(err => {
    console.log(err);
})