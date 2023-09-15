import { TCard } from "../../services/types";
import styles from "./card.module.css";
import likeDisabled from "../../images/like-disabled.svg";
import likeActive from "../../images/like-active.svg";
import { useDispatch } from "react-redux";
import { DELETE_CARD, TOOGLE_CARD_LIKE } from "../../services/actions/consts";
import logoApi from "../../images/logo-api.svg";

export const Card = (props: TCard) => {
  const { api, description, auth, https, cors, link, category, isLike } = props;
  const dispath = useDispatch();

  const toogleLike = () => {
    dispath({ type: TOOGLE_CARD_LIKE, payload: { link } });
  };

  const handleDelete = () => {
    dispath({ type: DELETE_CARD, payload: { link } });
  };

  return (
    <div className={styles.card}>
      <img src={logoApi} alt="logo" className={styles.image} />
      <p className={styles.title}>{`${api}`}</p>
      <p className={styles.subtitle}>{`${description}`}</p>
      <div className={styles.characteristics}>
        <p>
          auth: <span>{`${auth ? auth : "-"}`}</span>
        </p>
        <p>
          https: <span>{`${https}`}</span>
        </p>
        <p>
          cors: <span>{`${cors}`}</span>
        </p>
        <p>
          category: <span>{`${category}`}</span>
        </p>
      </div>

      <a className={styles.link} href={link} target="blank">
        {`>> ссылка на сайт <<`}
      </a>
      <button
        className={styles.likeButton}
        onClick={toogleLike}
        style={{
          backgroundImage: `url(${isLike ? likeActive : likeDisabled})`,
        }}
      ></button>
      <button className={styles.deleteButton} onClick={handleDelete}></button>
    </div>
  );
};
