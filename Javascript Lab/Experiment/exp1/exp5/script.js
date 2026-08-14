
// =====================================
// PRODUCT OBJECTS
// =====================================

const products = [

    {
        id: 1,
        name: "Neon Wireless Headphones",
        category: "Electronics",
        price: 1499,
        rating: 4.5,
        image: "🎧"
    },

    {
        id: 2,
        name: "Smart Watch Pro",
        category: "Electronics",
        price: 2499,
        rating: 4.3,
        image: "⌚"
    },

    {
        id: 3,
        name: "Premium Laptop Backpack",
        category: "Fashion",
        price: 999,
        rating: 4.4,
        image: "🎒"
    },

    {
        id: 4,
        name: "Running Shoes X",
        category: "Fashion",
        price: 2999,
        rating: 4.6,
        image: "👟"
    },

    {
        id: 5,
        name: "JavaScript Programming",
        category: "Books",
        price: 799,
        rating: 4.7,
        image: "📚"
    },

    {
        id: 6,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1799,
        rating: 4.2,
        image: "🔊"
    },

    {
        id: 7,
        name: "Gaming Keyboard",
        category: "Electronics",
        price: 1899,
        rating: 4.8,
        image: "⌨️"
    },

    {
        id: 8,
        name: "Gaming Mouse",
        category: "Electronics",
        price: 1299,
        rating: 4.6,
        image: "🖱️"
    }

];


// =====================================
// CART ARRAY
// =====================================

let cart = [];


// =====================================
// DISPLAY PRODUCTS
// map()
// =====================================

function displayProducts(productList = products) {

    const container =
        document.getElementById("products");

    container.innerHTML = productList.map(product => {

        return `

            <div class="product-card">

                <div class="product-image">
                    ${product.image}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="rating">
                    ⭐ ${product.rating}
                </p>

                <p class="price">
                    ₹${product.price}
                </p>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})">

                    ADD TO CART

                </button>

            </div>

        `;

    }).join("");
}


// =====================================
// ADD TO CART
// find()
// push()
// =====================================

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    const existingItem =
        cart.find(
            item => item.id === productId
        );


    if (existingItem) {

        existingItem.quantity++;

    }

    else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();

}


// =====================================
// INCREASE QUANTITY
// =====================================

function increaseQuantity(productId) {

    const item =
        cart.find(
            item => item.id === productId
        );

    if (item) {

        item.quantity++;

    }

    updateCart();

}


// =====================================
// DECREASE QUANTITY
// =====================================

function decreaseQuantity(productId) {

    const item =
        cart.find(
            item => item.id === productId
        );


    if (item) {

        item.quantity--;

        if (item.quantity <= 0) {

            removeFromCart(productId);

            return;
        }

    }

    updateCart();

}


// =====================================
// REMOVE ITEM
// filter()
// =====================================

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    updateCart();

}


// =====================================
// UPDATE CART
// =====================================

function updateCart() {

    const container =
        document.getElementById("cartItems");


    // EMPTY CART

    if (cart.length === 0) {

        container.innerHTML = `

            <p class="empty-cart">

                🛒 Your cart is empty.

            </p>

        `;

    }

    else {

        container.innerHTML = cart.map(item => {

            return `

                <div class="cart-item">

                    <div class="cart-item-image">
                        ${item.image}
                    </div>


                    <div class="cart-item-info">

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ₹${item.price} each
                        </p>


                        <div class="quantity">

                            <button
                                onclick="decreaseQuantity(${item.id})">
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="increaseQuantity(${item.id})">
                                +
                            </button>

                        </div>


                        <button
                            class="remove-btn"
                            onclick="removeFromCart(${item.id})">

                            Remove

                        </button>

                    </div>


                    <strong>

                        ₹${item.price * item.quantity}

                    </strong>

                </div>

            `;

        }).join("");

    }


    // =================================
    // TOTAL USING reduce()
    // =================================

    let total = cart.reduce(

        (sum, item) =>

            sum + (item.price * item.quantity),

        0

    );


    // =================================
    // DISCOUNT LOGIC
    // =================================

    let discount = 0;


    if (total > 3000) {

        discount = total * 0.30;

    }

    else if (total > 2000) {

        discount = total * 0.20;

    }

    else if (total > 1000) {

        discount = total * 0.10;

    }

    else {

        discount = 0;

    }


    // =================================
    // FINAL AMOUNT
    // =================================

    let finalamount =
        total - discount;


    // =================================
    // DISPLAY
    // =================================

    document.getElementById("totalAmount")
        .textContent = total.toFixed(2);


    document.getElementById("discount")
        .textContent = discount.toFixed(2);


    document.getElementById("finalAmount")
        .textContent = finalamount.toFixed(2);


    // =================================
    // CART COUNT
    // =================================

    const cartCount =
        cart.reduce(

            (sum, item) =>
                sum + item.quantity,

            0

        );


    document.getElementById("cartCount")
        .textContent = cartCount;


    // =================================
    // CONSOLE OUTPUT
    // =================================

    console.log("Total Amount:", total);

    console.log("Discount:", discount);

    console.log("Final amount:", finalamount);

}


// =====================================
// SEARCH
// filter()
// =====================================

function searchProducts() {

    const searchText =

        document.getElementById("searchInput")
        .value
        .toLowerCase();


    const filteredProducts =

        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(searchText)

            ||

            product.category
                .toLowerCase()
                .includes(searchText)

        );


    displayProducts(filteredProducts);

}


// =====================================
// SCROLL TO CART
// =====================================

function scrollToCart() {

    document
        .getElementById("cartSection")
        .scrollIntoView({

            behavior: "smooth"

        });

}


// =====================================
// CHECKOUT
// =====================================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    alert(
        "Order placed successfully! 🎉"
    );

}


// =====================================
// INITIAL LOAD
// =====================================

displayProducts();

updateCart();