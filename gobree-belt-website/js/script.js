document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initFilters();
  initLightbox();
});

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function initFilters() {
  const searchInput = document.getElementById("productSearch");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".product-card");

  if (!cards.length) return;

  let activeCategory = "all";

  const applyFilters = () => {
    const search = (searchInput?.value || "").toLowerCase().trim();

    cards.forEach((card) => {
      const category = card.dataset.category || "";
      const name = (card.dataset.name || "").toLowerCase();
      const description = (card.dataset.description || "").toLowerCase();

      const categoryMatch = activeCategory === "all" || category === activeCategory;
      const searchMatch = !search || name.includes(search) || description.includes(search);
      card.classList.toggle("hidden", !(categoryMatch && searchMatch));
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      activeCategory = button.dataset.filter;
      applyFilters();
    });
  });

  searchInput?.addEventListener("input", applyFilters);
  applyFilters();
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const close = document.getElementById("closeLightbox");
  const items = document.querySelectorAll(".gallery-item img");

  if (!lightbox || !lightboxImage || !items.length) return;

  items.forEach((item) => {
    item.addEventListener("click", () => {
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt;
      lightbox.classList.add("open");
    });
  });

  const closeLightbox = () => lightbox.classList.remove("open");
  close?.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}
