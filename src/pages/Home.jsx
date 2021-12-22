import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
      setLoading(false);
    };
    getProducts();
  }, []);
  return (
    <>
      <NavBar />
      {!loading ? (
        <div className="productCard">
          {products
            .filter((p) => p.rating.rate > 3.3)
            .map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                minutesRandom={Math.floor(Math.random() * (3 - 0 + 1) + 0)}
                secondsRandom={Math.floor(Math.random() * (60 - 0 + 1) + 0)}
              />
            ))}
        </div>
      ) : <Spinner />}
      <Outlet />
    </>
  );
};

export default Home;
