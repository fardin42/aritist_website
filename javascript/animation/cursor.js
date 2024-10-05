let wallpaper = document.querySelector("#wallpaper");
let globe = document.querySelector("#globe")
wallpaper.addEventListener("mousemove", function (dex){
    gsap.to(globe, {
        y:dex.y - 180,
        x:dex.x - 120,
        duration:1.5,
        ease: "back.out",
    })

})
// scale cursor on element starts here
// let image = document.querySelector("#overlay");
// image.addEventListener("mousemove", function(){
    
//     gsap.to(cursoglobe, {
//         backgroundColor:"#ffffff47",

       
//     })
// })

// image.addEventListener("mouseleave", function(){

//     gsap.to(cursoglobe, {
       
     
//     })
// })