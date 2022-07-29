window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 500)
})


const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus';
        } 
        else {
            icon.className = 'fa-solid fa-plus';
        }
    })
})


const menu = document.querySelector(".nav_menu");
const menuOfBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuOfBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuOfBtn.style.display = "none";
})


const Navclosing = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuOfBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', Navclosing)