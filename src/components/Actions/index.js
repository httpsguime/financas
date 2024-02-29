import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Container, ActionButton, AreaButton, LabelButton} from '../Actions/styles';

import { AntDesign } from '@expo/vector-icons'

export default function Actions (){
    return(
        <Container>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <ActionButton>
                    <TouchableOpacity>
                        <AreaButton>
                            <AntDesign name='addfolder' size={26} color="#000"/>
                        </AreaButton>
                        <LabelButton>Entradas</LabelButton>                  
                    </TouchableOpacity>
                </ActionButton>  

                <ActionButton>
                    <TouchableOpacity>
                        <AreaButton>
                            <AntDesign name='tagso' size={26} color="#000"/>
                        </AreaButton>
                        <LabelButton>Compras</LabelButton>                  
                    </TouchableOpacity>
                </ActionButton> 

                <ActionButton>
                    <TouchableOpacity>
                        <AreaButton>
                            <AntDesign name='creditcard' size={26} color="#000"/>
                        </AreaButton>
                        <LabelButton>Carteira</LabelButton>                  
                    </TouchableOpacity>
                </ActionButton> 

                <ActionButton>
                    <TouchableOpacity>
                        <AreaButton>
                            <AntDesign name='barcode' size={26} color="#000"/>
                        </AreaButton>
                        <LabelButton>Boletos</LabelButton>                  
                    </TouchableOpacity>
                </ActionButton> 

                <ActionButton>
                    <TouchableOpacity>
                        <AreaButton>
                            <AntDesign name='setting' size={26} color="#000"/>
                        </AreaButton>
                        <LabelButton>Conta</LabelButton>                  
                    </TouchableOpacity>
                </ActionButton> 

            </ScrollView>
        </Container>
    );
}