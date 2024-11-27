const nav = document.querySelector('nav');
const navs = document.querySelectorAll('.navs');
const contentCont = document.querySelector('#main-content-container');

const expSection = document.querySelector('#exp-section');
const eduSection = document.querySelector('#edu-section');
const portoSection = document.querySelector('#porto-section');
 

// contentCont.scrollTop <-- get scroll point
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