import { Formik, Form, Field } from 'formik';
import { setFilters, resetFilters } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/camperOps';
import {
  mapCamperApiFilters,
  bodyTypes,
  bodyTypesLabels,
  featureLabels,
} from '../../utils/apiFilterMapper';
import { resetCampers } from '../../redux/campersSlice';
import css from './FiltersForm.module.css';
import Icon from '../Icon/Icon';
import clsx from 'clsx';
import { featureIconMapper } from '../../utils/formatingHelper';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

const FiltersForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        location: '',
        bodyType: '',
        features: {
          AC: false,
          bathroom: false,
          TV: false,
          kitchen: false,
          automaitc: false,
        },
      }}
      onSubmit={values => {
        dispatch(resetFilters());
        dispatch(resetCampers());
        dispatch(setFilters(values));
        const apiFilters = mapCamperApiFilters(values);
        dispatch(fetchCampers({ filters: apiFilters }));
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="filters">
          <div className={clsx(css.filterBlock, css.locatinoFilter)}>
            <label className={css.locationLabel}>Location</label>
            <Icon id={'location'} className={css.locationIcon} />
            <Field
              type="text"
              name="location"
              placeholder="City"
              className={css.locationInput}
            />
          </div>
          <fieldset>
            <legend>Filters</legend>
            <div className={css.filterBlock}>
              <h3 className={css.filterTitle}>Vehicle equipment</h3>
              <ul className={css.equipmentFilter}>
                {Object.keys(values.features).map(feature => (
                  <li key={feature}>
                    <label
                      className={clsx(
                        css.optionBlock,
                        values.features[feature] && css.selected
                      )}
                    >
                      <input
                        type="checkbox"
                        name={`features.${feature}`}
                        checked={values.features[feature]}
                        onChange={() =>
                          setFieldValue(
                            `features.${feature}`,
                            !values.features[feature]
                          )
                        }
                      />
                      <span>
                        <Icon id={featureIconMapper(feature)} />
                      </span>
                      {featureLabels[feature]}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.filterBlock}>
              <h3 className={css.filterTitle}>Vehicle type</h3>
              <ul className={css.typeFilter}>
                {bodyTypes.map(type => (
                  <li key={type}>
                    <label
                      className={clsx(
                        css.optionBlock,
                        values.bodyType === type && css.selected
                      )}
                    >
                      <Field
                        type="radio"
                        name="bodyType"
                        value={type}
                        checked={values.bodyType === type}
                      />
                      <span>
                        <Icon id={featureIconMapper(type)} />
                      </span>
                      {bodyTypesLabels[type]}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </fieldset>
          <SubmitBtn text="Search" />
        </Form>
      )}
    </Formik>
  );
};

export default FiltersForm;
