import Modal from "react-modal";
import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";
import { ProductCardList } from "../ProductCardList/ProductCardList";
import { useState } from "react";
import { useSelector } from "react-redux";

interface ModalProductsProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: number;
}

export default function ModalProducts({
  isOpen,
  onRequestClose,
}: ModalProductsProps) {
  const cart = useSelector((state) => state.cart);

  const handleFinalize = () => {
    alert("Ok");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Carinho de compras</h2>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <FiX className={styles.icon} />
        </button>
      </div>

      <div className={styles.cardList}>
        {cart.cartItems.length === 0 ? (
          <div className={styles.textEmpty}>
            <p>Seu carrinho está vazio no momento...</p>
          </div>
        ) : (
          <div>
            {cart.cartItems?.map(
              (cartItem: {
                id: number;
                photo: string;
                name: string;
                price: number;
                cartQuantity: number;
                Quantity: number;
              }) => (
                <ProductCardList key={cartItem.id} {...cartItem} />
              )
            )}
          </div>
        )}
      </div>

      <footer className={styles.footer}>
        <div className={styles.subTotal}>
          <span className={styles.total}>Total: </span>
          <span className={styles.value}>R$ {cart.cartTotalAmount}</span>
        </div>
        <button
          className={styles.buttonFinalize}
          type="button"
          onClick={handleFinalize}
        >
          Finalizar Compra
        </button>
      </footer>
    </Modal>
  );
}
