import React from 'react';
import { Rotas } from './src/routes';
import ProdutosProvider from './src/context/ProdutosContext';
import ModalProvider from './src/components/Modal';

export default function App() {
  return (
    <ProdutosProvider>
      <ModalProvider>
        <Rotas />
      </ModalProvider>
    </ProdutosProvider>
  )
}