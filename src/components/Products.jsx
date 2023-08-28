import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredProducts(jsonData);
      } catch {
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProducts = (cate) => {
    const updatedList = data.filter((item) => item.category === cate);
    setFilteredProducts(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilteredProducts(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("jewelery")}
          >
            Jewelary
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics")}
          >
            Electronic
          </button>
        </div>
        {filteredProducts?.map((product) => (
          <div className="col-md-3 mb-4 ">
            <div className="card h-100 text-center p-4" key={product.id}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-1 ">
                  {product.title.substring(0, 12)}
                </h5>
                <p className="card-text lead  fw-bold ">${product.price}</p>

                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark "
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <>
      <h1>Latest Products</h1>
      <div className="row justify-content-center ">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </>
  );
};

export default Products;
