//recuperar datos
//guardar datos
//imprimir datos

window.onload = () => {
  saveData();
  recoverData();
  clearData();
}

function saveData(params) {
  const btnSave = document.getElementById('save');
  btnSave.addEventListener('click' , () => {
    localStorage.nombre = document.getElementById('first_name').value;
    localStorage.password = document.getElementById('password').value;    
  });
}

function recoverData() {
  const btnRecover = document.getElementById('recover');
  btnRecover.addEventListener('click' , () => {
    document.getElementById('datos').innerHTML= 'El nombre es ' + localStorage.nombre + ' y su password es ' + localStorage.password;

  });
}

function clearData() {
  const btnClear = document.getElementById('clear');
  btnClear.addEventListener('click' , () => {
  document.getElementById('first_name').value= '';
  document.getElementById('password').value= '';
  document.getElementById('datos').innerHTML= '';


});
}