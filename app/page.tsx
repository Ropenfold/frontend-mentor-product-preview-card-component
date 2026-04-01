import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image src="/images/image-product-desktop.jpg" fill alt="Product Image" />
            </div>
            <div className={styles.productDetails}>
                <p className={styles.label}>PERFUME</p>
                <h1 className={styles.headingPrimary}>Gabrielle Essence Eau De Parfum</h1>
                <p className={styles.bodyText}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the
                    House of CHANEL.</p>
                <div className={styles.priceContainer}>
                    <span className={styles.priceCurrent}>$149.99</span>
                    <span className={styles.priceOriginal}>$169.99</span>
                </div>
                <button className={styles.button}>
                  <Image src="/images/icon-cart.svg" width={24} height={24} alt="Cart Icon" />
                  <div className={styles.buttonText}>Add to Cart</div></button>
            </div>
        </div>
    </main>
  );
}
