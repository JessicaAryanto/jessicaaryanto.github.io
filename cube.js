var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
    checkedRadio = radioGroup.querySelector(':checked');
    showClass = 'show-' + checkedRadio.value;

  cube.classList.remove( currentClass );
  cube.classList.add( showClass );
  currentClass = showClass;
  
}
// set initial side
changeSide();

if (radioGroup) {
  radioGroup.addEventListener( 'change', changeSide );
}
