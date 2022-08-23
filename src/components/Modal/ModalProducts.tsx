import Modal from "react-modal";
import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";
import { ProductCardList } from "../ProductCardList/ProductCardList";
import { useState } from "react";

interface ModalProductsProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: number;
}

export default function ModalProducts({
  isOpen,
  onRequestClose,
  id,
}: ModalProductsProps) {
  const [products, setProducts] = useState<any>([
    {
      name: "iphone",
      price: "110,00",
      description: "fgsgs sgd sg sgd",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
    },
    {
      name: "iphddone",
      price: "110,00",
      description: "fgsgs sgd sg sgd",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
    },
  ]);
  const customStyle = {
    content: {
      top: "0%",
      bottom: "0%",
      left: "70%",
      right: "0%",
      backgroundColor: "#0F52BA",
    },
  };

  const handleFinalize = () => {
    alert("Ok");
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyle}>
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
        {products.map((products: { id: any }) => (
          <ProductCardList
            name={""}
            price={0}
            photo={""}
            key={products.id}
            {...products}
          />
        ))}
      </div>

      <footer className={styles.footer}>
        <div className={styles.value}>
          <h2>Total:</h2>
          <h2>R$100,00</h2>
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
