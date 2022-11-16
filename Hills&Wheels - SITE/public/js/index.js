// Turn class header
window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav')
    nav.classList.toggle('sticky', window.scrollY > 50)
})

// Loader display on page initialization 
function loader() {
    $(window).on('load', () => {
            $('.loader').fadeOut(1000);
            $('main').fadeIn(1000)
    })
}
loader()





