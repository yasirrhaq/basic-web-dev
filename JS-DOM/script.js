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

// querySelector() -> element

const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '50px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// querySelectorAll() -> NodeList

const pall = document.querySelectorAll('p');

for (let i = 0; i < pall.length; i++) {
    pall[i].style.backgroundColor = 'salmon';
}