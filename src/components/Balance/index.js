import React from 'react';
import { Container, Item, ItemTitle, ContentStyle, CurrencySymbol, StyleBalance, StyleExpences } from '../Balance/styles';

export default function Balance ({ saldo, gastos }){
    return(
        <Container>
            <Item>
                <ItemTitle>Saldo</ItemTitle>

                <ContentStyle>
                    <CurrencySymbol>R$ </CurrencySymbol>
                    <StyleBalance>{ saldo }</StyleBalance>
                </ContentStyle> 
            </Item>

            <Item>
                <ItemTitle>Gastos</ItemTitle>
                <ContentStyle>
                    <CurrencySymbol>R$ </CurrencySymbol>
                    <StyleExpences>{ gastos }</StyleExpences>
                </ContentStyle>
            </Item>            
        </Container>
    );
}


