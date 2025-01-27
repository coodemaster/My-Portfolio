// // Toggle menu bar and navbar
// const menubar = document.querySelector('#menu');
// const Navbar = document.querySelector('.navbar');

// menubar.onclick = () => {
//     menubar.classList.toggle('bx-x');
//     Navbar.classList.toggle('active');
// };

// // Highlight active navigation link on scroll
// const sections = document.querySelectorAll('section');
// const navlinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach((section) => {
//         const top = window.scrollY;
//         const offset = section.offsetTop - 150;
//         const height = section.offsetHeight;
//         const id = section.getAttribute('id');

//         if (top > offset && top < offset + height) {
//             // Add animation class
//             section.classList.add('start-animation');

//             // Remove active class from all nav links and add it to the current one
//             navlinks.forEach((link) => {
//                 link.classList.remove('active');
//                 const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
//                 if (activeLink) activeLink.classList.add('active');
//             });
//         }
//     });

    
//     // Sticky header toggle
//     const header = document.querySelector('.header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     // Close navbar menu on scroll
//     menubar.classList.remove('bx-x');
//     Navbar.classList.remove('active');
// };
// // "Hire me" button - redirects to email
// document.getElementById("hireMeBtn").addEventListener("click", function (event) {
//     event.preventDefault(); 
//     window.location.href = "mailto:abhisheksharmavim45@gmail.com";
// });

// // "Let's Talk" button - redirects to WhatsApp
// document.getElementById("letsTalkBtn").addEventListener("click", function (event) {
//     event.preventDefault(); 
//     window.location.href = "https://wa.me/9044776891"; 
// });


// // Animated text cycling
// const texts = ["Fullstack Developer", "Frontend Engineer"];
// let currentIndex = 0;

// const animatedTextElement = document.getElementById("animated-text");

// // Initialize with the first text
// animatedTextElement.textContent = texts[currentIndex];

// // Update text on animation iteration
// animatedTextElement.addEventListener("animationiteration", () => {
//     currentIndex = (currentIndex + 1) % texts.length;
//     animatedTextElement.textContent = texts[currentIndex];
// });









// Toggle menu bar and navbar
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
};

// Highlight active navigation link on scroll
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top > offset && top < offset + height) {
            // Add animation class
            section.classList.add('start-animation');

            // Remove active class from all nav links and add it to the current one
            navlinks.forEach((link) => {
                link.classList.remove('active');
                const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });

    // Sticky header toggle
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar menu on scroll
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active');
};

// "Hire me" button - redirects to email
document.getElementById("hireMeBtn").addEventListener("click", function (event) {
    event.preventDefault(); 
    window.location.href = "mailto:abhisheksharmavim45@gmail.com";
});

// "Let's Talk" button - redirects to WhatsApp
document.getElementById("letsTalkBtn").addEventListener("click", function (event) {
    event.preventDefault(); 
    window.location.href = "https://wa.me/9044776891"; 
});

// Animated text cycling
const texts = ["Fullstack Developer", "Frontend Engineer"];
let currentIndex = 0;

const animatedTextElement = document.getElementById("animated-text");

// Initialize with the first text
animatedTextElement.textContent = texts[currentIndex];

// Update text on animation iteration
animatedTextElement.addEventListener("animationiteration", () => {
    currentIndex = (currentIndex + 1) % texts.length;
    animatedTextElement.textContent = texts[currentIndex];
});

// Add event listener for form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form field values
    const name = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("mobile-number").value;
    const subject = document.getElementById("email-subject").value;
    const message = document.getElementById("message").value;

    // Send email using EmailJS (replace with your credentials)
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        mobile_number: phone,
        email_subject: subject,
        message: message
    }).then(function(response) {
        alert("Your message has been sent!");
        contactForm.reset();  // Clear the form
    }, function(error) {
        alert("Something went wrong, please try again later.");
        console.log(error);
    });
});
