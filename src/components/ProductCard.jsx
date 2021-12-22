import '../styles/components/productCard.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductCard = ({ product, minutesRandom, secondsRandom }) => {
  const title = product.title.slice(0, 20);
  const [minutes, setMinutes] = useState(minutesRandom);
  const [seconds, setSeconds] = useState(secondsRandom);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div className="productCard__item">
      <img className="productCard__img" src={product.image} alt="Product" />
      <div className="productCard__info">
        <h3 className="productCard__subtitle">{`${title}...`}</h3>
        <p className="productCard__price">
          <small>$</small>
          <span>{product.price}</span>
        </p>
        <button className="productCard__btn" type="button">
          <Link
            to={seconds !== 0 ? `/detalle/${product.id}` : ''}
            className="productCard__btn__link"
          >
            Go to Detail
          </Link>
        </button>
        <div>
          00:
          {minutes}
          :
          {seconds}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.arrayOf([]).isRequired,
  minutesRandom: PropTypes.number.isRequired,
  secondsRandom: PropTypes.number.isRequired,
};

export default ProductCard;
