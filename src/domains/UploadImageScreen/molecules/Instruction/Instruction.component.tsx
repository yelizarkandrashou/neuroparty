import { InstructionProps } from './Instruction.types';
import * as S from './Instruction.styles';
import { Header, Span } from '../../../../UI';

const Instruction = ({}: InstructionProps): JSX.Element => {
  return (
    <S.Container>
      <Header text=":> Neuro Clip" />
      <Span text="1. upload or take a picture" />
      <Span text="2. Have fun :)" />
    </S.Container>
  );
};

export default Instruction;
