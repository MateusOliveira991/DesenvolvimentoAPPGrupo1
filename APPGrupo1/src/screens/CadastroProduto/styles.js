import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#ffd700', // Cor dourada
  },

  cardContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 10,
  },

  title: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
    color: '#4b3621', // Cor de texto que contrasta bem com dourado
  },

  form: {
    width: '80%',
  },

  inputContainer: {
    marginBottom: 16,
  },

  texto: {
    fontSize: 20,
  },

  input: {
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#1c6beb',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },

  modalContainer: {
    position: 'absolute',
    width: '90%',
    top: '50%',
    left: '5%',
    backgroundColor: '#fff',
    padding: 20,
    height: 150,
    borderRadius: 20,
    transform: [{ translateY: -0.5 }],
    shadowColor: '#000',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  carregando: {
    marginTop: 30,
  },

  textoModal: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },

  botaoModalConfirmar: {
    backgroundColor: '#1c6beb',
    width: '50%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  botaoModalCancelar: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#d40808',
    width: '50%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  botaoModalTextoConfirmar: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },

  botaoModalTextoCancelar: {
    color: '#d40808',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;