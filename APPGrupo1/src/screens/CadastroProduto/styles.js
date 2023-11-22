import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
    modal: {
        backgroundColor: "#000",
        margin: 20,
        padding: 20,
        borderRadius: 20,
        elevation: 10
    },
    textoModal: {
        color: "#fff",
        textAlign: 'center'
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
        fontSize: 20
      },
      input: {
        fontSize: 15,
        paddingBottom: 10
      }

});

export default estilos;
