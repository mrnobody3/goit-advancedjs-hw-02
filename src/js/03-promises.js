import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmitFn);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        fulfill({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
function onSubmitFn(e) {
  e.preventDefault();
  const formData = new FormData(formRef);
  let delay = Number(formData.get('delay'));
  const step = Number(formData.get('step'));
  const amount = formData.get('amount');
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        iziToast.show({
          title: 'Warning',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          color: 'green',
        });
      })
      .catch(({ position, delay }) => {
        iziToast.show({
          title: 'Error',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
          color: 'red',
          position: 'topRight',
        });
      });
    delay += step;
  }
  formRef.reset();
}
