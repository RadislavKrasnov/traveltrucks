import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/campersSlice';
import { mapVehicleDetails } from '../../utils/apiFilterMapper';

const Features = () => {
  const camper = useSelector(selectCamper);
  const vehicleDetails = mapVehicleDetails(camper);

  return (
    <div>
      <ul>
        {Object.entries(vehicleDetails).map(([label, value]) => (
          <li key={label}>
            {label}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
