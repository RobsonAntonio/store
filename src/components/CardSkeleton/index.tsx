import Skeleton from "react-loading-skeleton";
import styles from "./styles.module.scss";

export function CardSkeleton({ cards }: any): JSX.Element[] {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className={styles.cardSkeleton} key={i}>
        <Skeleton className={styles.cardImageSkeleton} />
        <div className={styles.cardDescriptionSkeleton}>
          <Skeleton className={styles.cardDescriptionSkeleton} />
        </div>
        <div className={styles.cardDescriptionSkeleton}>
          <Skeleton className={styles.cardDescriptionSkeleton} />
        </div>

        <Skeleton className={styles.cardButtonSkeleton} />
      </div>
    ));
}
