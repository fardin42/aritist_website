let carousal = ()=>{
    let slide = [
        {
            h3:"Lorem ipusm is dummy text 1",

            src:"media/png/exebition_2.png",
            alt:1,
    
        },
        {
        
       
            src:"media/png/exebition_1.png",
            alt:2,
    
        },
        {

            src:"media/png/exebition_3.png",
            alt:3,
    
        },
        {
            
            src:"media/png/exebition_4.png",
            alt:4,
    
        },
        {

            src:"media/png/group_exebition.png",
            alt:5,
    
        },
    ]
    
    let slider_cont = document.getElementById("sliderCont")
    let slider_heading = document.getElementById("sliderHeading")
    slide.map((value, index) => {

        let li = document.createElement("li")
       
        slider_cont.appendChild(li)
        let divs = document.createElement("div")
        slider_heading.appendChild(divs)
        li.classList.add("item")
    
        divs.classList.add("content")
        li.style.backgroundImage = `url(${value.src})`  
        



    })


}
carousal()











const slider = document.querySelector('.slider');



function activate(e) {
    
  const items = document.querySelectorAll('.item');
  e.target.matches('.next img , .next') && slider.append(items[0])
  e.target.matches('.prev img , .prev') && slider.prepend(items[items.length-1]);
  
}

document.addEventListener('click',activate,false);




// ==============================  carousal heading  =============== //



// Assuming you have an array of heading-description pairs
const headingDescriptions = [
    {
        heading: "Welcome to our Awesome Website!",
        description: "Explore our innovative features and discover a world of possibilities.",
    },
    {
        heading: "Discover the Magic of Web Animation",
        description: "Learn how animations can enhance user experiences and captivate your audience.",
    },
    {
        heading: "Crafting Beautiful User Experiences",
        description: "Design matters! Dive into creating seamless and delightful interfaces.",
    },
    {
        heading: "Stay Curious, Keep Coding!",
        description: "Embrace continuous learning and stay curious in the ever-evolving web world.",
    },
    // Add more heading-description pairs as needed
];

let currentPairIndex = 0; // Initialize with the first pair

function showNextPair() {
    currentPairIndex = (currentPairIndex + 1) % headingDescriptions.length;
    // Display the next heading and description
    const { heading, description } = headingDescriptions[currentPairIndex];
    document.getElementById("carouselHeading").textContent = heading;
    document.getElementById("carouselDescription").textContent = description;
}

function showPreviousPair() {
    currentPairIndex = (currentPairIndex - 1 + headingDescriptions.length) % headingDescriptions.length;
    // Display the previous heading and description
    const { heading, description } = headingDescriptions[currentPairIndex];
    document.getElementById("carouselHeading").textContent = heading;
    document.getElementById("carouselDescription").textContent = description;
}

// Show the initial heading and description (first pair)
showNextPair();

// Example usage:
// Assuming you have left and right buttons with IDs "leftButton" and "rightButton"
document.getElementById("leftButton").addEventListener("click", showPreviousPair);
document.getElementById("rightButton").addEventListener("click", showNextPair);

function animeHeading() {
    gsap.from("#carouselHeading, #carouselDescription", {
        delay:.15,
        opacity:0,
        y:"20",
        duration:.95,
        stagger:.35

    })
  }

