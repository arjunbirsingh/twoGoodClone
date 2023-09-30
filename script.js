const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
let body = document.body;
let playbtn = document.querySelector(".cont1 .play");
let video = document.querySelector(".cont1 video");
let videoCont = document.querySelector(".videoCont");
function playbtnAll() {
  videoCont.addEventListener("mousemove", (dets) => {
    if (window.innerWidth < 1400) {
    } else {
      playbtn.style.position = "fixed";
      playbtn.style.left = dets.x + "px";
      playbtn.style.top = dets.y + "px";
      playbtn.style.transform = `scale(1) translate(-50%,-50%)`;
    }
  });
  videoCont.addEventListener("mouseleave", () => {
    // playbtn.style.left=dets.x+"px";
    // playbtn.style.top=dets.y+"px";
    if (window.innerWidth < 1400) {
    } else {
      playbtn.style.transform = `scale(0)`;
    }
  });
}
playbtnAll();
videoCont.addEventListener("click", () => {
  playbtn.style.display = "none";
  video.setAttribute("controls", "true");
});
gsap.from("nav", {
  opacity: 0,
  y: "-100%",
  duration: 1,
  ease: Expo,
});

gsap.from(".cont1 h1 p", {
  y: "200%",
  rotate: "15deg",
  duration: 1,
  ease: "easein",
});
gsap.from(".videoCont .play", {
  opacity: 0,
  y: "50%",
  duration: 1,
  ease: Expo,
});
