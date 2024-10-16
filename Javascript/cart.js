let cart = [];  // อาร์เรย์เก็บสินค้าที่เลือก

// ฟังก์ชันเพิ่มสินค้าเข้ารถเข็น
function addToCart(productName, productPrice) {
    // สร้างอ็อบเจ็กต์สินค้าใหม่
    const product = {
        name: productName,
        price: productPrice
    };
    
    // เพิ่มสินค้าลงในรถเข็น
    cart.push(product);
    updateCart();
}

// ฟังก์ชันอัปเดตข้อมูลรถเข็น
function updateCart() {
    // แสดงจำนวนสินค้าในรถเข็น
    document.querySelector('.icon-cart span').textContent = cart.length;

    // คุณสามารถเพิ่มโค้ดสำหรับแสดงรายการสินค้าในรถเข็นได้ที่นี่
    // เช่น การแสดงรายการสินค้าในหน้าป๊อปอัพหรือหน้าตะกร้าสินค้า
    console.log(cart);
}

// เพิ่ม event listener ให้กับปุ่ม Add To Cart
document.querySelectorAll('.addCart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('.products-name h2').textContent;
        const productPrice = button.parentElement.querySelector('.products-price').textContent;
        addToCart(productName, productPrice);
    });
});
