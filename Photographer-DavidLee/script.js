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
const gallery = document.querySelector(".grid-container");
const startNumber = 1;
const numberOfImages = 23;
let path = "";

for (let i = startNumber; i <= numberOfImages; i++) {
  const newGridItem = document.createElement("div");
  newGridItem.classList.add("grid-item");

  if (gallery.id == "wildlife-gallery") {
    path = "./assets/wildlife/no_attribute/wildlife" + i + ".jpg";
  }
  if (gallery.id == "nature-gallery") {
    path = "./assets/nature/no_attribute/nature" + i + ".jpg";
  }

  const anchor = document.createElement("a");
  /* anchor.href = anchor_path; */

  const newImage = document.createElement('img');
  newImage.classList.add("gallery-image");
  newImage.src = path;
  newImage.alt = "Image found on Vecteezy to use for this demo site";

  anchor.appendChild(newImage);

  newGridItem.appendChild(anchor);

  gallery.appendChild(newGridItem);
}
 
// Get the modal
var modal = document.getElementById("lightbox-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("lightbox-img");
var captionText = document.getElementById("caption");

const images = document.querySelectorAll('.grid-item img');
let currentIndex = 0;

// Function to open the modal and display the clicked image
function openModal(imgIndex) {
    currentIndex = imgIndex;
    modal.style.display = "block";
    modalImg.src = images[imgIndex].src;
    captionText.innerHTML = images[imgIndex].alt;
}

// Add click event listeners to all images to open the modal
images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Get the navigation arrows
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

// Function to show the previous image
function showPrev() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateModalContent();
}

// Function to show the next image
function showNext() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateModalContent();
}

// Function to update the modal content
function updateModalContent() {
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

// Add event listeners for navigation arrows
prev.addEventListener('click', showPrev);
next.addEventListener('click', showNext);