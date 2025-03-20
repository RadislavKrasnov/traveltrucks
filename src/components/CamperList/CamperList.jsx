import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campersSlice';
import Camper from '../Camper/Camper';
import { selectError } from '../../redux/campersSlice';

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const error = useSelector(selectError);

  if (error) {
    return <p>Error fetching campers: {error}</p>;
  }

  if (!campers.length) {
    return <p>Campers not found.</p>;
  }

  return (
    <ul>
      {campers.map(camper => (
        <Camper key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CamperList;
