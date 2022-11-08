// Turn class header
window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav')
    nav.classList.toggle('sticky', window.scrollY > 100)
})

// Loader display on page initialization 
function loader() {
    $(window).on('load', () => {
        setTimeout(() => {
            $('.loader').fadeOut(1000);
            $('main').fadeIn(1000)
        }, 1000)
    })
}
loader()

function openVideo() {

    var video = document.querySelector('.modal-video')

    if (currentItem == 0){
        video.style.opacity = 100
        video.style.width = '100%'
        fabio_video.style.width = '800px'
        fabio_video.style.height = '450px'
    }
    

    
}

function closeVideo() {
    var video = document.querySelector('.modal-video')
    video.style.opacity = 0
    video.style.width = 0
    fabio_video.style.width = 0
    fabio_video.style.height = 0
}



