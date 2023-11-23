import axios from 'axios'
import React, { createContext, useCallback, useState } from 'react'

export const ProdutosContext = createContext()

const ProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState(null)

  const cadastrar = async (formData) => {
    setProdutos(formData)
  }

  return (
    <ProdutosContext.Provider value={{ cadastrar }}>
      {children}
    </ProdutosContext.Provider>
  )
}

export default ProdutosProvider