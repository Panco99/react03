import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native'

export default function App(){
const [id, setId] = useState(2);
const [numero, setNumero] = useState ('');
const [nome, setNome] = useState('');
const [contatos, setContatos] = useState([])
const [contadorContatos, setContadorContatos] = useState(0);

const capturarNome = (nome) => {
  setNome (nome);
}

const capturarNumero = (numero) => {
  setNumero (numero);
};
contato=(id, nome, numero);


const adicionarContato = () =>{
  setContatos((contatos) => {
    console.log(contatos);
    setId(id +2);
    setContadorContatos(contadorContatos + 1);
    return [...contatos, {key: contadorContatos.toString(), value:contato = (id), value2:
    contato=(nome), value3:contato=(numero)}];
  }) 
};
  return (
    <View style={styles.telaPrincipalView}>

      <View style={styles.contatoView}>

        <TextInput 
        placeholder="Nome"
        style={styles.contatoInputText}
        onChangeText={capturarNome}
        value ={nome}
        />
     
      <TextInput 
        placeholder="Contato"
        style={styles.contatoInputText}
        onChangeText={capturarNumero}
        value={numero}
        />
      </View>
      <Button
          title="Adicionar"
          onPress={adicionarContato}
        />
      <FlatList
      data={contatos}
      renderItem={
        contato =>(
          <View style={styles.itemNaLista}>
            <Text>{contato.item.value}{contato.item.value2}</Text>
            <Text>{contato.item.value3}</Text>

          </View>

        )
      }
      />
    </View>
    
  );

}


const styles = StyleSheet.create(
  {
    telaPrincipalView:{
      padding: 50
    },
    contatoView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    },

    contatoInputText:{
      width: '50%',
      borderBottomWidth: 1,
      padding: 2
    },

    itemNaLista:{
      padding: 12,
      backgroundColor: '#CCC',
      borderBottomColor: '#000',
      borderWidth: 1,
      marginBottom: 8,
      borderRadius:8
    }
  }
);