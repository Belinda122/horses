// /C:/Users/belin/Desktop/horses/js.js
// flip card https://www.w3schools.com/howto/howto_css_flip_card.asp
document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".flip-card");
  const front = card.querySelector(".flip-card-front");
  const back = card.querySelector(".flip-card-back");

  const flip = (e) => card.classList.toggle("flipped");

  // flip on tap
  front.addEventListener("click", flip);
  back.addEventListener("click", flip);

  // prevent flip when clicking on clickable elements like tooltip and menu
  const tooltips = card.querySelectorAll(".tooltip");
  tooltips.forEach(tooltip => {
    tooltip.addEventListener("click", (e) => {
      e.stopPropagation(); 
    });
  });

 const menus = card.querySelectorAll(".menu");
  menus.forEach(menu => {
    menu.addEventListener("click", (e) => {
      e.stopPropagation(); 
    });
  });


//open close sidenav https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_right
window.openNav = function() {
  document.getElementById("mySidenav").style.width = "250px";
};

window.closeNav = function() {
  document.getElementById("mySidenav").style.width = "0";
};

//dropdown in sidenav https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_dropdown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

});















