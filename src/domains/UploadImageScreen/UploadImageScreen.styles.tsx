import styled from '@emotion/styled';
import { default as HeaderComponent } from '../../UI/Header/Header.component';
import { default as SpanComponent } from '../../UI/Span/Span.component';
import { Footer } from '../../UI';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 80px 32px 32px;
  flex-basis: 100%;
  background: darkslategrey; // TODO: insert image glitch
  border-radius: 33px;
  border: 5px solid #1c1c1c;
`;

export const HighLightFooter = styled(Footer)`
  color: white;
  text-shadow: 0px 0px 3px #baf9cc;
`;
