
// navs
const homeNav = document.querySelector('.home')
const loginNav = document.querySelector('.login')
const supportNav = document.querySelector('.support')


// optional login btn
const schoolLogin = document.querySelector('.school-login');
const candidateLogin = document.querySelector('.candidate-login');

const schoolLoginBtnForm = document.querySelector('.school-login-btn')
const candidateLoginBtnForm = document.querySelector('.candidate-login-btn')

// pages
const loginPage = document.querySelector('section.login');
const homePage = document.querySelector('section.landing')
const supportPage = document.querySelector('section.support');


// forms
const schoolForm = document.querySelector('.school-form')
const candidateForm = document.querySelector('.candidate-form')

// indicators
const schoolError = document.querySelector('.school-indi > .error');
const schoolSpinner = document.querySelector('.school-indi > .spinner');

const candidateError = document.querySelector('.candidate-indi > .error');
const candidateSpinner = document.querySelector('.candidate-indi > .spinner');

// form input fields
const pin = document.querySelector('input[name=pin]');
const examNumber = document.querySelector('input[name=exam-number]');
const schoolCode = document.querySelector('input[name=school-code]');
const passCode = document.querySelector('input[name=pass-code]');
const phoneNumber = document.querySelector('input[name=phone-number]');

const fields = {
  pin,
  examNumber,
  schoolCode,
  passCode,
  phoneNumber
}

export {
  homeNav,
  loginNav,
  supportNav,
  schoolLogin,
  candidateLogin,
  loginPage,
  schoolLoginBtnForm,
  candidateLoginBtnForm,
  homePage,
  supportPage,
  schoolForm,
  candidateForm,
  schoolError,
  schoolSpinner,
  candidateError,
  candidateSpinner,
  fields
}