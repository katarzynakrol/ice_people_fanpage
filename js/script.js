window.onscroll = function () {
    scrollFunction();
};

function scrollToTop() {
    var topBtn = document.getElementById('topBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = 'block';
        document.body.classList.remove('animationEffect');
    } else {
        topBtn.style.display = 'none';
    }

    topBtn.onclick = function () {
        window.scrollTo(0, 0);
        document.body.className = 'animationEffect';
    };
}
document.addEventListener('scroll', scrollToTop);


function scrollFunction() {
    var body = document.body.scrollTop;
    var documentElement = document.documentElement.scrollTop;
    var about = document.getElementById('aboutSection');
    var gallery = document.getElementById('gallerySection');
    var quotes = document.getElementById('quotesSection');
    var author = document.getElementById('MargitSandemoSection');
    if ((body > 10 || documentElement > 10) && about.getAttribute('class') != 'container animationEffect') {
        about.className += ' animationEffect';
    }
    if ((body > 350 || documentElement > 350) && gallery.getAttribute('class') != 'gallery animationEffect') {
        gallery.className += ' animationEffect';
    }
    if ((body > 750 || documentElement > 750) && quotes.getAttribute('class') != 'quotes animationEffect') {
        quotes.className += ' animationEffect';
    }
    if ((body > 1300 || documentElement > 1300) && author.getAttribute('class') != 'authorSection animationEffect') {
        window.onscroll = null;
        author.className += ' animationEffect';
    }

}


document.addEventListener('DOMContentLoaded', function () {
    galleryLeft();

}, false);

function galleryLeft() {
    var buttonPrev = document.getElementById('prev');
    buttonPrev.onclick = function () {
        document.getElementById('img').scrollLeft -= 170;
    };
}


// document.addEventListener('DOMContentLoaded', function () {
//     var buttonPrev = document.getElementById('prev');
//     buttonPrev.onclick = function () {
//         document.getElementById('img').scrollLeft -= 170;
//     };
// }, false);

document.addEventListener('DOMContentLoaded', function () {
    var buttonNext = document.getElementById('next');
    buttonNext.onclick = function () {
        document.getElementById('img').scrollLeft += 170;
    };
}, false);

document.addEventListener('DOMContentLoaded', function () {
    var icon = document.getElementById('icon');
    var navbar = document.getElementById('topNavbar');
    icon.onclick = function () {
        if (navbar.className === 'navbar') {
            navbar.className += ' responsive';
        } else {
            navbar.className = 'navbar';
        }
    };
});

document.addEventListener('DOMContentLoaded', function () {
    var panel = document.getElementById('sidePanel');
    var bigFooter = document.getElementById('footerWhitLinks');
    var mobileViewport = window.matchMedia("screen and (max-width: 400px)");
    panel.onclick = function () {
        bigFooter.style.display = 'block';
        panel.style.display = 'none';
    };

    function resize() {
        if (mobileViewport.matches) {
            panel.style.display = 'none';
            bigFooter.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    }
    closePanel(bigFooter, panel);
    window.addEventListener('resize', resize);
});


function closePanel(bigFooter, panel) {
    var closeBtn = document.getElementById('close');
    closeBtn.onclick = function () {
        bigFooter.style.display = 'none';
        panel.style.display = 'block';
        panel.className += ' animationEffect';
    };
}