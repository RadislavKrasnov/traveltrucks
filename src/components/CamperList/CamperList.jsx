import { useSelector } from 'react-redux';
import { selectCampers, selectLoading } from '../../redux/campersSlice';
import Camper from '../Camper/Camper';
import css from './CamperList.module.css';
import Loader from '../Loader/Loader';

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);

  return (
    <>
      {loading && <Loader />}
      {!campers.length && <p>Campers not found.</p>}
      <ul className={css.camperList}>
        {campers.map(camper => (
          <Camper key={camper.id} camper={camper} />
        ))}
      </ul>
    </>
  );
};

export default CamperList;
