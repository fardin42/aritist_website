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
]
let cardCont = document.getElementById("cardCont")


card.map((value, index) => {

    let div = document.createElement("div")
    cardCont.appendChild(div)
    div.classList.add("grpImg")
    div.classList.add("cud")
    div.classList.add("col-xxl-4")
    div.classList.add("col-lg-4")
    div.classList.add("d-flex")
    div.classList.add("justify-content-center")

    for (let n = 0; card.length > n; n++) {
        div.innerHTML= `
                
        <div class="small_brdr paintsImg  cardEdits">
        <img src="${value.src}" alt="${value.alt}">
        </div>

          
`
    }
})
