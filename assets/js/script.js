// Cambia el fondo de la cabecera al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toggle FAQ answers
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Interacción del acordeón
document.querySelectorAll(".accordion-title").forEach(button => {
    button.addEventListener("click", () => {
        const accordionItem = button.parentElement;
        accordionItem.classList.toggle("active");
    });
});

// Efecto de parallax para la imagen del iPhone
window.addEventListener('scroll', () => {
    const iphoneImage = document.querySelector('.iphone-image');
    const scrollY = window.scrollY;
    iphoneImage.style.transform = `translateY(${scrollY * 0.1}px)`;
});

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const parallaxImage = document.querySelector('.parallax-iphone');
    parallaxImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});

// Función para abrir el modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Función para cerrar el modal al hacer clic fuera de él
window.addEventListener('click', function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Scroll animation for benefits
document.addEventListener("scroll", () => {
    const benefitItems = document.querySelectorAll(".benefit-item");
    benefitItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        item.dataset.visible = isVisible;
    });
});
