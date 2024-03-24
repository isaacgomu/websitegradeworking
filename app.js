console.log("hello world");
const lightlevel = document.getElementById("lightlevel");
const Home = document.getElementById("Home");
const Header = document.querySelector("Header");
const anchor1 = document.getElementById("anchorhome");
const anchor2 = document.getElementById("anchorpricing");
const anchor3 = document.getElementById("anchorlocations");
const anchor4 = document.getElementById("anchorabout");
const anchor5 = document.getElementById("anchorcontact");
const Locations = document.getElementById("Locations");
const locationsimages = document.getElementById("locationsimages");
let light = 0;
lightlevel.addEventListener("click", function () {
  if (light === 0) {
    light += 1;
    Home.style.backgroundImage = "url(./assets/housenight.png)";
    Header.style.backgroundImage = "url(./assets/aaanight.png)";
    Header.style.color = "white";
    anchor1.style.color = "white";
    anchor2.style.color = "white";
    anchor3.style.color = "white";
    anchor4.style.color = "white";
    anchor5.style.color = "white";
    Home.style.color = "rgb(198, 213, 255)";
    Locations.style.backgroundImage = "url(./assets/bikinibottomnight.jpg)";
  } else if (light === 1) {
    light -= 1;
    Home.style.backgroundImage = "url(./assets/pineapplehouse2.png)";
    Header.style.backgroundImage = "url(./assets/aaa.png)";
    Header.style.color = "rgb(0, 27, 100)";
    anchor1.style.color = "rgb(0, 27, 100)";
    anchor2.style.color = "rgb(0, 27, 100)";
    anchor3.style.color = "rgb(0, 27, 100)";
    anchor4.style.color = "rgb(0, 27, 100)";
    anchor5.style.color = "rgb(0, 27, 100)";
    Home.style.color = "rgb(14, 55, 167)";
    Locations.style.backgroundImage = "url(./assets/bikinibottom.png)";
  }
});
