const icon = document.getElementById("button");
const lista = document.getElementById("list");

icon.addEventListener("click", () => {
  lista.classList.toggle("active");
});
