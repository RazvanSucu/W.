const hamburger=document.getElementById("hamburger-menu");
const navLink=document.querySelector(".navbar-links");
const layer = document.querySelector(".container")
hamburger.addEventListener("click", () =>{
  navLink.classList.toggle("hide")
 const visibility=hamburger.getAttribute("data-visibile");
const layerVisibility=layer.getAttribute("data-layer");
 if(visibility==="false" ){
  hamburger.setAttribute("data-visibile",true)
  document.getElementById("hamburger-menu").src="assets/images/icon-menu.svg"
  layer.setAttribute("data-layer", true)
  document.querySelector(".container").style.display="none";
 }
 else{
  hamburger.setAttribute("data-visibile",false)

  document.getElementById("hamburger-menu").src="assets/images/icon-menu-close.svg"
  document.querySelector(".container").style.display="block";
 }
})