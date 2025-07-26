// Micro-interactions JavaScript for enhanced user experience

document.addEventListener('DOMContentLoaded', function() {
    
    // Add ripple effect to buttons and cards
    function addRippleEffect(element) {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // Add ripple effect to all cards and buttons
    document.querySelectorAll('.card, .publication-link, .project-link').forEach(addRippleEffect);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    document.querySelectorAll('section, .card').forEach(section => {
        observer.observe(section);
    });

    // Social media icons bounce effect on hover
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('bounce');
        });
        
        icon.addEventListener('animationend', function() {
            this.classList.remove('bounce');
        });
    });

    // Typing effect for the main heading
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Apply typing effect to the main heading
    const mainHeading = document.querySelector('h1.text-center');
    if (mainHeading) {
        const originalText = mainHeading.textContent;
        typeWriter(mainHeading, originalText, 150);
    }

    // Parallax effect for profile picture - DISABLED to maintain sticky positioning
    // window.addEventListener('scroll', function() {
    //     const profilePic = document.querySelector('.profile-picture img');
    //     if (profilePic) {
    //         const scrolled = window.pageYOffset;
    //         const rate = scrolled * -0.5;
    //         profilePic.style.transform = `translateY(${rate}px)`;
    //     }
    // });

    // Add pulse animation to important elements
    function addPulseToImportant() {
        const importantElements = document.querySelectorAll('.social-icon, .profile-picture img');
        importantElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.classList.add('pulse');
            });
            
            element.addEventListener('mouseleave', function() {
                this.classList.remove('pulse');
            });
        });
    }
    addPulseToImportant();

    // Card hover sound effect (optional - for enhanced experience)
    function addHoverSound() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Create a subtle audio feedback (optional)
                const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
                audio.volume = 0.1;
                audio.play().catch(() => {}); // Ignore errors if audio fails
            });
        });
    }
    // Uncomment the line below if you want hover sound effects
    // addHoverSound();

    // Add loading animation for images
    function addImageLoadingAnimation() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.style.opacity = '0';
                this.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    this.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    this.style.opacity = '1';
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });
    }
    addImageLoadingAnimation();

    // Add shake animation for error states (example)
    function addShakeAnimation() {
        // This could be used for form validation errors or other error states
        window.addShakeToElement = function(element) {
            element.classList.add('shake');
            setTimeout(() => {
                element.classList.remove('shake');
            }, 500);
        };
    }
    addShakeAnimation();

    // Add floating effect to fixed navigation
    function addFloatingEffect() {
        const fixedNav = document.querySelector('.fixed-nav');
        if (fixedNav) {
            let isHovered = false;
            
            fixedNav.addEventListener('mouseenter', function() {
                isHovered = true;
                this.style.transform = 'translateX(-5px)';
            });
            
            fixedNav.addEventListener('mouseleave', function() {
                isHovered = false;
                this.style.transform = 'translateX(0)';
            });
        }
    }
    addFloatingEffect();

    // Add progress indicator for page load
    function addProgressIndicator() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #2fb2fe, #ff8800);
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', function() {
            const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    addProgressIndicator();

    // Add confetti effect for special interactions (optional)
    function createConfetti() {
        const colors = ['#2fb2fe', '#ff8800', '#ff6b6b', '#4ecdc4'];
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            animation: confetti-fall 3s ease-out forwards;
        `;
        
        const keyframes = `
            @keyframes confetti-fall {
                0% { transform: translate(-50%, -50%) rotate(0deg); opacity: 1; }
                100% { transform: translate(-50%, 100vh) rotate(720deg); opacity: 0; }
            }
        `;
        
        if (!document.querySelector('#confetti-styles')) {
            const style = document.createElement('style');
            style.id = 'confetti-styles';
            style.textContent = keyframes;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }

    // Add confetti to profile picture click (optional)
    const profilePic = document.querySelector('.profile-picture img');
    if (profilePic) {
        profilePic.addEventListener('click', function() {
            for (let i = 0; i < 20; i++) {
                setTimeout(createConfetti, i * 100);
            }
        });
    }

    console.log('Micro-interactions loaded successfully! 🎉');
}); 