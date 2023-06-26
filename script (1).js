// ---------------- Request Data & Create Cards On Home Page -------

var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

function getProductDetail() {
  var productDetail = productData;
  name = productDetail.name;
  imageSrc = productDetail.preview;
  brand = productDetail.brand;
  price = productDetail.price;
  description = productDetail.description;
  photo0 = productDetail.photos[0];
  photo1 = productDetail.photos[1];
  photo2 = productDetail.photos[2];
  photo3 = productDetail.photos[3];
  photo4 = productDetail.photos[4];
 
  createProductPage(
    imageSrc,
    name,
    brand,
    price,
    description,
    photo0,
    photo1,
    photo2,
    photo3,
    photo4
  );
}
getProductDetail();

function createProductPage(
  imageSrc,
  name,
  brand,
  price,
  description,
  img0,
  img1,
  img2,
  img3,
  img4
) {
  // Product Image
  var productImg = document.getElementById("productImg");
  productImg.src = imageSrc;

  // Product Name
  var productName = document.getElementById("name");
  productName.innerHTML = name;

  // Product Barnd
  var productBrand = document.getElementById("brand");
  productBrand.innerHTML = brand;

  // Product Price
  var productPrice = document.getElementById("price");
  productPrice.innerHTML = price;

  // Product Description
  var productDescription = document.getElementById("description");
  productDescription.innerHTML = description;

  // Product Preview Image 0
  var photo0 = document.getElementById("img0");
  photo0.src = img0;

  // Product Preview Image 1
  var photo1 = document.getElementById("img1");
  photo1.src = img1;

  // Product Preview Image 2
  var photo2 = document.getElementById("img2");
  photo2.src = img2;

  // Product Preview Image 3
  var photo3 = document.getElementById("img3");
  photo3.src = img3;

  // Product Preview Image 4
  var photo4 = document.getElementById("img4");
  photo4.src = img4;

  // ---------------- Change Preview Image OnClick -------
  function changeImage() {
    // Photo 0
    photo0.addEventListener("click", function () {
      productImg.src = img0;
    });

    // Photo 1
    photo1.addEventListener("click", function () {
      productImg.src = img1;
    });
    // Photo 2
    photo2.addEventListener("click", function () {
      productImg.src = img2;
    });

    // Photo 3
    photo3.addEventListener("click", function () {
      productImg.src = img3;
    });

    // Photo 4
    photo4.addEventListener("click", function () {
      productImg.src = img4;
    });

    $(document).on("click", ".previewImg img", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });

  }
  changeImage();
}
