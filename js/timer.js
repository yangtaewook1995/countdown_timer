const clock_days = document.querySelector(".Date-days");
const clock_hours = document.querySelector(".Date-hours");
const clock_minutes = document.querySelector(".Date-minutes");
const clock_seconds = document.querySelector(".Date-seconds");

function getClock() {
  const target = new Date(2022, 0, 1, 0, 0, 0);
  const today = Date.now();
  const duration = Math.floor((target - today) / 1000);
  const days = Math.floor(duration / 3600 / 24);
  const hours = Math.floor((duration - days * 3600 * 24) / 3600);
  const minutes = Math.floor((duration - days * 3600 * 24 - hours * 3600) / 60);
  const seconds = Math.floor(
    duration - days * 3600 * 24 - hours * 3600 - minutes * 60
  );

  clock_days.innerHTML = days;
  clock_hours.innerHTML = hours;
  clock_minutes.innerHTML = minutes;
  clock_seconds.innerHTML = seconds;
}

setInterval(getClock, 1000);
