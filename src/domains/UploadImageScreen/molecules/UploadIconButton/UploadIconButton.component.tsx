import { UploadIconButtonProps } from './UploadIconButton.types';
import * as S from './UploadIconButton.styles';
import Button from '../../../../UI/Button';
import { useFilePicker } from 'use-file-picker';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

const UploadIconButton = ({ onChange }: UploadIconButtonProps): JSX.Element => {
  const [openFileSelector, { clear, errors, filesContent }] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: false,
    maxFileSize: 2,
  });

  const onSelectFileError = () => {
    toast.error(' Упс, размер картинки слишком велик ');
    clear();
  };

  useEffect(() => {
    if (errors.length > 0 && errors[0].fileSizeToolarge) onSelectFileError();
  }, [errors]);

  useEffect(() => {
    if (filesContent.length > 0) onChange(filesContent[0]);
  }, [filesContent]);

  return (
    <S.Container htmlFor="upload-icon-button">
      <S.InvisibleInput accept="image/*" id="upload-icon-button" type="file" />
      <Button onClick={() => openFileSelector()}>Загрузить Фото</Button>
    </S.Container>
  );
};

export default UploadIconButton;
