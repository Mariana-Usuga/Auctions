import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import NavBar from '../components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/pages/productDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    };
    getProduct();
  }, []);

  return (
    <>
      <NavBar />
      {!loading ? (
        <div className="container">
          <div className="container__main">
            <img
              className="container__main__img"
              src={product.image}
              alt="product"
            />
          </div>
          <div className="container__info">
            <h2 className="container__info__title">{product.title}</h2>
            <p className="container__info__description">{product.description}</p>
            <p className="container__info__category">
              <span>Category: </span>
              {product.category}
            </p>
            <p className="container__info__price">{`$ ${product.price}`}</p>
          </div>
        </div>
      ) : <Spinner />}
    </>
  );
};
export default ProductDetail;
