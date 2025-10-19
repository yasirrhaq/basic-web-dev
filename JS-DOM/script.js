// DOM Selection
// getElementById() -> element
const title = document.getElementById('title');

title.style.color = 'red';
title.style.backgroundColor = '#ccc';
title.innerHTML = 'Bugon';

// getElementByTagName() -> HTMLCollections

const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// getElementByClassName() -> HTMLCollections

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Changed via JS';