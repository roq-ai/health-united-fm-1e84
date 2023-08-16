import * as yup from 'yup';

export const systemAdministratorValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
