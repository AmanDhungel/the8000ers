const creatNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="header">
    <img src="./asset/Himalayan-Adv.png" alt="">
    <div class="hero-middle">
    <p><i class="fa-sharp fa-solid fa-location-dot"></i>
    <h4>Reach Us <span>Kathmandu, Nepal</span></h4>
    </p>
    <p><i class="fa-solid fa-phone"></i>
    <h4>Contact us <span>+977 98867554</span></h4>
    </p>
    </div>
    <div class="hero-end">
    <button>Plan with Us</button>
    <img src="./asset/hompage-hero-iceman.png" alt="">
    </div>
    </div>
    <nav>
    <a href="./index.html" class="nav_links" id="home">Home</a>
    <a href="./packages.html" class="nav_links" id="packages">Packages</a>
    <a href="./aboutus.html" class="nav_links" id="aboutus">About Us</a>
    <a href="./blog.html" class="nav_links" id="blog">Blog</a>
    <a href="./services.html" class="nav_links" id="services">Services</a>
    <a href="./shop.html" class="nav_links" id="shop">Shop</a>
    <a href="./ourteam.html" class="nav_links" id="ourteam">Our Team</a>
    </nav>
    `;
}

creatNav();

const createFooter = () => {
    let footer = document.querySelector('.footer');
    footer.innerHTML =`
    
    <div class="main-container">
    <div class="footer">
    <div class="newsletter">
    <span class="subscribe-newsletter">Subscribe for newsletter</span>
    <div class="group">
    <div class="bg"></div>
    <button class="button">
    <span class="input-subscribe">Subscribe</span>
    <div class="rectangle-bg"></div>
    </button>
    <div class="rectangle-bg-1"></div>
    <div class="frame-2">
    <div class="frame-3">
    <div class="home-line"><div class="group-4"></div></div>
    <div class="frame-5">
    <span class="input-email">Email</span>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="divider"></div>
    <div class="useful-info">
    <span class="useful-info-6">Useful info</span>
    <div class="container">
    <div class="link">
    <span class="link-open-peak">Open Peak for Climbing</span>
          </div>
          <div class="link-7">
          <span class="link-mountaineering-royalty"
          >Mountaineering Royalty</span
          >
          </div>
          <div class="link-8">
          <span class="link-terms-condition">Terms & Condition</span>
          </div>
          <div class="link-9">
          <span class="link-gears-equipment">Gears & Equipment</span>
          </div>
          <div class="link-a">
          <span class="link-visa-info">Visa Info</span>
          </div>
          <div class="link-b">
          <span class="link-travel-insurance">Travel Insurance</span>
          </div>
          <div class="link-c"><span class="link-d">Trainning</span></div>
          </div>
          <div class="container-e">
          <div class="link-f">
            <span class="link-10">Trekking Permit Fee</span>
            </div>
            <div class="link-11"><span class="link-12">FAQ</span></div>
            </div>
            </div>
            <div class="divider-13"></div>
            <div class="container-14">
            <div class="about">
            <div class="isolation-mode"></div>
            <div class="content">
            <span class="lorem-ipsum">Lorem Ipsum</span
            ><span class="lorem-ipsum-15"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam sollicitudin ligula imperdiet nibh facilisis, fermentum
            ullamcorper mi ultrices. Nullam vitae ex et ante porttitor
            consectetur. Mauris ut nibh ac d</span
            >
            </div>
            <div class="container-16">
            <button class="button-17">
            <span class="contact">About us</span>
            </button>
            <div class="social-icons">
            <div class="facebook-icon"></div>
            <div class="instagram-icon"></div>
            <div class="twitter-logo-png"></div>
            <div class="whatsapp-logo"></div>
            <div class="youtube-logo-icon"></div>
            </div>
            </div>
            </div>
            <div class="links">
            <span class="useful-links">Useful Links</span>
            <div class="container-18">
            <div class="container-19">
            <span class="trekking-in-nepal">Trekking in nepal</span>
              <div class="list">
              <div class="link-1a">
              <span class="link-1b">Everest region</span>
              </div>
              <div class="link-1c">
              <span class="makalu-region">Makalu region</span>
              </div>
              <div class="link-1d">
              <span class="langtang-region">Langtang region</span>
              </div>
              <div class="link-1e">
              <span class="mustang-region">Mustang region</span>
              </div>
              <div class="link-1f">
              <span class="kanchenjanga-region">Kanchenjanga region</span>
              </div>
              <div class="link-20">
              <span class="annapurna-region">Annapurna region</span>
              </div>
              <div class="link-21">
              <span class="manslu-region">Manslu region</span>
              </div>
              <div class="link-22">
              <span class="dhaulagiri-region">Dhaulagiri region</span>
              </div>
              </div>
              </div>
              <div class="container-23">
              <span class="expeditions">Expeditions</span>
              <div class="list-24">
              <div class="link-25"><span class="text-1c">8000m</span></div>
              <div class="link-26"><span class="text-1d">7000m</span></div>
              <div class="link-27">
              <span class="peak-climbing">Peak climbing</span>
              </div>
              </div>
              </div>
              <div class="container-28">
              <span class="other-activities">Other activities</span>
              <div class="list-29">
              <div class="link-2a">
              <span class="helicopter-tour">Helicopter tour</span>
              </div>
              <div class="link-2b">
              <span class="mountain-bike">Mountain bike</span>
              </div>
              <div class="link-2c"><span class="tours">Tours</span></div>
              </div>
              </div>
              <div class="container-2d">
              <span class="peak-climbing-2e">Peak climbing</span>
              <div class="list-2f">
              <div class="link-30">
              <span class="helicopter-tour-31">Helicopter tour</span>
              </div>
                <div class="mountain-bike-32">
                <span class="tours-33">Mountain bike</span>
                </div>
                <div class="link-34"><span class="link-35">Tours</span></div>
                </div>
                </div>
                <div class="container-36">
                <span class="x-m">14 X 8000M</span>
                <div class="list-37">
                <div class="link-38">
                <span class="everest">Everest (8,848.86 m)</span>
                </div>
                <div class="k2">
                <span class="kanchenjunga">K2 (8,611 m)</span>
                </div>
                <div class="lhotse">
                <span class="makalu">Kanchenjunga (8,586 m)</span>
                </div>
                <span class="cho-oyu">Lhotse (8,516 m)</span
                ><span class="dhaulagiri">Makalu (8,485 m)</span
                ><span class="container-39">Cho Oyu (8,188 m)</span
                ><span class="list-3a">Dhaulagiri (8,167 m)</span>
                </div>
                </div>
                <div class="link-3b">
                <div class="manaslu">
                <div class="nanga-parbat">
                <span class="annapurna-i">Manaslu</span>
                </div>
                <div class="gasherbrum-i">
                <span class="link-3c">Nanga Parbat (8,126 m)</span>
                </div>
                <div class="wrapper-10">
                <span class="text-31">Annapurna I (8,091 m)</span>
                </div>
                <div class="wrapper-11">
                <span class="text-32">Gasherbrum I (8,080 m)</span>
                </div>
                <div class="wrapper-12">
                <span class="broad-peak">Broad Peak (8,051 m)</span>
                </div>
                <div class="link-3d">
                <span class="gasherbrum-ii">Gasherbrum II (8,035 m)</span>
                </div>
                <div class="link-3e">
                <span class="shishapangma">Shishapangma (8,027 m)</span>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="divider-3f"></div>
                <div class="bottom">
                <div class="group-18">
                <span class="we-accepts">We accepts</span>
                <div class="container-40">
                <div class="visa-inc-logo"></div>
                <div class="mastercard-logo"></div>
                <div class="paypal-logo"></div>
                </div>
                </div>
                <div class="container-41">
                <span class="affiliated-with">Affiliated with</span>
                <div class="container-42">
                <div class="img-6"></div>
                <div class="pic-7"></div>
                <div class="img-7"></div>
                <div class="pic-8"></div>
                <div class="img-8"></div>
                <div class="pic-9"></div>
                <div class="img-9"></div>
                <div class="img-a"></div>
                </div>
                </div>
        <div class="section-f">
          <span class="recommended-by">Recommended by</span>
          <div class="group-43"></div>
          </div>
          </div>
          <div class="divider-44"></div>
          <div class="container-45">
          <span class="copyright-reserved"
          >Copyright © 2024, Gurukul Hub Pvt. Ltd. All Rights reserved.
          </span>
          </div>
          </div>
          <div class="pine-low"></div>
          <div class="pine-low-46"></div>
          </div>
          `;
        }
        
        
        
       
        createFooter();


  // Function to handle adding and removing the active class
const setActiveLink = (id) => {
    // Remove active class from all links
    document.querySelectorAll('.nav_links').forEach(link => {
        link.classList.remove('active');
    });
    // Add active class to the clicked link
    document.getElementById(id).classList.add('active');
    // Save the active link id to localStorage
    localStorage.setItem('activeLink', id);
};

// Add click event listeners to nav links
document.querySelectorAll('.nav_links').forEach((navLinkEl) => {
    navLinkEl.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior for demonstration purposes
        setActiveLink(event.currentTarget.id);
        // Navigate to the clicked link's href
        window.location.href = navLinkEl.href;
    });
});

// Set the active link on page load based on localStorage
document.addEventListener('DOMContentLoaded', () => {
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
        setActiveLink(activeLink);
    } else {
        // Set the default active link if no link is stored in localStorage
        setActiveLink('home'); // Default link is the home link
    }
});