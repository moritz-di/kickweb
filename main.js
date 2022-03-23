gsap.registerPlugin(ScrollTrigger);

gsap.set(".section-1 .img-heart", {xPercent: 0, yPercent: 0}),
gsap.to(".section-1 .img-heart", {scale: 0, x: "0%", scrollTrigger: {
      trigger: ".section-1 .img-heart",
      start: "center center",
      end: "+=1000",
      //markers:true,
      pin:true,
      scrub: true
}})