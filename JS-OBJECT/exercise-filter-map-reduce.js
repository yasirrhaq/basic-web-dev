// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);

// filter javascript lanjutan
let jsVideos = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // ambil durasi masing2 video
  .map((video) => video.dataset.duration)
  .map((waktu) => {
    // pisah menit dan detik
    const parts = waktu.split(":").map((part) => parseFloat(part));
    // convert durasi ke float, ubah menit jadi detik
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua durasi
  .reduce((total, detik) => total + detik, 0);

// ubah format jadi jam menit detik

const jam = Math.floor(jsVideos / 3600);
jsVideos = jsVideos - jam * 3600;

const menit = Math.floor(jsVideos / 60);
const detik = jsVideos - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jumlahVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJumlahVideo  = document.querySelector('.jumlah-video');
pJumlahVideo.textContent = `${jumlahVideo} video`;