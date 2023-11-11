const row = document.getElementById("row");
async function fetchEx() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjE1NjI1NGU4ODAwMTgzZjE4YjgiLCJpYXQiOjE2OTk2MDY4NzEsImV4cCI6MTcwMDgxNjQ3MX0.Kus_fhJ3Gncm3QdKPtdkXdpDdkTrcGrIKilOETsIxTc"
      }
    }
  );
  const json = await response.json();
  console.log(json);
  json.forEach((elem) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
        <div class="card">
        <img src="${elem.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${elem.name}</h5>
         <p class="card-text">Descrizione: ${elem.description}</p>
         <p class="card-text">Brand: ${elem.brand}</p>
         <p class="card-text">Prezzo: ${elem.price}$</p>
         <a href="./product.html?id=${elem._id}" class="btn btn-primary">Dettagli</a>
         <button class="btn btn-outline-secondary" type="button"  onclick="showBtnGroup(event)">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
         <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
       </svg></button>
         <div class="btn-group d-none">
         <a href="./backoffice.html?id=${elem._id}" class="btn btn-primary" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
       <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/></a>
        <button type="button" class="btn btn-danger" onclick="removeProduct('${elem._id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
         <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
       </svg></button>
         <button type="button" class="btn btn-secondary"  onclick="hideBtnGroup(event)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
       </svg></button>
          </div>
        </div>
        `;
    row.appendChild(col);
  });
}
fetchEx();
// fetch("https://striveschool-api.herokuapp.com/api/product", {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjE1NjI1NGU4ODAwMTgzZjE4YjgiLCJpYXQiOjE2OTk2MDY4NzEsImV4cCI6MTcwMDgxNjQ3MX0.Kus_fhJ3Gncm3QdKPtdkXdpDdkTrcGrIKilOETsIxTc"
//   }
// })
//   .then((resp) => resp.json())
//   .then((obj) => {
//     obj.forEach((elem) => {
//       const col = document.createElement("div");
//       col.className = "col";
//       col.innerHTML = `
//         <div class="card">
//         <img src="${elem.imageUrl}" class="card-img-top" alt="...">
//         <div class="card-body">
//          <h5 class="card-title">${elem.name}</h5>
//          <p class="card-text">Descrizione: ${elem.description}</p>
//          <p class="card-text">Brand: ${elem.brand}</p>
//          <p class="card-text">Prezzo: ${elem.price}$</p>
//          <a href="./product.html?id=${elem._id}" class="btn btn-primary">Dettagli</a>
//          <button class="btn btn-outline-secondary" type="button"  onclick="showBtnGroup(event)">
//          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
//          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
//        </svg></button>
//          <div class="btn-group d-none">
//          <button type="button" class="btn btn-primary" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
//        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/></button>
//          <button type="button" class="btn btn-danger" onclick="removeProduct()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
//          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
//        </svg></button>
//          <button type="button" class="btn btn-secondary"  onclick="hideBtnGroup(event)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
//          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
//        </svg></button>
//           </div>
//         </div>
//         `;
//       row.appendChild(col);
//     });
//   });

const showBtnGroup = (e) => {
  // console.log(e.currentTarget.nextSibling.nextElementSibling);
  e.currentTarget.nextSibling.nextElementSibling.classList.remove("d-none");
};
const hideBtnGroup = (e) => {
  //   console.log(e.currentTarget.parentNode);
  e.currentTarget.parentNode.classList.add("d-none");
};
const removeProduct = (id) => {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjE1NjI1NGU4ODAwMTgzZjE4YjgiLCJpYXQiOjE2OTk2MDY4NzEsImV4cCI6MTcwMDgxNjQ3MX0.Kus_fhJ3Gncm3QdKPtdkXdpDdkTrcGrIKilOETsIxTc"
    },
    method: "DELETE"
  })
    .then((resp) => resp.json())
    .then((obj) => {
      alert(obj.name + " è stato cancellato");
      window.location.reload();
    });
};

const hideSpinner = (p) => {
  const spinner = document.querySelector(".spinner-border");
  if (p) {
    spinner.classList.add("d-none");
  }
};
window.onload = () => {
  hideSpinner(true);
};
