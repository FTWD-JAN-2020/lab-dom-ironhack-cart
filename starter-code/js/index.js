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
  // let product = document.querySelector("#cart > tbody > tr");
  // let sub = document.querySelector("#cart > tbody > tr > td.subtot > span"); 
  // let justText = document.querySelector("#cart > tbody > tr > td.subtot > span").innerHTML
  // console.log(typeof sub, typeof justText)
  // sub.innerText = updateSubtot(product);
  const allProducts = document.querySelectorAll('tr.product');
  let totalPrice = 0;
  allProducts.forEach(row => {
    let price = row.children[1].children[0].innerText;
    let qty = row.querySelector('.qty input').value;
    let total = price*qty;
    // totalPrice += total;
    row.querySelector('.subtot span').innerText = total;
  })
  document.querySelectorAll('.subtot span').forEach(subtot => {
    totalPrice += Number(subtot.innerText);
  });

 // let totalPrice = [...document.querySelectorAll('.subtot span')].reduce((acc, val) => acc+Number(val.innerText), 0);

  document.querySelector("body > h2 > span").innerText = totalPrice;

}
$calc.onclick = calcAll;


let row = `<tr class="product">
<td class="name">
  <span>Ironshirt</span>
</td>

<td class="pu">$<span>15.00</span></td>

<td class="qty">
  <label>
    <input type="number" value="0" min="0" />
  </label>
</td>

<td class="subtot">$<span>0</span></td>

<td class="rm">
  <button class="btn btn-delete">Delete</button>
</td>
</tr>`;
// document.getele
document.querySelector('#cart > tbody').innerHTML += row;

// let td = document.createElement('td');
// td.classList = 'qty'

// td.appendChild(document.createElement('label'))
