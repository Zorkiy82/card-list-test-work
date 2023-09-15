import { useSelector } from "../../services/hooks";
import { Card } from "../card/card";
import styles from "./card-collection.module.css";

export const CardCollection = () => {
  const { dataRequest, dataFailed, dataSuccess, showLikedCards, data } =
    useSelector((state) => state.cards);
  const { entries } = data;
  return (
    <div className={styles.cardsCollection}>
      {dataRequest && <p>Загрузка</p>}
      {dataFailed && <p>Ошибка</p>}
      {dataSuccess &&
        !showLikedCards &&
        entries.map((card) => <Card key={card.link} {...card} />)}
      {dataSuccess &&
        showLikedCards &&
        entries
          .filter((val) => val.isLike)
          .map((card) => <Card key={card.link} {...card} />)}
    </div>
  );
};
