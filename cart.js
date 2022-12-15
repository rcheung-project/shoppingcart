let cart = {};
let total = 0;

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

// prepare for shopping cart details and total price
let cartdetails = document.getElementById("cartdetails");

for (let id in cart) {
    let item = cart[id];
    if (item.qty != 0) {
        let tr = document.createElement('tr')

        let model_td = document.createElement('td')
        model_td.textContent = item.model;
        tr.appendChild(model_td)
        let qty_td = document.createElement("td");
        qty_td.textContent = item.qty;
        tr.appendChild(qty_td);
        let price_td = document.createElement("td");
        price_td.innerHTML = "$" + item.price;
        tr.appendChild(price_td);
        cartdetails.appendChild(tr)
        
        total = total + (item.price * item.qty);
    }
}

// display cart's total price
let showtotal = document.getElementById("showtotal");
let total_span = document.createElement("span");
showtotal.appendChild(total_span);
total_span.innerHTML = "$" + total;
showtotal.appendChild(total_span);

