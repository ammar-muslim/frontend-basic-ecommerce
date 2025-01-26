import { useState } from "react";
import "./cart.css";

import { FaShoppingBasket  } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRedo } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart , resetCart  } from "../redux/cartReducer";

const Cart = () => {
  const [cartList, setCartList] = useState(false);

  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div
        className="cart-icon"
        onClick={() => {
          products.length > 0 && setCartList(!cartList);
        }}
      >
        <FaShoppingBasket  />
      </div>
      <div className="cart-badge">{products.length}</div>
      {cartList && (
        <ul className="cart-list">
          {products.map((product, index) => (
            <li className="cart-item" key={index}>
              <img
                src={import.meta.env.VITE_APP_URL + product.image}
                alt=""
                className="cart-item-image"
              />
              <span className="cart-item-title">{product.title}</span>
              <span className="cart-item-price">{product.price}$</span>
              <div
  className="trash-icon"
  onClick={() => {
    dispatch(removeFromCart({ id: product.id }));

    // إذا لم يتبقَّ أي عناصر، أخفِ القائمة
    if (products.length === 1) {
      setCartList(false);
    }
  }}
>
  <FaRegTrashCan />
</div>

            </li>
          ))}
<div
  className="reDo-icon"
  onClick={() => {
    dispatch(resetCart());
    setCartList(false); // إخفاء القائمة بعد الحذف
  }}
>
  <FaRedo />
</div>

        </ul>
      )}
    </div>
  );
};

export default Cart;
