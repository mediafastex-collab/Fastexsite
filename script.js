document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

    const updateNavbarState = () => {
        if (!navbar) {
            return;
        }

        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };

    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState, { passive: true });

    const closeMobileMenu = () => {
        if (!navLinks || !mobileMenuBtn) {
            return;
        }

        navLinks.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    };

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');

        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
    }

    // Intersection Observer for scroll animations (reveal elements)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Update footer year dynamically
    document.getElementById('year').textContent = new Date().getFullYear();

    // Subtle parallax effect on hero background
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            heroBg.style.transform = `translateY(${scrollPos * 0.3}px)`;
        });
    }

    // Modal Logic - Cal.com
    const calModal = document.getElementById('cal-modal');
    const closeCalBtn = document.getElementById('close-modal');
    const bookCallBtns = document.querySelectorAll('.book-call-btn');
    const calIframe = calModal?.querySelector('iframe');

    if (calModal && closeCalBtn) {
        bookCallBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (calIframe && !calIframe.src) {
                    calIframe.src = calIframe.dataset.src || '';
                }
                calModal.classList.add('active');
            });
        });

        closeCalBtn.addEventListener('click', () => {
            calModal.classList.remove('active');
        });

        calModal.addEventListener('click', (e) => {
            if (e.target === calModal) {
                calModal.classList.remove('active');
            }
        });
    }

    // Modal Logic - Partnership
    const partnerModal = document.getElementById('partner-modal');
    const closePartnerBtn = document.getElementById('close-partner-modal');
    const partnerBtns = document.querySelectorAll('.partner-modal-btn');

    if (partnerModal && closePartnerBtn) {
        partnerBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                partnerModal.classList.add('active');
            });
        });

        closePartnerBtn.addEventListener('click', () => {
            partnerModal.classList.remove('active');
        });

        partnerModal.addEventListener('click', (e) => {
            if (e.target === partnerModal) {
                partnerModal.classList.remove('active');
            }
        });
    }

    // Partnership Form Submission Logic
    const partnerForm = document.getElementById('partnership-form');
    const partnerSubmitBtn = document.getElementById('partner-submit-btn');
    const partnerSuccessMsg = document.getElementById('partner-success-msg');

    // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz2HBg-P44_1SQK-sxR96zBYzMDOz3ratFa23CqdlBbViYUTshcVYD5DtPmrnenJ4ZtPw/exec';

    if (partnerForm) {
        partnerForm.addEventListener('submit', e => {
            e.preventDefault();
            
            // Check if the script URL has been updated
            if (scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
                alert('Backend not configured yet. Please follow the Google Apps Script instructions.');
                return;
            }

            // Disable button and show loading state
            partnerSubmitBtn.disabled = true;
            partnerSubmitBtn.textContent = 'Submitting...';

            // Prevent Google Sheets from treating numbers starting with '+' as formulas
            const formData = new FormData(partnerForm);
            const wa = formData.get('whatsapp');
            if (wa && wa.startsWith('+')) {
                formData.set('whatsapp', "'" + wa);
            }

            fetch(scriptURL, { 
                method: 'POST', 
                body: formData,
                mode: 'no-cors' 
            })
                .then(response => {
                    // With no-cors, we can't read the response properly, but if it reaches here, the network request was sent successfully!
                    
                    // Hide form and show success message
                    partnerForm.style.display = 'none';
                    document.querySelector('.form-container h2').style.display = 'none';
                    partnerSuccessMsg.style.display = 'block';
                    
                    // Reset form
                    partnerForm.reset();
                    partnerSubmitBtn.disabled = false;
                    partnerSubmitBtn.textContent = 'Submit';
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert('There was an error submitting the form. Please try again.');
                    partnerSubmitBtn.disabled = false;
                    partnerSubmitBtn.textContent = 'Submit';
                });
        });
    }
});
