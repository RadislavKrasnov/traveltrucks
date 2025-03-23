import Icon from '../Icon/Icon';
import css from './Rating.module.css';

const Rating = ({ camper, className = '' }) => {
  const ratingValue = camper.rating?.toFixed(1);
  const reviewCount = camper.reviews?.length;

  return (
    <div className={css.rating}>
      <Icon
        id={'gold-star'}
        width={16}
        height={16}
        className={css.ratingGoldStar}
      />
      <span className={className}>
        {ratingValue} ({reviewCount} Reviews)
      </span>
    </div>
  );
};

export default Rating;
