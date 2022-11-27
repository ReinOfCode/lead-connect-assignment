import { useUserDispatch, useUserState } from "context";
import { addProductToCart, removeProductFromCart } from "context/actions";
import React, { useEffect, useState } from "react";
import { CART_PRODUCT } from "scripts/constants";
import styles from "styles/Cards.module.scss";

function Cards(props) {
  const userState = useUserState();
  const [quantity, setQuantity] = useState(1);
  const { image = "", title = "", rating, price, id } = props;
  const cartItems = userState[CART_PRODUCT];
  const isProductInCart = cartItems.some((item) => item.id === id);
  const userDispatch = useUserDispatch();
  const handleAddToCartClick = () => {
    addProductToCart(userDispatch, { ...props, quantity }).then((res) => {});
  };

  return (
    <div className={styles["card-main"]}>
      <div className={styles["card-image"]}>
        <img width={150} height={250} src={image} alt="random alt text" />
      </div>
      <div className={styles["card-title"]}>
        <p>
          {title.substring(0, 20)}
          {title.length > 20 && <span>...</span>}{" "}
        </p>
      </div>
      <div className={styles["card-rating-and-amount"]}>
        <div className={styles["product-rating"]}>Rating: {rating}</div>
        <div className={styles["product-amount"]}>
          <div className={styles["card-product-price"]}>
            <span>
              ₹{price}
              <small>{" MRP"}</small>
            </span>
          </div>
        </div>
      </div>
      <div className={styles["card-product-quantity_cart"]}>
        <div className={styles["card-quantity"]}>
          <button
            disabled={quantity <= 1 || isProductInCart}
            onClick={() => setQuantity((pre) => pre - 1)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            disabled={isProductInCart}
            onClick={() => setQuantity((pre) => pre + 1)}
          >
            +
          </button>
        </div>
        {isProductInCart ? (
          <button
            className={styles["card-button"]}
            onClick={() => removeProductFromCart(userDispatch, props)}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className={styles["card-button"]}
            onClick={handleAddToCartClick}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}
export default React.memo(Cards);
