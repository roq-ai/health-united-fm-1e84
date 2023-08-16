import * as yup from 'yup';

export const medicalStaffValidationSchema = yup.object().shape({
  department: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
