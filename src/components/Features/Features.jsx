import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/campersSlice';
import {
  bodyTypes,
  bodyTypesLabels,
  mapVehicleDetails,
} from '../../utils/apiFilterMapper';
import css from './Features.module.css';
import Categories from '../Categories/Categories';

const Features = () => {
  const camper = useSelector(selectCamper);
  const vehicleDetails = mapVehicleDetails(camper);

  return (
    <div className={css.features}>
      <Categories camper={camper} className={css.categories} />
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.vehicleDetails}>
        {Object.entries(vehicleDetails).map(([label, value]) => {
          if (bodyTypes.includes(value)) {
            value = bodyTypesLabels[value];
          }

          return (
            <li key={label}>
              <span>{label}</span>
              <span>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Features;
