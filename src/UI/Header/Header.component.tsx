import React from 'react';
import {default as S} from "./Header.styled"
import HeaderProps from "./Header.types"

const Header = (props: HeaderProps) => {
    return (
        <S.Header className={props.className} title={props.text}>{props.text}</S.Header>
    );
};

export default Header;
