import { ImageContainerProps } from './ImageContainer.types';
import * as S from './ImageContainer.styles';
import { Span } from '../../../../UI';

const ImageContainer = ({ image, errors = true }: ImageContainerProps): JSX.Element => {
  return (
    <S.Container backgroundImage={image}>
      <S.Overlay isOk={!errors} />
      <S.Content>
        {!errors ? (
          <Span text="Введите тему преобразования изображения..." />
        ) : (
          <>
            <Span text=">: Вы не можете использовать цифры и специальные знаки" />
            <br />
            <Span text="Постарайтесь придумать слово :>" />
          </>
        )}
      </S.Content>
    </S.Container>
  );
};

export default ImageContainer;
