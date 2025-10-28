// Place this file at assets/js/main.js
document.addEventListener('DOMContentLoaded', function(){

  // Mobile menu toggle
  const btn = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if(btn && mobileMenu){
    btn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    // close on outside click
    document.addEventListener('click', (e)=>{
      if(!mobileMenu.contains(e.target) && !btn.contains(e.target)){
        mobileMenu.classList.remove('open');
      }
    })
  }

  // Simple accordion for FAQ
  document.querySelectorAll('.accordion-title').forEach(title=>{
    title.addEventListener('click', ()=>{
      const parent = title.closest('.accordion-item');
      const content = parent.querySelector('.accordion-content');
      const isOpen = content.style.display === 'block';
      document.querySelectorAll('.accordion-content').forEach(c => c.style.display='none');
      if(!isOpen){
        content.style.display = 'block';
      }
    });
  });

  // Simple gallery lightbox (very small)
  document.querySelectorAll('.gallery-grid img').forEach(img=>{
    img.addEventListener('click', ()=>{
      const modal = document.createElement('div');
      modal.style.position='fixed';
      modal.style.left=0; modal.style.top=0;
      modal.style.width='100%'; modal.style.height='100%';
      modal.style.background='rgba(0,0,0,0.75)';
      modal.style.display='flex'; modal.style.alignItems='center'; modal.style.justifyContent='center';
      modal.style.zIndex=120;
      const big = document.createElement('img');
      big.src = img.src;
      big.style.maxWidth='90%'; big.style.maxHeight='90%'; big.style.borderRadius='8px';
      modal.appendChild(big);
      modal.addEventListener('click', ()=>document.body.removeChild(modal));
      document.body.appendChild(modal);
    })
  });

  // Contact form validation (basic)
  const form = document.querySelector('form[data-validate]');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const message = form.querySelector('[name="message"]');
      let ok = true;
      [name,email,message].forEach(el=>{
        if(!el.value.trim()){
          el.style.borderColor = 'var(--brand-red)';
          ok = false;
        } else {
          el.style.borderColor = '#e6e6e6';
        }
      });
      if(!ok){
        alert('Please fill in required fields.');
        return;
      }
      // Simulate success
      alert('Thank you — message sent (demo).');
      form.reset();
    });
  }

});