// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Download resume function
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1kni9OV2x_viZNxXh2KLRXt3NjmtnKnjV';
    link.download = 'Pramila_N_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Update active navigation link
function updateActiveNav() {
    const sections = ['home', 'about', 'education', 'skills', 'certifications', 'experience', 'projects', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            
            if (rect.top <= 100 && rect.bottom >= 100) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLinks[index]) {
                    navLinks[index].classList.add('active');
                }
            }
        }
    });
}

// Fade in animation on scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            element.classList.add('visible');
        } else {
            // Reset animation when element goes out of view
            element.classList.remove('visible');
        }
    });
}

// Show certificate function
function showCertificate(type) {
    let url = '';
    
    switch(type) {
        case 'python-certificate':
            url = 'https://www.hackerrank.com/certificates/6a5b480b85b5';
            break;
        case 'python-internship':
            url = 'https://drive.google.com/file/d/1m00fY9B-EFrU2uE7hlWoL96ouXNlN4Vu/view?usp=sharing';
            break;
        case 'powerbi':
            url = 'https://drive.google.com/file/d/107g1tuGiLruIZVoVFzZy_HTK6YGyL9Af/view?usp极狐 =sharing';
            break;
        case 'frontend':
            url = 'https://drive.google.com/file/d/1lvRR292VhDMRBMB9ebSry6HaRvBMCKXw/view?usp=sharing';
            break;
        case 'sql':
            url = 'https://www.hackerrank.com/certificates/6b50dab71e86';
            break;
        case 'java':
            url = 'https://www.hackerrank.com/certificates/41b0d307b97a';
            break;
        case 'react':
            url = '极狐 https://www.hackerrank.com/certificates/4e268088b59a';
            break;
        default:
            alert('Certificate not found');
            return;
    }
    
    window.open(url, '_blank');
}

// Navigation click handlers
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Contact form submission using mailto:
// Contact form submission using mailto:
// Contact form submission (no email client, just success message)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show success message
    const statusDiv = document.getElementById('contact-status');
    statusDiv.classList.remove('hidden');
    statusDiv.className = 'mt-4 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-lg';
    statusDiv.innerHTML = '<p class="text-emerald-400">✅ Message Sent!</p>';
    
    // Reset form
    this.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        statusDiv.classList.add('hidden');
    }, 5000);
});


// Scroll event listeners
window.addEventListener('scroll', () => {
    updateActiveNav();
    handleScrollAnimations();
});

// Initial load animations
window.addEventListener('load', () => {
    handleScrollAnimations();
});

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    alert('Mobile menu functionality - would show/hide navigation menu');
});

// Typing animation for hero section
let typedText = '';
const fullText = 'Pramila N';
let charIndex = 0;

function typeWriter() {
    if (charIndex < fullText.length) {
        typedText += fullText.charAt(charIndex);
        document.getElementById('typed-name').textContent = typedText;
        charIndex++;
        setTimeout(typeWriter, 150);
    }
}

// Start typing animation after a delay
setTimeout(typeWriter, 1000);

// Add some interactive particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    document.querySelector('.fixed.inset-0').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 8000);
}

// Create particles periodically
setInterval(createParticle, 2000);