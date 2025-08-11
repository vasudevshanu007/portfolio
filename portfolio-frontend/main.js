//Header Scroll
let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


//nav hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})
// Add this in your existing script section
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  fetch('http://localhost:5000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.text())
  .then(data => {
    alert('Message sent successfully!');
    document.getElementById('contact-form').reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to send message. Please try again.');
  });
});
