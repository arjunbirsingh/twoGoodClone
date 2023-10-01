let main = document.querySelector("#main");
main.style.opacity = 0;
window.addEventListener("load", () => {
  main.style.opacity = 1;
});
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  mobile: {
    smooth: true,
  },
});
let body = document.body;
let playbtn = document.querySelector(".cont1 .play");
let video = document.querySelector(".cont1 video");
let videoCont = document.querySelector(".videoCont");
function playbtnMove(dets) {
  {
    if (window.innerWidth < 1400) {
    } else {
      playbtn.style.position = "fixed";
      playbtn.style.left = dets.x + "px";
      playbtn.style.top = dets.y + "px";
      playbtn.style.transform = `scale(1) translate(-50%,-50%) `;
    }
  }
}
function playbtnAll() {
  videoCont.addEventListener("mouseover", playbtnMove);
  videoCont.addEventListener("mousemove", playbtnMove);
  videoCont.addEventListener("mouseenter", playbtnMove);
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
let cont4 = document.querySelector(".cont4");
let cont4Items = document.querySelectorAll(".cont4 .item img");
let hoverDiv = document.querySelector(".cont4 .hoverDiv");
function hoverDivScaleUp(dets) {
  hoverDiv.style.transform = `scale(1) translate(-50%,-50%)`;
  hoverDiv.style.top = dets.y + "px";
  hoverDiv.style.left = dets.x + "px";
  hoverDiv.style.opacity = 1;
}
function hoverDivScaleDown() {
  hoverDiv.style.transform = `scale(0)`;
  hoverDiv.style.opacity = 0;
}
cont4Items.forEach((element) => {
  element.addEventListener("mousemove", hoverDivScaleUp);
});
cont4Items.forEach((element) => {
  element.addEventListener("mouseleave", hoverDivScaleDown);
});
