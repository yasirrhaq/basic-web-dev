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

const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name','bugon');

const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.toggle('label');

// DOM Manipulation Node

const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');

// save the text to paragraf
pBaru.appendChild(textPBaru);

// save pBaru in the end of sectionA

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const liBaru2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, liBaru2);

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';