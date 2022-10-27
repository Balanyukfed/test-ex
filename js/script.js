let separation = Array.from(document.querySelectorAll('.table__row>div'));

window.onload = function(){
    separation.forEach(block => {
        block.classList.add('separation');
        console.log('1');
    });
}

let link = document.querySelectorAll('.nav>ul>li>a');

for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click', ()=>{
        link.forEach((el) => {
            if(el.classList.contains('link_active')){
                el.classList.remove('link_active');
            }
        });
        
        link[i].classList.toggle('link_active');
        
    })
}

let openModal = document.getElementById('openModal');
let modal = document.getElementById('myModal');
let modalClose = document.querySelector('.modal__close-button');

openModal.addEventListener('click', ()=>{
    modal.classList.add("modal-active");
})
modalClose.addEventListener('click', ()=>{
    modal.classList.remove('modal-active');
})