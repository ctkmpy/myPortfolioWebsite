const nav = document.querySelector('nav');
const navs = document.querySelectorAll('.navs');
const contentCont = document.querySelector('#main-content-container');

const expSection = document.querySelector('#exp-section');
const eduSection = document.querySelector('#edu-section');
const portoSection = document.querySelector('#porto-section');
 
let eduSecBreak = contentCont.scrollHeight - eduSection.scrollHeight - portoSection.scrollHeight - 300;
let portoSecBreak = contentCont.scrollHeight - portoSection.scrollHeight - 300;
let expSecBreak = contentCont.scrollTop;

navs.forEach(e => {
    contentCont.addEventListener('scroll', () => {
        if(contentCont.scrollTop >= eduSecBreak && contentCont.scrollTop < portoSecBreak) {
            e.id != "navEdu" ? e.classList.remove('current-section') : e.classList.add('current-section');
        } else if (contentCont.scrollTop >= portoSecBreak) {
            e.id != "navPorto" ? e.classList.remove('current-section') : e.classList.add('current-section');
        } else {
            e.id != "navExp" ? e.classList.remove('current-section') : e.classList.add('current-section');
        }
    })
})

let scrollSlider = document.querySelector('#scroll-slider');
let hoverableEdu = document.querySelectorAll('.hoverable-edu');
contentCont.addEventListener('scroll', () => {
    hoverableEdu.forEach(e => {
        let percentScroll = Math.round(contentCont.scrollTop / (contentCont.scrollHeight - contentCont.clientHeight) * 100);
        if(percentScroll < 1) {
            scrollSlider.style.top = `2%`;
            eduDescHide(e);
        } else if (percentScroll > 90) {
            scrollSlider.style.top = "calc(100vh - 27.3em)";
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

