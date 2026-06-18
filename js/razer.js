const productitem = [
    {
    name: "Razer Blade 14 RZ09 0482 (2023)",
    price: "60.500.000 VND",
    description: "là một chiếc laptop gaming 14 inch nhỏ gọn cao cấp, mang đến sự cân bằng gần như hoàn hảo giữa hiệu năng mạnh mẽ với CPU AMD Ryzen 9 7940HS và GPU NVIDIA RTX 40 series, cùng một thiết kế nhôm CNC di động (1.84 kg) và màn hình QHD+ 240Hz xuất sắc, lý tưởng cho cả game thủ và nhà sáng tạo nội dung.",
    link:"../html/chi_tiet_san_pham/Razer_Blade_14.html",
    image: "../assets/img/razer1.jpg"
},
    {
    name: "Razer Blackwidow V3 Green Switch",
    price: "2.020.000 VND",
    description: "Razer Blackwidow V3 mang đến cảm nhận sự khác biệt, là di sản là bàn phím chơi game cơ học đầu tiên và mang tính biểu tượng của Razer, đồng thời được trang bị các cải tiến vàtính năng mới.",
    link:"https://gearvn.com/products/ban-phim-razer-blackwidow-v3-green-switch?srsltid=AfmBOopwt3YE1vMTPFAACmPg0iXzbeg0e9-AYtjdbV-eTDSmIxBuSmm9",
    image: "../assets/img/razer2.png"
},
    {
    name: "Razer Viper V3 Pro SE",
    price: "2.370.000 VND",
    description: "Razer Viper V3 Pro SE là chuột gaming không dây đỉnh cao chỉ nặng 54g, mang lại khả năng kiểm soát tuyệt vời và cầm nắm thoải mái cho mọi game thủ. Thiết kế đối xứng thuận tay của chuột máy tính được kế thừa tinh hoa từ Viper V3 Pro sẵn sàng chiến đấu ngay từ những giây phút đầu tiên.",
    link:"https://gearvn.com/products/chuot-khong-day-razer-viper-v3-pro-se",
    image: "../assets/img/razer3.jpg"
},
    {
    name: "Razer Blackwidow V3 Tenkeyless Yellow Switch",
    price: "1.830.000 VND",
    description: "Bàn phím Razer Blackwidow V3 Tenkeyless mang đến cho giới game thủ độ chính xác và cá nhân hóa tốt nhất.",
    link:"https://gearvn.com/products/ban-phim-razer-blackwidow-v3-tenkeyless-yellow-switch",
    image: "../assets/img/razer4.jpg"
},
    {
    name: "Razer Firefly V2 Pro",
    price: "2.810.000 VND",
    description: "Lót chuột Razer Firefly V2 Pro là một tấm lót chuột chơi game cao cấp với hệ thống đèn LED RGB toàn bề mặt, mang đến cho bạn trải nghiệm chơi game đầy ấn tượng và phong cách. Với thiết kế bề mặt Micro Textured tối ưu, Razer Firefly V2 Pro phù hợp với mọi dòng chuột và mang lại độ chính xác cao trong từng thao tác. Lót chuột còn được trang bị đế cao su chống trượt và cổng USB-A tích hợp, đảm bảo sự ổn định và tiện lợi khi sử dụng.",
    link:"https://xgear.net/products/razer-firefly-v2-pro?srsltid=AfmBOorBU2chTxjAUo3-viJfFnJ9tGi4pS0pswB5s0RWl0I2-cGCCkBd",
    image: "../assets/img/razer5.png"
}
]

function createItem(obj){
    const item = document.createElement("div");
    item.setAttribute("class","col text-center product-item");

    const card = document.createElement("div");
    card.setAttribute("class","card");

    item.appendChild(card);
    item.innerHTML="hello";
    document.getElementById("product-list").appendChild(item);
}

function createV2(obj){
    const productlist = document.getElementById("product-list");
    productlist.innerHTML +=
    `
                <div class = "card-product bg-light">
                    <div class = "ratio ratio-1x1">
                        <img src="${obj.image}" alt="Razer laptop">
                    </div>
                    <div class="card-body"  style="text-align: justify;">
                        <h4 class="card-title text-success">${obj.name}</h4>
                        <h5 class="card-infor">Thông tin sản phẩm</h5>
                        <p style="text-align: justify;">${obj.description}</p>
                        <p style="text-align: justify;" class="text-success">${obj.price}</p>
                        <a href="${obj.link}" class="btn btn-infor">Chi tiết</a>
                    </div>
                </div>
`
}

function loadallobj(objarray){
    let i=0;
    while(i<objarray.length)
    {
        createV2(objarray[i]);
        i++
    }
}
