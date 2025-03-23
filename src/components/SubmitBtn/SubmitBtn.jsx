import clsx from 'clsx';
import css from './SubmitBtn.module.css';

const SubmitBtn = ({ text, className = '' }) => {
  return (
    <button type="submit" className={clsx(css.btn, className)}>
      {text}
    </button>
  );
};

export default SubmitBtn;
