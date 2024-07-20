const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next img , .next') && slider.append(items[0])
  e.target.matches('.prev img , .prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);



// //////////////////////////////////////////////////---------------

let btnCG = document.querySelector(".pause .img1")
let btnCG2 = document.querySelector(".pause .img2")



let btn = document.querySelector("#pause ")
btnCG2.classList.toggle("d-none")
btnCG.classList.toggle("d-block")
btn.addEventListener("click", function () {
  console.log("hi");
a = true

    if (a == true) {
       btnCG.classList.toggle("d-none")
       btnCG2.classList.toggle("d-block")
       a = false
    }else{
        btnCG2.classList.toggle("d-none")
        btnCG.classList.toggle("d-block")
    }
}) 
    