import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../store/cart/cartSlice";
import { formatMoneyLocale } from "../../common/util/money";

export function ProductCardList(cartItem: any) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartItem: any) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem: any) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem: any) => {
    dispatch(addToCart(cartItem));
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
          <button
            onClick={() => handleDecreaseCart(cartItem)}
            className={styles.iconQtd}
          >
            -
          </button>
          <p className={styles.div}>|</p>
          <div className={styles.count}>{cartItem.cartQuantity}</div>
          <p className={styles.div}>|</p>
          <button
            onClick={() => handleIncreaseCart(cartItem)}
            className={styles.iconQtd}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.itemProductTotalPrice}>
        R${formatMoneyLocale(cartItem.price * cartItem.cartQuantity)}
      </div>
      <button
        type="button"
        onClick={() => handleRemoveFromCart(cartItem)}
        className={styles.buttonRemove}
      >
        <FiX className={styles.icon} />
      </button>
    </div>
  );
}
