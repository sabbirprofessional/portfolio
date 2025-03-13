// Typed.js initialization
const typed = new Typed('.typing-text', {
    strings: [
        "Web Developer",
        "UI/UX Designer",
        "Frontend Engineer",
        "Problem Solver"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    showCursor: false
});

// Mobile Menu Toggle
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('navlist').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navlist = document.getElementById('navlist');
    const menuIcon = document.getElementById('menu-icon');
    if (!navlist.contains(event.target) {
        navlist.classList.remove('active');
    }
});

// Typed.js Initialization
const typed = new Typed('.auto-type', {
    strings: ["Web Developer", "UI/UX Designer", "Frontend Engineer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: false
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Update active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navlist a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// Contact Form Handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    alert('Message sent successfully!');
    this.reset();
});

// Back to Top Button
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.service-item, .portfolio-item, .feature-card, .testimonial-card').forEach((el) => {
    observer.observe(el);
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navlist a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Portfolio Image Hover Effect
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mousemove', function(e) {
        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;
        this.style.transform = `perspective(1000px) rotateX(${y / 20}deg) rotateY(${-x / 20}deg)`;
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Portfolio filtering
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if(filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        document.querySelectorAll('.filter-btn').forEach(btn => 
            btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Skills Animation
document.querySelectorAll('.skill-item').forEach(skill => {
    const progress = skill.querySelector('.progress');
    const width = progress.style.width;
    progress.style.width = '0';
    setTimeout(() => {
        progress.style.width = width;
    }, 500);
});

// Testimonial Carousel Auto-Play
let testimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function showNextTestimonial() {
    testimonialCards[testimonialIndex].classList.remove('active');
    testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    testimonialCards[testimonialIndex].classList.add('active');
}

// Uncomment to enable auto-play
// setInterval(showNextTestimonial, 5000);
