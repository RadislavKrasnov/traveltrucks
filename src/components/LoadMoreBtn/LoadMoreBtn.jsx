import { fetchCampers } from '../../redux/camperOps';
import {
  selectCampers,
  selectTotal,
  incrementPage,
  selectPage,
} from '../../redux/campersSlice';
import { useDispatch, useSelector } from 'react-redux';

const LoadMoreBtn = () => {
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCampers({ page: page + 1 }));
  };

  return (
    <>
      {campers.length < total && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </>
  );
};

export default LoadMoreBtn;
