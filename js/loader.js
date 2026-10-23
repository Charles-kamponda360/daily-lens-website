/* ===== Page loader ===== */
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (!loader) return;
  // short delay so the effect is visible
  setTimeout(function () {
    loader.classList.add("hide");
    setTimeout(function () { loader.remove(); }, 700);
  }, 900);
});
