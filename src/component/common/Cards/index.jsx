import React from "react";
import { renderMatches } from "react-router-dom";
import styles from "styles/Cards.module.scss";

function Cards({
  image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  title = "Nourish rajma dal",
  rating = 3.5,
  price = 35000,
  id,
}) {
  const handleAddToCartClick = () => {
    console.log("Added To Cart");
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
