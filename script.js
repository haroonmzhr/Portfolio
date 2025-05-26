// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
gsap.utils.toArray('.section').forEach((section) => {
  gsap.fromTo(section, 
    { opacity: 0, y: 60 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 2,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

const aboutSections = document.querySelectorAll('.about-content section');

aboutSections.forEach((section, i) => {
  const direction = i % 2 === 0 ? -100 : 100; // left or right start

  gsap.fromTo(section, 
    { x: direction, opacity: 0 }, 
    { 
      x: 0, 
      opacity: 1, 
        duration: 2,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 60%",
          // fade in and slide in, fade out and slide out on scroll away
        // markers: true  // for debugging
      }
    });
});


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.skills-grid .skill').forEach(skill => {
  gsap.fromTo(skill, 
    { opacity: 0, scale: 0.8 }, 
    { 
      opacity: 1, 
      scale: 1, 
        duration: 2,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: skill,
        start: "top 90%",      // when skill enters viewport bottom 90%
        end: "bottom 60%",     // when skill leaves top 60%
       
        // markers: true       // uncomment to debug trigger positions
      }
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

const projects = document.querySelectorAll('.project-list .project');

projects.forEach((project, i) => {
  const direction = i % 2 === 0 ? -100 : 100; // even from left, odd from right

  gsap.fromTo(project, 
    { x: direction, opacity: 0 }, 
    { 
      x: 0, 
      opacity: 1, 
        duration: 2,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: project,
        start: "top 80%",
        end: "bottom 60%",
       
        // markers: true
      }
    });
});


gsap.registerPlugin(ScrollTrigger);

// Animate the essay block: fade in + slide up on scroll
gsap.from('.essay', {
  y: 50,
  opacity: 0,
    duration: 2,
      delay: 0.3,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.essay',
    start: 'top 80%',
    toggleActions: 'play reverse play reverse',
    // markers: true
  }
});

// Pulse glow on essay title after animation completes
ScrollTrigger.create({
  trigger: '.essay-title',
  start: 'top 80%',
  onEnter: () => gsap.to('.essay-title', {
    boxShadow: '0 0 20px rgba(255, 100, 50, 0.8)',
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: 'power1.inOut'
  }),
  onLeaveBack: () => gsap.killTweensOf('.essay-title')
});



gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.hobbies-list li').forEach((item, i) => {
  gsap.fromTo(item, 
    { y: 50, opacity: 0 }, 
    { 
      y: 0, 
      opacity: 1, 
        duration: 2,
      delay: 0.3,
      ease: "bounce.out",
      delay: i * 0.15, // stagger effect
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        end: "bottom 60%",
        // markers: true,
      }
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.contact-form-wrapper',
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
      duration: 2,
      delay: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.contact-form-wrapper',
      start: 'top 80%',
      end: 'bottom 60%',
     
      // markers: true,
    }
  }
);

gsap.fromTo('.contact-info',
  { x: 100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 80%',
      end: 'bottom 60%',
     
      // markers: true,
    }
  }
);

const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent normal form submission

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.textContent = "Thank you! Your message has been sent.";
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          status.textContent = data.errors.map(error => error.message).join(", ");
        } else {
          status.textContent = "Oops! There was a problem submitting your form.";
        }
      }
    } catch (error) {
      status.textContent = "Oops! There was a problem submitting your form.";
    }
  });
  // GSAP Animation for Writing Section
gsap.registerPlugin(ScrollTrigger);

gsap.from(".essay", {
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".writing-section",
    start: "top 85%",
  }
});
