window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY - 2850;
  const scrollPositionHero = window.scrollY;
  const scrollPositionExperts = window.scrollY - 5455 ;
  const heroCloud = document.querySelector('.hero-cloud');
  const cloud = document.querySelector('.cloud');
  const cloud1 = document.querySelector('.cloud-1');
  const expertscloud = document.querySelector('.expertscloud');
  const expertscloud1 = document.querySelector('.expertscloud-1');

  console.log(expertscloud)
  console.log(cloud)
  // Adjust these values to control the movement speed and direction
  const Speed = 0.1;

  cloud.style.transform = `translateX(${scrollPosition * Speed - 100}px)`;
  cloud1.style.transform = `translateX(${-scrollPosition * Speed - 80}px)`;
  heroCloud.style.transform = `translateX(${-scrollPositionHero * Speed}px)`;
  expertscloud.style.transform = `translateX(${scrollPositionExperts * Speed - 100}px)`;
  expertscloud1.style.transform = `translateX(${-scrollPositionExperts * Speed - 100}px)`;
});