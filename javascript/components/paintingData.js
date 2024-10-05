let card = [
    {
        type:"landscape",
        alt:"nature",
        src:"media/png/nature.png"

    },
    {
        type:"landscape",
        alt:"greenery",
        src:"media/png/greenery.png"

    },
    {
        type:"landscape",
        alt:"greenery",
        src:"media/png/greenery.png"

    },
    {
        type:"landscape",
        alt:"man & child",
        src:"media/jpg/p1.jpg"

    },
    {
        type:"landscape",
        alt:"tree",
        src:"/media/jpg/nil1.jpg"

    },
    {
        type:"landscape",
        alt:"temple scenario",
        src:"/media/jpg/p3.jpeg"
    },
    {
        type:"landscape",
        alt:"mountain scenario",
        src:"/media/jpg/p4.jpg"
    },
    {
        type:"landscape",
        alt:"beautiful temple",
        src:"/media/jpg/p5.jpg"
    },
    {
        type:"landscape",
        alt:"foggy",
        src:"/media/png/temple.png"
    },

]
let cardCont = document.getElementById("cardCont")


card.map((value, index) => {

    let div = document.createElement("div")
    cardCont.appendChild(div)
    div.classList.add("grpImg")
    div.classList.add("cud")
    div.classList.add("col-xxl-3")
    div.classList.add("col-lg-3")
    div.classList.add("col-md-8")
    div.classList.add("col-12")
    div.classList.add("d-flex")
    div.classList.add("justify-content-center")

    for (let n = 0; card.length > n; n++) {
        div.innerHTML= `
                
        <div class="small_brdr paintsImg  cardEdits">
         <div class="round_brdr">
        <img src="${value.src}" alt="${value.alt}">
         </div>
        </div>

          
`
    }
})
