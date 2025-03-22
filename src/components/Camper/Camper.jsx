import { Link, useLocation } from 'react-router-dom';
import WishlistBtn from '../WishlistBtn/WishlistBtn';
import css from './Camper.module.css';
import Categories from '../Categories/Categories';
import Rating from '../Rating/Rating';
import { formatPrice, trimDescription } from '../../utils/formatingHelper';

const Camper = ({ camper }) => {
  const location = useLocation();
  const firstImageUrl =
    camper.gallery?.length > 0 ? camper.gallery[0].thumb : '';

  return (
    <li className={css.camperItem}>
      <div className={css.camperWrapper}>
        <div className={css.image}>
          <img src={firstImageUrl} alt={camper.name} />
        </div>
        <div className={css.camperInfo}>
          <div className={css.camperInfoHead}>
            <h2>{camper.name}</h2>
            <div className={css.priceContainer}>
              <h2>{formatPrice(camper.price)}</h2>
              <WishlistBtn camperId={camper.id} />
            </div>
          </div>
          <div>
            <Rating camper={camper} />
            <span>{camper.location}</span>
          </div>
          <div className="description">
            {trimDescription(camper.description)}
          </div>
          <Categories camper={camper} />
          <Link to={`/catalog/${camper.id}`} state={location} className={css.showMoreBtn}>
            Show more
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Camper;
