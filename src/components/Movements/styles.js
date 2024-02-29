import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    margin-bottom: 24px;
    border-bottom-width: 0.5px;
    border-bottom-color: #dadada;
`;

export const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2px;
    margin-bottom: 8px;
`;

export const Date = styled.Text`
    color: #dadada;
    font-weight: bold;
`;

export const Label = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-right: auto; 
`;

export const Value = styled.Text`
    font-size: 16px;
    color: #2ecc71;
    font-weight: bold;
    margin-left: auto; 
`;


export const Espenses = styled.Text`
    font-size: 16px;
    color: #e74c3c;
    font-weight: bold;
`;

export const Skeleton = styled.View`
    margin-top: 6px;
    width: 80px;
    height: 10px;
    background-color: #dadada;
    border-radius: 8px;
`;