# shoppingcart
Vanilla Javascript - shopping cart

Setup instructions and steps:

This is written by Vanilla JavaScript (DOM manipulation, LocalStorage and array object) to create a shopping cart for PhonesMart to sell phones online. A special PhonesMart logo is created. 
This shop has two html, two JavaScript and one CSS files. 

Index.html file works with main.js:
•	To create a landing page with all the products’ details using data stored in an array object.
•	Display how many items are in the cart and a total price for all items.
•	Each item is displayed in a card format and styled with CSS.
•	Each item can be added or removed from the cart. Total number of items and total price will be updated accordingly as well as in the local storage.
•	A checkout button is available for showing details of the cart before proceeding for payment.

Once customer clicks on the checkout button:
•	cart.js will grab all the cart details from the local storage and populate data via cart.html. 
•	A table will be created with a total price and styled with CSS.
•	Customer can decide to click on a button to process payment (not require for implementation) or change of mind to continue shopping (return to index.html).
•	Data will be kept in the local storage. 


The requirements for this code challenge are:
1.	Have a pre-populated (hard coded) array of objects as products. 
2.	Your product display should have (not limited to) product image, product name, product price
3.	All products should be displayed when the page loads
4.	Using an ‘add to cart’ button, the user should be able to add the products to a shopping cart list 
5.	The shopping cart lists all products and displays a the total price 
Stretch Goal:  
6.	The user should also be able to delete the products from the cart, thus modifying the total price of the cart


For requirements 1-3, I created an array object with six products including their ids, phone models and prices. When the page loads all the details will be retrieved from this array object and display via index.html.  

For requirement 4, I created a ‘add to cart’ button for each product (phone) with the functionality to add the product details to the cart, update total items and total price as well as updating data in the local storage. 

For requirement 5, I created cart.html and cart.js to grab the data from local storage to display cart’s details in a table with total price. I also created two buttons for payment or continue shopping with the existing cart. 

I also implemented an additional function (requirement 6 - optional) for removing an item from the cart then automatically updating the details and total price in the cart and the local storage. 

Welcome to PhonesMart.  : ) 

