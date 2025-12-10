const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3

// for

const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}

console.log(newAngka);

// filter

const newAngkaFilter = angka.filter((a) => a >= 3);

console.log(newAngkaFilter);

// map
// mengalikan semua angka dengan 2

const newAngkapMap = angka.map((a) => a * 2);

console.log(newAngkapMap);

// reduce
// menjumlahkan seluruh elemen pada array

const newAngkaReduce = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(newAngkaReduce);

// method chaining
// cari angka > 5, kalikan 3, jumlahkan

const hasil = angka
  .filter((a) => a > 5) // 8,9,9
  .map((a) => a * 3) // 24,27,27
  .reduce((acc, cur) => acc + cur); // 78

console.log(hasil);
