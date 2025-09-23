var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var nomorAngkot = 1;

while (nomorAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + nomorAngkot + " beroperasi dengan baik.");

  nomorAngkot++;
}

for (
  nomorAngkot = angkotBeroperasi + 1;
  nomorAngkot <= jumlahAngkot;
  nomorAngkot++
) {
  if (nomorAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + nomorAngkot + " beroperasi dengan baik.");
  } else {
    console.log("Angkot No. " + nomorAngkot + " sedang tidak beroperasi.");
  }
}
