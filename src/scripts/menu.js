const button = document.getElementById('mobile-menu-button')
const menu = document.querySelector('.header-nav-group')
const openIcon = document.getElementById('menu-open-icon')
const closeIcon = document.getElementById('menu-close-icon')

function toggleMenu() {
    const isExpanded = button?.getAttribute('aria-expanded') === 'true'
    button?.setAttribute('aria-expanded', isExpanded ? 'false' : 'true')
    menu?.classList.toggle('hidden')
    openIcon?.classList.toggle('hidden')
    closeIcon?.classList.toggle('hidden')
}

button?.addEventListener('click', toggleMenu)
