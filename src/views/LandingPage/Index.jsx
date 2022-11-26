import Cards from "component/common/Cards";
import { getProducts } from "context/actions";
import { isValidArray } from "handler/isValidArray";
import { Fragment, useEffect, useState } from "react";
import styles from "styles/LandingPage.module.scss";

function LandingPage() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProductData(res);
    });
  }, []);

  return (
    isValidArray(productData) && (
      <div className={styles["product-main"]}>
        {productData.map((data) => {
          const {
            id,
            title,
            price,
            description,
            category,
            image,
            rating: { rate, count },
          } = data;
          return (
            <Fragment key={id}>
              <Cards image={image} title={title} price={price} rating={rate} />
            </Fragment>
          );
        })}
      </div>
    )
  );
}

export default LandingPage;
