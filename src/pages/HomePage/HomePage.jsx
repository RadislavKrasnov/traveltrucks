import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <div className={css.hero}>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
          <Link to="/catalog" className={css.btn}>
            View Now
          </Link>
        </div>
      </main>
    </>
  );
};

export default HomePage;
