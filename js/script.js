// Selector Init 
const contentCont = document.querySelector('body');

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

const portfolioExplorerBtn = document.querySelector('.portfolio-explorer-btn');
const closeWindow = document.querySelector('.close-window');
const sizingWindow = document.querySelector('.sizing-window');
const restoreWindow = document.querySelector('.restore-window');
const portfolioWindow = document.querySelector('#portfolio-window');
const portfolioWindowClass = document.querySelector('.portfolio-window');



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

    // For Responsive 600px
        aboutBtn.addEventListener('click', function() {
            contentCont.scrollLeft({
                left: secAbout.offsetLeft,
                behavior: 'smooth'
            });
        });
        portfolioBtn.addEventListener('click', function() {
            contentCont.scrollLeft({
                left: secPortfolio.offsetLeft,
                behavior: 'smooth'
            });
        });
        galleryBtn.addEventListener('click', function() {
            contentCont.scrollLeft({
                left: secGallery.offsetLeft,
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


// Portfolio Window Feature


    // Portfolio Explorer Button
        portfolioExplorerBtn.addEventListener('click', () => {
            portfolioWindow.style.transform = 'scale(1)';
        });


    // Window Drag 
        dragElement(document.getElementById("portfolio-window"));

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "-header")) {
                /* if present, the header is where you move the DIV from:*/
                document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
            } else {
                /* otherwise, move the DIV from anywhere inside the DIV:*/
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag; 
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }


    // Window Button  
        
        closeWindow.addEventListener('click', () => {
            portfolioWindow.style.transform = 'scale(0)';
            portfolioWindowClass.classList.remove('maximazed');
            portfolioWindowClass.style.top = '30vh';
            portfolioWindowClass.style.left = '30vw';
            if (window.innerWidth < 600) {
                portfolioWindowClass.style.top = '0';
                portfolioWindowClass.style.left = '0';
            }
        });

        sizingWindow.addEventListener('click', () => {
            portfolioWindowClass.classList.toggle('maximazed');
            portfolioWindowClass.style.top = '0';
            portfolioWindowClass.style.left = '0';
        });
