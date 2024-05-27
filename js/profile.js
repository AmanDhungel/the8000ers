document.addEventListener('DOMContentLoaded', () => {
    // Initial setup
    setupGroupEventListeners();
});

function setupGroupEventListeners() {
    const profiledynamic = document.querySelector('.profile-dynamic');
 
    let about = document.querySelector('.about');
    let resume = document.querySelector('.resume');
    let blog = document.querySelector('.blog');
    let contact = document.querySelector('.contact');
    let work = document.querySelector('.work');
    
    about.addEventListener('click', () => {
        about1();
    });
    resume.addEventListener('click', () => {
        resume1();
    });
    blog.addEventListener('click', () => {
        blog1();
    });
    contact.addEventListener('click', () => {
        contact1();
    });
    work.addEventListener('click', () => {
        work1();
    });

    

}


function about1(){
    const profiledynamic = document.querySelector('.profile-dynamic'); 
    profiledynamic.innerHTML = ` <div class="about-container">
     <span class="about">About</span>
     <div class="line"></div>
     <span class="lorem-ipsum"
       >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
       porta odio. Morbi imperdiet ligula eu nisl viverra, et laoreet erat
       faucibus. In a velit at neque tincidunt elementum. Maecenas ultrices
       sollicitudin quam et hendrerit. Praesent tempus turpis mi, sed aliquet
       lectus dapibus in. Interdum et malesuada fames ac ante ipsum primis in
       faucibus.</span
     ><span class="my-services">My Services</span>
     <div class="frame">
       <div class="frame-1">
         <div class="group-2"></div>
         <span class="lorem-ipsum-3">Lorem Ipsum</span
         ><span class="lorem-ipsum-4"
           >Lorem ipsum dolor sit amet, consectetur adipiscing elit. endrerit.
           Praesent tempus turpis mi.</span
         >
       </div>

    
       <div class="line-5">   <hr></div>
       <div class="frame-6">
         <div class="group-7"></div>
         <span class="lorem-ipsum-8">Lorem Ipsum</span
         ><span class="lorem-ipsum-dolor"
           >Lorem ipsum dolor sit amet, consectetur adipiscing elit. endrerit.
           Praesent tempus turpis mi.</span
         >
       </div>
     </div>
   </div>`
}

function resume1(){
    const profiledynamic = document.querySelector('.profile-dynamic');

    profiledynamic.innerHTML = `   <div class="about-container">
    <span class="about">Resume</span>
    <div class="resume-textsec">
        <h1>Andrey Rublev</h1>
        <p style="color: orange; margin-top: -20px;">UI/UX Designer</p>

        <div>
            <h2>Contact</h2>
            <p><i class="fa-solid fa-envelope"></i>mehedihasankhan153@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i> +8801633165851</p>
            <p><i class="fa-solid fa-location-dot"></i>Joydevpur,Gazipur,Bangladesh </p>
        </div>
        <div>
            <h2>portfolio</h2>
            <p><i class="fa-brands fa-behance"></i>www.behance.net/mehedihasankhan1</p>
            <p><i class="fa-brands fa-dribbble"></i> www.dribbble.com/mehedihasan5851</p>
        </div>
        <div>
            <h2>Education</h2>
            <p style="margin-right: 40px;"><span>Institution:</span>Model Institute of Science and
                Technology (Under National University)</p>
            <p><span>Degree: </span> www.dribbble.com/mehedihasan5851</p>
            <p><span>Subject: </span> www.dribbble.com/mehedihasan5851</p>
            <p><span>Result:  </span> www.dribbble.com/mehedihasan5851</p>
        </div>
        <div>
            <h2>Hard Skills</h2>
            <p>Problem Solving</p>
            <p> Wireframing</p>
            <p>Responsive Design</p>
            <p>Usability Testing</p>
            <p>Prototyping </p>
            <p>High Fidelity Design</p>
        </div>
        <div class="technical-skills">
            <h2>Technical Skills</h2>
           <div>
            <img src="./asset/our-teams/figma.png" alt="">
            <h5>Figma</h5>
            <br>
        </div>
        <progress value="95" max="100"></progress>
           <div>
            <img src="./asset/our-teams/figma.png" alt="">
            <h5>Figma</h5>
            <br>
        </div>
        <progress value="95" max="100"></progress>
           <div>
            <img src="./asset/our-teams/figma.png" alt="">
            <h5>Figma</h5>
            <br>
        </div>
        <progress value="60" max="100"></progress>
           <div>
            <img src="./asset/our-teams/figma.png" alt="">
            <h5>Figma</h5>
            <br>
        </div>
        <progress value="70" max="100"></progress>
        </div>
        <div>
            <h2>Languages</h2>
            <p>Problem Solving</p>
            <p> Wireframing</p>
            <p>Responsive Design</p>
         
        </div>

        <div class="interest">
            <h2>interest</h2>
            <div>
                <p>Problem Solving</p>
                <p> Wireframing</p>
                <p>Responsive Design</p>
            </div>
        </div>

    </div>
    </div>`
}




function blog1(){
    const profiledynamic = document.querySelector('.profile-dynamic');

    profiledynamic.innerHTML = ` <div class="about-container">
    <span class="about">Blog</span>
    <div class="blog">
        <div class="blog-container">
            <div class="rectangle"></div>
            <div class="content">
              <div class="heading">
                <button class="a-badge"><span class="text">Lorem Ipsum</span></button
                ><span class="title"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </div>
              <div class="short-info">
                <div class="author">
                  <div class="image"></div>
                  <span class="author-name">Tracey Wilson</span>
                </div>
                <span class="publish-date">August 20, 2022</span>
              </div>
            </div>
          </div>
        <div class="blog-container">
            <div class="rectangle"></div>
            <div class="content">
              <div class="heading">
                <button class="a-badge"><span class="text">Lorem Ipsum</span></button
                ><span class="title"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </div>
              <div class="short-info">
                <div class="author">
                  <div class="image"></div>
                  <span class="author-name">Tracey Wilson</span>
                </div>
                <span class="publish-date">August 20, 2022</span>
              </div>
            </div>
          </div>
        <div class="blog-container">
            <div class="rectangle"></div>
            <div class="content">
              <div class="heading">
                <button class="a-badge"><span class="text">Lorem Ipsum</span></button
                ><span class="title"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </div>
              <div class="short-info">
                <div class="author">
                  <div class="image"></div>
                  <span class="author-name">Tracey Wilson</span>
                </div>
                <span class="publish-date">August 20, 2022</span>
              </div>
            </div>
          </div>
        <div class="blog-container">
            <div class="rectangle"></div>
            <div class="content">
              <div class="heading">
                <button class="a-badge"><span class="text">Lorem Ipsum</span></button
                ><span class="title"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </div>
              <div class="short-info">
                <div class="author">
                  <div class="image"></div>
                  <span class="author-name">Tracey Wilson</span>
                </div>
                <span class="publish-date">August 20, 2022</span>
              </div>
            </div>
          </div>
    </div>
    <button class="see-more">See More</button>
    </div>`

}
function contact1(){
    const profiledynamic = document.querySelector('.profile-dynamic');

    profiledynamic.innerHTML = `
    <div class="about-container">
    <span class="about">Contact</span>
    <div class="contact">
     <h2>Info</h2>
     <div>
         <ul>
             <li>Phone</li>
             <li>Email</li>
             <li>Birthday</li>
             <li>Address</li>
             <li>Gender</li>
             <li>Reports to</li>
            </ul>
            <ul>
                <li style="font-size: 25px; margin-top: -5px;">:</li>
                <li style="font-size: 25px;">:</li>
                <li style="font-size: 25px;">:</li>
                <li style="font-size: 25px;">:</li>
                <li style="font-size: 25px;">:</li>
                <li style="font-size: 25px;">:</li>
            </ul>
            <ul>
                <li>98765432222</li>
                <li>abc@gmail.com</li>
                <li>24th July,1998</li>
                <li>Kathmandu, Nepal</li>
                <li>Female</li>
                <li>Lorem Ipsum</li>
            </ul>
        </div>
     <h2>Personal Informations</h2>
     <div>
        <ul>
            <li>Citizenship No.</li>
            <li>Phone</li>
            <li>Nationality</li>
            <li>Religion</li>
            <li>Marital status</li>
           </ul>
           <ul>
               <li style="font-size: 25px; margin-top: -5px;">:</li>
               <li style="font-size: 25px;">:</li>
               <li style="font-size: 25px;">:</li>
               <li style="font-size: 25px;">:</li>
               <li style="font-size: 25px;">:</li>
           </ul>
           <ul>
               <li>12xxxxxxxxxxxx</li>
               <li>986237232</li>
               <li>Nepali</li>
               <li>Hindu</li>
               <li>Single</li>
           </ul>
       </div>
    </div>
    </div>`

}
function work1(){
    const profiledynamic = document.querySelector('.profile-dynamic');

    profiledynamic.innerHTML = `<div class="about-container">
    <span class="about">Contact</span>
    <div class="work">
        <div class="work-container">
            <div class="switz"></div>
            <div class="rectangle">
              <div class="dec-lorem-ipsum">
                <span class="dec">DEC, 08, 2020<br /></span
                ><span class="lorem-ipsum">LOREM IPSUM:<br /></span
                ><span class="br"><br /></span>
              </div>
              <div class="line"><hr></div>
              <span class="lorem-ipsum-text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                gravida ligula ac ligula sollicitudin vehicula. Aenean malesuada
                feugiat ante, sLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam gravida ligula ac ligula sollicitudin vehicula. Aenean
                malesuada feugiat ante, s</span
              ><button class="rectangle-1">
                <span class="read-more">READ MORE</span>
              </button>
            </div>
          </div>
        <div class="work-container">
            <div class="rectangle" style="left: 25%;">
                <div class="dec-lorem-ipsum">
                    <span class="dec">DEC, 08, 2020<br /></span
                        ><span class="lorem-ipsum">LOREM IPSUM:<br /></span
                            ><span class="br"><br /></span>
                        </div>
                        <div class="line"><hr></div>
                        <span class="lorem-ipsum-text"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        gravida ligula ac ligula sollicitudin vehicula. Aenean malesuada
                        feugiat ante, sLorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nullam gravida ligula ac ligula sollicitudin vehicula. Aenean
                        malesuada feugiat ante, s</span
                        ><button class="rectangle-1">
                            <span class="read-more">READ MORE</span>
                        </button>
                    </div>
                    <div class="switz" style="left: 90%;"></div>
                </div>
        <div class="work-container">
            <div class="switz"></div>
            <div class="rectangle">
              <div class="dec-lorem-ipsum">
                <span class="dec">DEC, 08, 2020<br /></span
                ><span class="lorem-ipsum">LOREM IPSUM:<br /></span
                ><span class="br"><br /></span>
              </div>
              <div class="line"><hr></div>
              <span class="lorem-ipsum-text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                gravida ligula ac ligula sollicitudin vehicula. Aenean malesuada
                feugiat ante, sLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam gravida ligula ac ligula sollicitudin vehicula. Aenean
                malesuada feugiat ante, s</span
              ><button class="rectangle-1">
                <span class="read-more">READ MORE</span>
              </button>
            </div>
          </div>
        <div class="work-container">
            <div class="rectangle" style="left: 25%;">
                <div class="dec-lorem-ipsum">
                    <span class="dec">DEC, 08, 2020<br /></span
                        ><span class="lorem-ipsum">LOREM IPSUM:<br /></span
                            ><span class="br"><br /></span>
                        </div>
                        <div class="line"><hr></div>
                        <span class="lorem-ipsum-text"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        gravida ligula ac ligula sollicitudin vehicula. Aenean malesuada
                        feugiat ante, sLorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nullam gravida ligula ac ligula sollicitudin vehicula. Aenean
                        malesuada feugiat ante, s</span
                        ><button class="rectangle-1">
                            <span class="read-more">READ MORE</span>
                        </button>
                    </div>
                    <div class="switz" style="left: 90%;"></div>
                </div>
    </div>
    </div>
    `

}
// function resume1(){
//     const profiledynamic = document.querySelector('.profile-dynamic');

//     profiledynamic.innerHTML = ``

// }