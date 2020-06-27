import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight+20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131A',
    fontWeight: 'bold'
  },
  Button: {
    marginTop: 20,
    marginBottom: 22,
    paddingHorizontal: 7,
    paddingVertical: 12,
    backgroundColor: '#3498db',
    alignItems: 'center',
    fontSize: 20,
    borderRadius: 3,
    marginTop:10
  },
    Input: {
      marginTop: 10,
      backgroundColor: '#d9d9d9',
      paddingVertical: 7,
      paddingHorizontal: 10,
      fontSize: 15,
      borderRadius: 3,
      marginBottom:10
  }

})