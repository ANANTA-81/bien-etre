// =========================
// MENU MOBILE BURGER
// =========================
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
}

// =========================
// TOGGLE DETAILS (optionnel)
// =========================
function toggleDetails(id) {
    const block = document.getElementById('details-' + id);
    if (block) {
        block.style.display = block.style.display === 'block' ? 'none' : 'block';
    }
}
