import * as yup from 'yup';

export const reminderValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  date: yup.date().required(),
  business_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
