const phones = [
    {   pid: "1",
        model: "iPhone 14",
        price: 1499,
    },
    {   pid: "2",
        model: "Samsung A23",
        price: 533,
    },
    {   pid: "3",
        model: "Samsung Z Flip4",
        price: 2007,
    },
    {   pid: "4",
        model: "Motorola g32",
        price: 323,
    },
    {   pid: "5",
        model: "Google Pixel 6a",
        price: 818,
    },
    {   pid: "6",
        model: "Oppo A54s",
        price: 331,
    }
];

// display all data for phones from an array object
function displayProductsData() {
const models = document.querySelectorAll('#models');
const prices = document.querySelectorAll('#prices');
// result = [];
for (let i = 0; i < models.length; i++) {
    models[i].innerHTML = phones[i].model;   
    prices[i].innerHTML = "$" + phones[i].price;   

   }
}
displayProductsData();


let totalitems = 0;
let sum = 0;
let cart = {};

// get items from local storage
if (localStorage.getItem("totalitems")) {
    totalitems = parseInt(localStorage.getItem("totalitems"));
}
if (localStorage.getItem("sum")) {
    sum = parseInt(localStorage.getItem("sum"));
}
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
updateCart();

// If add to cart button is clicked
let btns = document.querySelectorAll(".btn-add");

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", add);
}

//  add item function
function add(event) {
    let id = event.target.dataset.id;
    let model = phones[id-1].model;
    let price = phones[id-1].price;

    if (id in cart) {
        cart[id].qty++;
        } 
        else {
            let cartItem = {
                model: model,
                price: price,
                qty: 1
            };
        cart[id] = cartItem
        }
    totalitems++;
    sum += price;
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// If remove button is clicked
let btnr = document.querySelectorAll(".btn-remove");

for (let i = 0; i < btnr.length; i++) {
    let btn2 = btnr[i];
    btn2.addEventListener("click", remove);
}

// remove item function
function remove(event) {    
    let id = event.target.dataset.id;
    console.log(id);
    let price = phones[id-1].price;        
    if (id in cart) {
        if (cart[id].qty != 0) {
            cart[id].qty--;
            totalitems--;
            sum -= price;
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        }
    }
}

// update cart details in local storage
function updateCart() {
    document.getElementById("sum").textContent = sum;
    document.getElementById("totalitems").textContent = totalitems;
    localStorage.setItem("sum", sum);
    localStorage.setItem("totalitems", totalitems);
}
