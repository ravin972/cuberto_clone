Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: [
    "https://static.videezy.com/system/resources/previews/000/045/207/original/bokeh_gradient.mp4",
    "https://static.videezy.com/system/resources/previews/000/050/851/original/200610-LoopPinkBlueBlurZoom.mp4",
    "https://static.videezy.com/system/resources/previews/000/039/550/original/Gradient_Background_Loop.mp4",
  ],
});

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: ".fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
