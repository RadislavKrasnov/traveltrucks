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

export { mapCamperApiFilters };
