// alert(' This website only contains three pages for now Homepage, Login-page and Cart-part. For now you can only add items from Home-page to your Cart')

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
  "55000",
  "499",
  "311729",
  "99990",
  "31490",
  "23229",
  "35830",
  "95830",
];

let product_imgs = [
  "/img/canon.jpg",
  "/img/Mask.jpg",
  "/img/laptop.jpg",
  "/img/Apple.jpg",
  "/img/AC.jpg",
  "/img/611YswQRgfL._SL1400_.jpg",
  "/img/window Ac.jpg",
  "/img/Headphones.jpg",
];

const homepage = document.getElementById("homepage");
const login_page_btn = document.getElementById("homepage-login-btn");
const login_page = document.querySelector("#login-page");
const cart_page_btn = document.getElementById("cartpage-btn");
const cartpage = document.querySelector("#cartpage");

let no_of_cart_items = 0;
let cart_item_names = [];
let cart_item_prices = [];
let cart_item_total_prices = [];
let cart_item_imgs = [];

const product_cart = document.querySelectorAll(".product-cart");

function displayCartPage() {
  homepage.classList.add("hidden");
  login_page.classList.add("hidden");
  cartpage.classList.remove("hidden");
}
function displayloginPage() {
  homepage.classList.add("hidden");
  cartpage.classList.add("hidden");
  login_page.classList.remove("hidden");
}
function displayHomePage() {
  homepage.classList.remove("hidden");
  cartpage.classList.add("hidden");
  login_page.classList.add("hidden");
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
    let quantity = document.querySelectorAll(".cart-item-qty")[j];
    

    // updating prduct info and prices for items added into the cart page
    cart_item_total_price.innerHTML = cart_item_total_prices[j];
    cart_item_price.innerHTML = cart_item_prices[j];
    cart_item_img.src = cart_item_imgs[j];
    cart_item_name.innerHTML = cart_item_names[j];

    // upadating cart item total based on the quantity
    
    quantity.onchange = function (){
      console.log("Changed");
      
      cart_item_total_prices[j] = quantity.value*cart_item_prices[j];
    }();

    //updating total amount to be paid 
    let temp = 0;
    for (let k = 0; k < no_of_cart_items; k++) {
      temp += parseFloat(cart_item_total_prices[k]);
    }
    cart_total_amt.innerHTML = temp;


    document.querySelector(".cartbox-head span ").innerHTML = no_of_cart_items;
  }
  
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
      '<div class="cart-item"><div class="product-info"><img src=""  class = "cart-item-img"><div class="cart-item-name">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volupta Lorem ipsum dolor sit amet.</div></div><div class="price-info"><div class="cart-item-price">₹<span class= "cart_price_num">893918</span></div><select name="Quantity"  class="cart-item-qty" onchange="Update_total()"><option value="1">1</option><option value="2">2</option></select></div><div class="cart-item-total-price">₹<span class= "cart_price_num">390239</span></div><button class="cart-item-remove">x</button></div>';
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

//
// }
cartpage_login_btn.addEventListener("click", displayloginPage);

document
  .querySelector(".cart-add-more")
  .addEventListener("click", displayHomePage);

//*********** practice***************//

// while(no_of_cart_items > 0){
// }
