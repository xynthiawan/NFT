
document.querySelector(".carousel-btns .left").onclick = function () {
    const img = document.querySelector(".carousel img:nth-child(5)");
    const before = document.querySelector(".carousel img:nth-child(1)");
    img.remove();
    document.querySelector(".carousel").insertBefore(img, before);
  };
  document.querySelector(".carousel-btns .right").onclick = function () {
    const img = document.querySelector(".carousel img:nth-child(1)");
    img.remove();
    document.querySelector(".carousel").appendChild(img);
  };
  
  document.querySelectorAll(".card-wrap").forEach(
    (ele, id) =>
      (ele.onclick = () => {
        location.href = "details.html?id=" + (id + 1);
      }))