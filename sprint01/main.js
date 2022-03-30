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
      end: "+=500",
      //markers:true,
      scrub: .5
}});

// beta -> in there
gsap.set("#beta .lyrics .move-up", {y: 200}),
gsap.to("#beta .lyrics .move-up", {y: 0, scrollTrigger: {
      trigger: ".move-up",
      start: "top bottom",
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