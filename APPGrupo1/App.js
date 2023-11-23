import React from 'react';
import { Rotas } from './src/routes';
import ProdutosProvider from './src/context/ProdutosContext';

export default function App() {
  return (
    <ProdutosProvider>
        <Rotas />
    </ProdutosProvider>
  )
}