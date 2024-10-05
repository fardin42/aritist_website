gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    // lerp:0.1,
    smartphone:{
        smooth:true,
        
    }
});

scroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? scroll.scrollTo(value, {duration: 0, disableLerp: true}) : scroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.defaults({ scroller: "[data-scroll-container]" });
// --- SETUP END ---

// wishlist 

// gsap.from(".wishlist ul li", {
//     y:100,
   
//     duration:1,
//     stagger:0.4,
//     scrollTrigger:{
//         trigger: "#meetUP",
//         scroller: "body",
//         markers: true,
//         start:"top 50%"
//     }
// })


