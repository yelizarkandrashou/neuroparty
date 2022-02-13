import React from 'react';
import {default as S} from "./SocialIconShare.styled"
import SocialIconShareProps from "./SocialIconShare.types"




const SocialIconShare = (props: SocialIconShareProps) => {
    return (
        <S.SocialIconShare href={props.link}>
            <i className={"fab " + props.icon}></i>
        </S.SocialIconShare>
    );
};

export default SocialIconShare;
