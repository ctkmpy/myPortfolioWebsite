// Selector Init 
const contentCont = document.querySelector('.content-container');

const aboutBtn = document.querySelector('.side-nav .about');
const portfolioBtn = document.querySelector('.side-nav .portfolio');
const galleryBtn = document.querySelector('.side-nav .gallery');
const selector = document.querySelector('.side-nav .selector');

const secAbout = document.querySelector('.sec-about');
const secPortfolio = document.querySelector('.sec-portfolio');
const secGallery = document.querySelector('.sec-gallery');

const contactBtn = document.querySelector('.contact-btn');
const contactOverlay = document.querySelector('.contact-overlay');
const contactCloseBtn = document.querySelector('.contact-overlay-close-btn')

// (Side Nav Click) to Selector Transition
    
    aboutBtn.addEventListener('click', function() {
        aboutBtn.classList.add('selected');
        portfolioBtn.classList.remove('selected');
        galleryBtn.classList.remove('selected');
        selector.classList.add('about-selected');
        selector.classList.remove('portfolio-selected');
        selector.classList.remove('gallery-selected');
    });
    portfolioBtn.addEventListener('click', function() {
        aboutBtn.classList.remove('selected');
        portfolioBtn.classList.add('selected');
        galleryBtn.classList.remove('selected');
        selector.classList.remove('about-selected');
        selector.classList.add('portfolio-selected');
        selector.classList.remove('gallery-selected');
    });
    galleryBtn.addEventListener('click', function() {
        aboutBtn.classList.remove('selected');
        portfolioBtn.classList.remove('selected');
        galleryBtn.classList.add('selected');
        selector.classList.remove('about-selected');
        selector.classList.remove('portfolio-selected');
        selector.classList.add('gallery-selected');
    });


// (Side Nav Click) to Smooth Scroll Content

    aboutBtn.addEventListener('click', function() {
        contentCont.scrollTo({
            top: secAbout.offsetTop,
            behavior: 'smooth'
        });
    });
    portfolioBtn.addEventListener('click', function() {
        contentCont.scrollTo({
            top: secPortfolio.offsetTop,
            behavior: 'smooth'
        });
    });
    galleryBtn.addEventListener('click', function() {
        contentCont.scrollTo({
            top: secGallery.offsetTop,
            behavior: 'smooth'
        });
    });

// (Content Scroll) to Selector Transtition

    contentCont.addEventListener('scroll', function() {
        if (contentCont.scrollTop == secAbout.offsetTop){
            aboutBtn.classList.add('selected');
            portfolioBtn.classList.remove('selected');
            galleryBtn.classList.remove('selected');
            selector.classList.add('about-selected');
            selector.classList.remove('portfolio-selected');
            selector.classList.remove('gallery-selected'); 
        }
        else if (contentCont.scrollTop < secGallery.offsetTop) {
            aboutBtn.classList.remove('selected');
            portfolioBtn.classList.add('selected');
            galleryBtn.classList.remove('selected');
            selector.classList.remove('about-selected');
            selector.classList.add('portfolio-selected');
            selector.classList.remove('gallery-selected');
        }
        else if (contentCont.scrollTop >= secPortfolio.offsetTop) {
            aboutBtn.classList.remove('selected'); 
            portfolioBtn.classList.remove('selected');
            galleryBtn.classList.add('selected');
            selector.classList.remove('about-selected');
            selector.classList.remove('portfolio-selected');
            selector.classList.add('gallery-selected');
        }
    });


    // Contact Overlay

    contactBtn.addEventListener('click', function() {
        contactOverlay.classList.add('open-contact-overlay');
    });

    contactCloseBtn.addEventListener('click', function() {
        contactOverlay.classList.remove('open-contact-overlay');
    });