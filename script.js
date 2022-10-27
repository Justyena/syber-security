$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        responsive : {
            0: {
                items: 1,
                margin: 33,
                loop: true
            },
            1001: {
                items: 3,
                margin: 30,
                loop: true,
            }
        }
    });
});