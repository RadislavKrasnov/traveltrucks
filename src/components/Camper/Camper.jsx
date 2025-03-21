import WishlistBtn from '../WishlistBtn/WishlistBtn';

const Camper = ({ camper }) => {
  return (
    <li>
      {JSON.stringify(camper)}
      <WishlistBtn camperId={camper.id} />
    </li>
  );
};

export default Camper;
