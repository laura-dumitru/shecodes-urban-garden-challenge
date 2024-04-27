lucide.createIcons();

const readMore = Array.from(document.querySelectorAll(".myButton"));
const descriptions = Array.from(document.querySelectorAll(".description"));
const menu = document.querySelector(".navbar-toggler");
const menuIcon = document.querySelector(".navbar-toggler-icon");

const locations = {
  Valencia: {
    //images: ["https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/367/original/image1.jpg?1714042633", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/368/original/image2.jpg?1714042653", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/369/original/image3.jpg?1714042665"],
    parks: ["Turia Gardens", "City of Science", "Botanical Gardens"],
    more: [
      "The Turia Gardens is one of the largest urban parks in Valencia and it's my personal favourite. It stretches over 9km and is a perfect place for runners, cyclists or families. Interesting fact - the park is built on the city's former riverbed, whose course was altered to prevent flooding of the city.",
      "The City of Science was created by Santiago Calatrava, an architect whose buildings have become iconic in the city. Inside the City of Science you can find numerous museums. My favourite spot is the Umbracle, which is an open access garden covering 17,000 sqm.",
      "The Botanical Gardens in Valencia feature 3000 species of trees and plants from around the world. The gardens were restored after a flood in 1957 and today it provides a centre for scientific and teaching activities, a historical space and a feature of the urban landscape.",
    ],
  },
  Barcelona: {
    //images: ["https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/371/original/image1.jpg?1714042692", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/372/original/image2.jpg?1714042701", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/373/original/image3.jpg?1714042712"],
    parks: ["Montjuic Park", "Güell Park", "Parc de la Ciutadella"],
    more: [
      "Overlooking the southwest of Barcelona and believed to be the city's birthplace, Montjuic Park is a green hilltop getaway, packed with history, attractions and activites for all. Montjuïc is not only an urban park, it’s also a hill with incredible views and various cultural landmarks.",
      "Park Güell, Barcelona's iconic landmark, captivates visitors with its architecture crafted by the artist Antoni Gaudí. The park offers breathtaking panoramas of the cityscape, the park mesmerizes with vibrant mosaic artworks that adorn its pathways, drawing your gaze in every direction.",
      "Located near the city center, Parc de la Ciutadella boasts lush greenery, serene ponds, and impressive sculptures. It's a favorite spot for picnics, leisurely walks, and outdoor activities, like boat rowing. It is believed to be a green oasis inside the city of Barcelona and is very popular amongst families.",
    ],
  },
};

descriptions.forEach((description) => {
  description.style.display = "none";
});

readMore.forEach((button, index) => {
  let toggle = false;
  button.addEventListener("click", function () {
    toggle = !toggle;
    descriptions[index].style.display = toggle ? "inherit" : "none";
  });
});

const carousel = document.querySelectorAll('[data-bs-target="#carouselExampleFade"]');
const cardImages = document.querySelectorAll(".card-img-top");
const parkNames = document.querySelectorAll(".card-text");
const city = document.querySelector(".city");

let currentCity = "Valencia";

carousel.forEach((carousel) => {
  carousel.addEventListener("click", function () {
    if (currentCity === "Valencia") {
      currentCity = "Barcelona";
    } else {
      currentCity = "Valencia";
    }
    city.innerHTML = currentCity;

    cardImages.forEach((img, i) => {
      img.src = `images/${currentCity}/image${i + 1}.jpg`;
      parkNames[i].innerHTML = locations[currentCity].parks[i];
      descriptions[i].innerHTML = locations[currentCity].more[i];
    });
  });
});

let toggle = false;
menu.addEventListener("click", function () {
  toggle = !toggle;
  if (toggle) menuIcon.classList.add("new-background");
  else menuIcon.classList.remove("new-background");
});

/*
readMore.forEach((button, index) => {
  let toggle = false;
  button.addEventListener("click", function () {
    toggle = !toggle;
    descriptions[index].style.display = toggle ? "inherit" : "none";
  });
});
*/
