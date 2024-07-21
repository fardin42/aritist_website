gsap.to(".stars .one , .stars .two", {
    rotate:90,
    duration:1.5,
    repeat:-1,

    ease: "power1.inOut",
  
})


gsap.from(".purple_patch", {
    x:"-40%",
    y:"-20%",
    duration:2,
    width:"800px",
    height:"800px",
    backgroundColor: "#044BB5",
  filter: "blur(0px)",


    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".banner ", 
        start: "top 50%",
        end: "bottom top",
    },
})

gsap.from('.paintR2L, img[alt="temple"]', {
    x:"120%",
    duration:1,

  filter: "blur(10px)",
 ease: "power1.inOut",
 stagger:.5,
 delay:.5,
 scrollTrigger: {
    trigger: ".banner ",
    start: "top 60%",
 
    end: "top top",

},
})

gsap.from('.clip', {
  
    maskImage: "linear-gradient(269.96deg, #044BB5 -1.37%, rgb(169 193 230 / 97%) 100%, transparent 99.97%)",
    duration:1,


 ease: "power1.inOut",

 scrollTrigger: {
    trigger: ".exibitions ",


    start: "top 50%",
 
    end: "bottom top",

},
})

gsap.from(' .exibitions hgroup, .nav', {
    opacity:0,

      duration:.75,
stagger:1,
  
   ease: "power1.inOut",
  
   scrollTrigger: {
      trigger: ".exibitions ",
  
 
      start: "top 50%",
   
  
  
  },
  })

//   card hover anime border and blur cursor  class=>  cardEdits

let hoverCard = document.getElementsByClassName("cardEdits")
let paintsImg = document.getElementsByClassName("paintsImg")
let hoverCardDot = document.querySelectorAll(".cardEdits  img")

for (let i = 0; i < hoverCard.length; i++) {
 let hCard = hoverCard[i]
let dot = hoverCardDot[i]
 hCard.addEventListener("mouseenter", function () {
    console.log("hey");
    gsap.to(dot, {
    scale:1.2,
        duration:1,
    })
   
})
hCard.addEventListener("mouseleave", function () {
      
    gsap.to(dot, {
    scale:1,
        duration:1,
        
    })

})
}


let pauseBtn = document.getElementById("pause");

let sticks = gsap.timeline()
sticks.to(".stick", {
    height: "100%",

    duration: .5,
    stagger: 0.1,
    repeat: -1,
    opacity: 0,
})
pauseBtn.onclick = function () {
    sticks.paused(!sticks.paused())
    pauseBtn.innerHTML = sticks.paused() ? ` <img class=" img2" src="media/svg/play_button.svg" alt="circle play">` : `<img class=" img1" src="media/svg/circle-pause.svg" alt="circle pause">  <audio src="media/audio/lofi-onemp3.mp3" autoplay loop></audio>`;
    
}