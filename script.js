function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
init();

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x + 20+"px"
  crsr.style.top = dets.y + 20+"px"
})

gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7

})
var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top 22%",
      end: "top 0",
      scrub: 3
      // markers:true
  }
})
tl.to(".page1 h1", {
  x: -100,
}, "anim")
tl.to(".page1 h2", {
  x: 100
}, "anim")

tl.to(".page1 video", {
  width: "90%"
}, "anim")

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -115%",
      end: "top -120%",
      scrub: 3
  }
})
tl2.to(".main", {
  backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -280%",
      end: "top -300%",
      scrub: 3
  }
})

tl3.to(".main",{
  backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
      var att = elem.getAttribute("data-image")
      crsr.style.width = "470px"
      crsr.style.height = "370px"
      crsr.style.borderRadius = "0"
      crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
      elem.style.backgroundColor = "transparent"
      crsr.style.width = "20px"
      crsr.style.height = "20px"
      crsr.style.borderRadius = "50%"
      crsr.style.backgroundImage = `none`
  })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
      purple.style.display = "block"   
      purple.style.opacity = "1"
  })
  elem.addEventListener("mouseleave",function(){
      purple.style.display = "none"   
      purple.style.opacity = "0"
  })
})



//   navbar scrolling

document.addEventListener("wheel", function(dets){
  if(dets.offsetY > 500){
  if(dets.deltaY > 0){
      gsap.to("#nav",{
          top:"-165px",
        backgroundColor:"white",
        borderBottom : "1px solid dimgray",
          duration:0.4
           
      })
  }
}
  if(dets.deltaY < 0){
      gsap.to("#nav",{
          top:"0px",
          duration:0.4,
          backgroundColor:"transparent",
          borderBottom : "1px solid transparent",
          delay:0.6
      })
  }
})













// login

const loginButton = document.getElementById('loginButton');
const errorMessage = document.getElementById('errorMessage');

loginButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'your_username' && password === 'your_password') {
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.color = 'green';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.color = 'red';
    }
});
