let wallpaper = document.querySelector("#wallpaper");
let globe = document.querySelector("#globe")
wallpaper.addEventListener("mousemove", function (dex){
    gsap.to(globe, {
        y:dex.y ,
        x:dex.x ,
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