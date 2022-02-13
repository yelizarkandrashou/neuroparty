import { FooterProps } from './Footer.types';
import * as S from './Footer.styles';
import React from 'react';

const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <S.Container className={className}>
      <S.FollowSpan text="Follow us" />

      <S.Link href="https://www.instagram.com/charley_vince/" underline="none" target="_blank" color="inherit">
        <img src="/icons/instagram.svg" />
      </S.Link>
      <S.Link href="https://www.instagram.com/charley_vince/" target="_blank" underline="none" color="inherit">
        <img src="/icons/facebook.svg" />
      </S.Link>
    </S.Container>
  );
};

export default Footer;
