import { useDispatch, useSelector } from 'react-redux';
import { selectWishlist, toggleWhishlist } from '../../redux/wishlistSlice';

const WishlistBtn = ({ camperId }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);
  const isInWishlist = wishlist.includes(camperId);

  return (
    <button
      onClick={() => dispatch(toggleWhishlist(camperId))}
      className={isInWishlist ? 'wishlist-active' : 'wishlist'}
    >
      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  );
};

export default WishlistBtn;
