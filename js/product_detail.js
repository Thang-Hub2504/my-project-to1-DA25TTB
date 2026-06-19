function loadProductDetail(productId) {
    var obj = productitem[productId];

    if (obj == null) {
        console.log("Không tìm thấy sản phẩm với id: " + productId);
        return;
    }

    document.title = obj.name + " | Razer Night Market";

    renderCarousel(obj);
    renderInfo(obj);
}

function renderCarousel(obj) {
    var carouselMain = document.getElementById("carousel-main-img");
    var carouselThumbs = document.getElementById("carousel-thumbs");

    if (carouselMain == null || carouselThumbs == null) return;

    carouselMain.src = obj.images[0];
    carouselMain.alt = obj.name;

    carouselThumbs.innerHTML = "";

    for (var i = 0; i < obj.images.length; i++) {
        var imgSrc = obj.images[i];

        var thumb = document.createElement("img");
        thumb.src = imgSrc;
        thumb.alt = obj.name + " - ảnh " + (i + 1);

        if (i === 0) {
            thumb.className = "active";
        }

        thumb.onclick = function () {
            var clickedSrc = this.src;

            carouselMain.style.opacity = "0";
            setTimeout(function () {
                carouselMain.src = clickedSrc;
                carouselMain.style.opacity = "1";
            }, 200);

            var allThumbs = carouselThumbs.getElementsByTagName("img");
            for (var j = 0; j < allThumbs.length; j++) {
                allThumbs[j].className = "";
            }

            this.className = "active";
        };

        carouselThumbs.appendChild(thumb);
    }
}

function renderInfo(obj) {
    var nameEl = document.getElementById("detail-name");
    if (nameEl != null) {
        nameEl.textContent = obj.name;
    }

    var priceEl = document.getElementById("detail-price");
    if (priceEl != null) {
        priceEl.textContent = obj.price;
    }

    var descEl = document.getElementById("detail-desc");
    if (descEl != null) {
        descEl.textContent = obj.description;
    }

    var specsEl = document.getElementById("detail-specs");
    if (specsEl != null && obj.specs != null) {
        var html = "";

        for (var key in obj.specs) {
            html = html +
                "<tr>" +
                "<td>" + key + "</td>" +
                "<td>" + obj.specs[key] + "</td>" +
                "</tr>";
        }

        specsEl.innerHTML = html;
    }
}
