import { UploadImageScreenProps } from './UploadImageScreen.types';
import * as S from './UploadImageScreen.styles';
import { Button, Footer } from '../../UI';
import Instruction from './molecules/Instruction';
import UploadIconButton from './molecules/UploadIconButton';
import { FileContent } from 'use-file-picker/dist/interfaces';
import { useFormikContext } from 'formik';
import { NeuroPartyFormFields } from '../../pages/NeuroPartyPage/NeuroPartyPage.types';
import { HighLightFooter } from './UploadImageScreen.styles';

const UploadImageScreen = (): JSX.Element => {
  const formik = useFormikContext<NeuroPartyFormFields>();

  const onIconUpload = (icon: FileContent) => {
    formik.setFieldValue('image', icon);
  };

  return (
    <S.Container>
      <Instruction />
      <UploadIconButton onChange={onIconUpload} />
      <S.HighLightFooter />
    </S.Container>
  );
};

export default UploadImageScreen;
