let fas = document.querySelectorAll(".fas");
let tab = document.querySelectorAll(".tab");
let contentText = document.querySelectorAll(".content-text");
// document.querySelectorAll

for (let index = 0; index < tab.length; index++) {
  tab[index].addEventListener("click", () => {
    contentText[index].classList.toggle("show");

    if (fas[index].classList.contains("fa-plus")) {
      fas[index].classList.remove("fa-plus");
      fas[index].classList.add("fa-minus");
    } else {
      fas[index].classList.remove("fa-minus");
      fas[index].classList.add("fa-plus");
    }
  });
}
