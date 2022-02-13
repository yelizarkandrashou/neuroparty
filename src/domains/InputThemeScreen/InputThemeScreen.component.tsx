import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import * as S from './InputThemeScreen.styles';
import ImageContainer from './molecules/ImageContainer';
import { Button, Footer } from '../../UI';
import { NeuroPartyFormFields } from '../../pages/NeuroPartyPage/NeuroPartyPage.types';

const InputThemeScreen = (): JSX.Element => {
  const formik = useFormikContext<NeuroPartyFormFields>();

  return (
    <S.Container>
      <ImageContainer errors={!!formik.errors} image={formik.values.image?.content} />
      <TextField
        id="theme"
        name="theme"
        value={formik.values.theme}
        onChange={formik.handleChange}
        error={formik.touched.theme && Boolean(formik.errors.theme)}
        helperText={formik.touched.theme && formik.errors.theme}
      />
      <Button>Готово</Button>
      <Footer />
    </S.Container>
  );
};

export default InputThemeScreen;
