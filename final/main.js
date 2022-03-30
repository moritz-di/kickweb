gsap.registerPlugin(ScrollTrigger);

// alpha -> 1. hello
gsap.set("#alpha .lyrics .one", {y: 20, opacity: 0}),
gsap.to("#alpha .lyrics .one", {y: 0, opacity: 1, scrollTrigger: {
      trigger: "#alpha",
      start: "top top",
      end: "+=100",
      //markers:true,
      scrub: .5
}});

// alpha -> 2. hello
gsap.set("#alpha .lyrics .two", {y: 20, opacity: 0}),
gsap.to("#alpha .lyrics .two", {y: 0, opacity: 1, scrollTrigger: {
      trigger: "#alpha",
      start: "30 top",
      end: "+=100",
      //markers:true,
      scrub: .5
}});

// alpha -> 3. hello
gsap.set("#alpha .lyrics .three", {y: 20, opacity: 0}),
gsap.to("#alpha .lyrics .three", {y: 0, opacity: 1, scrollTrigger: {
      trigger: "#alpha",
      start: "60 top",
      end: "+=100",
      //markers:true,
      scrub: .5
}});

// beta -> is there anybody
gsap.to(".topdown span", {y: -750, scrollTrigger: {
      trigger: ".topdown",
      start: "top 50%",
      end: "+=800",
      //markers:true,
      scrub: .5
}});

// beta -> in there
gsap.set("#beta .lyrics .move-up", {y: "100%"}),
gsap.to("#beta .lyrics .move-up", {y: "0", scrollTrigger: {
      trigger: ".move-up",
      start: "center 95%",
      end: "+=200",
      //markers:true,
      scrub: .5
}});

// gamma -> nod
gsap.set("#gamma .nod", {rotation: -20}),
gsap.to("#gamma .nod", {rotation: 20, scrollTrigger: {
      trigger: "#gamma .nod",
      start: "top center",
      end: "+=200",
      //markers:true,
      scrub: .5
}});

// delta -> text
gsap.set("#delta .lyrics span", {x: "-100vw"}),
gsap.to("#delta .lyrics span", {x: 0, scrollTrigger: {
      trigger: "#delta .lyrics span",
      start: "top 70%",
      end: "+=300",
      //markers: true,
      scrub: .5
}});

// delta -> img (anyone)
gsap.set("#delta .visual .vis-clip", {height: 0}),
gsap.to("#delta .visual .vis-clip", {height: "100vh", scrollTrigger: {
      trigger: "#delta .visual .vis-clip",
      start: "center center",
      end: "+=500",
      //markers:true,
      scrub: .5
}});

// epsilon -> visual (home)
gsap.set("#epsilon .visual", {opacity: 0, y: 20}),
gsap.to("#epsilon .visual", {opacity: 1, y: 0, scrollTrigger: {
      trigger: "#epsilon .visual",
      start: "top 70%",
      end: "+=100",
      //markers: true,
      scrub: .5
}});

// zeta -> come on
gsap.set("#zeta .come-on-container .two", {y: 0}),
gsap.to("#zeta .come-on-container .two", {y: 70, scale: 0.8, scrollTrigger: {
      trigger: "#zeta .come-on-container",
      start: "top 70%",
      end: "+=200",
      //markers: true,
      scrub: .5
}});

gsap.set("#zeta .come-on-container .three", {y: 0}),
gsap.to("#zeta .come-on-container .three", {y: 130, scale: 0.6, scrollTrigger: {
      trigger: "#zeta .come-on-container",
      start: "top 70%",
      end: "+=200",
      //markers: true,
      scrub: .5
}});

// zeta -> now
gsap.set("#zeta .now", {y: "100%"}),
gsap.to("#zeta .now", {y: "10%", scrollTrigger: {
      trigger: "#zeta .now",
      start: "-80% bottom",
      end: "+=500",
      //markers: true,
      scrub: .5
}});

// eta -> I hear you're feeling
gsap.set("#eta .feeling", {opacity: 0}),
gsap.to("#eta .feeling", {opacity: 1, scrollTrigger: {
      trigger: "#eta .feeling",
      start: "bottom bottom",
      end: "+=100",
      //markers: true,
      scrub: .5
}});

// eta -> img (hand)
gsap.set("#eta .vis-clip", {height: 0}),
gsap.to("#eta .vis-clip", {height: "60vh", scrollTrigger: {
      trigger: "#eta .vis-clip",
      start: "bottom center",
      end: "+=500",
      //markers: true,
      scrub: .5
}});

// eta -> down
gsap.set("#eta .down", {opacity: 0}),
gsap.to("#eta .down", {opacity: 1, scrollTrigger: {
      trigger: "#eta .down",
      start: "bottom 70%",
      end: "+=100",
      //markers: true,
      scrub: .5
}});


// theta -> I have become
gsap.set("#text-one", {attr:{startOffset: 0}});
gsap.set("#text-two", {attr:{startOffset: 300}});
gsap.set("#text-three", {attr:{startOffset: 600}});
gsap.set("#text-four", {attr:{startOffset: 900}});
gsap.set("#text-five", {attr:{startOffset: 1200}});

gsap.to(".text-on-path", {attr:{startOffset: -9000}, scrollTrigger: {
      trigger: "#theta",
      start: "top top",
      end: "+=2000",
      //markers: true,
      scrub: .5,
      pin: true
}});