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
import css from './LoadMoreBtn.module.css';

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
    <div className={css.toolbar}>
      {campers.length < total && !error && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}
    </div>
  );
};

export default LoadMoreBtn;
