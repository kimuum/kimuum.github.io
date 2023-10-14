const nowTimeInfo = document.querySelector("h2");

function getClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  nowTimeInfo.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
