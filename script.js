const thumb = document.getElementById('sbThumb');
const header = document.querySelector('header');
const menuIcon = document.querySelector('.menu-icon');
const menuMobile = document.querySelector('.menu-mobile');
const navLinks = document.querySelectorAll('header nav a');

// Atualiza a barra de progresso de scroll
function updateScrollThumb(){
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const maxScroll = (doc.scrollHeight - doc.clientHeight);
  const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  thumb.style.height = pct + '%';
  
  // Adiciona classe ao header quando rolar a página
  if (scrollTop > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Toggle do menu mobile
function toggleMenu() {
  document.querySelector('header').classList.toggle('menu-open');
}

// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('header').classList.remove('menu-open');
  });
});

// Event listeners
document.addEventListener('scroll', updateScrollThumb, { passive: true });
window.addEventListener('resize', updateScrollThumb);
window.addEventListener('load', updateScrollThumb);
menuMobile.addEventListener('click', toggleMenu);

