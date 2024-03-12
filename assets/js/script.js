var menuToggle = document.querySelector('.mobile-menu-toggle');
var filterMenuToggle = document.querySelector('.filter-menu-toggle');
var menuBtn = document.querySelector('.menu-btn');
var menuList = document.querySelector('.mobile-menu #menu__wrapper');
var menuWrapper = document.querySelectorAll('#menu__wrapper li .menu-btn');
var menuLink = document.querySelectorAll('#menu__wrapper-link');
var overlayMenu = document.querySelector('.mobile__menu .overlay__menu')

function toggleMenu(e) {
    document.body.classList.toggle('mmenu-active');

    e.preventDefault();
}

function filterToggleMenu(e) {
    document.body.classList.toggle('mmenu-active');

    e.preventDefault();
}

function btnToggle(e) {
    menuList.classList.toggle('d-block');

    e.preventDefault();
}

function menuWrapperToggle(e) {
    menuLink.classList.toggle('d-block');

    e.preventDefault();
}

function closeMenu() {
    document.body.classList.remove('mmenu-active');
}

menuToggle.addEventListener('click', toggleMenu);

filterMenuToggle.addEventListener('click', filterToggleMenu);

menuBtn.addEventListener('click', btnToggle);

menuWrapper.forEach(function(menuBtn) {
    menuBtn.addEventListener('click', function(e) {
        var menu = menuBtn.parentElement.nextElementSibling;
        
        if (menu && getComputedStyle(menu).display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
        
        e.preventDefault();
    });
});

menuLink.forEach(function(link) {
    var lastUlElement = link;
    if (lastUlElement) {
        lastUlElement.classList.add('new-class');
    }
});

overlayMenu.addEventListener('click', closeMenu);
