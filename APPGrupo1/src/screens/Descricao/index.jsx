import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const Descricao = ({id}) => {

  const [produto,setProduto]=useState(null)
  const [name,setName]=useState('')

  useEffect(()=>{
    const fetchName=async () =>{

      const response = await fetch (`https://655a8d516981238d054d8fe9.mockapi.io/g1/produtos/${id}`);
      const data = await response.json()
      setName (data.nomeProduto)
    }

      fetchName () 

  }, [id]) 
  
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default Descricao