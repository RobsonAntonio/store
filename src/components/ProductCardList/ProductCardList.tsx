import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";

export function ProductCardList(cartItem: any) {
  const cart = useSelector((state) => state.cart);

  const handlePurchase = () => {
    alert("fdfd");
  };

  return (
    <div className={styles.cartList}>
      <img
        src={cartItem.photo}
        alt={cartItem.photo}
        className={styles.itemImage}
      />

      <h1 className={styles.itemName}>{cartItem.name}</h1>
      <div>
        <p className={styles.text}>Qtd.</p>
        <div className={styles.itemProductQuantity}>
          <button className={styles.iconQtd}>-</button>
          <p className={styles.div}>|</p>
          <div className={styles.count}>{cartItem.cartQuantity}10</div>
          <p className={styles.div}>|</p>
          <button className={styles.iconQtd}>+</button>
        </div>
      </div>
      <div className={styles.itemProductTotalPrice}>
        R${cartItem.price * cartItem.Quantity}
      </div>
    </div>
  );
}
