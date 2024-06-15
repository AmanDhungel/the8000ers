

function createNav(){
let nav = document.querySelector('.nav');

nav.innerHTML = `
<div id="nav-bar">
<input id="nav-toggle" type="checkbox"/>
<div id="nav-header"><a style="color: inherit" id="nav-title" href="index.html">Dashboard</a>
  <label for="nav-toggle"><span id="nav-toggle-burger"></span></label>
  <hr/>
</div>
<div id="nav-footer">
<div id="nav-footer-heading">
  <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"/></div>
  <div id="nav-footer-titlebox"><a style="color: inherit" id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank">uahnbu</a><span id="nav-footer-subtitle">Admin</span></div>
</div>

</div>
  <div id="nav-content">
   <a href="./index.html" class="nav-button"><i class="fa fa-solid fa-house"></i><span>Home</span></a>
    <a href="./packages.html" class="nav-button"><i class="fa fa-solid fa-cube"></i><span>Packages </span></a>
    <a href="./aboutus.html" class="nav-button"><i class="fa fa-regular fa-address-card"></i><span>About Us</span></a>
    <a href="./blog.html" class="nav-button"><i class="fa fa-solid fa-file-pen"></i><span>Blog</span></a>
    <a href="./services.html" class="nav-button"><i class="fa fa-solid fa-timeline"></i><span>Services</span></a>
    <a href="./planwithus.html" class="nav-button"><i class="fa fa-solid fa-square-poll-vertical"></i><span>Plan With Us</span></a>
    <a href="./shop.html" class="nav-button"><i class="fa fa-solid fa-cart-shopping"></i><span>Shop</span></a>
    <a href="./ourteam.html" class="nav-button"><i class="fa fa-solid fa-users-rays"></i><span>Our Team</span></a>
    <hr/>
    <div id="nav-content-highlight"></div>
  </div>
  <input id="nav-footer-toggle" type="checkbox"/>
 
</div>`
}

createNav();

function checkNavToggleBasedOnWidth() {
  const navToggle = document.getElementById('nav-toggle');
  const mediaQuery = window.matchMedia('(max-width: 420px)');

  function handleWidthChange(e) {
    navToggle.checked = e.matches;
  }

  // Initial check
  handleWidthChange(mediaQuery);

  // Add listener for width changes
  mediaQuery.addListener(handleWidthChange);
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', checkNavToggleBasedOnWidth);



