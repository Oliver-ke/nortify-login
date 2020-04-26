
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
  candidateForm,
  schoolSpinner,
  candidateSpinner, 
  fields,
  schoolError,
  candidateError
} from './selector';
import request from './request';

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

// form handlers
const handleSchoolFormSubmit = async (e) => {
  e.preventDefault();
  uiRobot('DE_ACTIVATE', schoolSpinner);
  uiRobot('DE_ACTIVATE', schoolError);
  const SchoolCode = fields.schoolCode.value;
  const AdminPhoneNumber = fields.phoneNumber.value;
  const PassCode = fields.passCode.value;
  if(!SchoolCode || !AdminPhoneNumber || !PassCode){
    uiRobot('ACTIVATE', schoolError, 'Provide all fields');
    return;
  }
  uiRobot('ACTIVATE', schoolSpinner);
  const payload = {
    SchoolCode,
    AdminPhoneNumber,
    PassCode,
    ChannelCode: "01",
    RequestType: "SchoolAdmin"
  }
  const {error, data } = await request(payload);
  if(!error){
    const {redirectURL, responseCode} = data;
    console.log(data);
    if(responseCode !== '00'){
      return uiRobot('ACTIVATE', schoolError, 'Error login, ensure login detail is valid');
    }
    return window.location.replace(redirectURL);
  }
  uiRobot('ACTIVATE', schoolError, 'Error login, ensure login detail is valid');
  uiRobot('DE_ACTIVATE', schoolSpinner);
}

const handleCandidateFormSubmit = async (e) => {
  e.preventDefault();
  uiRobot('DE_ACTIVATE', candidateSpinner);
  uiRobot('DE_ACTIVATE', candidateError);
  const PassCode = fields.passCode.value;
  const AccessCode = fields.examNumber.value;
  if(!PassCode || !AccessCode){
    uiRobot('ACTIVATE', candidateError, 'Please Provide all fields');
    return;
  }
  uiRobot('ACTIVATE', candidateSpinner);
  const payload = {
    PassCode,
    AccessCode,
    ChannelCode: "01",
    RequestType: "Candidate"
  }
  const {error, data } = await request(payload);
  if(!error){
    const {redirectURL, responseCode} = data;
    console.log(data);
    if(responseCode !== '00'){
      return uiRobot('ACTIVATE', candidateError, 'Error login, ensure login detail is valid');
    }
    return window.location.replace(redirectURL);
  }
  uiRobot('ACTIVATE', candidateError, 'Error login, ensure login detail is valid');
  uiRobot('DE_ACTIVATE', candidateSpinner);
}

export {
  handleHomeClicked,
  handleLoginClicked,
  handleCandidateLoginClicked,
  handleSupportClicked,
  handleSchoolLoginClicked,
  handleSchoolLoginFormBtn,
  handleCandidateLoginFormBtn,
  handleSchoolFormSubmit,
  handleCandidateFormSubmit
}