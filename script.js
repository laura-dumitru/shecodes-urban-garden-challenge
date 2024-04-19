lucide.createIcons();

const readMore = Array.from(document.querySelectorAll(".myButton"));
const descriptions = Array.from(document.querySelectorAll(".description"));

descriptions.forEach((description) => {
  description.style.display = "none";
});

readMore.forEach((button, index) => {
  button.addEventListener("click", function () {
    console.log("click");
    descriptions[index].style.display = "block";
  });
});
