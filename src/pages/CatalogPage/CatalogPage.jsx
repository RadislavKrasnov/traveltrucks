import CamperList from '../../components/CamperList/CamperList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/camperOps';
import { useEffect } from 'react';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({}));
  }, [dispatch]);

  return (
    <main>
      <FiltersForm />
      <CamperList />
      <LoadMoreBtn />
    </main>
  );
};

export default CatalogPage;
