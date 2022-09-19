import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
    {
        nome: 'Lincoln',
        fotoperfil: 'https://im.ge/i/OiDjQ6',
        publicacao:'https://im.ge/i/OiDjQ6',
        fotovendas: 'https://im.ge/i/OiDjQ6',
        valor: 250,
        nomevendas: 'Predator',
        descricaovendas: 'joguei so uma vez',
        prezença: 3,
        id:1
        
    },

    
    {
        nome: 'Junio-Santos',
        fotoperfil: 'https://im.ge/i/OiDjQ6',
        publicacao:'https://im.ge/i/OiDjQ6',
        fotovendas: 'https://im.ge/i/OiDjQ6',
        valor: 250,
        nomevendas: 'Predator',
        descricaovendas: 'joguei-so-uma-vez',
        prezença: 3,
        id:2
        
    },
    {
        nome: 'Meg',
        fotoperfil: 'https://im.ge/i/OiDjQ6',
        publicacao:'https://im.ge/i/OiDjQ6',
        fotovendas: 'https://im.ge/i/OiDjQ6',
        valor: 250,
        nomevendas: 'Predator',
        descricaovendas: 'joguei-so-uma-vez',
        prezença: 3,
        id:3
        
    },
    {
        nome: 'Uasley',
        fotoperfil: 'https://im.ge/i/OiDjQ6',
        publicacao:'https://im.ge/i/OiDjQ6',
        fotovendas: 'https://im.ge/i/OiDjQ6',
        valor: 250,
        nomevendas: 'Predator',
        descricaovendas: 'joguei-so-uma-vez',
        prezença: 3,
        id:4
        
    },
    {
        nome: 'Marcos-Mendes',
        fotoperfil: 'https://im.ge/i/OiDjQ6',
        publicacao:'https://im.ge/i/OiDjQ6',
        fotovendas: 'https://im.ge/i/OiDjQ6',
        valor: 250,
        nomevendas: 'Predator',
        descricaovendas: 'joguei-so-uma-vez',
        prezença: 3,
        id:5
        
    },
];

const Item = ({ nome }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{nome}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item nome={item.nome} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;