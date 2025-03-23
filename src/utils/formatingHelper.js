const formatPrice = price => {
  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: false,
  }).format(price);
};

const trimDescription = description => {
  if (description.length <= 64) return description;

  const trimmed = description.slice(0, 64);
  const lastSpaceIndex = trimmed.lastIndexOf(' ');

  return lastSpaceIndex !== -1
    ? trimmed.slice(0, lastSpaceIndex) + '...'
    : trimmed + '...';
};

const featureIconMapper = feature => {
  let iconId = feature;

  if (['automatic', 'manual', 'automaitc'].includes(iconId)) {
    iconId = 'transmission';
  }

  if (['hybrid', 'petrol', 'diesel'].includes(iconId)) {
    iconId = 'engine';
  }

  return iconId;
};

export { formatPrice, trimDescription, featureIconMapper };
