import Axios from "axios";
import { useState, useEffect } from "react";
import {
  addProduct,
  getProduct,
  update,
  uploadImg,
  deleteProduct,
  deleteImg,
} from "./funtions/FetchApi";

function App() {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [updateProduct, setUpdateProduct] = useState(false);

  const [id, setId] = useState(0);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [img, setImg] = useState({});

  async function fetchProduct() {
    const data = await getProduct();
    setProductList(data);
  }

  async function handlerUpdate(id) {
    const bodyUpdate = {
      name: name,
      brand: brand,
      price: parseInt(price),
      quantity: parseInt(quantity),
      discription: description,
      category: category,
    };
    await update(id, bodyUpdate);
    await fetchProduct();
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const handlerDelete = (id, img) => {
    deleteProduct(id);
    deleteImg(img);
    setProductList(
      productList.filter((val) => {
        return val.product_id != id;
      })
    );
  };

  async function handlerSubmit() {
    try {
      const nameImg = await uploadImg(img);
      const productBody = {
        img: nameImg,
        sku: sku,
        name: name,
        brand: brand,
        price: parseInt(price),
        quantity: parseInt(quantity),
        discription: description,
        category: category,
      };

      await addProduct(productBody);
      await fetchProduct();
    } catch (err) {
      console.log(err);
      alert("add failed!");
    }
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productList.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(productList.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App container">
      <h2 class="text-center">Product</h2>

      <div class="card" style={{ marginTop: "30px" }}>
        <div class="card-header">
          {updateProduct ? "Update Product" : "Add Product"}
        </div>
        <div class="card-body">
          <form class="row gx-3 gy-2 align-items-center">
            <div class="col-sm-3" hidden={updateProduct}>
              <label
                class="visually-hidden"
                for="specificSizeInputGroupUsername"
              >
                Sku
              </label>
              <div class="input-group">
                <div class="input-group-text">Sku</div>
                <input
                  type="text"
                  class="form-control"
                  id="specificSizeInputGroupUsername"
                  placeholder="Sku code"
                  value={sku}
                  onChange={(event) => setSku(event.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-sm-3">
              <label
                class="visually-hidden"
                for="specificSizeInputGroupUsername"
              >
                Product Name
              </label>
              <div class="input-group">
                <div class="input-group-text">Name</div>
                <input
                  type="text"
                  class="form-control"
                  id="specificSizeInputGroupUsername"
                  placeholder="Product name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                ></input>
              </div>
            </div>

            <div class="col-sm-3">
              <label
                class="visually-hidden"
                for="specificSizeInputGroupUsername"
              >
                Brand
              </label>
              <div class="input-group">
                <div class="input-group-text">Brand</div>
                <input
                  type="text"
                  class="form-control"
                  id="specificSizeInputGroupUsername"
                  placeholder="Brand name"
                  value={brand}
                  onChange={(event) => setBrand(event.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-sm-3">
              <label
                class="visually-hidden"
                for="specificSizeInputGroupUsername"
              >
                Price
              </label>
              <div class="input-group">
                <div class="input-group-text">Price</div>
                <input
                  type="number"
                  min={0}
                  class="form-control"
                  id="specificSizeInputGroupUsername"
                  placeholder="Price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                ></input>
              </div>
            </div>
            <div class="col-sm-3">
              <label
                class="visually-hidden"
                for="specificSizeInputGroupUsername"
              >
                Quantity
              </label>
              <div class="input-group">
                <div class="input-group-text">Quantity</div>
                <input
                  type="number"
                  class="form-control"
                  id="specificSizeInputGroupUsername"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                ></input>
              </div>
            </div>

            <div class="col-sm-3">
              <label
                class="visually-hidden"
                for="specificSizeInputGroupUsername"
              >
                Category
              </label>
              <div class="input-group">
                <div class="input-group-text">Category</div>
                <input
                  type="text"
                  class="form-control"
                  id="specificSizeInputGroupUsername"
                  placeholder="Category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                ></input>
              </div>
            </div>

            <div class="col-sm-6">
              <label
                class="visually-hidden"
                for="specificSizeInputGroupUsername"
              >
                Description
              </label>
              <div class="input-group">
                <div class="input-group-text">Description</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></input>
              </div>
            </div>
          </form>
          <p></p>

          {updateProduct ? (
            <div class="col-auto">
              <button
                type="submit"
                class="btn btn btn-success"
                onClick={() => {
                  handlerUpdate(id);
                  setQuantity("");
                }}
              >
                Submit
              </button>
              <button
                type="button"
                class="btn btn btn-primary"
                style={{ marginLeft: "5px" }}
                onClick={() => {
                  setSku("");
                  setUpdateProduct(false);
                  setName("");
                  setBrand("");
                  setPrice("");
                  setQuantity("");
                  setCategory("");
                  setDescription("");
                }}
              >
                Add Prduct
              </button>
            </div>
          ) : (
            <div class="col-auto">
              <div class="row">
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn btn btn-success"
                    onClick={() => {
                      handlerSubmit();
                      document.getElementById("fileInput").value = "";
                    }}
                  >
                    Submit
                  </button>
                </div>

                <div class="col-sm-3">
                  <input
                    id="fileInput"
                    type="file"
                    class="form-control"
                    aria-label="file example"
                    onChange={(event) => {
                      setImg(event.target.files[0]);
                      console.log(event.target.files[0]);
                    }}
                  ></input>
                  <label for="formFile" class="form-label">
                    Input product image
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div class="card" style={{ marginTop: "30px" }}>
        <div class="card-header">Product List</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Sku</th>
                  <th scope="col">Name</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  <th scope="col">Description</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((val, key) => {
                  return (
                    <tr>
                      <th scope="row">{val.product_id}</th>
                      <td>
                        <a
                          href={`http://localhost:3000/product/product-img/${val.product_img}`}
                        >
                          <img
                            src={`http://localhost:3000/product/product-img/${val.product_img}`}
                            alt="Trulli"
                            width="40"
                            height="40"
                          ></img>
                        </a>
                      </td>
                      <td>{val.product_sku}</td>
                      <td>{val.product_name}</td>
                      <td>{val.product_brand}</td>
                      <td>{val.product_quantity}</td>
                      <td>{val.product_price}</td>
                      <td>{val.category_name}</td>
                      <td>{val.product_discription}</td>
                      <td>
                        <a
                          href="#"
                          class="icon text-danger"
                          onClick={() =>
                            handlerDelete(val.product_id, val.product_img)
                          }
                        >
                          <i class="fa fa-trash-o "></i>
                        </a>

                        <a
                          href="#"
                          class="icon"
                          style={{ marginLeft: "20px" }}
                          onClick={() => {
                            setId(val.product_id);
                            setUpdateProduct(true);
                            setSku(val.product_sku);
                            setName(val.product_name);
                            setBrand(val.product_brand);
                            setPrice(val.product_price);
                            setQuantity(0);
                            setCategory(val.category_name);
                            setDescription(val.product_discription);
                          }}
                        >
                          <i class="fa fa-pencil "></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <nav>
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <a
                    onClick={() => paginate(number)}
                    href="!#"
                    className="page-link"
                  >
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
