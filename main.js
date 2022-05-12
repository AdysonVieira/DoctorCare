// Adicionando o evento de scroll diretamente na janela e executando logo no carregamento
window.addEventListener('scroll', onScroll)

onScroll()

// Função que executa as funções de scroll
function onScroll() {
    scrollNav()
    scrollButtonTop()
}

// Função para adicionar e remover a classe 'scroll' no menu, fazendo o menu trocar o backgroud quando rolar o scroll
function scrollNav() {
    if(scrollY == 0) {
        navigation.classList.remove('scroll')
    }
    
    else {
        navigation.classList.add('scroll')
    }
}

// Função para adicionar e remover a classe 'to-top' no btnTop, fazendo o botão aparecer depois que o scroll chega a um determinado ponto
function scrollButtonTop() {
    if(scrollY >= 300) {
        btnTop.classList.add('to-top')
    }

    else {
        btnTop.classList.remove('to-top')
    }
}

// Função para abrir o menu-mobile
function openMenu() {
    document.body.classList.add('menu-expanded')
}

// Função para fechar o menu-mobile
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

//lib para transição dos itens durante o scroll
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