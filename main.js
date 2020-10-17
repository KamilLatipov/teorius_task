function changeActive(event) {
  const active = document.getElementsByClassName("active");
  active[0].classList.remove("active");
  event.classList.add("active");
}