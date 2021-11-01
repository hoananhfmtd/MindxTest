const show = document.getElementById("link");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn = document.getElementsByClassName("btn");

btn1.addEventListener("click", () => {
  getShortLink(1);
});

btn2.addEventListener("click", () => {
  getShortLink(2);
});

btn3.addEventListener("click", () => {
  getShortLink(3);
});

function changeBtn(type) {
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove("active");
  }

  if (type == 1) {
    btn1.classList.add("active");
  } else if (type == 2) {
    btn2.classList.add("active");
  } else {
    btn3.classList.add("active");
  }
}

function getShortLink(type) {
  let link = document.getElementById("link-input").value;
    changeBtn(type);
    fetch("https://api.shrtco.de/v2/shorten?url=" + link)
      .then((response) => response.json())
      .then((data) => {
        if (type == 1) {
          show.setAttribute("href", data.result.full_short_link);
          show.innerText = data.result.short_link;
        } else if (type == 2) {
          show.setAttribute("href", data.result.full_short_link2);
          show.innerText = data.result.short_link2;
        } else {
          show.setAttribute("href", data.result.full_short_link3);
          show.innerText = data.result.short_link3;
        }
      });
  
}
