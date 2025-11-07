// // const closeBtn = document.querySelector('.close');
// // const card = document.querySelector('.card');
// // closeBtn.addEventListener('click', function(){
// //     // card.remove();
// //     card.style.display = 'none';
// // });

// // DOM Traversal

// const closeBtnAll = document.querySelectorAll(".close");
// closeBtnAll.forEach(function (close) {
//   close.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// // for (let i = 0; i < closeBtnAll.length; i++) {
// //     closeBtnAll[i].addEventListener('click', function(){
// //         closeBtnAll[i].parentElement.style.display = 'none';
// //     })
// // }

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });
// // const name = document.querySelector('.nama');
// // console.log(name.nextElementSibling.nextElementSibling);

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
  if(e.target.className == 'close'){
    e.target.parentElement.style.display = 'none';
  }
})