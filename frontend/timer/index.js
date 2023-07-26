const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const timerFuction = () => {
  const timer = new Date("11/15/2023").getTime();
  const today = new Date().getTime();

  const difference = timer - today;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysEl.innerText = `${days} days`;
  hoursEl.innerText = `${hours} hours`;
  minutesEl.innerText = `${minutes} min`;
  secondsEl.innerText = `${seconds} sec`;
};

setInterval(timerFuction, 1000);
