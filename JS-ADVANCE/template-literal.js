// Template literals / Template strings

// Example 1: Basic usage
const nama = "Andi";
const umur = 25;

// Menggunakan template literals
const perkenalan = `Halo, nama saya ${nama} dan saya berumur ${umur} tahun.`;
console.log(perkenalan);

// Embedded Expression

const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`); // Output: true ? 'genap' : 'ganjil'

// HTML Fragments

const mhs = {
  nama: "Budi",
  umur: 22,
  nrp: "123456789",
  email: "budi@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);