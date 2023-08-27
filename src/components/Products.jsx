import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
    };
  }, []);
  return <div>Products</div>;
};

export default Products;
