import Cards from "component/common/Cards";
import styles from "styles/LandingPage.module.scss";

function LandingPage() {
  return (
    <div className={styles["product-main"]}>
      {[...Array(10).keys()].map((v) => {
        return <Cards />;
      })}
    </div>
  );
}

export default LandingPage;
