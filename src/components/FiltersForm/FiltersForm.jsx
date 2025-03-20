import { Formik, Form, Field } from 'formik';
import { setFilters, resetFilters } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/camperOps';
import { mapCamperApiFilters } from '../../utils/apiFilterMapper';
import { resetCampers } from '../../redux/campersSlice';

const bodyTypes = ['panelTruck', 'fullyIntegrated', 'alcove'];
const bodyTypesLabels = {
  panelTruck: 'Van',
  fullyIntegrated: 'Fully Integrated',
  alcove: 'Alcove',
};
const featureLabels = {
  AC: 'Air Conditioning',
  bathroom: 'Bathroom',
  TV: 'TV',
  kitchen: 'Kitchen',
  automaitc: 'Automatic',
};

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
          <div className="filter-block">
            <label>Location:</label>
            <Field type="text" name="location" placeholder="Enter city" />
          </div>
          <div className="filter-block">
            <label>Body Type:</label>
            <div className="body-types">
              {bodyTypes.map(type => (
                <label key={type}>
                  <Field
                    type="radio"
                    name="bodyType"
                    value={type}
                    checked={values.bodyType === type}
                  />
                  {bodyTypesLabels[type]}
                </label>
              ))}
            </div>
          </div>
          <div className="filter-block">
            <label>Features:</label>
            <div className="features-list">
              {Object.keys(values.features).map(feature => (
                <label key={feature}>
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
                  {featureLabels[feature]}
                </label>
              ))}
            </div>
          </div>
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default FiltersForm;
