import styles from "./styles.module.scss";
import { BsCart4 } from "react-icons/Bs";
import { useState } from "react";
import Modal from "react-modal";
import { ProductsService } from "../../services/ProductsService";
import ModalProducts from "../Modal/ModalProducts";

import { useSelector } from "react-redux";

type products = {
  name: string;
  price: number;
  description: string;
  photo: string;
};

export function Header() {
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState<products>();
  const [modalVisible, setModalVisible] = useState(false);

  function handleCloseModal() {
    setModalVisible(false);
  }

  async function handleOpenModalView() {
    const response = await ProductsService.FindAllProducts();

    setModalItem(response.data.products);
    setModalVisible(true);
  }

  Modal.setAppElement("#__next");

  const length = useSelector((state: any) => state.cart.length);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerImg}>
          <img className={styles.headerImgMks} src="/MKS.png" alt="" />
          <img src="/Sistemas.png" alt="" />
        </div>
        <div className={styles.menuNav}>
          <button onClick={handleOpenModalView} className={styles.button}>
            <BsCart4 size={24} className={styles.buttonIcon} />
            {length}
          </button>
        </div>
      </div>

      {modalVisible && (
        <ModalProducts
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
        />
      )}
    </header>
  );
}
