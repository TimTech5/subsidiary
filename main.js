// Mobile Menu Toggle
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});




  // Hamburger nav toggle
  const hamburgers = document.querySelectorAll('.hamburger');
  hamburgers.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const nav = document.querySelector('#nav-menu');
      if(nav.style.display === 'block'){
        nav.style.display = '';
      } else {
        nav.style.display = 'block';
      }
    });
  });

  // Close mobile nav when clicking a link
  document.querySelectorAll('#nav-menu a').forEach(a=>{
    a.addEventListener('click', ()=>{
      const nav = document.querySelector('#nav-menu');
      if(window.innerWidth <= 980 && nav) nav.style.display = '';
    });
  });


// Scroll Reveal Animation
window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}


const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(header => {
  header.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-header.active");
    if (openItem && openItem !== header) {
      openItem.classList.remove("active");
      openItem.nextElementSibling.classList.remove("show");
      openItem.querySelector("span").textContent = "▶";
    }

    header.classList.toggle("active");
    header.nextElementSibling.classList.toggle("show");
    header.querySelector("span").textContent = 
      header.classList.contains("active") ? "▼" : "▶";
  });
});


const faqHeaders = document.querySelectorAll(".faq-header");

faqHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const openHeader = document.querySelector(".faq-header.active");
    
    if (openHeader && openHeader !== header) {
      openHeader.classList.remove("active");
      openHeader.nextElementSibling.classList.remove("show");
      openHeader.querySelector("span").textContent = "▶";
    }

    header.classList.toggle("active");
    header.nextElementSibling.classList.toggle("show");
    header.querySelector("span").textContent = 
      header.classList.contains("active") ? "▼" : "▶";
  });
});



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal(`.hero-content, .hero-cta, .btn, .footer_container`)
sr.reveal(`.home_description, footer_info`, {delay:500})
sr.reveal(`.home_search`, {delay:600})
sr.reveal(`.home_value`, {delay:700})
sr.reveal(`.home_images`, {delay:800, origin:'bottom'})
sr.reveal(`.logo_images`, {interval:100})
sr.reveal(`.value_images, .contact_content`, {origin: 'left'})
sr.reveal(`.value_content, .contact_images`, {origin: 'right'})
