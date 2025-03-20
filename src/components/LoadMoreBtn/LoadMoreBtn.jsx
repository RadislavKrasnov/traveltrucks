import { fetchCampers } from '../../redux/camperOps';
import {
  selectCampers,
  selectTotal,
  incrementPage,
  selectPage,
  selectError,
} from '../../redux/campersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filtersSlice';
import { mapCamperApiFilters } from '../../utils/apiFilterMapper';

const LoadMoreBtn = () => {
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(incrementPage());
    const apiFilters = mapCamperApiFilters(filters);
    dispatch(fetchCampers({ filters: apiFilters, page: page + 1 }));
  };

  return (
    <>
      {campers.length < total && !error && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </>
  );
};

export default LoadMoreBtn;
