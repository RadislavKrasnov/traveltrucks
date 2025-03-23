import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/campersSlice';
import css from './Reviews.module.css';
import Icon from '../Icon/Icon';

const Reviews = () => {
  const camper = useSelector(selectCamper);
  const reviews = camper.reviews;

  const showStarReting = reviewer_rating => {
    const totalStars = 5;
    const goldStar = <Icon id="gold-star" width={16} height={16} />;
    const grayStar = <Icon id="gray-star" width={16} height={16} />;

    return (
      <div className={css.starBar}>
        {Array.from({ length: totalStars }, (_, i) => (
          <span key={i}>{i < reviewer_rating ? goldStar : grayStar}</span>
        ))}
      </div>
    );
  };

  return (
    <div className={css.reviews}>
      <ul className={css.reviewsList}>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <li key={index}>
            <div className="reviewItem">
              <div className={css.author}>
                <div className={css.avatar}>
                  {reviewer_name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className={css.name}>{reviewer_name}</p>
                  <div>{showStarReting(reviewer_rating)}</div>
                </div>
              </div>
              <div className={css.comment}>{comment}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
