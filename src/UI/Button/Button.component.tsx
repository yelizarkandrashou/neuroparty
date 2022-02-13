import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = (props: ButtonProps): JSX.Element => <S.Button {...props} />;

export default Button;
