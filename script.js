const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

// Add bout rows here when individual bout details have been supplied.
// Keep unknown opponent names, dates and results empty until confirmed.
const bouts = Array.from({ length: 15 }, (_, i) => ({
  number: i + 1,
  date: "",
  opponent: "",
  result: "",
  event: ""
}));
const tbody = document.getElementById("bout-rows");
if (tbody) {
  tbody.innerHTML = bouts.map(b => `<tr>
    <td>${String(b.number).padStart(2, "0")}</td>
    <td>${b.date || "Not provided"}</td>
    <td>${b.opponent || "Not provided"}</td>
    <td>${b.result || "Not provided"}</td>
    <td>${b.event || "Not provided"}</td>
  </tr>`).join("");
}
document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("p");
document.querySelectorAll(".gallery-card").forEach(card => {
  card.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = card.dataset.full;
    lightboxImage.alt = card.dataset.alt || "";
    lightboxCaption.textContent = card.dataset.alt || "";
    lightbox.showModal();
  });
});
lightbox?.querySelector(".lightbox-close")?.addEventListener("click", () => lightbox.close());
lightbox?.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});
