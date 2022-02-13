import * as Yup from 'yup';

export const neuroPartyValidationSchema = Yup.object({
  image: Yup.object().required('Required'),
  theme: Yup.string().required('Required'),
});
