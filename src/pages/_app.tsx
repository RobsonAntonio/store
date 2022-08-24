import "../../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import { getTotals } from "../store/cart/cartSlice";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MyApp({ Component, pageProps }: AppProps) {
  store.dispatch(getTotals());

  return (
    <SkeletonTheme baseColor="#929292" highlightColor="#575757">
      <Provider store={store}>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </SkeletonTheme>
  );
}

export default MyApp;
