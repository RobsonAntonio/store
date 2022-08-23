import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Header } from "../components/Header";
import { ProductsService } from "../services/ProductsService";
import styles from "../../styles/Home.module.scss";
import { Footer } from "../components/Footer";
import { addItem } from "../store/cart";
import { useDispatch } from "react-redux";

import { addToCart } from "../store/cart/cartSlice";

const Home: NextPage = () => {
  const [products, setProducts] = useState<any>([]);
  const dispatch = useDispatch();

  const Products = async () => {
    await ProductsService.FindAllProducts().then((response) => {
      //console.log(response.data.products);
      setProducts(response.data.products);
    });
  };

  useEffect(() => {
    Products();
  }, []);

  function handleAddToCart(product: []) {
    dispatch(addToCart(product));
    console.log("AQUI", product);
  }

  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <Header />
      <div className={styles.card}>
        {products.map((products: any) => (
          <ProductCard
            handleAddToCart={handleAddToCart}
            product={products}
            key={products.id}
            {...products}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
