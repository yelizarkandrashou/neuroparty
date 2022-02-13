import styled from '@emotion/styled';
import Span from '../Span';
import { Link as MuiLink } from '@mui/material';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const FollowSpan = styled(Span)`
  margin-right: auto;
`;

export const Link = styled(MuiLink)`
  display: flex;
`;
