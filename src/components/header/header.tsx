import { TOOGLE_SHOW_LIKED_CARDS } from "../../services/actions/consts";
import { useDispatch, useSelector } from "../../services/hooks";
import styles from "./header.module.css";

export const Header = () => {
  const dispath = useDispatch();
  const { showLikedCards } = useSelector((state) => state.cards);

  const toogleShow = () => {
    dispath({ type: TOOGLE_SHOW_LIKED_CARDS });
  };

  return (
    <div className={styles.header}>
      <p className={styles.headerTitle}>Коллекция публичных API</p>
      <button
        className={styles.headerButton}
        type="button"
        onClick={toogleShow}
      >
        {showLikedCards ? "Показать все" : `Только с "лайками"`}
      </button>
    </div>
  );
};
