import CamperList from '../../components/CamperList/CamperList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/camperOps';
import { useEffect } from 'react';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import Header from '../../components/Header/Header';
import css from './CatalogPage.module.css';
import clsx from 'clsx';
import { resetCampers } from '../../redux/campersSlice';
import { resetFilters } from '../../redux/filtersSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(resetCampers());
    dispatch(fetchCampers({}));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <div className={clsx('container', css.container)}>
          <div className={css.sidebar}>
            <FiltersForm />
          </div>
          <div className={css.camperList}>
            <CamperList />
            <LoadMoreBtn />
          </div>
        </div>
      </main>
    </>
  );
};

export default CatalogPage;
