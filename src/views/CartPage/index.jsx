import { useUserDispatch, useUserState } from "context";
import { removeProductFromCart } from "context/actions";
import { isValidArray } from "handler/isValidArray";
import styles from "styles/CartPage.module.scss";

function CartPage() {
  const { cartProduct } = useUserState();
  const dispatch = useUserDispatch();

  const getTotalPrice = cartProduct.reduce((acc, prev) => acc + prev.price, 0);

  return isValidArray(cartProduct) ? (
    <div className={styles["cart-main"]}>
      {cartProduct.map((product) => {
        const { id, title, price, description, category, image } = product;
        return (
          <div key={id} className={styles["cart-card"]}>
            <div className={styles["product-image"]}>
              <img width={250} height={250} src={image} alt={title} />
            </div>
            <div className={styles["product-desc"]}>
              <h2>{title}</h2>
              <h5>{description}</h5>
              <div className={styles["price-section"]}>
                <h3>Price : {price}</h3>
                <p
                  onClick={() => {
                    removeProductFromCart(dispatch, product);
                  }}
                >
                  Remove From Cart
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles["total-count"]}>
        <h4>Total Price : ₹{getTotalPrice.toFixed(2)}</h4>
      </div>
    </div>
  ) : (
    <h1>Nothing in cart</h1>
  );
}

export default CartPage;
