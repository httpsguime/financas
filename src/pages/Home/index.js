import React from 'react';
import Header from '../../components/Header';
import { FlatList, Text } from 'react-native';
import { Container, Title, TransactionList } from './styles';
import Balance from '../../components/Balance'
import Movements from '../../components/Movements';
import Actions from '../../components/Actions'
const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '20/09/2022',
    type: 1
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.200,00',
    date: '22/09/2022',
    type: 1
  }
]

export default function Home() {
  return (
    <Container>
      <Header name="Guilherme"/>
      
      <Balance saldo="3.567.90" gastos="-678.76"/> 
      <Actions/>
      <Title>Histórico</Title>
    <TransactionList>
      <FlatList
        data={list}
        renderItem={ ({ item }) => <Movements data={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </TransactionList>

    </Container>
  );
}


