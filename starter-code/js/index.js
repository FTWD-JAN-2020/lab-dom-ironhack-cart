var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc'); // this is the location of the "Calculate prices" button

// let priceProduct = document.querySelector("#cart > tbody > tr > td.pu > span");
// let quantity = document.querySelector("#cart > tbody > tr > td.qty > label > input[type=number]");
// let subTotal = document.querySelector("#cart > tbody > tr > td.subtot > span"); // the location of "sub total"

function updateSubtot(product) {
  // Iteration 1.1
  console.log(product)
  let priceProduct = product.querySelector(".pu span").innerText;
  let quantity = product.querySelector(".qty input").value;
  console.log("price: " + priceProduct)
  console.log("quantity: " + quantity )
  let sub = priceProduct * quantity;
  console.log("sub: " + sub)
  // subTotal.textContent = Number(priceProduct.textContent) * Number(quantity.value)

  return sub;

}

function calcAll() {
  // Iteration 1.2
  let product = document.querySelector("#cart > tbody > tr");
  let sub = document.querySelector("#cart > tbody > tr > td.subtot > span"); 
  let justText = document.querySelector("#cart > tbody > tr > td.subtot > span").innerHTML
  console.log(typeof sub, typeof justText)
  sub.innerText = updateSubtot(product);
}
$calc.onclick = calcAll;


