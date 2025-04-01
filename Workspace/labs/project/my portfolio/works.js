// const pandaImg = document.querySelector(".pandaImg");
// const pandaWebsite = document.querySelector(".pandaWebsite");

// // pandaImg.addEventListener("scroll", () => {
// //   gsap.from(".pandaImg", { duration: 1.5, x: 400 });
// // });

// function myFunct() {
//   gsap.from(".pandaImg", { duration: 1.5, x: 400 });
// }

// pandaImg.addEventListener("scroll", myFunct);
gsap.from(".pandaImg", { duration: 1.5, x: 400 });
gsap.from(".portfolioImg", { duration: 1.5, x: 400 });
gsap.from(".yahayaPortfolioImg", { duration: 1.5, x: -400 });
gsap.from(".shoppingWebsiteImg", { duration: 1.5, x: -400 });

function isInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  var bounding = element.getBoundingClientRect();

  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    console.log("In the viewport! :)");
    return true;
  } else {
    console.log("Not in the viewport. :(");
    return false;
  }
}

window.addEventListener("scroll", () => {
  const images = document.querySelectorAll("img");
  console.log(images);
  images.forEach((image) => {
    if (isInViewport(image)) {
      if (image.classList.contains("pandaImg")) {
        gsap.from(".pandaImg", { duration: 1.5, x: 400 });
      }
      if (image.classList.contains("portfolioImg")) {
        gsap.from(".portfolioImg", { duration: 1.5, x: 400 });
      }
      if (image.classList.contains("yahayaPortfolioImg")) {
        gsap.from(".yahayaPortfolioImg", { duration: 1.5, x: -400 });
      }
      if (image.classList.contains("shoppingWebsiteImg")) {
        gsap.from(".shoppingWebsiteImg", { duration: 1.5, x: -400 });
      }
    }
  });
});

// detailP1.onmouseover = () => {
//   detailP1.innerHTML = `${about.textContent}`;

//   detailP1.addEventListener("click", () => {
//     location.href = "./about.html";
//   });
// };

// detailP1.onmouseout = () => {
//   detailP1.innerHTML = "Hello.";
// };
