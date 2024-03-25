// Data produk dalam bentuk array
const products = [
    {
      name: "Evil Nun",
      tahun: 2023,
      genre: "Horor",
      image: "evil nun.jpg", // Ganti dengan path file lokal yang benar
    },
    {
      name: "God Of War",
      tahun: 2018,
      genre: "Action",
      image: "god of war.jpg",
    },
    {
      name: "Mobile Legend",
      tahun: 2016,
      genre: "action",
      image: "mobile legend.jpg", // Ganti dengan path file lokal yang benar
    },
    {
      name: "Heroes Arena",
      tahun: 2023,
      genre: "action",
      image: "heroes arena.jpg" // Ganti dengan path file lokal yang benar
    },
  ];

  // Fungsi untuk membuat tampilan produk
  // Fungsi untuk membuat tampilan produk
  function renderProducts() {
    const productContainer = document.getElementById("productContainer");

    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      const productName = document.createElement("div");
      productName.textContent = `Name: ${product.name}`;

      const productYear = document.createElement("div");
      productYear.textContent = `Age: ${product.tahun}`;

      const productGenre = document.createElement("div");
      productGenre.textContent = `Genre: ${product.genre}`;

      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;

      productDiv.appendChild(productImage);
      productDiv.appendChild(productName);
      productDiv.appendChild(productYear);
      productDiv.appendChild(productGenre);

      productContainer.appendChild(productDiv);
    });
  }

  // Panggil fungsi untuk menampilkan produk saat halaman dimuat
  document.addEventListener("DOMContentLoaded", renderProducts);