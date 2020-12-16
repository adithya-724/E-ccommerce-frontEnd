//smooth-transition-anchor

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//hamMenu 

$('.ham').click(function(){
    $('.ham').toggleClass('rotate')
    $('#items').toggleClass('display')
})

