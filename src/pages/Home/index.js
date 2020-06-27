import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { View, Image, Text, TextInput, FlatList , Button} from 'react-native';

import { config } from '../../services/api';
import Card from '../../components/Card';

import styles from './styles';
import logo from '../../assets/logo.png';

export default function Home(){

  const [nome, setNome] = useState('');
  const [data, setData] = useState();

  const fetchData = () => 
    Axios.get(`${config.API_URL}/${nome}`)
      .then(res => {
        setData(res.data[0].res.sort(function(a, b) {
          return b.frequencia - a.frequencia;
      }));
      })
      .catch(function () {
      // handle error
      });
      

  console.log(data);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={{ height: 50, width: 50 }} />
      </View>
      <View style={styles.body}>
          <Text style={styles.title}>Consulte A Quantidade De Nomes</Text>
          <TextInput value={nome} onChangeText={nome => setNome(nome)} placeholder='Digite Seu Nome (Apenas O Primeiro Nome)' placeholderTextColor='#002663' style={styles.Input}></TextInput>
          <Button
            title="PESQUISAR"
            style={styles.Button}
            onPress={() =>fetchData()}

          />
      </View>
      <View>
          <FlatList
          data={data}
          renderItem={({ item }) => <Card periodo={item.periodo} frequencia={item.frequencia}/>}
          keyExtractor={item => item.periodo}
        />
      </View>
    </View>
  );
}