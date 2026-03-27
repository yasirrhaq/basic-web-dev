// Destructuring

function penjumlahanPerkalian(a, b) {
  return [a + b, a * b];
}

// const jumlah = penjumlahanPerkalian(2, 3)[0]; // [5, 6]
// const perkalian = penjumlahanPerkalian(2, 3)[1]; // [5, 6]
// console.log(jumlah); // 5
// console.log(perkalian); // 6

// Destructuring Array
const [jumlah, perkalian] = penjumlahanPerkalian(2,3);
console.log(jumlah); // 5
console.log(perkalian); // 6

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi = "Tidak ada"] = kalkulasi(2, 3);
// console.log(kali); // 6
// console.log(bagi); // 0.6666666666666666
// console.log(tambah); // 5
// console.log(kurang); // -1

// kalo object bisa pake nama properti untuk menampung nilai yang dikembalikan oleh fungsi
function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
console.log(kurang); // -1
console.log(tambah); // 5
console.log(kali); // 6
console.log(bagi); // 0.6666666666666666

// destructuring function arguments
const mhs1 = {
  nama: "Bugon",
  umur: 12,
  email: "bugon@example.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 90,
  },
};

function cetakMhs({ nama, umur, email, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, umur saya ${umur} tahun dan email saya adalah ${email}
  dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1)); // Halo, nama saya Bugon, umur saya 12 tahun dan email saya adalah
