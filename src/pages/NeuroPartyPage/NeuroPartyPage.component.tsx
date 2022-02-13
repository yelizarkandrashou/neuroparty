import React from 'react';
import * as S from './NeuroPartyPage.styled';
import UploadImageScreen from '../../domains/UploadImageScreen';
import { Form, FormikProvider, useFormik } from 'formik';
import { NeuroPartyFormFields } from './NeuroPartyPage.types';
import { neuroPartyValidationSchema } from './NeuroPartyPage.constants';
import InputThemeScreen from '../../domains/InputThemeScreen';

const NeuroPartyPage = () => {
  const formik = useFormik<NeuroPartyFormFields>({
    initialValues: { image: null, theme: '' },
    validationSchema: neuroPartyValidationSchema,
    onSubmit: () => {},
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <S.Container>{formik.values.image ? <InputThemeScreen /> : <UploadImageScreen />}</S.Container>
      </Form>
    </FormikProvider>
  );
};

export default NeuroPartyPage;
