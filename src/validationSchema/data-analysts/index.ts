import * as yup from 'yup';

export const dataAnalystValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
