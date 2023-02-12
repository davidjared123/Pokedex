const checkbox = document.getElementById("switch-label");

checkbox.addEventListener("click", () => {
  if (checkbox.checked == 1) {
    // console.log("checked");
    document.body.classList.add("dark");
  } else {
    // console.log("no check");
    document.body.classList.remove("dark");
  }

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", true);
  } else {
    localStorage.setItem("dark-mode", false);
  }
});

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  checkbox.checked = true;
  console.log("checked");
} else {
  document.body.classList.remove("dark");
}
