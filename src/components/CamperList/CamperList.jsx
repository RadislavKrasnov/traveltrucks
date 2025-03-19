import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campersSlice';
import Camper from '../Camper/Camper';

const CamperList = () => {
    const campers = useSelector(selectCampers);

    return (
        <ul>
            {campers.map(camper => (
                <Camper key={camper.id} camper={camper} />
            ))}
        </ul>
    );
};

export default CamperList;
