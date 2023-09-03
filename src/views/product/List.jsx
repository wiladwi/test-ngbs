import React, { lazy, Component } from "react";
import { data } from "../../data";
const Paging = lazy(() => import("../../components/Paging"));
const CardProductGrid = lazy(() =>
  import("../../components/card/CardProductGrid")
);
class ProductListView extends Component {
  state = {
    currentProducts: [],
    currentPage: null,
    totalPages: null,
    totalItems: 0,
    view: "grid",
  };

  UNSAFE_componentWillMount() {
    const totalItems = this.getProducts().length;
    this.setState({ totalItems });
  }

  onPageChanged = (page) => {
    let products = this.getProducts();
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = products.slice(offset, offset + pageLimit);
    this.setState({ currentPage, currentProducts, totalPages });
  };

  onChangeView = (view) => {
    this.setState({ view });
  };

  getProducts = () => {
    let products = data.products;
    /*products = products.concat(products);
     products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products); */
    return products;
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="p-5 bs-cover"
        >
          <div className="container text-center">
            <span className="display-5" style={{ fontWeight: 500}}>
               Our Menus
            </span>
          </div>
        </div>
        <div className="container-fluid mb-3">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-9">
              <hr />
              <div className="row g-3">
                {this.state.view === "grid" &&
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-4">
                        <CardProductGrid data={product} />
                      </div>
                    );
                  })}
              </div>
              <hr />
              <Paging
                totalRecords={this.state.totalItems}
                pageLimit={9}
                pageNeighbours={3}
                onPageChanged={this.onPageChanged}
                sizing=""
                alignment="justify-content-center"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductListView;
