document.addEventListener('DOMContentLoaded', function() {
  
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
       
    const modal = document.getElementById('logoModal');
    const logoImg = document.querySelector('.logo-img');
    const closeBtn = document.querySelector('.close-modal');
    
    if (logoImg && modal) {
        logoImg.addEventListener('click', function(e) {
            e.stopPropagation();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
     
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .producto-card, .galeria-item, .card, .value-item');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight - 100;
            
            if (position < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    const initAnimations = function() {
        const elements = document.querySelectorAll('.feature-card, .producto-card, .galeria-item, .card, .value-item');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
        });
        animateOnScroll();
    };
    
    initAnimations();
    window.addEventListener('scroll', animateOnScroll);
    
    const contactForm = document.getElementById('contactForm');
    const formMensaje = document.getElementById('form-mensaje');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const mensaje = document.getElementById('mensaje')?.value.trim();
            
            if (!nombre || !email || !mensaje) {
                if (formMensaje) {
                    formMensaje.innerHTML = '<p style="color: #c9a03d;">❌ Por favor, completa todos los campos obligatorios.</p>';
                }
                return;
            }
            
            if (!email.includes('@')) {
                if (formMensaje) {
                    formMensaje.innerHTML = '<p style="color: #c9a03d;">❌ Por favor, ingresa un correo válido.</p>';
                }
                return;
            }
            
            if (formMensaje) {
                formMensaje.innerHTML = '<p style="color: #4CAF50;">✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.</p>';
                contactForm.reset();
            }
            
            setTimeout(() => {
                if (formMensaje) {
                    formMensaje.style.opacity = '0';
                    setTimeout(() => {
                        if (formMensaje) formMensaje.innerHTML = '';
                        if (formMensaje) formMensaje.style.opacity = '1';
                    }, 500);
                }
            }, 5000);
        });
    }
    
    const productosContainer = document.getElementById('productos-container');
    
    const productos = [
        {
            nombre: 'Nike Initiator Blancos',
            descripcion: 'Tenis deportivos de malla transpirable para caballero',
            precio: '$1,299 MXN',
            caracteristicas: ['Malla transpirable', 'Entresuela acolchada', 'Suela de goma antiderrapante'],
            imagen: './img/1.png'
        },
        {
            nombre: 'Saucony Omni 9 Azul con Plata',
            descripcion: 'Tenis deportivos de estilo retro con malla transpirable',
            precio: '$1,899 MXN',
            caracteristicas: ['Malla abierta transpirable', 'Detalles sintéticos metálicos', 'Suela gruesa de amortiguación'],
            imagen: './img/2.png'
        },
        {
            nombre: 'Saucony ProGrid Omni 9 Blanco con Rojo',
            descripcion: 'Tenis deportivos de estilo retro con malla transpirable',
            precio: '$1,899 MXN',
            caracteristicas: ['Malla abierta transpirable', 'Tecnología de amortiguación ProGrid', 'Suela de goma con tracción'],
            imagen: './img/3.png'
        },
        {
            nombre: 'Nike Air Pegasus 2K5 Crema con Verde',
            descripcion: 'Tenis deportivos de estilo retro con amortiguación completa',
            precio: '$2,199 MXN',
            caracteristicas: ['Malla transpirable con revestimientos sintéticos', 'Amortiguación Full-Length Nike Air', 'Suela de goma con patrón tipo waffle'],
            imagen: './img/4.png'
        },
        {
            nombre: 'Adidas Ozweego Blanco con Azul Marino',
            descripcion: 'Tenis deportivos de estilo chunky con diseño retro',
            precio: '$2,199 MXN',
            caracteristicas: ['Parte superior de malla y material sintético', 'Tecnología de amortiguación Adiprene', 'Suela de goma gruesa'],
            imagen: './img/5.png'
        },
        {
            nombre: 'Nike Air Pegasus 2K5 Verde con Plata',
            descripcion: 'Tenis deportivos de estilo retro con malla y detalles metálicos',
            precio: '$2,199 MXN',
            caracteristicas: ['Malla transpirable en color verde', 'Revestimientos sintéticos plateados y negros', 'Amortiguación Full-Length Nike Air'],
            imagen: './img/6.png'
        }
    ];
    
    if (productosContainer) {
        productos.forEach(producto => {
            const card = document.createElement('div');
            card.className = 'producto-card';
            card.innerHTML = `
                <div class="producto-imagen" style="background-image: url('${producto.imagen}')">
                    <span class="producto-badge">Nuevo</span>
                </div>
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p class="producto-descripcion">${producto.descripcion}</p>
                    <p class="producto-precio">${producto.precio}</p>
                    <ul class="producto-caracteristicas">
                        ${producto.caracteristicas.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            `;
            productosContainer.appendChild(card);
        });
    }
    
    const galeriaContainer = document.getElementById('galeria-container');
    
    const galeriaImagenes = [
        { titulo: 'Fachada de nuestra tienda principal', imagen: './img/fachada.png' },
        { titulo: 'Taller de manufactura artesanal', imagen: './img/taller.png' },
        { titulo: 'Equipo de trabajo Reyes del Calzado', imagen: './img/equipo.png' },
        { titulo: 'Evento de lanzamiento 2025', imagen: './img/evento.png' },
        { titulo: 'Proceso de empaque ecológico', imagen: './img/empaque.png' },
        { titulo: 'Nueva colección primavera', imagen: './img/coleccion.png' }
    ];
    
    if (galeriaContainer) {
        galeriaImagenes.forEach(img => {
            const item = document.createElement('div');
            item.className = 'galeria-item';
            item.style.backgroundImage = `url('${img.imagen}')`;
            item.style.backgroundSize = 'cover';
            item.style.backgroundPosition = 'center';
            item.innerHTML = `
                <div class="galeria-overlay">
                    <h3>${img.titulo}</h3>
                </div>
            `;
            galeriaContainer.appendChild(item);
        });
    }
});