import React from 'react';
import { View, Text } from 'react-native';
import {StyleSheet} from 'react-native'; 

export default function Card({ periodo, frequencia }){

  var re = new RegExp(/^[^[]/);
  periodo = periodo.replace(/\[$/,"]");
  re.test(periodo) ? periodo = '[' + periodo : periodo

  return(
    <View style={styles.Container}>
      <Text style={styles.NameValue}>Periodo: <Text style={styles.Value}>{periodo}</Text></Text>
      <Text style={styles.NameValue}>Quantidade de Nomes: <Text style={styles.Value}>{frequencia}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  Container: {
    backgroundColor: '#3498db',
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 3
  },

  NameValue: {
    fontSize: 18,
    color: '#FFF'
  },

  Value: {
    fontWeight: 'bold'
  }

});