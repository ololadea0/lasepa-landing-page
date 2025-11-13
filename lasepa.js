function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100; // tweak this number to control when it triggers

        if (elementTop < windowHeight - revealPoint)
        {
            element.classList.add("active");
        } else
        {
            element.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once to catch any visible sections


function fadeItemsOnScroll() {
    const items = document.querySelectorAll(".fade-item");
    items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50)
        {
            // Add a tiny delay for each item (staggered reveal)
            item.style.transitionDelay = `${index * 0.1}s`;
            item.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", fadeItemsOnScroll);
fadeItemsOnScroll();


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navigation-menu');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const faqContainers = document.querySelectorAll('.FAQs-container');

faqContainers.forEach(container => {
    const question = container.querySelector('.rightqestion');
    const answer = container.querySelector('.hidden-answer');
    const arrow = container.querySelector('.faq-arrow');

    question.addEventListener('click', () => {
        // Close any open FAQ except the clicked one
        faqContainers.forEach(other => {
            if (other !== container)
            {
                other.querySelector('.hidden-answer').classList.remove('active');
                other.querySelector('.faq-arrow').classList.remove('rotate');
            }
        });

        // Toggle current FAQ
        answer.classList.toggle('active');
        arrow.classList.toggle('rotate');
    });
});
