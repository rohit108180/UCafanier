//*********** HOMEPAGE***************//

let no_of_products = 8;
let product_names = [
  "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
  "OxiClear N99 Anti Pollution Face Mask with 4 Activated Carbon Filters & Detachable",
  "17-inch FHD Gaming Laptop (Intel Core i7-7820HK/ 32GB/1TB HDD + 1TB SSD",
  "Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD, 1.4GHz Quad-core",
  "Voltas 1.5 Ton 3 Star Inverter Split AC",
  "IFB 6 kg 5 Star Fully-Automatic Front Loading Washing Machine",
  "Carrier 1.5 Ton 3 Star Window AC",
  "Focal Listen Wireless Over-Ear Bluetooth Headphones",
];
let product_prices = [
  "55000.00",
  "499.00",
  "311729.00",
  "99990.00",
  "31490.00",
  "23229.00",
  "35830.00",
  "95830.00",
];

let product_imgs = [
  "/stater/Photos/Products/canon.jpg",
  "/stater/Photos/Products/Mask.jpg",
  "/stater/Photos/Products/laptop.jpg",
  "/stater/Photos/Products/Apple.jpg",
  "/stater/Photos/Products/AC.jpg",
  "/stater/Photos/Products/611YswQRgfL._SL1400_.jpg",
  "/stater/Photos/Products/window Ac.jpg",
  "/stater/Photos/Products/Headphones.jpg",
];

let homepage = document.getElementById("homepage");

let login_page_btn = document.getElementById("homepage-login-btn");
let login_page = document.querySelector("#login-page");
let cart_page_btn = document.getElementById("cartpage-btn");
let cartpage = document.querySelector("#cartpage");

let no_of_cart_items = 0;
let cart_item_names = [];
let cart_item_prices = [];
let cart_item_total_prices = [];
let cart_item_imgs = [];

let product_cart = document.querySelectorAll(".product-cart");

function displayCartPage() {
  homepage.style.display = "none";
  login_page.style.display = "none";
  cartpage.style.display = "block";
}
function displayloginPage() {
  cartpage.style.display = "none";
  homepage.style.display = "none";
  login_page.style.display = "block";
}

function updateCartPage() {
  for (let j = 0; j < no_of_cart_items; j++) {
    let cart_item_name = document.querySelectorAll(".cart-item-name")[j];
    let cart_item_price = document.querySelectorAll(
      ".cart-item-price .cart_price_num"
    )[j];
    let cart_item_img = document.querySelectorAll(".cart-item-img")[j];
    let cart_item_total_price = document.querySelectorAll(
      ".cart-item-total-price .cart_price_num"
    )[j];
    let cart_total_amt = document.querySelector(
      ".cart-total-amt .cart_price_num"
    );

    let temp = 0;

    for (let k = 0; k < no_of_cart_items; k++) {
      temp += parseFloat(cart_item_total_prices[k]);
    }

    cart_total_amt.innerHTML = temp;
    cart_item_total_price.innerHTML = cart_item_total_prices[j];
    cart_item_price.innerHTML = cart_item_prices[j];
    cart_item_img.src = cart_item_imgs[j];
    cart_item_name.innerHTML = cart_item_names[j];

    document.querySelector(".cartbox-head span ").innerHTML = no_of_cart_items;
  }
  quantity.onchange = Update_total();
}

function add_data_id_att(no_of_items, arr) {
  for (let m = 0; m < no_of_items; m++) {
    let cre_att = document.createAttribute("data-id");

    cre_att.value = m + 1;

    arr[m].setAttributeNode(cre_att);
  }
}

// updating all the products on the home screen
for (let i = 0; i < no_of_products; i++) {
  let img = document.querySelectorAll(".product-img")[i];
  let name = document.querySelectorAll(".product-name")[i];
  let price = document.querySelectorAll(".price-num")[i];

  img.src = product_imgs[i];
  name.innerHTML = product_names[i];
  price.innerHTML = product_prices[i];
}

// // functioning login and cart button on home screen

cart_page_btn.addEventListener("click", displayCartPage);

login_page_btn.addEventListener("click", displayloginPage);

// functioning on click event for cart button in product box
for (let i = 0; i < product_cart.length; i++) {
  let element = product_cart[i];
  element.addEventListener("click", function () {
    let product_index = element.dataset.id;

    let div = document.createElement("div");
    // let hr = document.createElement("hr");

    div.innerHTML =
      '<div class="cart-item"><img src=""  class = "cart-item-img"><div class="cart-item-name">Cart-product-name</div><div class="cart-item-price">₹<span class= "cart_price_num">Price</span></div><select name="Quantity"  class="cart-item-qty" ><option value="1">1</option></select><div class="cart-item-total-price">₹<span class= "cart_price_num">Price</span></div><button class="cart-item-remove">x</button></div><div class = "hr" ></div>';
    // onchange="Update_total()"
    let cart_items = document.getElementById("cart-items");
    cart_items.appendChild(div);
    // cart_items.appendChild(hr);
    no_of_cart_items++;
    cart_item_names[no_of_cart_items - 1] = product_names[product_index - 1];
    cart_item_prices[no_of_cart_items - 1] = product_prices[product_index - 1];
    cart_item_imgs[no_of_cart_items - 1] = product_imgs[product_index - 1];
    cart_item_total_prices[no_of_cart_items - 1] =
      product_prices[product_index - 1];

    updateCartPage();
  });
}
// creating data-id attributes to  all the cart btn in product box
add_data_id_att(no_of_products, product_cart);

//*********** CART PAGE***************//

// functioning cartpage login button

let cartpage_login_btn = document.querySelector("#cartpage .login ");

// thisfunction is used in
// function Update_total() {
//   // functioning cartpage quantinty button
//   let quantity = document.querySelector(".cart-item-qty");

//   let quantity_no = quantity.selectedIndex;

//   cart_item_total_prices[0] *= quantity_no + 1;

//   updateCartPage();
// }
cartpage_login_btn.addEventListener("click", displayloginPage);

//*********** practice***************//

// while(no_of_cart_items > 0){
// }
