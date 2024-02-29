import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Date, Content, Label, Value, Espenses, Skeleton } from './styles'; 

export default function Movements ({ data }){
    const [showValue, setShowValue] = useState(false);
    const ValueComponent = data.type === 0 ? Espenses : Value;

    return(
        <Container>
            <TouchableOpacity onPress={ () => setShowValue(!showValue)}>        
                <Date>{data.date}</Date> 
                    <Content>
                        <Label>{data.label}</Label>
                        {showValue ? (
                        <ValueComponent>{data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}</ValueComponent>
                        ) : (
                        <Skeleton></Skeleton>    
                        )}
                    </Content>      
            </TouchableOpacity>
        </Container>
    );
}

