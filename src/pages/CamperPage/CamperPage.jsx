import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCamper } from '../../redux/campersSlice';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/camperOps';
import { NavLink, Outlet } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';
import Header from '../../components/Header/Header';
import Rating from '../../components/Rating/Rating';
import { formatPrice } from '../../utils/formatingHelper';
import css from './CamperPage.module.css';
import clsx from 'clsx';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const gallery = camper?.gallery ?? [];

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) return;

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };

  return (
    <>
      <Header />
      <main>
        <div className={clsx('container', css.container)}>
          <div className={css.details}>
            <div className={css.title}>
              <h2>{camper.name}</h2>
            </div>
            <div className={css.ratingLocationWrapper}>
              <Rating camper={camper} className={css.underline} />
              <span>{camper.location}</span>
            </div>
          </div>
          <div className={css.priceWrapper}>
            <h2>{formatPrice(camper.price)}</h2>
          </div>
          <div>
            <ul className={css.gallery}>
              {gallery.map((image, index) => (
                <li key={index} className={css.galleryImage}>
                  <img
                    src={image.thumb}
                    alt={`${camper.name} image ${index + 1}`}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={css.description}>
            <p>{camper.description}</p>
          </div>
          <div>
            <nav className={css.navigation}>
              <ul className={css.menu}>
                <li>
                  <NavLink to="features" className={buildLinkClass}>
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink to="reviews" className={buildLinkClass}>
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className={css.outletBlockWrapper}>
              <Outlet />
              <div className={css.booking}>
                <div className={css.titleWrapper}>
                  <h3>Book your campervan now</h3>
                  <p>Stay connected! We are always ready to help you.</p>
                </div>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CamperPage;
