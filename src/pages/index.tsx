import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Header } from "../components/Header";
import { ProductsService } from "../services/ProductsService";
import styles from "../../styles/Home.module.scss";
import { Footer } from "../components/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";
import { CardSkeleton } from "../components/CardSkeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home: NextPage = () => {
  const [products, setProducts] = useState<any>([]);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const Products = async () => {
    setLoading(true);
    await ProductsService.FindAllProducts().then((response) => {
      //console.log(response.data.products);
      setProducts(response.data.products);
      setLoading(false);
    });
  };

  useEffect(() => {
    Products();
  }, []);

  function handleAddToCart(product: []) {
    dispatch(addToCart(product));

    // console.log("AQUI", product);
  }

  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <Header />
      <div className={styles.grid}>
        {isLoading && <CardSkeleton cards={8} />}

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
