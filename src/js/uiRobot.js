
export default (action, element, payload=null) => {
  switch(action){
    case 'SHOW-PAGE':
      document.querySelector(`section.active`).classList.remove('active');
      element.classList.add('active');
      return;
    case 'UPDATE-NAV':
      document.querySelector('li.active').classList.remove('active');
      element.classList.add('active');
      return;
    case 'UPDATE-OPTION':
      document.querySelector('button.selected').classList.remove('selected');
      element.classList.add('selected');
      return;
    case 'SHOW-FORM':
      document.querySelector('.show').classList.remove('show')
      element.classList.add('show');
      return;
    default:
      return;
  }
} 