import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";

type products = {
  name: string;
  price: number;
  photo: string;
};

export function ProductCardList({ name, price, photo }: products) {
  const handlePurchase = () => {
    alert("fdfd");
  };

  return (
    <div className={styles.card}>
      <img src={photo} alt="" className={styles.cardImage} />
      <h1 className={styles.cardName}>{name}</h1>
      <p className={styles.cardPrice}>R${price}</p>
      <div className={styles.cardIcon}>
        <button
          type="button"
          onClick={handlePurchase}
          className="react-modal-close"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <FiX className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
