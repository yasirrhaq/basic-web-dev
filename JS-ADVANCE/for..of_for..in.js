// for..of
// array
const mhs = ["Yasir", "Bugon", "Odah"];

// for (let i = 0; i<mhs.length;i++){
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for..of
// for(const m of mhs){
//     console.log(m);
// }

// string
const nama = "Muhammad Yasir Anshari Haq";
// for(const n of nama){
//     console.log(n);
// }

// nama.forEach(n => console.log(n)); // error, karena string bukan array

// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// Nodelist
const liNama = document.querySelectorAll(".nama");

// liNama.forEach(n=>console.log(n.textContent));

// for (n of liNama){
//     console.log(n.textContent);
// }

// arguments
function jumlahkanAngka() {
  // return arguments.reduce((a, i)=> a+i); // error, karena arguments bukan array

  // arguments.forEach(a=> jumlah += a); // error, karena arguments bukan array

  let jumlah = 0;
  for (const a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in 
// for..in digunakan untuk iterasi pada object, bukan array (karena array sudah memiliki method forEach dan for..of) alias ini enumerable properties bukan iterable
const mhs1 = {
    nama:'Yasir',
    umur: 24,
    email: 'yasir@example.com'
}

for (const m in mhs1){
    console.log(m);// output: nama, umur, email // karena m adalah key dari object mhs1
    console.log(mhs1[m]);// output: Yasir, 24,
}