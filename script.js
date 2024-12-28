function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = ["DEVELOPER", "DESIGNER", "YOUTUBER"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

// Animating Skill Progress Bars on Scroll
function animateSkills() {
    const progressBars = document.querySelectorAll('.progress-bar');
    const skillsSection = document.querySelector("#skills");
    const skillsSectionPosition = skillsSection.getBoundingClientRect();

    if (
        skillsSectionPosition.top < window.innerHeight &&
        skillsSectionPosition.bottom >= 0
    ) {
        progressBars.forEach(bar => {
            const targetValue = bar.getAttribute('data-value');
            if (!bar.style.width || bar.style.width === "0%") {
                bar.style.width = `${targetValue}%`;
            }
        });
    } else {
        progressBars.forEach(bar => {
            bar.style.width = "0%";
        });
    }
}

// Attach scroll listener for progress bar animation
window.addEventListener('scroll', animateSkills);

// Ensure smooth scrolling between sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        const offsetTop = targetSection.offsetTop;

        // Scroll to the section smoothly
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    });
});

// FIXED: Prevent accidental blocking or overriding of scrolling
window.addEventListener('scroll', () => {
    // Ensure no section blocks interaction or navigation
    const body = document.querySelector('body');
    if (body.style.overflow !== "visible") {
        body.style.overflow = "visible";
    }
});
document.addEventListener("scroll", () => {
    const charts = document.querySelectorAll(".chart");
    const windowHeight = window.innerHeight;

    charts.forEach((chart) => {
        const rect = chart.getBoundingClientRect();
        const value = chart.getAttribute("data-value"); // The percentage value (e.g., 75)
        const circle = chart.querySelector(".circle");

        // If the chart is visible in the viewport
        if (rect.top < windowHeight && rect.bottom >= 0) {
            const offset = (1 - value / 100) * 100; // Calculate green portion
            circle.style.strokeDashoffset = offset; // Apply offset
        } else {
            // Reset progress when the chart is out of view
            circle.style.strokeDashoffset = 100;
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".certificate-images img");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    let currentIndex = 0;

    function updateActiveImage() {
        // Reset all images
        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateActiveImage();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateActiveImage();
    }

    // Add event listeners for navigation arrows
    rightArrow.addEventListener("click", nextImage);
    leftArrow.addEventListener("click", prevImage);

    // Automatically cycle through images every 5 seconds
    setInterval(nextImage, 5000);
});


const emailButton = document.getElementById('email-button');
const contactInfo = document.getElementById('contact-info');

emailButton.addEventListener('mouseenter', function() {
    contactInfo.innerText = 'lakshanashree@gmail.com'; // Email to display
    contactInfo.style.display = 'block'; // Show the email
});

emailButton.addEventListener('mouseleave', function() {
    contactInfo.style.display = 'none'; // Hide the email when not hovering
});
