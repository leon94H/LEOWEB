let mainNav = document.querySelector('#main-nav');
let logoWhite = document.querySelector('.white-logo');
let logoBlack = document.querySelector('.black-logo');

window.addEventListener('scroll', ()=>{
    
    
    if(window.scrollY>0){
        
        mainNav.style.background='transparent';
        logoWhite.classList.remove('d-none');
        logoBlack.classList.add('d-none');
        
        
    }
    else
    {
        mainNav.style.background='#291B25';
        logoBlack.classList.remove('d-none');
        logoWhite.classList.add('d-none');
    }
})

