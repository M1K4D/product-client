import Axios from "axios";
import { useState, useEffect } from "react";
import AddProduct from "./component/AddProduct";
import UpdateProduct from "./component/UpdateProduct";

function App() {
  const [productList, setProductList] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const getProduct = () => {
    Axios.get("http://localhost:3000/product").then((response) => {
      setProductList(response.data.data);
      console.log(response.data.data);
    });
  };

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3000/product/delete/${id}`).then(
      (response) => {
        setProductList(
          productList.filter((val) => {
            return val.id != id;
          })
        );
      }
    );
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="App container">
      <h2 class="text-center">Product</h2>
      <button
        class="btn btn-primary"
        onClick={() => {
          setHideButton(true);
          setShowAddProduct(true);
        }}
        hidden={hideButton}
      >
        Add
      </button>
      <AddProduct show={showAddProduct} />
      <UpdateProduct show={false} />

      <div class="card" style={{ marginTop: "30px" }}>
        <div class="card-header">Product List</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
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
                {productList.map((val, key) => {
                  return (
                    <tr>
                      <th scope="row">{val.id}</th>
                      <td>{val.sku}</td>
                      <td>{val.name}</td>
                      <td>{val.brand}</td>
                      <td>{val.quantity}</td>
                      <td>{val.price}</td>
                      <td>{val.category}</td>
                      <td>{val.discription}</td>
                      <td>
                        <a
                          href="#"
                          class="icon text-danger"
                          onClick={() => deleteProduct(val.id)}
                        >
                          <i class="fa fa-trash-o "></i>
                        </a>

                        {/* <a
                          href="#"
                          class="icon"
                          
                        >
                          <i class="fa fa-pencil "></i>
                        </a> */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
