import Axios from "axios";

function addAlert() {
  alert("add failed!");
}

function updateAlert() {
  alert("update failed!");
}

export async function getProduct() {
  const data = await Axios.get("http://localhost:3000/product").then(
    (response) => {
      console.log("data get", response.data.data);
      return response.data.data;
    }
  );

  return data;
}

export async function addProduct(body) {
  await Axios.post("http://localhost:3000/product/create", body)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
      addAlert();
    });
}

export async function update(id, body) {
  await Axios.put(`http://localhost:3000/product/update/${id}`, body)
    .then((response) => {
      console.log("response update product", response.data);
    })
    .catch((err) => {
      console.log(err);
      updateAlert();
    });
}

export async function uploadImg(img) {
  const fd = new FormData();
  fd.append("file", img, img.name);
  const data = await Axios.post(
    "http://localhost:3000/product/uploadimage",
    fd
  ).then((response) => {
    return response.data.imagePath;
  });
  return data;
}

export const deleteProduct = (id) => {
  Axios.delete(`http://localhost:3000/product/delete/${id}`);
};
