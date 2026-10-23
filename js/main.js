/* ===== The Daily Lens - main script (shared by all pages) =====
   Each page sets:  <body data-page="home|category|article|search|static" data-base="" or "../">
   Category pages also set data-category="politics" etc.                              */

const BASE = document.body.dataset.base || "";
const PAGE = document.body.dataset.page || "static";

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function byNewest(a, b) { return b.date.localeCompare(a.date) || b.id - a.id; }

function cardHTML(a) {
  return '<article class="card" data-id="' + a.id + '">' +
    '<div class="card-img"><a href="' + BASE + 'article.html?id=' + a.id + '" aria-label="Read: ' + a.title + '">' +
    '<img src="' + BASE + a.image + '" alt="' + a.title + '" loading="lazy"></a></div>' +
    '<div class="card-body">' +
    '<span class="badge">' + CATEGORIES[a.category] + '</span>' +
    '<h3><a href="' + BASE + 'article.html?id=' + a.id + '">' + a.title + '</a></h3>' +
    '<div class="meta"><span>By ' + a.author + '</span><time datetime="' + a.date + '">' + formatDate(a.date) + '</time></div>' +
    '<p>' + a.excerpt + '</p>' +
    '<p class="extra-text">' + a.content[0] + '</p>' +
    '<button class="read-more" type="button" aria-expanded="false">Read more</button>' +
    '</div></article>';
}

function renderGrid(container, list) {
  if (!container) return;
  if (!list.length) {
    container.innerHTML = '<p class="no-results">No articles found. Try a different word or category.</p>';
    return;
  }
  container.innerHTML = list.map(cardHTML).join("");
}

/* Read-more: show / hide the extra text inside a card */
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".read-more[aria-expanded]");
  if (!btn) return;
  const extra = btn.parentElement.querySelector(".extra-text");
  const open = extra.classList.toggle("show");
  btn.textContent = open ? "Show less" : "Read more";
  btn.setAttribute("aria-expanded", open);
});

/* Accordion (About page) */
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".acc-btn");
  if (!btn) return;
  const panel = btn.nextElementSibling;
  const open = panel.classList.toggle("show");
  btn.setAttribute("aria-expanded", open);
  btn.querySelector("span").textContent = open ? "−" : "+";
});

function renderPopular(el) {
  if (!el) return;
  const top = ARTICLES.filter(function (a) { return a.popular; });
  el.innerHTML = top.map(function (a) {
    return '<li><div><a href="' + BASE + 'article.html?id=' + a.id + '">' + a.title + '</a>' +
      '<small>' + CATEGORIES[a.category] + ' &middot; ' + formatDate(a.date) + '</small></div></li>';
  }).join("");
}

function renderCategoryList(el) {
  if (!el) return;
  el.innerHTML = Object.keys(CATEGORIES).map(function (k) {
    const n = ARTICLES.filter(function (a) { return inCategory(a, k); }).length;
    return '<li><a href="' + BASE + 'categories/' + k + '.html">' + CATEGORIES[k] + '<span>' + n + '</span></a></li>';
  }).join("");
}

function renderTicker(el) {
  if (!el) return;
  const latest = ARTICLES.slice().sort(byNewest).slice(0, 6);
  el.innerHTML = latest.map(function (a) {
    return '<a href="' + BASE + 'article.html?id=' + a.id + '">' + a.title + '</a>';
  }).join("");
}

function showLoadingThen(container, fn) {
  container.innerHTML = '<div class="content-loading"><div class="loader-ring"></div></div>';
  setTimeout(fn, 350);
}

/* ---------- Page setups ---------- */
function initHome() {
  initSlider(BASE);

  // Featured News: one large story (with quick-view modal) + the others as cards
  const featuredList = ARTICLES.filter(function (a) { return a.featured; });
  const lead = featuredList[0];
  const fEl = document.getElementById("featuredNews");
  if (fEl && lead) {
    fEl.innerHTML = '<article class="featured-card">' +
      '<img src="' + BASE + lead.image + '" alt="' + lead.title + '">' +
      '<div class="card-body"><span class="badge">Featured &middot; ' + CATEGORIES[lead.category] + '</span>' +
      '<h3><a href="' + BASE + 'article.html?id=' + lead.id + '">' + lead.title + '</a></h3>' +
      '<div class="meta"><span>By ' + lead.author + '</span><time datetime="' + lead.date + '">' + formatDate(lead.date) + '</time></div>' +
      '<p>' + lead.excerpt + '</p>' +
      '<button class="read-more" type="button" id="quickView">Quick view</button></div></article>' +
      '<div class="news-grid featured-grid">' + featuredList.slice(1).map(cardHTML).join("") + '</div>';
    document.getElementById("quickView").addEventListener("click", function () { openModal(lead.id, BASE); });
  }

  // Latest News with category filter buttons
  const latestGrid = document.getElementById("latestNews");
  const sorted = ARTICLES.slice().sort(byNewest);
  renderGrid(latestGrid, sorted);
  initFilters(BASE, "latestNews", function (cat) {
    showLoadingThen(latestGrid, function () {
      renderGrid(latestGrid, sorted.filter(function (a) { return inCategory(a, cat); }));
    });
  });
}

function initCategory() {
  const cat = document.body.dataset.category;
  const list = ARTICLES.filter(function (a) { return inCategory(a, cat); }).sort(byNewest);
  renderGrid(document.getElementById("categoryNews"), list);
}

function initArticle() {
  const id = Number(new URLSearchParams(location.search).get("id")) || 1;
  const a = ARTICLES.find(function (x) { return x.id === id; });
  const el = document.getElementById("articleView");
  if (!a || !el) { if (el) el.innerHTML = '<p class="no-results">Article not found.</p>'; return; }
  document.title = a.title + " | The Daily Lens";
  el.innerHTML = '<img class="hero-img" src="' + BASE + a.image + '" alt="' + a.title + '">' +
    '<div class="article-body"><span class="badge">' + CATEGORIES[a.category] + '</span>' +
    '<h1>' + a.title + '</h1>' +
    '<div class="meta"><span>By ' + a.author + '</span><time datetime="' + a.date + '">' + formatDate(a.date) + '</time></div>' +
    a.content.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
    '<p><a href="' + BASE + 'categories/' + a.category + '.html">&larr; More in ' + CATEGORIES[a.category] + '</a></p></div>';

  const related = ARTICLES.filter(function (x) { return inCategory(x, a.category) && x.id !== a.id; }).slice(0, 3);
  renderGrid(document.getElementById("relatedNews"), related);
}

function initSearchPage() {
  const params = new URLSearchParams(location.search);
  const input = document.getElementById("pageSearch");
  const select = document.getElementById("pageCat");
  const label = document.getElementById("searchLabel");
  const grid = document.getElementById("searchResults");

  select.innerHTML = '<option value="all">All categories</option>' +
    Object.keys(CATEGORIES).map(function (k) { return '<option value="' + k + '">' + CATEGORIES[k] + '</option>'; }).join("");
  input.value = (params.get("q") || "").trim();
  if (CATEGORIES[params.get("cat")]) select.value = params.get("cat");

  function run() {
    const text = input.value.trim();
    const cat = select.value;
    const found = text || cat !== "all" ? searchArticles(text, cat) : ARTICLES.slice();
    found.sort(byNewest);
    label.textContent = text
      ? found.length + " result(s) for “" + text + "”"
      : "Showing " + found.length + " article(s)";
    renderGrid(grid, found);
  }
  run();
  input.addEventListener("input", run);
  select.addEventListener("change", run);
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.elements["name"].value.trim();
    const msg = document.getElementById("formMsg");
    msg.textContent = "Thank you, " + name + "! Your message has been received. (Demo form: nothing is sent.)";
    msg.classList.add("show");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initHeaderSearch(BASE);
  renderPopular(document.getElementById("popularList"));
  renderCategoryList(document.getElementById("categoryList"));
  renderTicker(document.getElementById("tickerMove"));

  if (PAGE === "home") initHome();
  if (PAGE === "category") initCategory();
  if (PAGE === "article") initArticle();
  if (PAGE === "search") initSearchPage();
  initContactForm();

  const today = document.getElementById("todayDate");
  if (today) today.textContent = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) + " · Blantyre, Malawi";
});
