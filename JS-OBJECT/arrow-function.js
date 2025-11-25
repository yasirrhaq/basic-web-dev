// function expression

const showName = function (name) {
  return `Hello, ${name}`;
};

console.log(showName("yasir"));

const showNama = (nama) => {
  return `Hello, ${nama}`;
};

console.log(showNama("utuh bujal"));

const showNamas = (nama, waktu) => {
  return `Hello, ${nama}, It's ${waktu}`;
};

console.log(showNamas("jaki, malam"));

// implisit return
const tampilNama = (nama) => {
  `Hello, ${nama}`;
};

console.log(tampilNama("yasir"));

const noArgs = () => {
  "hello";
};
console.log(noArgs);

let mhs = ["bugon", "yasir", "odah"];

let jumlahHuruf = mhs.map(function (nama) {
  return nama.length;
});
console.log(jumlahHuruf);

let jmlhHuruf = mhs.map((nama) => nama.length);
console.log(jmlhHuruf);

let jmlHuruf = mhs.map((nama) => ({
  nama: nama,
  totalHuruf: nama.length,
}));

console.table(jmlHuruf);
