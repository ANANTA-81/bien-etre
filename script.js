const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
function toggleDetails(id) {
    const block = document.getElementById('details-' + id);
    block.style.display = block.style.display === 'block' ? 'none' : 'block';
}
