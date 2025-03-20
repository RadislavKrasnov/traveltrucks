import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCamper } from '../../redux/campersSlice';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/camperOps';
import { NavLink, Outlet } from 'react-router-dom';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  });

  if (!camper) return <p>Camper not found</p>;

  return (
    <>
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
    </>
  );
};

export default CamperPage;
