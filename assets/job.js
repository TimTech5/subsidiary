 // Populate closing date default: 30 days from today
    (function(){
      const d=new Date();
      d.setDate(d.getDate()+30);
      const opts={year:'numeric',month:'long',day:'numeric'};
      document.getElementById('closing-date').textContent=d.toLocaleDateString(undefined,opts);
    })();

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const f=btn.dataset.filter || 'all';
        document.querySelectorAll('.job').forEach(job=>{
          job.style.display=(f==='all' || job.dataset.dept===f)?'flex':'none';
        })
      })
    });

    // Modal controls
    function openApply(position){
      document.getElementById('modal-title').textContent = position ? 'Apply — ' + position : 'Apply to Primegate Distilleries';
      document.getElementById('position').value = position || '';
      document.getElementById('modal').style.display='flex';
      document.getElementById('modal').setAttribute('aria-hidden','false');
    }
    function closeModal(){
      document.getElementById('modal').style.display='none';
      document.getElementById('modal').setAttribute('aria-hidden','true');
      document.getElementById('apply-form').reset();
      document.getElementById('form-success').style.display='none';
    }

    function openDetails(e,btn){
      const jobEl = btn.closest('.job');
      const title = jobEl.querySelector('h3').innerText;
      const meta = jobEl.querySelector('.meta').innerText;
      const desc = jobEl.querySelector('p').innerText;
      openApply(title);
      // prefill message with job details
      const msg = `Position: ${title}\n${meta}\n\n${desc}\n\n(Write your short message here)`;
      document.getElementById('message').value = msg;
    }

    // Fake form submission (since this template doesn't include a backend)
    function submitForm(e){
      e.preventDefault();
      const file = document.getElementById('cv').files[0];
      if(!file){alert('Please attach your CV (PDF).');return}
      if(file.size > 3 * 1024 * 1024){alert('File too large — maximum 3MB.');return}
      if(file.type !== 'application/pdf'){alert('Please upload a PDF.');return}

      // Simulate success
      document.getElementById('form-success').style.display='block';
      // In real implementation, post FormData to your server or an email endpoint
      // Example: use fetch('/api/apply', {method:'POST', body: formData})
    }

    // Accessibility: close modal with Escape
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ closeModal(); } });