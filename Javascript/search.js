function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = '';  // ล้างผลลัพธ์เก่า
  
    const products = document.querySelectorAll(".products-item h2");  // ค้นหาเฉพาะชื่อผลิตภัณฑ์
    products.forEach((product) => {
      if (product.textContent.toLowerCase().includes(input)) {
        const listItem = document.createElement("li");
        listItem.textContent = product.textContent;
        resultsList.appendChild(listItem);
      }
    });
  }
  