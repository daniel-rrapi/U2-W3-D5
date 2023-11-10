const container = document.querySelector(".container");
const productId = new URLSearchParams(window.location.search).get("id");
console.log(productId);
fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjE1NjI1NGU4ODAwMTgzZjE4YjgiLCJpYXQiOjE2OTk2MDY4NzEsImV4cCI6MTcwMDgxNjQ3MX0.Kus_fhJ3Gncm3QdKPtdkXdpDdkTrcGrIKilOETsIxTc"
  }
})
  .then((resp) => resp.json())
  .then((obj) => {
    container.innerHTML = `
    <img src="${obj.imageUrl}"/>
    <h1>${obj.name}</h1>
    <p>${obj.description}</p>
    <p>${obj.price}$</p>
    `;
  });
