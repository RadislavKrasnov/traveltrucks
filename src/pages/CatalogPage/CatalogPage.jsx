import CamperList from '../../components/CamperList/CamperList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/camperOps';
import { useEffect } from 'react';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({}));
  }, [dispatch]);

  return (
    <main>
      <CamperList />
      <LoadMoreBtn />
    </main>
  );
};

export default CatalogPage;
