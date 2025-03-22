import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCamper } from '../../redux/campersSlice';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/camperOps';
import { NavLink, Outlet } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';
import Header from '../../components/Header/Header';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) return <p>Camper not found</p>;

  return (
    <>
      <Header />
      <main>
        {JSON.stringify(camper)}
        <nav>
          <ul>
            <li>
              <NavLink to="features">Features</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
        <BookingForm />
      </main>
    </>
  );
};

export default CamperPage;
