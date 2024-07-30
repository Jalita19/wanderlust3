const imageContainerE1 = document.querySelector(".image-container")

const btnE1 = document.querySelector(".btn")

btnE1.addEventListener("click", () => {
    imagenum= 10;
    addnewimages();
});
    
    function addnewimages(){
        for (let index = 0; index < imagenum; index++) {
            const newimgE1 = document.
    createElement("img");
    newimgE1.src= "https://picsum.photos/300?random=${Math.floor(Math.random)*2000}"
)};
imageContainerE1.appendChild(newimgE1);