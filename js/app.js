const secdH = document.querySelector(".sec-hand");
const minsH = document.querySelector(".min-hand");
const hourH = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6 + 90;
  secdH.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = mins * 6 + 90;
  minsH.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = hours * 30 + mins / 2 + 90;
  hourH.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hour);
}
setInterval(setDate, 1000);
