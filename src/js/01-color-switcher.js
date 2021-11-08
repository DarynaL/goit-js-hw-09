const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId;
const DELAY = 1000;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, DELAY);
    refs.startBtn.disabled = true;
     refs.stopBtn.disabled = false;
}
function onStopBtnClick() {
    clearInterval(timerId);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}