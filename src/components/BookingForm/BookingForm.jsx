import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { useId, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/campersSlice';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import css from './/BookingForm.module.css';

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const camper = useSelector(selectCamper);
  const nameId = useId();
  const emailId = useId();
  const commentId = useId();

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    toast.success(`Booking confirmed for ${camper.name}`);
    resetForm();
    setSelectedDate(null);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', date: '', comment: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={css.bookingForm}>
          <Field
            type="text"
            id={nameId}
            name="name"
            className={css.textField}
            placeholder="Name*"
          />
          <ErrorMessage name="name" component="div" className={css.error} />

          <Field
            type="email"
            id={emailId}
            name="email"
            className={css.textField}
            placeholder="Email*"
          />
          <ErrorMessage name="email" component="div" className={css.error} />

          <DatePicker
            selected={selectedDate}
            onChange={date => {
              setFieldValue('date', date);
              setSelectedDate(date);
            }}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(selectedDate !== null)}
            dateFormat="yyyy-MM-dd"
            className={css.datePicker}
            minDate={new Date()}
            placeholderText={
              isActive ? 'Select a date between today' : 'Booking date'
            }
          />
          <ErrorMessage name="date" component="div" className={css.error} />

          <Field
            as="textarea"
            id={commentId}
            name="comment"
            className={css.textarea}
            rows="5"
            placeholder="Comment"
          />
          <ErrorMessage name="comment" component="div" className={css.error} />

          <SubmitBtn text="Send" className={css.bookBtn} />
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
