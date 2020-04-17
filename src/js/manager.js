
import uiRobot from './uiRobot';
import {
  homePage, 
  loginPage, 
  supportPage, 
  homeNav, 
  loginNav, 
  supportNav, 
  candidateLoginBtnForm, 
  schoolLoginBtnForm,
  schoolForm,
  candidateForm
} from './selector';

const userSelect = {
  loginType: '',
}

const handleSchoolLoginFormBtn = () => {
  userSelect.loginType = 'school'
  uiRobot('UPDATE-OPTION', schoolLoginBtnForm );
  uiRobot('SHOW-FORM', schoolForm );
}

const handleCandidateLoginFormBtn = () => {
  userSelect.loginType = 'candidate'
  uiRobot('UPDATE-OPTION', candidateLoginBtnForm )
  uiRobot('SHOW-FORM', candidateForm);
}

const handleHomeClicked = (e) => {
  uiRobot('SHOW-PAGE', homePage);
  uiRobot('UPDATE-NAV', homeNav);
}

const handleLoginClicked = (e) => {
  uiRobot('SHOW-PAGE', loginPage);
  uiRobot('UPDATE-NAV', loginNav);
}

const handleCandidateLoginClicked = (e) => {
  handleCandidateLoginFormBtn()
  handleLoginClicked()
}

const handleSchoolLoginClicked = (e) => {
  handleSchoolLoginFormBtn()
  handleLoginClicked()
}

const handleSupportClicked = (e) => {
  uiRobot('SHOW-PAGE', supportPage);
  uiRobot('UPDATE-NAV', supportNav);
}


export {
  handleHomeClicked,
  handleLoginClicked,
  handleCandidateLoginClicked,
  handleSupportClicked,
  handleSchoolLoginClicked,
  handleSchoolLoginFormBtn,
  handleCandidateLoginFormBtn
}