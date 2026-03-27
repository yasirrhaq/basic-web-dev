// Rest Parameter

function myFunc(...myArgs) {
  // rest parameter harus berada di akhir parameter
  //   return myArgs;
  //   return Array.from(arguments);
  return [...myArgs]; // ini spread operator untuk mengubah array-like menjadi array
}

// console.log(myFunc(1, 2, 3, 4, 5));

function jumlahkan(...angka) {
  // let total = 0;
  // for (const a of angka){
  //     total += a;
  // }
  // return total;

  return angka.reduce((a, b) => a + b);
}

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring dengan rest parameter
const kelompok1 = ["Muhammad", "Yasir", "Anshari", "Haq"];

// const ketua = kelompok1[0];
// const wakil = kelompok1[1];
// const anggota = [kelompok1[2], kelompok1[3]];

const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// object destructuring dengan rest parameter
const team = {
  pm: "Muhammad",
  frontEnd1: "Yasir",
  frontEnd2: "Anshari",
  backEnd: "Haq",
};

const { pm, ...myTeam } = team;
// console.log(pm);
// console.log(myTeam);

// filtering dengan rest parameter
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(
  filterBy("number", 1, 2, "Muhammad", 3, "Yasir", false, 4, true, "Haq"),
);
