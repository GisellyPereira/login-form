const element =document.querySelector('.check-input');
const check = document.querySelector('.check');
const icon = document.querySelector('.icon-check')

element.addEventListener('click', ()=>{
  check.classList.toggle('active')
})

element.addEventListener('click', ()=>{
  icon.classList.toggle('active')
})


const inputs= document.querySelector('.inputs');


inputs.addEventListener('click', ()=>{
  inputs.classList.toggle('email-ativo');

})





