import iziToast from 'izitoast';
import flatpickr from 'flatpickr';
import 'izitoast/dist/css/iziToast.min.css';
import 'flatpickr/dist/flatpickr.min.css';
const ref = {
  btn: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
  datePickerEl: document.querySelector('#datetime-picker'),
};

let newDate = null;
let intervalId = null;
onSetAttributeDisabled(ref.btn);

ref.btn.addEventListener('click', onTimerStart);

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    newDate = selectedDates[0].getTime();

    if (newDate < Date.now()) {
      onSetAttributeDisabled(ref.btn);

      iziToast.show({
        title: 'Warning',
        message: 'Please choose a date in the future',
        color: 'yellow',
      });
    } else {
      onRemoveAttributeDisabled(ref.btn);
    }
  },
});

function onTimerStart() {
  onSetAttributeDisabled(ref.btn);
  onSetAttributeDisabled(ref.datePickerEl);
  intervalId = setInterval(() => {
    let leftTime = convertMs(newDate - Date.now());

    if (newDate < Date.now()) {
      clearInterval(intervalId);
      onRemoveAttributeDisabled(ref.datePickerEl);
      return init();
    }
    init(leftTime);

    console.log(newDate, Date.now());
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, 0);
}
function init(obj = { days: 0, hours: 0, minutes: 0, seconds: 0 }) {
  ref.daysEl.textContent = pad(obj.days);
  ref.hoursEl.textContent = pad(obj.hours);
  ref.minutesEl.textContent = pad(obj.minutes);
  ref.secondsEl.textContent = pad(obj.seconds);
}
function onSetAttributeDisabled(item) {
  item.setAttribute('disabled', 'disabled');
}
function onRemoveAttributeDisabled(item) {
  item.removeAttribute('disabled');
}
