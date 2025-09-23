// Alert, Prompt, Confirm, Condition
alert("Hello World");
var nama = prompt("Masukkan Nama: ");
alert("nama anda: " + nama);
var question = confirm("yakin nama anda " + nama + " ?");
if (!question) {
  alert("kamu bohong");
  nama = prompt("jujur siapa nama kamu?");
}
alert("halo " + nama);

// Looping While
var repeat = true;
var i = 1;
while (repeat) {
  console.log("We are repeating this log");
  repeat = confirm(
    "Do you want to stop? We are already looping " + i + "x Times"
  );

  i++;
}

// Looping For

for (let i = 0; i <= 10; i++) {
  console.log("Hello World " + i + " x");
}
