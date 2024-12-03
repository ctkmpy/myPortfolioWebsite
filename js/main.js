const nav = document.querySelector('nav');
const navs = document.querySelectorAll('.navs');
const content = document.querySelector('#content');
const contentCont = document.querySelector('#main-content-container');
const aside = document.querySelector('#aside');

const sectionHeaders = document.querySelectorAll('.section-headers');
const expSection = document.querySelector('#exp-section');
const eduSection = document.querySelector('#edu-section');
const portoSection = document.querySelector('#porto-section');
const allSection = [expSection, eduSection, portoSection];
 
let eduSecBreak = contentCont.scrollHeight - eduSection.scrollHeight - portoSection.scrollHeight - 500;
let portoSecBreak = contentCont.scrollHeight - portoSection.scrollHeight - 300;
let expSecBreak = contentCont.scrollTop;

// Navigation Menu
navs.forEach((e, i) => {
    let whenScrollPoint = ifOrElse => {
        if(ifOrElse) {
            sectionHeaders[i].classList.remove('current-section');
            sectionHeaders[i].children[0].classList.add('text-[rgba(255,255,255,0.6)]');
        } else {
            sectionHeaders[i].classList.add('current-section');
            sectionHeaders[i].children[0].classList.remove('text-[rgba(255,255,255,0.6)]');
        }
    } 
    contentCont.addEventListener('scroll', () => {
        if(contentCont.scrollTop >= eduSecBreak && contentCont.scrollTop < portoSecBreak) {
            e.id != "navEdu" ? e.classList.remove('current-section') : e.classList.add('current-section');
            sectionHeaders[i].id != "edu-header" ? whenScrollPoint(true) : whenScrollPoint(false);
            allSection[i].id != 'edu-section' ? allSection[i].classList.add('opacity-50') : allSection[i].classList.remove('opacity-50');
        } else if (contentCont.scrollTop >= portoSecBreak) {
            e.id != "navPorto" ? e.classList.remove('current-section') : e.classList.add('current-section');
            sectionHeaders[i].id != "porto-header" ? whenScrollPoint(true) : whenScrollPoint(false);
            allSection[i].id != 'porto-section' ? allSection[i].classList.add('opacity-50') : allSection[i].classList.remove('opacity-50');
        } else {
            e.id != "navExp" ? e.classList.remove('current-section') : e.classList.add('current-section');
            sectionHeaders[i].id != "exp-header" ? whenScrollPoint(true) : whenScrollPoint(false);
            allSection[i].id != 'exp-section' ? allSection[i].classList.add('opacity-50') : allSection[i].classList.remove('opacity-50');
        }
    })
})

// Main Content Scroll
let scrollSlider = document.querySelector('#scroll-slider');
let hoverableEdu = document.querySelectorAll('.hoverable-edu');
contentCont.addEventListener('scroll', () => {
    hoverableEdu.forEach(e => {
        let percentScroll = Math.round(contentCont.scrollTop / (contentCont.scrollHeight - contentCont.clientHeight) * 100);
        if(percentScroll < 1) {
            scrollSlider.style.top = `1%`;
            eduDescHide(e);
        } else if (percentScroll > 90) {
            scrollSlider.style.top = "calc(100vh - 16.5em)";
        } else {
            scrollSlider.style.top = `${percentScroll}%`;
        }
    
        if(contentCont.scrollTop > portoSecBreak) {  
        } else if(contentCont.scrollTop > eduSection.scrollHeight) {
            eduDescShow(e);
        }
    })
});

let eduDescShow = e => {
    e.classList.replace('bg-[rgba(255,255,255,0.1)]', 'bg-[rgba(255,255,255,0.2)]');
    e.classList.replace('rounded-3xl', 'rounded-t-3xl');
    if(e.children[0].innerHTML.toLowerCase() == 'teknik informatika') {
        e.parentElement.parentElement.classList.replace('w-96', 'w-full');
    } else if(e.children[0].innerHTML.toLowerCase() == 'teknik komputer dan jaringan') {
        e.parentElement.parentElement.classList.replace('w-[29.5em]', 'w-full');
    }
    e.nextElementSibling.classList.replace('hidden', 'grid');   
}

let eduDescHide = e => {
    e.classList.replace('bg-[rgba(255,255,255,0.2)]', 'bg-[rgba(255,255,255,0.1)]');
    e.classList.replace('rounded-t-3xl', 'rounded-3xl');
    if(e.children[0].innerHTML.toLowerCase() == 'teknik informatika') {
        e.parentElement.parentElement.classList.replace('w-full', 'w-96');
    } else if(e.children[0].innerHTML.toLowerCase() == 'teknik komputer dan jaringan') {
        e.parentElement.parentElement.classList.replace('w-full', 'w-[29.5em]');
    }
    e.nextElementSibling.classList.replace('grid' ,'hidden');
}


// Pagination Porto Screenshoot
const btnSsRight = document.querySelectorAll('.btn-ss-right');
const btnSsLeft = document.querySelectorAll('.btn-ss-left');
const ssContainer = document.querySelectorAll('.screenshoot-container');

btnSsRight.forEach(e => {
    e.addEventListener('click', () => {
        let ssCont = e.parentElement.previousElementSibling;
        let ssWidth = ssCont.children[0];

        ssCont.scrollLeft += ssWidth.scrollWidth / 2;;
    })
});
btnSsLeft.forEach(e => {
    e.addEventListener('click', () => {
        let ssCont = e.parentElement.previousElementSibling;
        let ssWidth = ssCont.children[0];

        ssCont.scrollLeft -= ssWidth.scrollWidth / 2;
    })
});

let lasestScrollPoint = 500;
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY > lasestScrollPoint) {
        window.scrollTo({
            top: aside.scrollHeight,
            left: 0,
            behavior: "smooth",
        })
    }
    lasestScrollPoint = window.scrollY <= 500 ? 500 : window.scrollY;
    console.log(lasestScrollPoint)
})