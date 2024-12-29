function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "FRONT-END DEVELOPER",
    "BLOGGER",
    "PHOTOGRAPHER",
    "VIDEO EDITOR"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter
// Animating Skill Progress Bars on Scroll
function animateSkills() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const targetValue = bar.getAttribute('data-value');
        const section = bar.closest("#skills");
        const sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
            bar.style.width = `${targetValue}%`;
        } else {
            bar.style.width = `0%`;
        }
    });
}

window.addEventListener('scroll', animateSkills);
// JavaScript for Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        // Select the target section
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start' // Align the target section to the top of the viewport
        });
    });
});

// JavaScript for Progress Bar Animation in Skills Section
function animateSkills() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const targetValue = bar.getAttribute('data-value'); // Get the target percentage value
        const section = bar.closest("#skills"); // Check the skills section

        const sectionPosition = section.getBoundingClientRect();

        // Animate progress bars when the skills section is visible
        if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
            bar.style.width = `${targetValue}%`;
        } else {
            // Reset the progress bars when the section is out of view
            bar.style.width = `0%`;
        }
    });
}

// Listen for the scroll event to trigger progress bar animations
window.addEventListener('scroll', animateSkills);// script.js
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Function to update the slide position and dot status
function updateSlideshow() {
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Function to show the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlideshow();
}

// Add event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlideshow();
    });
});

// Auto slideshow
let interval = setInterval(nextSlide, 3000);

// Pause slideshow on hover
const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', () => clearInterval(interval));
slideshowContainer.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 3000);
});

// Initialize slideshow
updateSlideshow();


// Create the dot element and append it to the body
const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');
document.body.appendChild(cursorDot);

// Update the position of the dot based on the cursor movement
document.addEventListener('mousemove', function(e) {
    cursorDot.style.transform = `translate(${e.pageX - 5}px, ${e.pageY - 5}px)`; 
});

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Submit the form data using Formspree API (optional but recommended)
    fetch('https://formspree.io/f/xyzzjbbr', {
        method: 'POST',
        body: new FormData(this),
    }).then(response => {
        if (response.ok) {
            this.reset(); // Reset form fields after submission
            document.getElementById('successMessage').style.display = 'block'; // Show success message
        } else {
            alert('There was an error submitting the form.');
        }
    });
});
