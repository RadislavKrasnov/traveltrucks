import CamperList from '../../components/CamperList/CamperList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/camperOps';
import { useEffect } from 'react';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import Header from '../../components/Header/Header';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({}));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <FiltersForm />
        <CamperList />
        <LoadMoreBtn />
      </main>
    </>
  );
};

export default CatalogPage;
