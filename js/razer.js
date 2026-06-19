const productitem = [
    {
        id: 0,
        name: "Razer Blade 14 RZ09 0482 (2023)",
        price: "60.500.000 VND",
        description: "Laptop gaming 14 inch nhỏ gọn cao cấp, mang đến sự cân bằng gần như hoàn hảo giữa hiệu năng mạnh mẽ với CPU AMD Ryzen 9 7940HS và GPU NVIDIA RTX 40 series, cùng thiết kế nhôm CNC di động (1.84 kg) và màn hình QHD+ 240Hz xuất sắc, lý tưởng cho cả game thủ và nhà sáng tạo nội dung.",
        specs: {
            "CPU": "AMD Ryzen 9 7940HS",
            "GPU": "NVIDIA GeForce RTX 40 Series",
            "RAM": "16GB DDR5",
            "Bộ nhớ": "1TB NVMe SSD",
            "Màn hình": "14\" QHD+ 240Hz",
            "Trọng lượng": "1.84 kg",
            "Kết nối": "Wi-Fi 6E, Bluetooth 5.3"
        },
        link: "../html/chi_tiet_san_pham/Razer_Blade_14.html",
        image: "../assets/img/razer1.jpg",
        images: [
            "../../assets/Razer_img/Razer_14/1.webp",
            "../../assets/Razer_img/Razer_14/2.webp",
            "../../assets/Razer_img/Razer_14/3.webp"
        ]
    },
    {
        id: 1,
        name: "Razer Blackwidow V3 Green Switch",
        price: "2.020.000 VND",
        description: "Razer Blackwidow V3 mang đến cảm nhận sự khác biệt — là di sản bàn phím chơi game cơ học đầu tiên và mang tính biểu tượng của Razer, được trang bị các cải tiến và tính năng mới vượt trội.",
        specs: {
            "Switch": "Razer Green (Clicky)",
            "Bố cục": "Full-size (100%)",
            "Đèn nền": "RGB Chroma",
            "Kết nối": "USB có dây",
            "Kháng nước": "IP54",
            "Macro": "Hỗ trợ đầy đủ",
            "Bảo hành": "2 năm"
        },
        link: "../html/chi_tiet_san_pham/Razer_BWV3.html",
        image: "../assets/img/razer2.png",
        images: [
            "../../assets/Razer_img/Razer_BWV3/1.jpg",
            "../../assets/Razer_img/Razer_BWV3/2.png",
            "../../assets/Razer_img/Razer_BWV3/3"
        ]
    },
    {
        id: 2,
        name: "Razer Viper V3 Pro SE",
        price: "2.370.000 VND",
        description: "Chuột gaming không dây đỉnh cao chỉ nặng 54g, mang lại khả năng kiểm soát tuyệt vời và cầm nắm thoải mái cho mọi game thủ. Thiết kế đối xứng kế thừa tinh hoa từ Viper V3 Pro.",
        specs: {
            "Cảm biến": "Razer Focus Pro 35K",
            "DPI": "100 – 35.000 DPI",
            "Trọng lượng": "54g",
            "Kết nối": "Razer HyperSpeed Wireless",
            "Pin": "Lên đến 95 giờ",
            "Nút bấm": "6 nút lập trình",
            "Bảo hành": "2 năm"
        },
        link: "../html/chi_tiet_san_pham/Razer_ViperV3Pro.html",
        image: "../assets/img/razer3.jpg",
        images: [
            "../../assets/img/razer3.jpg",
            "../../assets/img/razer3.jpg",
            "../../assets/img/razer3.jpg"
        ]
    },
    {
        id: 3,
        name: "Razer Blackwidow V3 Tenkeyless Yellow Switch",
        price: "1.830.000 VND",
        description: "Bàn phím Razer Blackwidow V3 Tenkeyless mang đến cho giới game thủ độ chính xác và khả năng cá nhân hóa tốt nhất trong thiết kế nhỏ gọn không có numpad.",
        specs: {
            "Switch": "Razer Yellow (Linear)",
            "Bố cục": "Tenkeyless (TKL 80%)",
            "Đèn nền": "RGB Chroma",
            "Kết nối": "USB có dây",
            "Kháng nước": "IP54",
            "Macro": "Hỗ trợ đầy đủ",
            "Bảo hành": "2 năm"
        },
        link: "../html/chi_tiet_san_pham/Razer_Balckwidow_V3TKL.html",
        image: "../assets/img/razer4.jpg",
        images: [
            "../../assets/Razer_img/Razer_BWV3TKL/1.jpg",
            "../../assets/Razer_img/Razer_BWV3TKL/2.jpg",
            "../../assets/Razer_img/Razer_BWV3TKL/3.jpg"
        ]
    },
    {
        id: 4,
        name: "Razer Firefly V2 Pro",
        price: "2.810.000 VND",
        description: "Lót chuột gaming cao cấp với hệ thống đèn LED RGB toàn bề mặt, mang đến trải nghiệm chơi game đầy ấn tượng. Bề mặt Micro Textured tối ưu phù hợp với mọi dòng chuột.",
        specs: {
            "Kích thước": "355 x 255 x 4 mm",
            "Bề mặt": "Micro Textured Hard",
            "Đèn nền": "RGB Chroma (toàn bề mặt)",
            "Kết nối": "USB-A tích hợp",
            "Đế": "Cao su chống trượt",
            "Tương thích": "Mọi loại chuột",
            "Bảo hành": "2 năm"
        },
        link: "../html/chi_tiet_san_pham/Razer_Firefly_V2Pro.html",
        image: "../assets/img/razer5.png",
        images: [
            "../../assets/img/razer5.png",
            "../../assets/img/razer5.png",
            "../../assets/img/razer5.png"
        ]
    }
];

function createV2(obj) {
    var productlist = document.getElementById("product-list");

    if (productlist == null) return;

    var card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML =
        '<div class="card-img-wrap">' +
            '<img src="' + obj.image + '" alt="' + obj.name + '">' +
        '</div>' +
        '<div class="card-body">' +
            '<h3 class="card-name">' + obj.name + '</h3>' +
            '<p class="card-desc">' + obj.description + '</p>' +
            '<p class="card-price">' + obj.price + '</p>' +
            '<a href="' + obj.link + '" class="btn-detail">Chi tiết</a>' +
        '</div>';

    productlist.appendChild(card);
}

function loadallobj(objarray) {
    for (var i = 0; i < objarray.length; i++) {
        createV2(objarray[i]);
    }
}
