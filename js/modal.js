/* ===== Modal window for quick article preview ===== */
function openModal(id, base) {
  const a = ARTICLES.find(function (x) { return x.id === Number(id); });
  const overlay = document.getElementById("modal");
  if (!a || !overlay) return;

  overlay.querySelector(".modal-body").innerHTML =
    '<img src="' + base + a.image + '" alt="' + a.title + '">' +
    '<div class="modal-content">' +
    '<span class="badge">' + CATEGORIES[a.category] + '</span>' +
    '<h2>' + a.title + '</h2>' +
    '<div class="meta"><span>By ' + a.author + '</span><time datetime="' + a.date + '">' + formatDate(a.date) + '</time></div>' +
    a.content.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
    '<a class="btn" href="' + base + 'article.html?id=' + a.id + '">Open full article</a>' +
    '</div>';

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modal");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-overlay") || e.target.classList.contains("modal-close")) closeModal();
});
document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
