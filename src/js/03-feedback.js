
import throttle from 'lodash.throttle';

const feedbackFormElement = document.querySelector('.feedback-form');
const emailInputElement = document.querySelector("input[name='email']");
const textAreaElement = document.querySelector("textarea[name='message']");
let feedbackDataObj = localStorage.getItem('feedback-form-state');

document.addEventListener('DOMContentLoaded', checkLocalStorage);
feedbackFormElement.addEventListener('input', throttle(onFormInput, 500));
feedbackFormElement.addEventListener('submit', onFeedbackFormSubmit);

function onFormInput(event) {
  feedbackDataObj = {
    email: emailInputElement.value,
    message: textAreaElement.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackDataObj));
}

function checkLocalStorage() {
  if (feedbackDataObj === null) {
    return;
  }

  emailInputElement.value = JSON.parse(feedbackDataObj).email;
  textAreaElement.value = JSON.parse(feedbackDataObj).message;
}

function onFeedbackFormSubmit(event) {
  event.preventDefault();

  feedbackFormElement.reset();

  console.log(
    `email: ${feedbackDataObj?.email} \nmessage: ${feedbackDataObj?.message})`
  );

  localStorage.removeItem('feedback-form-state');
}