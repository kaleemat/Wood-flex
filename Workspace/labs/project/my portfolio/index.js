const myPhoto = document.querySelector(".myPhoto");
const body = document.querySelector(".body");
const allDetails = document.querySelector(".allDetails");
const details = document.querySelector(".details");
const detailP1 = document.querySelector(".detailP1");
const detailP2 = document.querySelector(".detailP2");
const detailP3 = document.querySelector(".detailP3");
const about = document.querySelector(".about");
const works = document.querySelector(".works");
const contact = document.querySelector(".contact");

detailP1.onmouseover = () => {
  detailP1.innerHTML = `${about.textContent}`;

  detailP1.addEventListener("click", () => {
    location.href = "./about.html";
  });
};

detailP1.onmouseout = () => {
  detailP1.innerHTML = "Hello.";
};

//  P2

detailP2.onmouseover = () => {
  detailP2.innerHTML = `${works.textContent}`;

  detailP2.addEventListener("click", () => {
    location.href = "./works.html";
  });
};
detailP2.onmouseout = () => {
  detailP2.innerHTML = "I am ";
};

// P3

detailP3.onmouseover = () => {
  detailP3.innerHTML = `${contact.textContent}`;

  detailP3.addEventListener("click", () => {
    location.href = "./contact.html";
  });
};

detailP3.onmouseout = () => {
  detailP3.innerHTML = `Kaleemat`;
};

// ABOUT PAGE
// const myName = document.querySelector(".myName");
// const myNameHidden = document.querySelector(".myNameHidden");

// myName.onmouseover = () => {
//   myName.innerHTML = `${myNameHidden.textContent}`;
// };

// myName.onmouseout = () => {
//   myName.innerHTML = `kaleemat`;
// };

const myName = document.querySelector(".myName");
const myNameHidden = document.querySelector(".myNameHidden");

myName.onmouseover = () => {
  myName.innerHTML = myNameHidden.classList.remove("hide");
  myNameHidden.innerHTML = myName.classList.add("hide");

  myName.addEventListener("click", () => {
    location.href = "./works.html";
  });
};

myName.onmouseout = () => {
  myName.innerHTML = myName.classList.remove("hide");
  myNameHidden.innerHTML = myNameHidden.classList.add("hide");
};
