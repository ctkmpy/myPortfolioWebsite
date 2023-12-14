const sections = document.querySelectorAll('section');
const secTitle = document.querySelector('.sec-title');
const scrollLine = document.querySelector('nav .scroll-line');
const scrollIcon = document.querySelectorAll('nav .scroll-icon');


function getVerticalScrollPercentage( elm ){
    let p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 92 * 2 - 1;
}

document.body.addEventListener('scroll', () => {
    if (secTitle.scrollTop == sections[0].scrollTop) {
        scrollIcon[0].style.top = '-6px';
        scrollIcon[1].style.top = '7.5%';
        secTitle.innerHTML = 'Bio';
        secTitle.style.right = '1em';
    }
    else if (secTitle.scrollTop == sections[1].scrollTop) {
        scrollIcon[0].style.top = '-6px';
        scrollIcon[1].style.top = '7.5%';
        secTitle.innerHTML = 'Portfolio';
        secTitle.style.right = '1em';
        scrollLine.style.height = '0';
        scrollIcon[0].classList.remove('nav-selected');
        scrollIcon[1].classList.add('nav-selected');
        scrollIcon[2].classList.remove('nav-selected');
    }
    else if (secTitle.scrollTop == sections[2].scrollTop) {
        scrollIcon[0].style.top = '-6px';
        scrollIcon[1].style.top = '7.5%';
        scrollIcon[2].style.top = '16%';
        secTitle.innerHTML = '3D';
        secTitle.style.right = '1em';
        scrollLine.style.height = '0';
        scrollIcon[0].classList.remove('nav-selected');
        scrollIcon[1].classList.remove('nav-selected');
        scrollIcon[2].classList.add('nav-selected');
    }

    else if (secTitle.scrollTop == sections[0].scrollHeight) {
        scrollIcon[0].style.top = '-6px';
        scrollIcon[1].style.top = '7.5%';
        secTitle.innerHTML = 'Bio';
        secTitle.style.right = '1em';
    }
    else if (secTitle.scrollTop == sections[1].scrollHeight) {
        scrollIcon[0].style.top = '-6px';
        scrollIcon[1].style.top = '7.5%';
        secTitle.innerHTML = 'Portfolio';
        secTitle.style.right = '1em';
        scrollLine.style.height = '0';
        scrollIcon[0].classList.remove('nav-selected');
        scrollIcon[1].classList.add('nav-selected');
        scrollIcon[2].classList.remove('nav-selected');
    }
    // else if (secTitle.scrollTop == sections[1].scrollHeight) {
    //     scrollIcon[0].style.top = '-6px';
    //     scrollIcon[1].style.top = '7.5%';
    //     scrollIcon[2].style.top = '16%';
    //     secTitle.innerHTML = '3D';
    //     secTitle.style.right = '1em';
    //     scrollLine.style.height = '0';
    //     scrollIcon[0].classList.remove('nav-selected');
    //     scrollIcon[1].classList.remove('nav-selected');
    //     scrollIcon[2].classList.add('nav-selected');
    // };
})

sections[0].addEventListener('scroll', () => {
    let scrollPercent = getVerticalScrollPercentage(sections[0]);

    if (scrollPercent > 10) {
        secTitle.style.right = '-2em';
        if (scrollPercent < 75) {
            scrollIcon[0].style.top = scrollPercent + '%';
            scrollLine.style.height = scrollPercent + 1 + '%';
        }
    }
    else {
        scrollLine.style.height = '0';
        secTitle.style.right = '1em';
        scrollIcon[0].style.top = '-6px';
    };

})

sections[1].addEventListener('scroll', () => {
    let scrollPercent = getVerticalScrollPercentage(sections[1]) + 11;

    if (scrollPercent > 10) {
        secTitle.style.right = '-2em';
        if (scrollPercent < 84) {
            scrollIcon[0].style.top = scrollPercent - 10 + '%';
            scrollIcon[1].style.top = scrollPercent + '%';
            scrollLine.style.height = scrollPercent + 4 + '%';
        }
    }
    else {
        scrollLine.style.height = '0';
        secTitle.style.right = '1em';
        scrollIcon[1].style.top = '-6px';
    };

})

sections[2].addEventListener('scroll', () => {
    let scrollPercent = getVerticalScrollPercentage(sections[2]) + 22;

    if (scrollPercent > 10) {
        secTitle.style.right = '-2em';
        if (scrollPercent < 91) {
            scrollIcon[0].style.top = scrollPercent - 20 + '%';
            scrollIcon[1].style.top = scrollPercent - 10 + '%';
            scrollIcon[2].style.top = scrollPercent + '%';
            scrollLine.style.height = scrollPercent + 4 + '%';
        }
    }
    else {
        scrollLine.style.height = '0';
        secTitle.style.right = '1em';
        scrollIcon[2].style.top = '-6px';
    };

})
