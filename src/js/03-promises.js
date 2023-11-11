import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmitFn);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        fulfill(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(result => {
      iziToast.show({
        title: 'Warning',
        message: result,
        color: 'green',
      });
    })
    .catch(result => {
      iziToast.show({
        title: 'Error',
        message: result,
        color: 'red',
        position: 'topRight',
      });
    });
}
function onSubmitFn(e) {
  e.preventDefault();
  const formData = new FormData(formRef);
  let delay = Number(formData.get('delay'));
  const step = Number(formData.get('step'));
  const amount = formData.get('amount');
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step;
  }
}
