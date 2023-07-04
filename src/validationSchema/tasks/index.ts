import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  status: yup.string().required(),
  business_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
