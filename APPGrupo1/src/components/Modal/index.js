// import React, { useState } from "react";
// import { View, Text, Button, Modal, StyleSheet } from "react-native";
// import styles from "./styles";
// import estilos from "./styles";
// export default function () {

//   const [visivel, setVisivel] = useState(true)


//   return (
//     <View>
//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={visivel}
//         style={{}}
//       >

//         <View style={estilos.modal}>
//           <Text style={estilos.textoModal}>Confirmar a Operação?</Text>
//           <Button
//             title="Fechar"
//             onPress={() => { setVisivel(false) }}
//           />
          
//         </View>
//       </Modal>
//       <Button
//         title="Mostar"
//         onPress={() => { setVisivel(true) }}
//       />
//     </View>
//   )
// }

import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";
import styles from "./styles";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleConfirm = () => {
    // Lógica para confirmar a operação
    console.log("Operação confirmada!");
    setIsVisible(false);
  };

  const handleCancel = () => {
    // Lógica para cancelar a operação
    console.log("Operação cancelada!");
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Mostrar Modal" onPress={() => setIsVisible(true)} />

      <Modal
        animationType="slide" // Alterei a animação para slide, mas você pode escolher a que preferir
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Confirmar a Operação?</Text>

            <View style={styles.buttonContainer}>
              <Button title="Confirmar" onPress={handleConfirm} />
              <Button title="Cancelar" onPress={handleCancel} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

