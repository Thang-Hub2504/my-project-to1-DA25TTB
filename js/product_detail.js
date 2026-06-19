function loadProductDetail(productId) {
    const obj = productitem[productId];
    if (!obj) {
        console.error("Không tìm thấy sản phẩm với id:", productId);
        return;
    }

    document.title = obj.name + " | Razer Night Market";

    renderCarousel(obj);

    renderInfo(obj);
}

function renderCarousel(obj) {
    const carouselMain = document.getElementById("carousel-main-img");
    const carouselThumbs = document.getElementById("carousel-thumbs");

    if (!carouselMain || !carouselThumbs) return;

    carouselMain.src = obj.images[0];
    carouselMain.alt = obj.name;

    carouselThumbs.innerHTML = "";
    obj.images.forEach(function (imgSrc, index) {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        thumb.alt = obj.name + " - ảnh " + (index + 1);
        thumb.className = index === 0 ? "active" : "";
        thumb.onclick = function () {
            carouselMain.style.opacity = "0";
            setTimeout(function () {
                carouselMain.src = imgSrc;
                carouselMain.style.opacity = "1";
            }, 200);
            carouselThumbs.querySelectorAll("img").forEach(function (t) {
                t.classList.remove("active");
            });
            thumb.classList.add("active");
        };
        carouselThumbs.appendChild(thumb);
    });
}

function renderInfo(obj) {
    const nameEl = document.getElementById("detail-name");
    if (nameEl) nameEl.textContent = obj.name;

    const priceEl = document.getElementById("detail-price");
    if (priceEl) priceEl.textContent = obj.price;

    const descEl = document.getElementById("detail-desc");
    if (descEl) descEl.textContent = obj.description;

    const specsEl = document.getElementById("detail-specs");
    if (specsEl && obj.specs) {
        let html = "";
        for (const key in obj.specs) {
            html += `
                <tr>
                    <td>${key}</td>
                    <td>${obj.specs[key]}</td>
                </tr>
            `;
        }
        specsEl.innerHTML = html;
    }
}
