lucide.createIcons();

const readMore = Array.from(document.querySelectorAll(".myButton"));
const descriptions = Array.from(document.querySelectorAll(".description"));
const descriptionsArray = [
  "Overlooking southwest Barcelona and believed to be the city's birthplace, Montjuic Park is a green hilltop getaway, packed with history and attractions. Montjuïc is not only an urban park, it’s also a hill with incredible views and various cultural landmarks.",
  "Park Güell, Barcelona's iconic landmark, captivates visitors with its mesmerizing architecture crafted by the visionary artist Antoni Gaudí. Offering breathtaking panoramas of the cityscape, the park mesmerizes with vibrant mosaic artworks that adorn its pathways, drawing your gaze in every direction.",
  "Located near the city center, Parc de la Ciutadella boasts lush greenery, serene ponds, and impressive sculptures. It's a favorite spot for picnics, leisurely walks, and outdoor activities, like boat rowing. It is believed to be a green oasis inside the city of Barcelona and is very popular amongst families.",
];
const parkArray = ["Montjuic Park", "Güell Park", "Parc de la Ciutadella"];

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
const parkNames = document.querySelectorAll(".card-text");

let currentCity = "Valencia";

carousel.forEach((carousel) => {
  carousel.addEventListener("click", function () {
    const city = document.querySelector(".city");
    if (currentCity === "Valencia") {
      currentCity = "Barcelona";
    } else {
      currentCity = "Valencia";
    }
    city.innerHTML = currentCity;

    cardImages.forEach((img, i) => {
      img.src = `images/${currentCity}/image${i + 1}.jpg`;
      parkNames[i].innerHTML = parkArray[i];
      descriptions[i].innerHTML = descriptionsArray[i];
    });
  });
});
