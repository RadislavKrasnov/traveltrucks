import { PuffLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <PuffLoader color="#e44848" size={80} />
    </div>
  );
};

export default Loader;
