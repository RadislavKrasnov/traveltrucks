import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/campersSlice';

const Reviews = () => {
  const camper = useSelector(selectCamper);
  const reviews = camper.reviews;

  return (
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>{JSON.stringify(review)}</li>
      ))}
    </ul>
  );
};

export default Reviews;
