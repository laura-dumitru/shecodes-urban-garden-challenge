lucide.createIcons();

const readMore = Array.from(document.querySelectorAll(".myButton"));
const descriptions = Array.from(document.querySelectorAll(".description"));
const descriptionsArray = [
  "Overlooking southwest Barcelona, Montjuic Park is the city’s green hilltop getaway, packed with history and attractions. Montjuïc is not only a park, it’s also a very prominent hill located right next to the Mediterranean. Archaeologists and historians believe it to be the birthplace of Barcelona. The park provides various cultural landmarks, such as The National Palace, The Magic Fountain..",
  "Park Güell, Barcelona's iconic landmark, captivates visitors with its mesmerizing architecture crafted by the visionary artist Antoni Gaudí. Offering breathtaking panoramas of the cityscape, the park mesmerizes with vibrant mosaic artworks that adorn its pathways, drawing your gaze in every direction.",
  "Located near the city center, this expansive park boasts lush greenery, serene ponds, and impressive sculptures. It's a favorite spot for picnics, leisurely walks, and outdoor activities.",
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

carousel.forEach((carousel) => {
  carousel.addEventListener("click", function () {
    console.log("click");
    cardImages.forEach((img, i) => {
      img.src = `images/Barcelona/image${i + 1}.jpg`; // Adjust index to match image numbering
    });
  });
});
