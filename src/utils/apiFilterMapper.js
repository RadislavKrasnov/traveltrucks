const vehicleDetailsMapper = {
  form: 'Form',
  length: 'Length',
  width: 'Width',
  height: 'Height',
  tank: 'Tank',
  consumption: 'Consumption',
};

const vehicleFeatures = [
  'transmission',
  'AC',
  'engine',
  'kitchen',
  'radio',
  'bathroom',
  'refrigerator',
  'microwave',
  'gas',
  'water',
  'TV',
];

const mapCamperApiFilters = filters => {
  const apiParams = {};

  if (filters.location) {
    apiParams.location = filters.location;
  }

  if (filters.bodyType) {
    apiParams.form = filters.bodyType;
  }

  const features = { ...filters.features };

  if (features.automaitc) {
    apiParams.transmission = 'automatic';
  }

  delete features.automaitc;

  Object.keys(features).forEach(key => {
    if (features[key]) {
      apiParams[key] = true;
    }
  });

  return apiParams;
};

const mapVehicleDetails = camper => {
  return Object.entries(vehicleDetailsMapper).reduce(
    (details, [key, label]) => {
      details[label] = camper[key];
      return details;
    },
    {}
  );
};

const mapVehicleFeatures = camper => {
  return vehicleFeatures.reduce((features, feature) => {
    let value = camper[feature];

    if (value && ['transmission', 'engine'].includes(feature)) {
      features.push(value);
    }

    if (value && !['transmission', 'engine'].includes(feature)) {
      features.push(feature);
    }

    return features;
  }, []);
};

export { mapCamperApiFilters, mapVehicleDetails, mapVehicleFeatures };
