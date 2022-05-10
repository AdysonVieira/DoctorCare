function onScroll() {
    if(scrollY == 0) {
        navigation.classList.remove('scroll')
    }
    
    else {
        navigation.classList.add('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

function scrollTop() {
    if(scrollY >= 300) {
        btnTop.classList.add('to-top')
    }

    else {
        btnTop.classList.remove('to-top')
    }
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