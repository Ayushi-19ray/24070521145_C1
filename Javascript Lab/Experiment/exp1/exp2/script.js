const GST = 0.18;

// var example
var billNumber = 1;
var customerName = prompt("Enter Customer Name:");
var productName = prompt("Enter Product Name:");

// let example
let quantity = Number(prompt("Enter Product Quantity:"));
let price = Number(prompt("Enter Price per Product:"));

// Validation

if (customerName == "" || productName == "" || quantity <= 0 || price <= 0) {
    document.write(`<h3 class="error">⚠️ Please enter valid details.</h3>`);
}
else {
    // Calculations

    let subTotal = quantity * price;
    let gstAmount = subTotal * GST;
    let grandTotal = subTotal + gstAmount;

    // Object

    let bill = {

        customerName,
        productName,
        quantity,
        price,
        subTotal,
        gstAmount,
        grandTotal

    };

    // Destructuring

    const {

        customerName: customer,
        productName: product,
        quantity: qty,
        price: rate,
        subTotal: subtotal,
        gstAmount: gst,
        grandTotal: total

    } = bill;

    // Template Literal

    document.write(`

    <h2>Billing Receipt</h2>

    <div class="receipt">

    <table>

        <tr>
            <th colspan="2">Billing Details</th>
        </tr>

        <tr>
            <td>Bill Number</td>
            <td>${billNumber}</td>
        </tr>

        <tr>
            <td>Customer Name</td>
            <td>${customer}</td>
        </tr>

        <tr>
            <td>Product Name</td>
            <td>${product}</td>
        </tr>

        <tr>
            <td>Quantity</td>
            <td>${qty}</td>
        </tr>

        <tr>
            <td>Price Per Product</td>
            <td>₹${rate.toFixed(2)}</td>
        </tr>

        <tr>
            <td>Subtotal</td>
            <td>₹${subtotal.toFixed(2)}</td>
        </tr>

        <tr>
            <td>GST (18%)</td>
            <td>₹${gst.toFixed(2)}</td>
        </tr>

        <tr>
            <th>Grand Total</th>
            <th>₹${total.toFixed(2)}</th>
        </tr>

    </table>

    </div>

    <br>

    <h3>Thank You! Visit Again.</h3>

    `);

    billNumber++;
}