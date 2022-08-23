import styles from "./styles.module.scss";
import { IoBagHandleSharp } from "react-icons/io5";

type products = {
  name: string;
  price: number;
  description: string;
  photo: string;
  product: [];
  handleAddToCart: () => void;
};

export function ProductCard({
  name,
  price,
  description,
  photo,
  product,
  handleAddToCart,
}: products) {
  return (
    <div className={styles.card}>
      <img src={photo} alt="" className={styles.cardImage} />
      <div className={styles.cardNamePrice}>
        <h1 className={styles.cardName}>{name}</h1>
        <h1 className={styles.cardPrice}>R${price}</h1>
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <button
        className={styles.cardButton}
        onClick={() => handleAddToCart(product)}
      >
        <IoBagHandleSharp className="cardIconButton" />
        COMPRAR
      </button>
    </div>
  );
}
