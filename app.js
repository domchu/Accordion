let plus = document.querySelectorAll(".span");
let panelContent = document.querySelectorAll(".panel");

for (let index = 0; index < plus.length; index++) {
  //   plus.style.display = "&#150";
  plus[index].addEventListener("click", function (e) {
    // e.target.textContent = "-";
    console.log(e.target);
  });

  //   panel[index].style.height = "auto";
}
