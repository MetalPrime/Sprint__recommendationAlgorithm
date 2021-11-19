const sprint__1btn = document.querySelector('.sprint__1btn');
const sprint__2btn = document.querySelector('.sprint__2btn');
const sprint__3btn = document.querySelector('.sprint__3btn');
const sprint__4btn = document.querySelector('.sprint__4btn');

const sprint__1 = document.querySelector('.sprint__1');
const sprint__2 = document.querySelector('.sprint__2');
const sprint__3 = document.querySelector('.sprint__3');
const sprint__4 = document.querySelector('.sprint__4');

sprint__1btn.addEventListener('click', ()=>{
    sprint__1.classList.remove('noDisplay');
    sprint__2.classList.add('noDisplay');
    sprint__3.classList.add('noDisplay');
    sprint__4.classList.add('noDisplay');
});

sprint__2btn.addEventListener('click', ()=>{
    sprint__1.classList.add('noDisplay');
    sprint__2.classList.remove('noDisplay');
    sprint__3.classList.add('noDisplay');
    sprint__4.classList.add('noDisplay');
});

sprint__3btn.addEventListener('click', ()=>{
    sprint__1.classList.add('noDisplay');
    sprint__2.classList.add('noDisplay');
    sprint__3.classList.remove('noDisplay');
    sprint__4.classList.add('noDisplay');
});

sprint__4btn.addEventListener('click', ()=>{
    sprint__1.classList.add('noDisplay');
    sprint__2.classList.add('noDisplay');
    sprint__3.classList.add('noDisplay');
    sprint__4.classList.remove('noDisplay');
});


