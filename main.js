window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    scrollNav()
    scrollButtonTop()
}

function scrollNav() {
    if(scrollY == 0) {
        navigation.classList.remove('scroll')
    }
    
    else {
        navigation.classList.add('scroll')
    }
}

function scrollButtonTop() {
    if(scrollY >= 300) {
        btnTop.classList.add('to-top')
    }

    else {
        btnTop.classList.remove('to-top')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 900,
}).reveal(`.home-content,
.home-content button,
.home-dados-item,
.servicos h4,
.servicos h2, 
.servicos-card,
.sobre-nos-info,
.sobre-nos-img,
.contato-info,
.contato-img`);