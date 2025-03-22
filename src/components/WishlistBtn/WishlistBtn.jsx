import { useDispatch, useSelector } from 'react-redux';
import { selectWishlist, toggleWhishlist } from '../../redux/wishlistSlice';
import Icon from '../Icon/Icon';
import css from './WishlistBtn.module.css';

const WishlistBtn = ({ camperId }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);
  const isInWishlist = wishlist.includes(camperId);
  const id = isInWishlist ? 'heart-pressed' : 'heart';

  return (
    <button
      onClick={() => dispatch(toggleWhishlist(camperId))}
      className={css.wishlistBtn}
    >
      <Icon id={id} />
    </button>
  );
};

export default WishlistBtn;
