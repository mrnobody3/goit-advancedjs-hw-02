const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

stopBtn.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', onStartClick);

function onStartClick() {
  const intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');

  stopBtn.addEventListener('click', onStopClick);

  function onStopClick() {
    clearInterval(intervalId);

    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
  }
}
