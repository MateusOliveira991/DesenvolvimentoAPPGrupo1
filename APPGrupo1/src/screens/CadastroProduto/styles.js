import { StyleSheet } from 'react-native';
const style = StyleSheet.create({

  modalContainer: {
    position: 'absolute',
    width: '90%',
    top: '50%',
    left: '5%',
    backgroundColor: "#fff",
    padding: 20,
    height: 150,
    borderRadius: 20,
    transform: [{ translateY: '-50%' }],

    // sombras
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor do fundo preto com opacidade de 0.5
    justifyContent: 'center',
    alignItems: 'center',
  },

  carregando: {
    marginTop: 30,
  },

  textoModal: {
    color: "#000",
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },

  botaoModalConfirmar: {
    backgroundColor: "#1c6beb",
    width: '50%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  botaoModalCancelar: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: '#d40808',
    width: '50%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  botaoModalTextoConfirmar: {
    color: "#FFF",
    fontSize: 14,
    textAlign: 'center',
  },

  botaoModalTextoCancelar: {
    color: "#d40808",
    fontSize: 14,
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
