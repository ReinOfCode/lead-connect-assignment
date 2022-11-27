import { useUserDispatch, useUserState } from "context";
import { addProductToCart } from "context/actions";
import React, { useState } from "react";
import { CART_PRODUCT } from "scripts/constants";
import styles from "styles/Cards.module.scss";

function Cards(props) {
  const userState = useUserState();
  const [quantity, setQuantity] = useState(1);
  const { image = "", title = "", rating, price } = props;
  const cartItems = userState[CART_PRODUCT];
  const isProductInCart = cartItems.find((item) => item.id === "id");
  const userDispatch = useUserDispatch();
  const handleAddToCartClick = () => {
    addProductToCart(userDispatch, { ...props, quantity }).then((res) => {
      console.log(res);
    });
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
            disabled={quantity <= 1}
            onClick={() => setQuantity((pre) => pre - 1)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((pre) => pre + 1)}>+</button>
        </div>
        <button
          className={styles["card-button"]}
          onClick={handleAddToCartClick}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
export default React.memo(Cards);
