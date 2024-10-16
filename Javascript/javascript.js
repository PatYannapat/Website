let cart = [];

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

function addToCart(productName, price) {
    // Add item to the cart
    cart.push({ name: productName, price: price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = ""; // Clear previous items
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.querySelector('.icon-cart span').textContent = cart.length; // Update cart count
}

function openCart() {
    document.getElementById("cartModal").style.display = "block";
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function checkout() {
    alert("Proceeding to checkout!");
    // Implement checkout functionality here
}

// Example of adding event listeners to your buttons
document.querySelectorAll('.addCart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.products-item').querySelector('.products-name h2').innerText;
        const productPrice = this.closest('.products-item').querySelector('.products-price').innerText.replace('$', '');
        addToCart(productName, parseFloat(productPrice));
    });
});


function showPopup(productName, productDescription, productPrice, productImage) {
    document.getElementById('popup-title').innerText = productName;
    document.getElementById('popup-description').innerText = productDescription;
    document.getElementById('popup-price').innerText = "$" + productPrice;
    document.getElementById('popup-image').src = productImage;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function buyProduct(event) {
    // ดึงข้อมูลสินค้าจาก popup
    const productName = document.getElementById('popup-title').innerText;
    const productPrice = parseFloat(document.getElementById('popup-price').innerText.replace('$', ''));
    
    // เรียกใช้ฟังก์ชัน addToCart เพื่อเพิ่มสินค้าลงในตะกร้า
    addToCart(productName, productPrice);

    // ปิด popup หลังจากเพิ่มสินค้าเสร็จ
    closePopup();
}
