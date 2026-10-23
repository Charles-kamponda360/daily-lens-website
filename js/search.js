/* ===== Search & filtering ===== */

// Header search box: sends the user to the search page
function initHeaderSearch(base) {
  const form = document.getElementById("searchForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const q = form.querySelector("input").value.trim();
    if (q) window.location.href = base + "search.html?q=" + encodeURIComponent(q);
  });
}

// Returns articles matching text (title, author, category, excerpt)
function inCategory(a, cat) {
  return cat === "all" || a.category === cat || (a.also || []).indexOf(cat) !== -1;
}

function searchArticles(query, cat) {
  const q = query.toLowerCase();
  cat = cat || "all";
  return ARTICLES.filter(function (a) {
    const text = (a.title + " " + a.author + " " + CATEGORIES[a.category] + " " + a.excerpt + " " + a.content.join(" ")).toLowerCase();
    return inCategory(a, cat) && text.indexOf(q) !== -1;
  });
}

// Category filter buttons used on the home page
function initFilters(base, containerId, onChange) {
  const bar = document.getElementById("filters");
  if (!bar) return;
  let html = '<button class="filter-btn active" data-cat="all">All</button>';
  Object.keys(CATEGORIES).forEach(function (k) {
    html += '<button class="filter-btn" data-cat="' + k + '">' + CATEGORIES[k] + '</button>';
  });
  bar.innerHTML = html;

  bar.addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    onChange(btn.dataset.cat);
  });
}
