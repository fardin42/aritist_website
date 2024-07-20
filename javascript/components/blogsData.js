let blog = [
    {
        
        alt:"group_image",
        src:"media/png/group_image.png",
        header:"Watercolor Landscape Outdoor Camp, Ajneri, Nashik.",
        date:"19th Jan, Mumbai",
        p:"Lorem ipsum dolor sit amet consectetur. Cursus ultricies ut ipsum lacinia molestie sagittis. At ut risus lectus amet faucibus. Magna luctus............."

    },
    {
        
        alt:"group_exebition",
        src:"/media/png/group_exebition.png",
        header:"Exhibition at Jahangir Art Gallery Mumbai.",
        date:"19th Jan, Mumbai",
        p:"Lorem ipsum dolor sit amet consectetur. Cursus ultricies ut ipsum lacinia molestie sagittis. At ut risus lectus amet faucibus. Magna luctus............."

    },
    {
        
        alt:"group_image",
        src:"/media/png/bombayArt_award.png",
        header:"Receiving Bombay Art Society First-Award.",
        date:"19th Jan, Mumbai",
        p:"Lorem ipsum dolor sit amet consectetur. Cursus ultricies ut ipsum lacinia molestie sagittis. At ut risus lectus amet faucibus. Magna luctus............."

    },
    {
        
        alt:"group_image",
        src:"media/png/group_image.png",
        header:"Watercolor Landscape Outdoor Camp, Ajneri, Nashik.",
        date:"19th Jan, Mumbai",
        p:"Lorem ipsum dolor sit amet consectetur. Cursus ultricies ut ipsum lacinia molestie sagittis. At ut risus lectus amet faucibus. Magna luctus............."

    },
    {
        
        alt:"group_exebition",
        src:"/media/png/group_exebition.png",
        header:"Exhibition at Jahangir Art Gallery Mumbai.",
        date:"19th Jan, Mumbai",
        p:"Lorem ipsum dolor sit amet consectetur. Cursus ultricies ut ipsum lacinia molestie sagittis. At ut risus lectus amet faucibus. Magna luctus............."

    },
    {
        
        alt:"group_image",
        src:"/media/png/bombayArt_award.png",
        header:"Receiving Bombay Art Society First-Award.",
        date:"19th Jan, Mumbai",
        p:"Lorem ipsum dolor sit amet consectetur. Cursus ultricies ut ipsum lacinia molestie sagittis. At ut risus lectus amet faucibus. Magna luctus............."

    },
]
let blogCont = document.getElementById("blogCont")


blog.map((value, index) => {

    let div = document.createElement("div")
    blogCont.appendChild(div)
    div.classList.add("card")
    div.classList.add("flex-column")
    div.classList.add("col-xl-3")
    div.classList.add("col-lg-3")
    div.classList.add("d-flex")
    div.classList.add("cardEdits")
    
    div.classList.add("justify-content-center")

    for (let n = 0; blog.length > n; n++) {
        div.innerHTML= `
                <div class="smallCircle"></div>
                    <div class="cardImg">
                        <img src="${value.src}" alt="${value.alt}">
                    </div>
                    <div class="cardInfo">
                        <h5>
                            ${value.header}
                        </h5>
                        <p>  ${value.p}</p>
                        <h6>  ${value.date}</h6>
                    </div>
                    

          
`
    }
})