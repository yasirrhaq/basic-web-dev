// const closeBtn = document.querySelector('.close');
// const card = document.querySelector('.card');
// closeBtn.addEventListener('click', function(){
//     // card.remove();
//     card.style.display = 'none';
// });

// DOM Traversal

const closeBtnAll = document.querySelectorAll(".close");
closeBtnAll.forEach(function (close) {
  close.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

// for (let i = 0; i < closeBtnAll.length; i++) {
//     closeBtnAll[i].addEventListener('click', function(){
//         closeBtnAll[i].parentElement.style.display = 'none';
//     })
// }

const name = document.querySelector('.nama');
console.log(name.nextElementSibling.nextElementSibling);