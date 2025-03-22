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

export { formatPrice, trimDescription };
