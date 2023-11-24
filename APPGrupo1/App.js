import React from 'react';
import { Rotas } from './src/routes';
import ProdutosProvider from './src/context/ProdutosContext';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <ProdutosProvider>
        <Rotas />
      </ProdutosProvider>
    </AuthProvider>
  )
}