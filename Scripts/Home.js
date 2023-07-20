/*the discounts for all 4 products*/
let Discount1 = 25;
let Discount2 = 40;
let Discount3 = 20;
let Discount4 = 15;
/*Prices for all 4 products*/
let Price1 = 120;
let Price2 = 45;
let Price3 = 15;
let Price4 = 190;
/*Applying discounts*/
document.getElementById("Discount1").innerHTML = "Now At " + Discount1 + "%OFF!";
document.getElementById("PriceAFT1").innerHTML = "$" + Price1*(1-Discount1/100) + " Instead of " + "$" + Price1;

document.getElementById("Discount2").innerHTML = "Now At " + Discount2 + "%OFF!";
document.getElementById("PriceAFT2").innerHTML = "$" + Price2*(1-Discount2/100) + " Instead of " + "$" + Price2;

document.getElementById("Discount3").innerHTML = "Now At " + Discount3 + "%OFF!";
document.getElementById("PriceAFT3").innerHTML = "$" + Price3*(1-Discount3/100) + " Instead of " + "$" + Price3;

document.getElementById("Discount4").innerHTML = "Now At " + Discount4 + "%OFF!";
document.getElementById("PriceAFT4").innerHTML = "$" + Price4*(1-Discount4/100) + " Instead of " + "$" + Price4;


/*Adding Price To cart*/
let totalCart = 0;
const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const myButton3 = document.getElementById('myButton3');
const myButton4 = document.getElementById('myButton4');
const myList = document.getElementById("cartList");

document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;

myButton1.addEventListener('click', () => {
    totalCart = totalCart + Price1*(1-Discount1/100);
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert('Mr.Muscle Kistchen Cleaner '+'$' + Price1*(1-Discount1/100) + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Mr.Muscle Kistchen Cleaner - '+'$' + Price1*(1-Discount1/100);
    myList.appendChild(newListItem);
});
myButton2.addEventListener('click', () => {
    totalCart = totalCart + Price2*(1-Discount2/100);
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert('Nivea Hair Gel '+'$' + Price2*(1-Discount2/100) + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Nivea Hair Gel - '+'$' + Price2*(1-Discount2/100);
    myList.appendChild(newListItem);
});
myButton3.addEventListener('click', () => {
    totalCart = totalCart + Price3*(1-Discount3/100);
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert('Guava '+'$' + Price3*(1-Discount3/100) + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Guava - '+'$' + Price3*(1-Discount3/100);
    myList.appendChild(newListItem);
});
myButton4.addEventListener('click', () => {
    totalCart = totalCart + Price4*(1-Discount4/100);
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert('Gouda Cheese '+'$' + Price4*(1-Discount4/100) + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Gouda Cheese - '+'$' + Price4*(1-Discount4/100);
    myList.appendChild(newListItem);
});

/*cartList*/
const cartButton = document.getElementById('cartButton');
const cartDiv = document.getElementById('cartDiv');

cartButton.addEventListener('click', function() {
    // toggle the cart div visibility
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
  });