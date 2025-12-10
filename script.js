// === Product Details Data ===
const products = {
    chocolate: {
        name: "شوكولاتة سويسرية داكنة",
        origin: "🇨🇭 سويسرا",
        price: "1,250 دج",
        description: "شوكولاتة داكنة أصلية من سويسرا، طعم غني وفاخر."
    },
    frico: {
        name: "جبن فريكو جودا",
        origin: "🇳🇱 هولندا",
        price: "850 دج",
        description: "جبن جودا هولندي أصلي، نكهة كريمية ومثالية للسندويشات."
    },
    croissant: {
        name: "كرواسون فرنسي بالزبدة",
        origin: "🇫🇷 فرنسا",
        price: "180 دج",
        description: "كرواسون فرنسي تقليدي مصنوع من أفضل أنواع الزبدة."
    },
    honey: {
        name: "عسل عضوي نقي",
        origin: "🇹🇷 تركيا",
        price: "1,500 دج",
        description: "عسل عضوي طبيعي 100%، غني بالعناصر الغذائية."
    },
    pasta: {
        name: "معكرونة باريلا إيطالية",
        origin: "🇮🇹 إيطاليا",
        price: "450 دج",
        description: "معكرونة عالية الجودة من إيطاليا، مثالية لجميع الأطباق."
    }
};

// === Cart Counter ===
let cartCount = 0;
const cartCountEl = document.getElementById("cartCount");

// === Show Product Detail Modal ===
function showProductDetail(productId) {
    const product = products[productId];
    const modal = document.getElementById("productModal");
    const content = document.getElementById("productDetailContent");

    content.innerHTML = `
        <h2>${product.name}</h2>
        <p><strong>المنشأ:</strong> ${product.origin}</p>
        <p><strong>السعر:</strong> ${product.price}</p>
        <p>${product.description}</p>
        <button onclick="addToCart('${productId}')">🛒 أضف إلى العربة</button>
    `;

    modal.style.display = "block";
}

// === Close Product Modal ===
function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// === Add Product to Cart ===
function addToCart(productId) {
    cartCount++;
    cartCountEl.textContent = cartCount;
    alert(`${products[productId].name} تم إضافته إلى العربة!`);
    closeModal();
}

// === Add Product Modal (Optional Form) ===
function showAddForm(category) {
    document.getElementById("addProductModal").style.display = "block";
}

function closeAddModal() {
    document.getElementById("addProductModal").style.display = "none";
}

// === Handle Add Product Form Submission ===
document.addEventListener("DOMContentLoaded", () => {
    const addForm = document.getElementById("addProductForm");
    if (addForm) {
        addForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("productName").value;
            const price = document.getElementById("productPrice").value;
            const origin = document.getElementById("productOrigin").value;
            const expiry = document.getElementById("productExpiry").value;
            const description = document.getElementById("productDescription").value;

            // إضافة المنتج جديد كعنصر في الـ Grid (يمكن تطويره لاحقًا لتخزين بيانات حقيقية)
            alert(`تمت إضافة المنتج: ${name} (${price} دج)`);

            closeAddModal();
            addForm.reset();
        });
    }
});

// === Close modals by clicking outside ===
window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    const addModal = document.getElementById("addProductModal");
    if (event.target === modal) modal.style.display = "none";
    if (event.target === addModal) addModal.style.display = "none";
}
