lucide.createIcons();

const readMore = Array.from(document.querySelectorAll(".myButton"));
const descriptions = Array.from(document.querySelectorAll(".description"));
const descriptionsArray = ["Image 1 Barcelona", "Image 1 Barcelona", "Image 1 Barcelona"];

descriptions.forEach((description) => {
  description.style.display = "none";
});

readMore.forEach((button, index) => {
  button.addEventListener("click", function () {
    console.log("click");
    descriptions[index].style.display = "block";
  });
});

const carousel = document.querySelectorAll('[data-bs-target="#carouselExampleFade"]');
const cardImages = document.querySelectorAll(".card-img-top");

carousel.forEach((carousel) => {
  carousel.addEventListener("click", function () {
    console.log("click");
    cardImages.forEach((img, i) => {
      img.src = `images/Barcelona/image${i + 1}.jpg`; // Adjust index to match image numbering
    });
  });
});
