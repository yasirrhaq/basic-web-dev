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

// Looping

const mhsList = [
  {
    nama: "Andi",
    email: "andi@gmail.com",
  },
  {
    nama: "Budi",
    email: "budi@gmail.com",
  },
  {
    nama: "Cici",
    email: "cici@gmail.com",
  },
];

const el2 = `<div class="mhs">
${mhsList
  .map(
    (m) => `<ul>
    <li>nama: ${m.nama}</li>
    <li>email: ${m.email}</li>
    </ul>`
  )
  .join("")}
</div>`;

document.body.innerHTML = el2;

// Conditional
// ternary

const lagu = {
  judul: "Lathi",
  penyanyi: "Sara Fajira",
  feat: "Weird Genius",
};

const el3 = `<div class="lagu">
    <ul>
        <li>Judul: ${lagu.judul}</li>
        <li>Penyanyi: ${lagu.penyanyi} ${
  lagu.feat ? `(feat. ${lagu.feat})` : ""
}</li>
    </ul>
</div>`;

document.body.innerHTML = el3;

// Nested
// HTML Fragments bersarang

const books = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    topics: ["Programming", "Software Engineering"],
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    topics: ["JavaScript", "Programming"],
  },
];

function printTopics(topics) {
  return `<ol>
    ${topics.map((t) => `<li>${t}</li>`)}
    </ol>`;
}

// <h2>${books.title}</h2>
// <span class="author">${books.author}</span>
// <h4>Topics: </h4>
// ${printTopics(books.topics)}
// </div>`;
const el4 = `<div class="books">
${books.map(
  (book) => `<h2>${book.title}</h2>
    <span class="author">${book.author}</span>
    <h4>Topics:</h4>
    ${printTopics(book.topics)}`
).join("")}
</div>`;

document.body.innerHTML = el4;
