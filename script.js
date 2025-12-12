// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if(targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.backgroundColor = 'white';
    navLinks.style.padding = '20px';
    navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    navLinks.style.gap = '15px';
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if(navLinks && navLinks.style.display === 'flex' && 
     !e.target.closest('.nav-links') && 
     !e.target.closest('.menu-toggle')) {
    navLinks.style.display = 'none';
  }
});

// My Story button functionality
const storyBtn = document.getElementById('storyBtn');
if(storyBtn) {
  storyBtn.addEventListener('click', () => {
    alert("Welcome to my story! I'm Bibek Aryal, a passionate product designer and developer from Nepal. I've been working in the digital space for over 5 years, helping businesses transform their ideas into successful digital products. My journey started with a curiosity about how things work on the web, and it has evolved into a career where I get to create meaningful experiences for users every day.");
  });
}

// Download CV button functionality
const downloadCV = document.getElementById('downloadCV');
if(downloadCV) {
  downloadCV.addEventListener('click', () => {
    alert("Thank you for your interest! The CV download feature is currently being implemented. In the meantime, please connect with me on LinkedIn or email me at aryalbibek398@gmail.com for more information.");
  });
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const project = document.querySelector('#project').value;
    
    // Simple form validation
    if(!name || !email || !project) {
      alert('Please fill in all fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been received. I will get back to you at ${email} soon.`);
    
    // Reset the form
    contactForm.reset();
  });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Animation on scroll (basic implementation)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service, .project, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});