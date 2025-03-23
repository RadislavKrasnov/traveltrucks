import css from './SubmitBtn.module.css';

const SubmitBtn = ({ text }) => {
  return (
    <button type="submit" className={css.btn}>
      {text}
    </button>
  );
};

export default SubmitBtn;
