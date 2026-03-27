// Spread operator is used to expand an iterable (like an array or string) into individual elements. It is denoted by three dots (...).

const mhs = ["Anshari", "Haq", "Rizky"];
// console.log(...mhs); // Output: Anshari Haq Rizky
// console.log(...'Anshari'); // Output: A n s h a r i
// console.log(...mhs[0]); // Output: A n s h a r i

// Spread operator can also be used to combine arrays or objects.

const dosen = ["Pak Budi", "Bu Sari"];
// const orang = [...mhs, ...dosen]; // Output: ['Anshari', 'Haq', 'Rizky', 'Pak Budi', 'Bu Sari']
// const orang = [mhs, dosen]; // Output: [Array(3), Array(2)]
// const orang = mhs.concat(dosen); // Output: ['Anshari', 'Haq', 'Rizky', 'Pak Budi', 'Bu Sari']
const orang = [...mhs, "Udin", ...dosen]; // Output: ['Anshari', 'Haq', 'Rizky', 'Udin', 'Pak Budi', 'Bu Sari']
// console.log(orang);

// Spread operator can also be used to copy arrays or objects.

const mhs1 = ["Odah", "Haq", "Muhammad"];
// const mhs2 = mhs1;
// mhs2[0]= 'Anshari'; // tidak bisa karena mhs2 hanya mereferensikan mhs1, sehingga perubahan pada mhs2 juga akan mempengaruhi mhs1

// const mhs2 = [...mhs1];
// console.log("Mhs1:", mhs1);
// mhs2[0]= 'Anshari';
// console.log("Mhs2:", mhs2);

const liNama = document.querySelectorAll(".nama");
// const mhs3 = [];
// for(let i = 0; i < liNama.length; i++){
//     mhs3.push(liNama[i].textContent);
// }
// console.log(mhs3);

// const mhs3 = [...liNama].map(li => li.textContent);
// console.log(mhs3);

const nama = document.querySelector(".namas");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);
nama.innerHTML = huruf;