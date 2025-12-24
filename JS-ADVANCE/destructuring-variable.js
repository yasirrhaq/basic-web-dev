// Destructuring Variable

// Destructuring array
const perkenalan = ['Halo', 'nama', 'saya', 'John Doe'];

// const [salam, satu, dua, nama] = perkenalan;

console.log(salam);
console.log(nama);

// Skip item
// const [salam, ,, nama] = perkenalan;

// swap items
// let a = 1;
// let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);


// return value pada function
// function coba(){
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// rest parameter
const [a, ...values] = [1, 2, 3, 4, 5];
console.log(a);
console.log(values);

// Destructuring object
const mhs = {
    nama: 'John Doe',
    umur: 22,
    email: 'john.doe@example.com'
}

// const {nama, umur, email} = mhs;

// console.log(nama);
// console.log(umur);
// console.log(email);

// assignment tanpa deklarasi object
({nama, umur, email} = {
    nama: 'Jane Doe',
    umur: 21,
    email: 'jane.doe@example.com'
});
console.log(nama);

// assignment ke variabel baru
// const {nama: n, umur: u, email: e} = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

// memberikan default value
const mhs2 = {
    nama: 'Alice',
    umur: 23
}

const {nama: n, umur: u, email: e = 'email@example.com'} = mhs2;
console.log(n);
console.log(u);
console.log(e);

// rest parameter pada object

const mhs3 = {
    nama: 'Bob',
    umur: 24,
    email: 'bob@example.com',
    jurusan: 'Informatika'
}

const {nama, ...value} = mhs3;
console.log(nama);
console.log(value);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function

const mhs4 = {
    id: 123,
    nama: 'Charlie',
    umur: 25,
    email: 'charlie@example.com'
}

function getIdMhs({id}) {
    return id;
}

console.log(getIdMhs(mhs4));