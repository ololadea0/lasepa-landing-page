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

const faqQuestions = document.querySelectorAll('.rightqestion');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});

const faqHeaders = document.querySelectorAll('.rightquestion');

faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const clickedAnswer = header.nextElementSibling;
        const clickedArrow = header.querySelector('.faq-arrow');
        const activeAnswer = document.querySelector('.hidden-answer.active');

        if (activeAnswer && activeAnswer !== clickedAnswer)
        {
            activeAnswer.classList.remove('active');
            activeAnswer.previousElementSibling
                .querySelector('.faq-arrow')
                .classList.remove('rotate');
        }

        clickedAnswer.classList.toggle('active');
        clickedArrow.classList.toggle('rotate');
    });
});

