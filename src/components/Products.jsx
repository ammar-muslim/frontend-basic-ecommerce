import { useEffect, useState , useContext } from 'react';
import useFetch from '../hooks/useFetch';
import './products.css';
import StoreContext from '../hooks/StoreContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

const Products = () => {
  const [products, setProducts] = useState([]);

  const {filter} = useContext(StoreContext)

  const { data, loading, error } = useFetch(filter);

  const dispatch = useDispatch();

  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  
  return (
    <div className="products-container">
      {loading ? (
        <h1 className="loading-text">Loading...</h1>
      ) : (
        products.map((product) => (
          <div className="product" key={product.id}>
            <img className='product-image' src={`${import.meta.env.VITE_APP_URL + product.image[0].url}`} alt={product.title} />
            <p className='product-desc'>{product.desc}</p> 
            <h1 className='product-title'>{product.title}</h1>
            <div className='product-actions'>
            <p className='product-price'>{product.price}</p>
            <button className='product-button' onClick={()=> dispatch(addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image[0].url
              
            }))}>Add to Cart</button>
          </div>

            </div>
        ))
      )}
    </div>
  );
};

export default Products;
