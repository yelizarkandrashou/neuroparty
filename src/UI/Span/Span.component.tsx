import React from 'react';
import {default as S} from "./Span.styled"
import SpanProps from "./Span.types"

const Span = (props: SpanProps) => {
  return (
    <S.Span className={ props.className } title={ props.text }>{ props.text }</S.Span>
  );
};

export default Span;
