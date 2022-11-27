// import { useNavigate } from "react-router-dom";
import { useUserState } from "context";
import styles from "styles/Header.module.scss";
import { CART_PAGE, CART_PRODUCT, LANDING_PAGE } from "scripts/constants";
import { useNavigate } from "react-router-dom";
// userState[CART_PRODUCT].length

function Header() {
  const navigate = useNavigate();
  const userState = useUserState();
  return (
    <div className={styles["header-main"]}>
      <h2
        onClick={() => {
          navigate(LANDING_PAGE);
        }}
        className={styles["brand-name"]}
      >
        Brand Name
      </h2>
      <div className={styles["cart-div"]}>
        <button
          onClick={() => {
            navigate(CART_PAGE);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
          </svg>
          <b>{userState[CART_PRODUCT].length}</b>
        </button>
      </div>
    </div>
  );
}
export default Header;
