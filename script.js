// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
   
  })
 

  // Typing Effect

  let typed = new Typed('.auto-input',{
    strings: ['Frond-End Designer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
  })
  



  const scriptURL = 'https://script.google.com/macros/s/AKfycbyd-iAwoDiY8ysyh6KI_czKdlDS2xy_cXEj3bnvFT_OSV9XaTQ9yEPF5yoAsFAOQKQn_w/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msgs")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
