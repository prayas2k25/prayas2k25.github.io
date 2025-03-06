// import { startCountdown } from './countdown';
// import './style.css'
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  // GSAP Header Animation (Slides Down)
  gsap.from("header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
  gsap.from(".bongocat", {

  })
  // GSAP Home Title Animation
  gsap.from("#home h1", {
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)"
  });

  gsap.from("#home-title", {
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "elastic.out(1, 0.5)"
  });

  // ScrollTrigger.config({ 
  //   scroller: "main" 
  // });

  // Scroll-triggered Animations for Sections
  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 75%", // When 75% of the section is visible
        end: "top 30%", // Animation reverses when scrolled past
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animation for Event Cards
  gsap.utils.toArray(".anim").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });

    const scrollContainer = document.getElementById("scroll-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let scrollIndex = 0;

    nextBtn.addEventListener("click", () => {
      if (scrollIndex < 2) {
        scrollIndex++;

    const panelWidth = window.innerWidth;
        scrollContainer.scrollTo({ left: scrollIndex * panelWidth, behavior: "smooth" });
      }
    });

    prevBtn.addEventListener("click", () => {
      if (scrollIndex > 0) {
        scrollIndex--;

    const panelWidth = window.innerWidth;
        scrollContainer.scrollTo({ left: scrollIndex * panelWidth, behavior: "smooth" });
      }
    });
  
  


  document.querySelectorAll(".group").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        boxShadow: "0px 0px 40px #330145",
        duration: 0.2,
        backgroundColor: "#110040"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        boxShadow: "0px 0px 10px #00ffff",
        backgroundColor: "#00000000",
        duration: 0.2
      });
    });
  });

  document.querySelectorAll(".register-btn").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, 0, {transformOrigin:"50% 50%", scale:1.1});
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, 0, {transformOrigin:"50% 50%", scale:1});
    });
    
  });

  document.querySelectorAll(".committee-group").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, 0, {transformOrigin:"50% 50%", scale:1.1});
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, 0, {transformOrigin:"50% 50%", scale:1});
    });
    
  });

  

  // Smooth Scrolling for Navigation
  document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.target);
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

startCountdown(new Date(2025, 2, 15, 0, 0, 0).getTime());

// Enable horizontal scrolling with mouse drag
const scrollContainer = document.querySelector(".overflow-x-auto");

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  scrollContainer.classList.add("active");
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("mouseleave", () => {
  isDown = false;
  scrollContainer.classList.remove("active");
});

scrollContainer.addEventListener("mouseup", () => {
  isDown = false;
  scrollContainer.classList.remove("active");
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 2; // Multiply to increase speed
  scrollContainer.scrollLeft = scrollLeft - walk;
});


function startCountdown(targetDate) {
  function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
          document.getElementById("countdown").innerHTML = "Registrations Have Closed! 😔";
          clearInterval(interval);
          return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById("countdown").innerHTML = 
          `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  }
  
  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}

