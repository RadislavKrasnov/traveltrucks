const Icon = ({
  id,
  width = 24,
  height = 24,
  color = 'none',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      className={className}
      aria-hidden="true"
    >
      <use href={`/src/assets/sprite/sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
