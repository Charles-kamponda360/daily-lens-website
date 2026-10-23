/* ===== Hero slider / carousel ===== */
function initSlider(base) {
  const slider = document.getElementById("slider");
  if (!slider) return;

  const picks = ARTICLES.filter(function (a) { return a.top; }).slice(0, 5);
  let html = "";
  let dots = "";
  picks.forEach(function (a, i) {
    html += '<article class="slide' + (i === 0 ? " active" : "") + '">' +
      '<img src="' + base + a.image + '" alt="' + a.title + '">' +
      '<div class="slide-caption">' +
      '<span class="badge">' + CATEGORIES[a.category] + '</span>' +
      '<h2><a href="' + base + 'article.html?id=' + a.id + '">' + a.title + '</a></h2>' +
      '<p>' + a.excerpt + '</p>' +
      '<div class="meta"><span>By ' + a.author + '</span><time datetime="' + a.date + '">' + formatDate(a.date) + '</time></div>' +
      '</div></article>';
    dots += '<button aria-label="Go to slide ' + (i + 1) + '"' + (i === 0 ? ' class="active"' : '') + '></button>';
  });

  slider.innerHTML = html +
    '<button class="slider-btn prev" aria-label="Previous slide">&#10094;</button>' +
    '<button class="slider-btn next" aria-label="Next slide">&#10095;</button>' +
    '<div class="slider-dots">' + dots + '</div>';

  const slides = slider.querySelectorAll(".slide");
  const dotBtns = slider.querySelectorAll(".slider-dots button");
  let index = 0;
  let timer;

  function show(n) {
    index = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) { s.classList.toggle("active", i === index); });
    dotBtns.forEach(function (d, i) { d.classList.toggle("active", i === index); });
  }
  function start() { timer = setInterval(function () { show(index + 1); }, 5000); }
  function stop() { clearInterval(timer); }

  slider.querySelector(".prev").addEventListener("click", function () { show(index - 1); });
  slider.querySelector(".next").addEventListener("click", function () { show(index + 1); });
  dotBtns.forEach(function (d, i) { d.addEventListener("click", function () { show(i); }); });
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);
  start();
}
