import { StyleSheet } from 'react-native';
const style = StyleSheet.create({
 
  modal: {
    backgroundColor: "#be2596",
    margin: 80,
    padding: 20,
    borderRadius: 20,
    elevation: 10,
  },

  textoModal: {
    color: "#E4e4e5",
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  botaoModal: {
    backgroundColor: "#96be25",
    width: '65%', // Adjusted the width to 65%
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  botaoModalTexto: {
    color: "#041014",
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },






























  container: {
    flex: 1,
    alignItems: 'center',
  },

  form: {
    flex: 1,
    width: "90%",
    fontSize: 35,
  },

  texto: {
    fontSize: 20,
  },

  input: {
    fontSize: 15,
    paddingBottom: 10,
  },
});

export default style;
