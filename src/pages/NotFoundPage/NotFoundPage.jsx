import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <p>404 Not found</p>
    </div>
  );
};

export default NotFoundPage;
