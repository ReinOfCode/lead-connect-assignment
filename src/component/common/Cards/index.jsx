import { useUserDispatch, useUserState } from "context";
import { addProductToCart } from "context/actions";
import React from "react";
import { CART_PRODUCT } from "scripts/constants";
import styles from "styles/Cards.module.scss";

function Cards(props) {
  const userState = useUserState();

  const { image = "", title = "", rating, price, id } = props;
  const cartItems = userState[CART_PRODUCT];
  const isProductInCart = cartItems.find((item) => item.id === "id");
  const userDispatch = useUserDispatch();
  const handleAddToCartClick = () => {
    addProductToCart(userDispatch, props).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={styles["card-main"]}>
      <div className={styles["card-image"]}>
        <img width={150} height={250} src={image} alt="random alt text" />
      </div>
      <div className={styles["card-title"]}>
        <p>{title}</p>
      </div>
      <div className={styles["card-rating-and-amount"]}>
        <div className={styles["product-rating"]}>{rating}</div>
        <div className={styles["product-amount"]}>
          <select>
            <option>1</option>
          </select>
        </div>
      </div>
      <div className={styles["card-product-price"]}>
        <p>
          ₹{price}
          <small>{" MRP"}</small>
        </p>
      </div>
      <div className={styles["card-product-quantity_cart "]}>
        <div className={styles["card-quantity"]}>
          <input type="number" />
        </div>
        <button onClick={handleAddToCartClick}>ADD TO CART</button>
      </div>
    </div>
  );
}
export default React.memo(Cards);
