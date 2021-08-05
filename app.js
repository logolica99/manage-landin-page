const hamburgerBtn = document.querySelector('#hamburgerBtn');
const hamburgerLinks = document.querySelector('#hamburgerLinks');
const moblinks = document.querySelector('#navMob');
const body = document.querySelector('#body')

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle('active')
    hamburgerLinks.classList.toggle('linkactive')
    moblinks.classList.toggle('mobactive')
    body.classList.toggle('hamburgerActive');
})


$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 3,
        infinite: true,
        centerMode: true,

        responsive: [
            {
                breakpoint: 600,
                settings: {
                   
                    slidesToShow: 1,
                    dots: true,
                    

                }
            }
        ]
    });
});

  // Slick version 1.5.8