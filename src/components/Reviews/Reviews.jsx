import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/campersSlice';
import css from './Reviews.module.css';

const Reviews = () => {
  const camper = useSelector(selectCamper);
  const reviews = camper.reviews;

  return (
    <div className={css.reviews}>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{JSON.stringify(review)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
