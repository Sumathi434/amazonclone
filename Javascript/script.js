const imgs = document.querySelectorAll(".image-slider ul li");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let n = 0; 

function slider() {
    for (let i = 0; i < imgs.length; i++) { 
        imgs[i].style.display = "none"; 
    }
    imgs[n].style.display = "block"; 
}
slider();

prevBtn.addEventListener("click", () => {
    if (n > 0) {
        n--; 
    } else {
        n = imgs.length - 1; 
    }
    slider(); 
});

nextBtn.addEventListener("click", () => {
    if (n < imgs.length - 1) {
        n++; 
    } else {
        n = 0; 
    }
    slider(); 
});

const productContainer = document.querySelector('.Produts');
const prevButton = document.querySelector('.slideprev');
const nextButton = document.querySelector('.slidenext');


prevButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    productContainer.scrollLeft -= 800;
});

nextButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    productContainer.scrollLeft += 800; 
});

