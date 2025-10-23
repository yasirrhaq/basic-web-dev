// const p3 = document.querySelector('.p3');

// function changeColor(){
//     p3.style.backgroundColor = 'lightblue';
// }

// function changeColorP2(){
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');

// p2.onclick  = changeColorP2;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('Item Baru');

//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// });

// Event Handler, will run the latest event
const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };

// p3.onclick = function () {
//   p3.style.color = "red";
// };

// Event Listener, will run all event
p3.addEventListener('click', function () {
  p3.style.backgroundColor = "lightblue";
});

p3.addEventListener('click', function () {
  p3.style.color = "red";
});
