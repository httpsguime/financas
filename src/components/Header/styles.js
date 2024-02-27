import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    background-color: #8000ff;
    padding-top: 86px;
    flex-direction: row;
    padding-horizontal: 16px;
    padding-bottom: 44px;
`;


export const Content = styled.View`
    flex: 1;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

`;

export const UserName = styled.Text`
    font-size: 18;
    color: #FFF;
    font-weight: bold;
`;

export const CustomTouchableOpacity = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    background-color: rgba(255,255,255, 0.5);
    justify-content: center;
    align-items: center;
    border-radius: 22px;
`;

export const UserIcon = styled(Feather).attrs({
    size: 27
})`
    color: #fff;
`;

