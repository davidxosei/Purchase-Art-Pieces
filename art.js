const cart = [
  {
    product: {
      title: "Portrait of Marten Soolmans",
      filename: "https://cdn.glitch.global/b98ab13a-5c85-4cab-b0ab-16c51640b2e8/105070.jpg?v=1710874890614",
      price: 75.0
    },
    quantity: 3
  },
  {
    product: {
      title: "View of Houses in Delft",
      filename: "https://cdn.glitch.global/b98ab13a-5c85-4cab-b0ab-16c51640b2e8/106060.jpg?v=1710874901212",
      price: 125.0
    },
    quantity: 1
  },
  {
    product: {
      title: "Woman Reading a Letter",
      filename: "https://cdn.glitch.global/b98ab13a-5c85-4cab-b0ab-16c51640b2e8/106050.jpg?v=1710874894767",
      price: 100.0
    },
    quantity: 2
  }
];

//2) Understand all given functions.
function outputCurrency(num) {
  document.write("$" + num.toFixed(2));
}

function outputCartRow(item, total) {
  document.write("<tr><td>");
  document.write(`<img src="${item.product.filename}"></td>`);
  document.write(`<td>${item.product.title}</td>`);
  document.write(`<td>${item.quantity}</td>`);
  document.write(`<td>$${item.product.price.toFixed(2)}</td>`);
  document.write(`<td>$${total.toFixed(2)}</td></tr>`);
}

const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

let subtotal = 0;
for (let c of cart) {
  let amount = c.product.price * c.quantity;
  subtotal += amount;
  outputCartRow(c, amount);
}

//4) Calculate the subtotal, tax, shipping, and grand total.
// Notice that the tax and shipping threshold are input from the user,
// so that you can verify your calculations are working.
// The shipping amount should be $40 unless the subtotal is above the shipping threshold,
// in which case it will be $0.

let tax = subtotal * tax_rate;
let shipping = subtotal > shipping_threshold ? 0 : 40;
let grandtotal = subtotal + tax + shipping;

document.write(`<tr><td colspan="4">Subtotal</td><td>$${subtotal.toFixed(2)}</td></tr>`);
document.write(`<tr><td colspan="4">Tax</td><td>$${tax.toFixed(2)}</td></tr>`);
document.write(`<tr><td colspan="4">Shipping</td><td>$${shipping.toFixed(2)}</td></tr>`);
document.write(`<tr><td colspan="4">Grand Total</td><td>$${grandtotal.toFixed(2)}</td></tr>`);
