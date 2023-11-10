const params = new URLSearchParams(window.location.search);
const objId = params.get("id");
const form = document.querySelector("form");
const productName = document.getElementById("name");
const productDescription = document.getElementById("description");
const brandForm = document.getElementById("brand");
const imageUrlForm = document.getElementById("imageUrl");
const priceForm = document.getElementById("price");
const url = objId
  ? "https://striveschool-api.herokuapp.com/api/product/" + objId
  : "https://striveschool-api.herokuapp.com/api/product";
const submitBtn = document.querySelector("button");
const method = objId ? "PUT" : "POST";

window.onload = () => {
  if (objId) {
    fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjE1NjI1NGU4ODAwMTgzZjE4YjgiLCJpYXQiOjE2OTk2MDY4NzEsImV4cCI6MTcwMDgxNjQ3MX0.Kus_fhJ3Gncm3QdKPtdkXdpDdkTrcGrIKilOETsIxTc",
        "Content-Type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((obj) => {
        const { name, description, brand, imageUrl, price } = obj;
        productName.value = name;
        productDescription.value = description;
        brandForm.value = brand;
        imageUrlForm.value = imageUrl;
        priceForm.value = price;
      });
    document.querySelector("h1").innerText = "Modifica prodotto";
    submitBtn.innerText = "Modifica";
  }
};

const submitFunction = (event) => {
  event.preventDefault();
  const productObj = {
    name: productName.value,
    description: productDescription.value,
    brand: brandForm.value,
    imageUrl: imageUrlForm.value,
    price: parseInt(priceForm.value)
  };
  fetch(url, {
    method: method,
    body: JSON.stringify(productObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjE1NjI1NGU4ODAwMTgzZjE4YjgiLCJpYXQiOjE2OTk2MDY4NzEsImV4cCI6MTcwMDgxNjQ3MX0.Kus_fhJ3Gncm3QdKPtdkXdpDdkTrcGrIKilOETsIxTc",
      "Content-Type": "application/json"
    }
  })
    .then((resp) => resp.json())
    .then((obj) => {
      if (productObj) {
        alert("Risorsa creata");
        productName.value = "";
        productDescription.value = "";
        brandForm.value = "";
        imageUrlForm.value = "";
        priceForm.value = "";
      } else {
        alert("Risorsa non creata");
      }
    });
  console.log(productObj);
};
