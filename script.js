let days = document.querySelector(".day__number");
let hours = document.querySelector(".hours__number");
let minutes = document.querySelector(".minutes__number");
let seconds = document.querySelector(".seconds__number");

let year = new Date().getFullYear();
console.log(year);
let nextYear = new Date(`January 01 ${year + 1} 00:00:00`);

function setCountDownTime() {
  let currentYear = new Date();
  let different = nextYear - currentYear;

  let d = Math.floor(different / 1000 / 60 / 60 / 24);
  let h = Math.floor(different / 1000 / 60 / 60) % 24;
  let m = Math.floor(different / 1000 / 60) % 60;
  let s = Math.floor(different / 1000) % 60;
  console.log(s);

  days.innerHTML = d;

  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(setCountDownTime, 1000);
