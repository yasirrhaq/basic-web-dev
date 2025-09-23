alert('Hello World');
var nama = prompt('Masukkan Nama: ');
alert('nama anda: ' + nama);
var confirm = confirm('yakin nama anda ' + nama + ' ?');
if (!confirm) {
  alert('kamu bohong');
  nama = prompt('jujur siapa nama kamu?');
}
alert('halo ' + nama);
