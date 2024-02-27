import React from 'react';
import { Container, Content, UserName, CustomTouchableOpacity, UserIcon } from './styles';

export default function Header ({ name }){
    return(
        <Container>
            <Content>
                <UserName>Olá, {name}</UserName>
                <CustomTouchableOpacity activeOpacity={0.9}>
                    <UserIcon name="user"/>
                </CustomTouchableOpacity>
            </Content>
        </Container>
    )
}
  
