let nav=document.querySelector('nav');

window.addEventListener('scroll',()=>{
    nav.classList.toggle('naWinScroll',window,scrollY>0)
})