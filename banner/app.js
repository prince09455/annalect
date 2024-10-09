let t1 = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.5
})
  
t1.from(".headline", { 
  duration: 1.5, 
  x: -200, 
  opacity: 0, 
  ease: "power4.out"
})
.from(".tagline", { 
  duration: 1.5, 
  x: -200, 
  opacity: 0, 
  ease: "power4.out"
}, "-=1.2")
.from(".cta-button", { 
  duration: 1.5, 
  y: 100, 
  opacity: 0, 
  ease: "back.out(1.7)"
}, "-=1.0")
.from(".marketing-image", { 
  duration: 2, 
  scale: 0.5, 
  opacity: 0, 
  ease: "elastic.out(1, 0.75)"
}, "-=1.5");
  

let t2 = gsap.timeline({
    repeat: -1,
    repeatDelay: 1
 });
      
t2.from(".banner-headline", { 
  duration: 1.5, 
  y: -100, 
  opacity: 0, 
  ease: "power4.out"
})
.from(".banner-tagline", { 
  duration: 1.5, 
  y: -100, 
  opacity: 0, 
  ease: "power4.out"
}, "-=1.2")
.from(".banner-cta-button", { 
  duration: 1.5, 
  y: 100, 
  opacity: 0, 
  ease: "back.out(1.7)"
}, "-=1.0")
.from(".banner-image", { 
  duration: 2, 
  scale: 0.5, 
  opacity: 0, 
  ease: "elastic.out(1, 0.75)"
}, "-=1.5");
      