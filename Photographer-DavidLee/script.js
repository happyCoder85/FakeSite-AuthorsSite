// Hamburger Menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const miniBar = document.querySelector("#mini-bar");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

// Wildlife Photos
const gallery = document.querySelector("#wildlife-gallery");
const startNumber = 1;
const numberOfImages = 20;

for (let i = startNumber; i <= numberOfImages; i++) {
  const newImageDiv = document.createElement('div');  
  const newImage = document.createElement('img');
  newImageDiv.className = "image";

  const path = "./assets/wildlife/no_attribute/wildlife" + i + ".jpg";
  newImage.src = path;
  newImage.alt = "Image found on Vecteezy to use for this demo site";

  newImageDiv.appendChild(newImage);

  gallery.appendChild(newImageDiv);
}





