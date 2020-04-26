
import {
	homeNav,
	loginNav,
	supportNav,
	candidateLogin,
	schoolLogin,
	schoolLoginBtnForm,
	candidateLoginBtnForm,
	candidateForm,
	schoolForm
} from './js/selector'

import {
	handleHomeClicked,
  handleLoginClicked,
  handleCandidateLoginClicked,
  handleSupportClicked,
  handleSchoolLoginClicked,
  handleSchoolLoginFormBtn,
	handleCandidateLoginFormBtn,
	handleCandidateFormSubmit,
	handleSchoolFormSubmit
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

	candidateForm.addEventListener('submit', handleCandidateFormSubmit);
	schoolForm.addEventListener('submit', handleSchoolFormSubmit);
};

// Load app
app();
