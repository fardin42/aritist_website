// //////////  HEADER ARIVAL ANIMETION  //////////// //

let tl = gsap.timeline()

tl.to(".blank", {
    transform: "translateY(-100%)",
    delay: .75,
    duration: 1,
    ease: "ease.out"

})
tl.from(".logo", {
    y: 100,
    duration: 1,
    ease: "expo.out"
})
tl.from(".nav-left", {
    x: 400,
    duration: 1.25,
    opacity: 0,
    delay: .5,
    ease: "slow(0.7,0.7,false)",

}, "1")
tl.from(".nav-right", {
    x: -400,
    duration: 1.25,
    opacity: 0,
    delay: .5,
    ease: "slow(0.7,0.7,false)",
}, "1")
tl.from(".patch", {
    y: -200,
    duration: .75,
    opacity: 0,

    ease: "slow(0.7,0.7,false)",
}, "2")
tl.from(".wallpaper p", {
    y: -200,
    duration: 1.25,
    opacity: 0,

    ease: "slow(0.7,0.7,false)",
}, "2")
tl.from(".wallpaper .bigText", {
    x: -200,
    duration: 1.25,
    opacity: 0,

    ease: "slow(0.7,0.7,false)",
},)

tl.to(".autograph__path", {
    "stroke-dashoffset": 0,

    ease: "none",

    stagger: 0.15,
    repeat: -1,
    yoyo: true,

});
// //////////  HEADER ARIVAL ANIMETION END  //////////// //

// ////////// WISHLIST TO MEET PEOPLE ANIMETION  //////////// //

gsap.from(".wishlist ul li", {
    x: -100,
    y: -50,
    stagger: .2,
    opacity: 0,

    scrollTrigger: {
        trigger: "#meetUP",
        start: "top center",
        end: "top top",

    },

    transformOrigin: "left center",
    ease: "none"
});
// ////////// WISHLIST TO MEET PEOPLE ANIMETION END  //////////// //

//   ==============    COUNTER   ============= //

const items = document.querySelectorAll(".data");
gsap.from(items, {
    textContent: 0,
    duration: 2.5,
    ease: Power1.easeIn,
    snap: { textContent: 1 },
    delay:.5,
    scrollTrigger: {
        trigger: ".worth",
        start: "top 80%",
        end: "top top",

    },

});

//   ==============    COUNTER END   ============= //



const imgGrp = document.querySelectorAll(".imgGrp div");
gsap.from(imgGrp, {
    x: 200,
    duration: 1,
    ease: Power1.easeIn,
    snap: { textContent: 1 },
    stagger: .2,
    scrollTrigger: {
        trigger: ".awarded",
        start: "top 80%",
      

    },

});



// /////////  ABOUT ME  ////////// //

// white paper

gsap.from(".about_me " , {
  y:"-120%",
  duration:1,
//   opacity:0,
//   ease: "slow(0.7,0.7,false)",

scrollTrigger: {
            trigger: ".about_me",

            start: "top 20%",
     
    
        },
})


// ////////// artist image and experties //////////// //

gsap.from(".about_me .artistImg" , {

    duration:1,
    delay:1,
    opacity:0,
    ease: "slow(0.7,0.7,false)",
    stagger:.5,
  
  scrollTrigger: {
              trigger: ".about_me",
      
              start: "top 50%",
              // end: "top top",
      
          },
  })
  
// artist info
  gsap.from(".about_me .artistInfo " , {

    duration:1,
    delay:1.5,
    stagger:.5,
    opacity:0,
    ease: "slow(0.7,0.7,false)",
  
  scrollTrigger: {
              trigger: ".about_me",
      
              start: "top 50%",
     
      
          },
  })


  gsap.from(".OPT" , {
    x:200,
      scale:0,
    
        delay:3.5,
        duration:2,
        stagger:.5,
    
      
        ease: "expo.out",
      
      scrollTrigger: {
                  trigger: ".about_me",
          
                  start: "top 80%",
                 
          
              },
      })
  // ////////// artist image and experties END  //////////// //


  // /////////  more paintings  ////////// //
//   
  gsap.from(".paintsImg img" , {

    y:"110%",
rotate:-90,
   
    stagger:.5,
  
    ease: "slow(0.7,0.7,false)",
  
  scrollTrigger: {
              trigger: "#cardCont",
      
              start: "top 50%",
              
      
          },
  })

