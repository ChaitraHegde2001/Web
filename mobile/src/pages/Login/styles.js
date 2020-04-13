import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#043563'
   },
   header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
   },
   footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
   },
   textHeader: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30
   },
   textFooter: {
      color: '#043563',
      fontSize: 22
   },
   action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
   },
   textInput: {
      flex: 1,
      paddingLeft: 10,
      color: '#6c63ff'
   },
   button: {
      alignItems: 'center',
      marginTop: 50
   },
   login:{
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
   },
   textLogin: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
   }
});