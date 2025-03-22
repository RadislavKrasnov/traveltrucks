const Icon = ({ id, width = 24, height = 24, color = 'none' }) => {
  return (
    <svg width={width} height={height} fill={color} aria-hidden="true">
      <use href={`/src/assets/sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
