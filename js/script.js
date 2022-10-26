
let openModal = document.getElementById('openModal');
let modal = document.getElementById('myModal');
let modalClose = document.querySelector('.modal__close-button');

openModal.addEventListener('click', ()=>{
    modal.classList.add("modal-active");
    console.log('1');
})
modalClose.addEventListener('click', ()=>{
    modal.classList.remove('modal-active');
})