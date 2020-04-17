import {
	homeNav,
	loginNav,
	supportNav,
	candidateLogin,
	schoolLogin,
	schoolLoginBtnForm,
	candidateLoginBtnForm
} from './js/selector'

import {
	handleHomeClicked,
  handleLoginClicked,
  handleCandidateLoginClicked,
  handleSupportClicked,
  handleSchoolLoginClicked,
  handleSchoolLoginFormBtn,
  handleCandidateLoginFormBtn
} from './js/manager';

import './scss/app.scss';

const app = async () => {
	homeNav.addEventListener('click', handleHomeClicked);
	loginNav.addEventListener('click', handleLoginClicked);
	supportNav.addEventListener('click', handleSupportClicked);

	candidateLogin.addEventListener('click', handleCandidateLoginClicked);
	schoolLogin.addEventListener('click', handleSchoolLoginClicked);

	schoolLoginBtnForm.addEventListener('click',handleSchoolLoginFormBtn )
	candidateLoginBtnForm.addEventListener('click', handleCandidateLoginFormBtn )
};

// Load app
app();
