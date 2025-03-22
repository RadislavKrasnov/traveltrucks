import { mapVehicleFeatures } from '../../utils/apiFilterMapper';
import Icon from '../Icon/Icon';
import css from './Categories.module.css';

const Categories = ({ camper }) => {
  const vehicleFeatures = mapVehicleFeatures(camper);

  return (
    <ul className={css.categoryList}>
      {vehicleFeatures.map(feature => {
        let iconId = feature;

        if (['automatic', 'manual'].includes(iconId)) {
          iconId = 'transmission';
        } else if (['hybrid', 'petrol', 'diesel'].includes(iconId)) {
          iconId = 'engine';
        }

        return (
          <li key={feature} className={css.category}>
            <Icon id={iconId} className={css.categoryIcon} />
            {feature.charAt(0).toUpperCase() + feature.slice(1)}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
