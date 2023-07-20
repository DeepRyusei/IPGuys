/*the discounts for all 4 products*/
let Discount1 = 10;
let Discount2 = 15;
let Discount3 = 20;
let Discount4 = 40;
/*Prices for all 7 products*/
let Price1 = 20;
let Price2 = 40;
let Price3 = 60;
let Price4 = 80;
let Price5 = 22;
let Price6 = 30;
let Price7 = 5;
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
const myList    = document.getElementById("cartList");

document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;

myButton1.addEventListener('click', () => {
    totalCart = totalCart + Price1*(1-Discount1/100);
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert('Strawberry'+'$' + Price1*(1-Discount1/100) + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = ' Strawberry - '+'$' + Price1*(1-Discount1/100);
    myList.appendChild(newListItem);
});
myButton2.addEventListener('click', () => {
    totalCart = totalCart + Price2*(1-Discount2/100);
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert('Grape Fruit '+'$' + Price2*(1-Discount2/100) + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Grape Fruit - '+'$' + Price2*(1-Discount2/100);
    myList.appendChild(newListItem);
});
myButton3.addEventListener('click', () => {
    totalCart = totalCart + Price3*(1-Discount3/100);
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert('Mango '+'$' + Price3*(1-Discount3/100) + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Mango - '+'$' + Price3*(1-Discount3/100);
    myList.appendChild(newListItem);
});
myButton4.addEventListener('click', () => {
    totalCart = totalCart + Price4*(1-Discount4/100);
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert('Orange '+'$' + Price4*(1-Discount4/100) + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Orange - '+'$' + Price4*(1-Discount4/100);
    myList.appendChild(newListItem);
});
myButton5.addEventListener('click', () => {
    totalCart = totalCart + Price5;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert('Apple '+'$' + Price5 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Apple - '+'$' + Price5;
    myList.appendChild(newListItem);
});
myButton6.addEventListener('click', () => {
    totalCart = totalCart + Price6;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert('Bananas '+'$' + Price6 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Bananas - '+'$' + Price6;
    myList.appendChild(newListItem);
});
myButton7.addEventListener('click', () => {
    totalCart = totalCart + Price7;
    document.getElementById("totalCartPrice").innerHTML = "-Total Cart = $" + totalCart;
    alert(' Kiwi '+'$' + Price7 + ' Has been added to the cart');
    const newListItem = document.createElement("li");
    newListItem.textContent = 'Kiwi - '+'$' + Price7;
    myList.appendChild(newListItem);
});

/*cartList*/
const cartButton = document.getElementById('cartButton');
const cartDiv = document.getElementById('cartDiv');

cartButton.addEventListener('click', function() {
    // toggle the cart div visibility
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
  });