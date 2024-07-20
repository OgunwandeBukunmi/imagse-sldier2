const images = document.querySelectorAll("img");
const button = document.querySelectorAll(".btn");

let imagesArray = [];

images.forEach((img) => {
  imagesArray.push(img);
});

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let currentImg;
    images.forEach((img) => {
      if (img.classList.contains("visible")) {
        let currentIndex = imagesArray.indexOf(img);
        currentImg = { img, currentIndex };
      }
    });

    if (
      btn.classList.contains("right") &&
      images.length != currentImg.currentIndex + 1
    ) {
      currentImg.img.classList.remove("visible");
      images[currentImg.currentIndex + 1].classList.add("visible");
    } else if (btn.classList.contains("left") && currentImg.currentIndex != 0) {
      currentImg.img.classList.remove("visible");
      images[currentImg.currentIndex - 1].classList.add("visible");
    }
  });
});
