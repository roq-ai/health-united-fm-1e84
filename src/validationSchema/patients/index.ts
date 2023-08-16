import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  feedback: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
