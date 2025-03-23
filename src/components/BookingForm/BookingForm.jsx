import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { useId, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/campersSlice';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
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
        <Form>
          <Field type="text" id={nameId} name="name" />
          <ErrorMessage name="name" component="div" className="error" />

          <Field type="email" id={emailId} name="email" />
          <ErrorMessage name="email" component="div" className="error" />

          <DatePicker
            selected={selectedDate}
            onChange={date => {
              setFieldValue('date', date);
              setSelectedDate(date);
            }}
            dateFormat="yyyy-MM-dd"
            className="custom-datepicker"
            minDate={new Date()}
          />
          <ErrorMessage name="date" component="div" className="error" />

          <Field as="textarea" id={commentId} name="comment" />
          <ErrorMessage name="comment" component="div" className="error" />

          <SubmitBtn text="Send" />
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
