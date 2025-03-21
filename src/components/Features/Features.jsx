import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/campersSlice';
import {
  mapVehicleDetails,
  mapVehicleFeatures,
} from '../../utils/apiFilterMapper';

const Features = () => {
  const camper = useSelector(selectCamper);
  const vehicleDetails = mapVehicleDetails(camper);
  const vehicleFeatures = mapVehicleFeatures(camper);

  return (
    <div>
      <ul>
        {vehicleFeatures.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
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
