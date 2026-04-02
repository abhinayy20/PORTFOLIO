document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('nav-active');

            // Burger Animation
            hamburger.classList.toggle('toggle');
        });
    }

    // Close menu when a link is clicked (Mobile)
    navLinksLi.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    });

    // --- Intersection Observer for Fade-in Animations ---
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // --- Intersection Observer for Skill Progress Bars ---
    const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress');

    const skillsObserver = new IntersectionObserver(function(entries, observer) {
        let isIntersecting = entries[0].isIntersecting;
        if(isIntersecting) {
            progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
            });
            observer.unobserve(skillsSection);
        }
    }, { threshold: 0.3 });

    if(skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // --- Simple Form Handler ---
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Message Sent Successfully!';
            submitBtn.style.background = '#00f3ff';
            submitBtn.style.color = '#000';
            
            contactForm.reset();

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.style.color = '';
            }, 3000);
        });
    }

});
