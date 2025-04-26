window.addEventListener('scroll', function (){
    const parallax  = this.document.querySelector('img');
    let scrollPosition  = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .25 + 'px)'; 
})

