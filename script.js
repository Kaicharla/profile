// Header toggle

let MenuBtn = document.getElementById("MenuBtn")

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Active Link State on Scroll

// Get All Links

// let navlinks = document.querySelector('nav ul li a')

// Get All Sections

// let sections = document.getElementById('section')

// window.addEventListener('scroll', function(){
//     const scrollPos = this.window.scrollY
//     sections.forEach(secton => {
//         if(scrollPos > secton.offsetTop && scrollPos < (secton.offsetTop + section.offsetHeight)){
//             navlinks.forEach(link => {
//                 link.classList.remove('active')
//                 if(secton.getAttribute('id') === link.getAttribute('href').substring(1)){
//                     link.classList.add('active')
//                 }
//             })
//         }
//     })
// })





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
