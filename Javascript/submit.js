document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ
    alert('การทำรายการสำเร็จ'); // แสดงข้อความ popup
});

function closePage() {
    window.location.href = "index.html"; // เปลี่ยนหน้าไปยัง index.html
}
