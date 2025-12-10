// Tagged templates

// const nama = "Odah";
// const umur = 27;

// function coba(strings, ...values) {
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""}`;
//   //   });
//   //   return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
// console.log(str);

// Highlight

const nama = "Odah";
const umur = 27;
const email = "odah@gmail.com";
function coba(strings, ...values) {
  //   let result = "";
  //   strings.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`;
  //   });
  //   return result;

  return strings.reduce(
    (result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = coba`Halo, nama saya ${nama}, umur saya ${umur} tahun dan email saya adalah ${email}.`;
console.log(str);

document.body.innerHTML = str;