window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(news)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(project)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionEndAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndAt <= targetLine

    const sectionBoudaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoudaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }         
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }   
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal('#home, #home img, #home .stats, #news, #news header, #news .card, #about, #about header, #about .content, #project, #work, #work .content, #work img');
