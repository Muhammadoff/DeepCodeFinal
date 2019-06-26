    // first Js
    $(document).ready(function() {

        $('.carousel').carousel({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 500
        });
    }); // second Js

    // Vertical sliider
    var titleMain = $("#animatedHeading");
    var titleSubs = titleMain.find("slick-active");

    if (titleMain.length) {

        titleMain.slick({
            autoplay: true,
            arrows: false,
            dots: false,
            centerMode: true,
            slidesToShow: 3,
            centerPadding: "5px",
            draggable: false,
            infinite: true,
            pauseOnHover: false,
            swipe: false,
            touchMove: false,
            vertical: true,
            speed: 1000,
            autoplaySpeed: 2000,
            useTransform: true,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            adaptiveHeight: true,
            arrowsNav: true,
            arrowsNavAutoHide: false


        });

        // On init
        $(".slick-dupe").each(function(index, el) {
            $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
        });

        // Manually refresh positioning of slick
        titleMain.slick('slickPlay');
    };

    // said bar


    function contactRight() {
        anime({
            targets: ['#zero'],
            translateX: 240
        });
    }

    function contactLeft() {
        anime({
            targets: ['#zero'],
            translateX: -240
        });
    }

    function masterView() {
        contactRight();
        contactLeft();
    }
    $(".fa-align-justify").on("click", contactRight);


    $(".fa-align-justify").on("click", function() {
        $("#zero").toggleClass('.hero');

        $(".fa-align-justify").on("click", contactLeft);
    });

    $(".fa-align-justify").on("click", function() {
        $("#zero").addClass("hero");
    });
    // FINAL PAGE
    function contactToRight() {
        anime({
            targets: ['.head-w3'],
            translateX: 100 + '%'

        });
    }

    function contactToLeft() {
        anime({

            targets: ['.head-w3'],
            translateX: 0 + '%'

        });
    }

    function aboutToRight() {
        anime({

            targets: ['.head-w2'],
            translateX: 93 + '%'

        });
    }

    function aboutToLeft() {
        anime({

            targets: ['.head-w2'],
            translateX: 0 + '%'

        });
    }

    function viewTeam() {
        aboutToRight();
        contactToRight();

    }

    function viewAbout() {
        aboutToLeft();
        contactToRight();
    }

    function viewContact() {
        aboutToLeft();
        contactToLeft();
    }

    $(".head-w1").click(viewTeam);
    $(".head-w2").click(viewAbout);
    $(".head-w3").click(viewContact);