function shoot() {
  alert("Great Shot!");
}

function AddProduct(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div class="card" style={{ marginTop: "30px" }}>
      <div class="card-header">Add Product</div>
      <div class="card-body">
        <form class="row gx-3 gy-2 align-items-center">
          <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">
              Sku
            </label>
            <div class="input-group">
              <div class="input-group-text">Sku</div>
              <input
                type="text"
                class="form-control"
                id="specificSizeInputGroupUsername"
                placeholder="Sku code"
              ></input>
            </div>
          </div>
          <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">
              Product Name
            </label>
            <div class="input-group">
              <div class="input-group-text">Name</div>
              <input
                type="text"
                class="form-control"
                id="specificSizeInputGroupUsername"
                placeholder="Product name"
              ></input>
            </div>
          </div>

          <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">
              Brand
            </label>
            <div class="input-group">
              <div class="input-group-text">Brand</div>
              <input
                type="text"
                class="form-control"
                id="specificSizeInputGroupUsername"
                placeholder="Brand name"
              ></input>
            </div>
          </div>
          <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">
              Price
            </label>
            <div class="input-group">
              <div class="input-group-text">Price</div>
              <input
                type="text"
                class="form-control"
                id="specificSizeInputGroupUsername"
                placeholder="Price"
              ></input>
            </div>
          </div>
          <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">
              Quantity
            </label>
            <div class="input-group">
              <div class="input-group-text">Quantity</div>
              <input
                type="text"
                class="form-control"
                id="specificSizeInputGroupUsername"
                placeholder="Quantity"
              ></input>
            </div>
          </div>

          <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">
              Category
            </label>
            <div class="input-group">
              <div class="input-group-text">Category</div>
              <input
                type="text"
                class="form-control"
                id="specificSizeInputGroupUsername"
                placeholder="Category"
              ></input>
            </div>
          </div>

          <div class="col-sm-6">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">
              Description
            </label>
            <div class="input-group">
              <div class="input-group-text">Description</div>
              <input
                type="text"
                class="form-control"
                id="specificSizeInputGroupUsername"
                placeholder="Description"
              ></input>
            </div>
          </div>
        </form>
        <p></p>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" onClick={shoot}>
            Submit
          </button>
          <button
            type="button"
            class="btn btn-danger"
            style={{ marginLeft: "5px" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
