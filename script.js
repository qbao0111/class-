$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Trần Ngọc An",
            "Nguyễn Trần Nhật Anh",
            "Trần Ngọc Anh",
            "Đậu Minh Gia Bảo",
            "Hoàng Quốc Bảo",
            "Doãn Thanh Bình",
            "Phan Diệu Cẩm",
            "Phan Thị Ánh Diệu",
            "Lê Hải Dương",
            "Hoàng Văn Dương",
            "Nguyễn Ngọc Hà",
            "Lê Thị Thanh Hải",
            "Nguyễn Hồng Hạnh",
            "Nguyễn Thị Kim Hạnh",
            "Nguyễn Minh Hiếu",
            "Dương Thị Ngọc Hoàn",
            "Đoàn Lâm Hoàng",
            "Lê Mai Huế",
            "Hồ Ngọc Huyền",
            "Nguyễn Minh Khôi",
            "Nguyễn Thanh Lam",
            "Phan Thanh Lâm",
            "Lê Thị Hoài Linh",
            "Nguyễn Hoài Nhật Linh",
            "Nguyễn Khánh Linh",
            "Trần Diệp Linh",
            "Võ Bảo Linh",
            "Nguyễn Nhật Long",
            "Lê Hà Ly",
            "Phan Thị Hải Lý",
            "Nguyễn Phương Mai",
            "Dương Hồng Minh",
            "Lê Nguyễn Hoài Nam",
            "Nguyễn Quỳnh Nga",
            "Phạm Lê Phương Nguyên",
            "Lê Dương Tú Oanh",
            "Hồ Thiện Quang",
            "Trần Anh Quân",
            "Phạm Anh Quyền",
            "Dương Trường Sơn",
            "Lê Thị Thùy Trang",
            "Ngô Quốc Trung",
            "Tưởng Mạnh Tuấn",
            "Hồ Thị Thu Uyên"


        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Chủ Nhiệm Chúng Em", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplay: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
var typed = new Typed(".typing-3", {
    strings: ["Ngô Quốc Trung"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-4", {
    strings: ["Hồ Ngọc Huyền"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-5", {
    strings: ["Phạm Lê Phương Nguyên"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});